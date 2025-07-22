import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { MobileNavigation } from './mobile-navigation'
import { DesktopNavigation } from './desktop-navigation'

export function Navbar() {
  return (
    <nav className="bg-background sticky top-0 w-full">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-8 2xl:max-w-6xl 2xl:px-0">
        <Link href="/" className="flex flex-1 items-center gap-2">
          <Image
            src="/brand/logo.svg"
            alt="LearnFast Logo"
            width={150}
            height={40}
            className="h-8 w-auto select-none dark:invert"
            priority
          />
          <span className="text-xl font-semibold">LearnFast</span>
        </Link>
        <div className="flex flex-1 items-center">
          <DesktopNavigation />
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 max-lg:hidden">
          <Button asChild variant="ghost" className="text-[15px]">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild className="text-[15px]">
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </nav>
  )
}
