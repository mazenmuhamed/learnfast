'use client'

import z from 'zod'
import Image from 'next/image'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDropzone } from '@uploadthing/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ControllerRenderProps, useForm, useWatch } from 'react-hook-form'
import { ChangeEvent, useCallback, useRef, useState, useEffect } from 'react'
import imageCompression, { Options } from 'browser-image-compression'
import {
  generateClientDropzoneAccept,
  generatePermittedFileTypes,
} from '@uploadthing/shared'

import { useTRPC } from '@/trpc/client'
import { authClient } from '@/lib/auth-client'
import { useUploadThing } from '@/lib/uploadthing'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DialogFooter } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { AppDialog } from '@/modules/components/app-dialog'

import { AvatarPicker } from './avatar-picker'
import { ImagePreview } from './image-preview'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentAvatar: string | null
  currentBackgroundColor: string | null
}

const formSchema = z.object({
  imageUrl: z.string().optional(),
  avatar: z.string().optional(),
  backgroundColor: z.string().optional(),
})

export function ChangeAvatarDialog({
  open,
  onOpenChange,
  currentAvatar,
  currentBackgroundColor,
}: Props) {
  const [files, setFiles] = useState<File[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: undefined,
      avatar: currentAvatar || undefined,
      backgroundColor: currentBackgroundColor || undefined,
    },
  })

  const trpc = useTRPC()
  const queryClient = useQueryClient()

  const updateProfileAvatar = useMutation(
    trpc.user.updateProfileAvatar.mutationOptions(),
  )

  const { startUpload, isUploading, routeConfig } = useUploadThing(
    'imageUploader',
    {
      onUploadBegin: () => {
        toast.loading('Uploading...', { id: 'upload-image' })
      },
      // Reset the preview image and files after submitting post form
      onClientUploadComplete: () => {
        setFiles([])
      },
      onUploadError: e => {
        console.log('[UPLOAD_ERROR]', e)
        toast.error('Something went wrong while uploading the image.')
      },
    },
  )

  // Watch all form values to detect changes
  const watchedValues = useWatch({ control: form.control })
  const imagePreview = watchedValues.imageUrl
  const selectedAvatar = watchedValues.avatar
  const selectedBackgroundColor = watchedValues.backgroundColor

  // Check if form has meaningful changes
  const hasChanges =
    imagePreview || // New image selected
    selectedAvatar !== currentAvatar || // Avatar changed
    selectedBackgroundColor !== currentBackgroundColor // Background color changed

  // Reset form when dialog opens/closes or props change
  useEffect(() => {
    if (open) {
      form.reset({
        imageUrl: undefined,
        avatar: currentAvatar || undefined,
        backgroundColor: currentBackgroundColor || undefined,
      })
      setFiles([])
    }
  }, [open, currentAvatar, currentBackgroundColor, form])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(
      generatePermittedFileTypes(routeConfig).fileTypes,
    ),
  })

  async function handleUploadFiles(
    event: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<z.infer<typeof formSchema>, 'imageUrl'>,
  ) {
    if (isUploading) return

    getInputProps?.().onChange?.(event)

    const file = event.target.files?.[0]

    if (!file) return

    const options: Options = {
      maxSizeMB: 2, // Target size in MB
      maxWidthOrHeight: 800, // Resize dimensions
      useWebWorker: true,
    }

    try {
      const compressedFile = await imageCompression(file, options)
      const url = await imageCompression.getDataUrlFromFile(compressedFile)

      // setPreviewImage(url)
      field.onChange(url)
      setFiles([compressedFile])
    } catch (error) {
      console.error('[COMPRESSION_ERROR]', error)
    }
  }

  async function startUploadMedia(): Promise<string | null> {
    if (files.length === 0) return null

    const res = await startUpload(files)

    if (!res || !res[0]?.ufsUrl) {
      return null
    }

    return res[0].ufsUrl
  }

  /**
   * This function is used to clear the preview image and files when needed.
   */
  function handleDeletePreview() {
    setFiles([])
    form.setValue('imageUrl', undefined)
    form.trigger() // Trigger form state recalculation
  }

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    const url = await startUploadMedia()

    // Include uploaded URL in final data if available
    const finalData = {
      ...data,
      imageUrl: url || data.imageUrl,
    }

    updateProfileAvatar.mutate(finalData, {
      onSuccess: async () => {
        onOpenChange(false)
        toast.success('Your profile avatar has been updated.', {
          id: 'upload-image',
        })
        queryClient.invalidateQueries({ queryKey: trpc.user.me.queryKey() })
        // Update the auth client user profile
        await authClient.updateUser({ image: finalData.imageUrl })
      },
      onError: error => {
        console.log('[UPDATE_PROFILE_AVATAR_ERROR]', error)
        toast.error('Something went wrong.')
      },
    })
  }

  const isDisabled =
    form.formState.isSubmitting ||
    !hasChanges ||
    isUploading ||
    updateProfileAvatar.isPending

  return (
    <AppDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Change Avatar"
      description="Change your avatar or upload a new one."
      onOpenAutoFocus={e => e.preventDefault()}
      className="flex h-full max-h-[70vh] flex-col rounded-2xl sm:max-h-[90vh] sm:max-w-xl 2xl:max-h-[55rem]"
    >
      <ScrollArea className="-mx-6 h-[70%] flex-1 grow px-6 sm:h-3/4">
        <Form {...form}>
          <form
            id="change-avatar-form"
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid w-full gap-y-6"
          >
            {imagePreview ? (
              <ImagePreview
                image={imagePreview}
                onDelete={handleDeletePreview}
              />
            ) : (
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div
                        className="flex flex-col items-center gap-4 pt-4"
                        {...getRootProps()}
                      >
                        <input
                          {...getInputProps()}
                          hidden
                          ref={inputRef}
                          onChange={e => handleUploadFiles(e, field)}
                        />
                        <Image
                          src="/icons/profile-cover-icon.svg"
                          alt="Cover Icon"
                          width={75}
                          height={75}
                          sizes="(max-width: 600px) 100vw, 75px"
                          className="h-auto max-md:scale-90 dark:opacity-90"
                        />
                        <p className="text-muted-foreground mt-2 text-center text-[15px] leading-none font-medium max-md:hidden">
                          Add a cover image. We recommend 2288 x 512.
                        </p>
                        <Button
                          type="button"
                          variant="ghost"
                          className="text-primary hover:text-primary h-fit text-[15px] max-md:hidden"
                          onClick={() => inputRef.current?.click()}
                        >
                          Upload file
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <div className="flex w-full items-center gap-2">
              <hr className="grow" />
              <span className="text-sm font-medium">or</span>
              <hr className="grow" />
            </div>
            <AvatarPicker
              form={form}
              disableTransition
              description="You can change this every time you want."
            />
          </form>
        </Form>
      </ScrollArea>
      <DialogFooter className="sm:mt-auto">
        <Button
          size="lg"
          type="submit"
          form="change-avatar-form"
          className="w-full text-[15px]"
          disabled={isDisabled}
        >
          {updateProfileAvatar.isPending && (
            <Loader2 className="animate-spin" />
          )}
          Save Changes
        </Button>
      </DialogFooter>
    </AppDialog>
  )
}
