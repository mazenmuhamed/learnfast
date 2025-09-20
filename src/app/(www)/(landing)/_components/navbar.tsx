import Link from 'next/link'
import { headers } from 'next/headers'

import { auth } from '@/lib/auth'

import { Logo } from '@/modules/components/logo'
import { Button } from '@/components/ui/button'

import { MobileNavigation } from './mobile-navigation'
import { DesktopNavigation } from './desktop-navigation'

export async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

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
          {session?.user && (
            <Button asChild className="text-[15px]">
              <Link href="/home">Go to App</Link>
            </Button>
          )}
          {!session?.user && (
            <>
              <Button asChild variant="ghost" className="text-[15px]">
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild className="text-[15px]">
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </>
          )}
        </div>
        {session?.user && <MobileNavigation user={session.user} />}
      </div>
    </nav>
  )
}
