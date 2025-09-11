'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRightIcon, XIcon } from 'lucide-react'

export function DiscountBanner() {
  const [hide, setHide] = useState(false)

  if (hide) return null

  return (
    <div className="bg-secondary dark:bg-popover dark:text-popover-foreground text-secondary-foreground relative px-4 py-3 max-sm:hidden">
      <p className="mx-auto flex w-full justify-center text-center text-[15px] max-md:max-w-md">
        <Link href="/sign-in" className="group">
          <span className="me-1 text-base leading-none">✨</span>
          Get <span className="text-primary font-semibold">20%</span> off when
          you sign up today! be ready to learn and improve your skills.
          <ArrowRightIcon
            className="ms-2 -mt-0.5 inline-flex transition-transform group-hover:translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
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
