import Image from 'next/image'
import { Camera } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  id: string
  name: string
  avatar: string | null
  coverUrl?: string | null
  backgroundColor: string | null
}

/* TODO: Implement avatar upload or customize avatar */
export function ProfileCover({ name, avatar, backgroundColor }: Props) {
  return (
    <div className="to-accent via-bg-accent/60 relative flex h-72 w-full cursor-pointer items-center justify-center rounded-3xl bg-gradient-to-b from-transparent">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/icons/profile-cover-icon.svg"
          alt="Cover Icon"
          width={95}
          height={95}
          sizes="(max-width: 600px) 100vw, 95px"
          className="h-auto max-md:scale-90 dark:opacity-90"
        />
        <p className="text-muted-foreground mt-2 text-center text-[15px] leading-none font-medium max-md:hidden">
          Add a cover image. We recommend 2288 x 512.
        </p>
        <Button
          variant="ghost"
          className="text-primary hover:text-primary h-fit text-[15px] max-md:hidden"
        >
          Upload file
        </Button>
      </div>
      <Avatar
        style={{ backgroundColor: backgroundColor || 'transparent' }}
        className="dark:border-input/80 group ring-input/80 absolute -bottom-16 left-9 size-32 cursor-pointer rounded-full ring-4 max-md:left-2/4 max-md:-translate-x-2/4"
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
  )
}
