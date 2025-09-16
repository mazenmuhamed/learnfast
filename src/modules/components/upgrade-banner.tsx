'use client'

import Link from 'next/link'
import { XIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const routes = ['/courses']

export function UpgradeBanner() {
  const [hide, setHide] = useState(false)

  const pathname = usePathname()

  // To fix navigation to the same position issue
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  if (hide || !routes.some(route => pathname.startsWith(route))) return null

  return (
    <div className="bg-secondary/80 dark:bg-popover dark:text-popover-foreground text-secondary-foreground sticky inset-x-0 top-14 z-50 px-4 py-3 max-[780]:hidden">
      <p className="mx-auto flex w-full justify-center text-center text-sm max-md:max-w-md md:text-[15px]">
        <Link href="/pricing" className="hover:underline">
          You can complete the first level of every course on the Starter plan.{' '}
          <span className="text-primary font-semibold">
            Get unlimited access
          </span>
        </Link>
      </p>
      <XIcon
        aria-label="Close banner"
        className="absolute top-2/4 right-3 size-[18px] -translate-y-2/4 cursor-pointer rounded-full opacity-80 hover:opacity-100"
        onClick={() => setHide(true)}
      />
    </div>
  )
}
