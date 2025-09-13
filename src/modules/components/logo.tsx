import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'

type Props = {
  href?: string
  className?: string
}

export function Logo({ href, className }: Props) {
  return (
    <Link
      href={href ?? '/'}
      className={cn('flex w-fit items-center gap-2', className)}
    >
      <Image
        src="/brand/logo.svg"
        alt="Logo"
        width={27}
        height={27}
        priority
        className="object-contain"
      />
      <span className="text-lg font-semibold">LearnFast</span>
    </Link>
  )
}
