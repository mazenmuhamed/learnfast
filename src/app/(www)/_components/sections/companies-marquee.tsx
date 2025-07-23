import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Marquee } from '../animations/marquee'

export function CompaniesMarquee({ className }: { className?: string }) {
  return (
    <section className={cn('border-y py-6', className)}>
      <Marquee repeat={200} className="[--duration:45s]">
        {Array.from({ length: 17 }).map((_, index) => (
          <Image
            key={'logo-' + index}
            src={`/icons/companies/logo-${index + 1}.svg`}
            alt={`company-${index + 1}`}
            width={100}
            height={32}
            className="mx-8 h-12 w-auto"
          />
        ))}
      </Marquee>
    </section>
  )
}
