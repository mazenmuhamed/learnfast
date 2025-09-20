'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const routes = ['/profile']

export function UserStatusBanner() {
  const pathname = usePathname()

  // To fix navigation to the same position issue
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  if (!routes.some(route => pathname.startsWith(route))) return null

  return (
    <div className="bg-secondary/40 dark:bg-popover dark:text-popover-foreground text-secondary-foreground sticky inset-x-0 top-14 z-50 px-4 py-3 max-[780]:hidden">
      <div className="flex items-center justify-center gap-2">
        <div className="size-2.5 rounded-full bg-green-600 dark:bg-green-500" />
        <p className="text-center text-sm md:text-[15px]">Available for work</p>
      </div>
    </div>
  )
}
