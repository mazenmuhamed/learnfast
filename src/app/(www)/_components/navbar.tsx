'use client'

import Link from 'next/link'

import { Logo } from '@/modules/components/logo'
import { Button } from '@/components/ui/button'

import { MobileNavigation } from './mobile-navigation'
import { DesktopNavigation } from './desktop-navigation'

export function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-50 w-full">
      <div className="main-container flex h-16 items-center justify-between">
        <div className="flex-1">
          <Logo className="[&_img]:size-8" />
        </div>
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
