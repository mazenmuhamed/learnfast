'use client'

import Image from 'next/image'
import { XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export function Navbar() {
  const router = useRouter()

  return (
    <nav className="bg-background sticky top-0 z-50 h-20 w-full">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-3 content-center items-center justify-between px-8">
        <Button
          size="icon"
          variant="ghost"
          className="size-8"
          onClick={() => router.back()}
        >
          <XIcon className="size-[22px]" />
        </Button>
        <div className="flex items-center justify-center">
          <Image
            src="/brand/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            priority
            className="object-contain"
          />
        </div>
        {/* <p className="text-muted-foreground text-end text-[15px]">
          Need help?{' '}
          <span className="cursor-pointer underline">Talk to us</span>
        </p> */}
        <div>&nbsp;</div>
      </div>
    </nav>
  )
}
