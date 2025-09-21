'use client'

import Image from 'next/image'
import { Camera } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChangeAvatarDialog } from '../change-avatar-dialog'
import { useUploadImage } from '@/hooks/use-upload-image'
import { toast } from 'sonner'
import { useTRPC } from '@/trpc/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Props = {
  id: string
  name: string
  avatar: string | null
  coverUrl?: string | null
  backgroundColor: string | null
}

export function ProfileCover({
  name,
  avatar,
  backgroundColor,
  coverUrl,
}: Props) {
  const [open, setOpen] = useState(false)

  const {
    files,
    getInputProps,
    getRootProps,
    handleUploadFiles,
    startUploadMedia,
  } = useUploadImage({
    onClientUploadComplete: () => {
      toast.success('Cover image updated', { id: 'upload-image' })
    },
  })

  const trpc = useTRPC()
  const queryClient = useQueryClient()

  const updateCover = useMutation(
    trpc.user.uploadProfileCover.mutationOptions(),
  )

  // Automatically start upload when files are set
  useEffect(() => {
    async function handleAutoUpload() {
      if (files.length === 0) return

      const uploadedUrl = await startUploadMedia()

      if (!uploadedUrl) {
        toast.error('Failed to upload cover image', { id: 'upload-image' })
        return
      }

      updateCover.mutate(
        { coverUrl: uploadedUrl },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(trpc.user.me.queryOptions())
          },
          onError: () => {
            toast.error('Failed to update cover image', { id: 'upload-image' })
          },
        },
      )
    }

    handleAutoUpload()
  }, [files, queryClient, startUploadMedia, trpc.user.me, updateCover])

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div
        {...getRootProps()}
        className="to-accent via-bg-accent/60 relative flex h-72 w-full cursor-pointer items-center justify-center rounded-3xl bg-gradient-to-b from-transparent"
        onClick={() => inputRef.current?.click()}
      >
        <input
          {...getInputProps()}
          hidden
          ref={inputRef}
          onChange={handleUploadFiles}
        />
        {coverUrl ? (
          <>
            <div className="bg absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-zinc-900/60 opacity-0 transition-opacity hover:opacity-100">
              <span className="text-secondary text-sm font-medium">
                Change cover
              </span>
            </div>
            <Image
              src={coverUrl}
              alt="Cover Image"
              fill
              sizes="(max-width: 600px) 100vw, 2288px"
              className="h-auto rounded-3xl object-cover"
            />
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/icons/profile-cover-icon.svg"
              alt="Cover Icon"
              width={95}
              height={95}
              sizes="(max-width: 600px) 100vw, 95px"
              className="h-auto select-none max-md:scale-90 dark:opacity-90"
            />
            <p className="text-muted-foreground mt-2 text-center text-[15px] leading-none font-medium select-none max-md:hidden">
              Add a cover image. We recommend 2288 x 512.
            </p>
            <Button
              variant="ghost"
              className="text-primary hover:text-primary h-fit text-[15px] select-none max-md:hidden"
              onClick={() => inputRef.current?.click()}
            >
              Upload file
            </Button>
          </div>
        )}
        <Avatar
          style={{ backgroundColor: backgroundColor || 'transparent' }}
          className="dark:border-input/80 group ring-input/80 absolute -bottom-16 left-9 z-20 size-32 cursor-pointer rounded-full ring-4 max-md:left-2/4 max-md:-translate-x-2/4"
          onClick={e => {
            e.stopPropagation()
            setOpen(true)
          }}
        >
          <div
            aria-label="overlay"
            className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-zinc-900/60 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Camera className="text-secondary mx-auto size-8" />
            <span className="text-secondary text-sm font-medium">Change</span>
          </div>
          <AvatarImage
            src={avatar || ''}
            alt={name || 'User Avatar'}
            className="object-cover"
          />
          <AvatarFallback>
            <Skeleton className="size-full rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>
      <ChangeAvatarDialog
        open={open}
        onOpenChange={setOpen}
        currentAvatar={avatar}
        currentBackgroundColor={backgroundColor}
      />
    </>
  )
}
