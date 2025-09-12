'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Marquee } from '@/app/(www)/_components/animations/marquee'

const logos = [
  '/icons/companies/logo-1.svg',
  '/icons/companies/logo-2.svg',
  '/icons/companies/logo-3.svg',
  '/icons/companies/logo-4.svg',
  '/icons/companies/logo-5.svg',
  '/icons/companies/logo-6.svg',
  '/icons/companies/logo-7.svg',
  '/icons/companies/logo-8.svg',
  '/icons/companies/logo-9.svg',
  '/icons/companies/logo-10.svg',
  '/icons/companies/logo-11.svg',
  '/icons/companies/logo-12.svg',
  '/icons/companies/logo-13.svg',
  '/icons/companies/logo-14.svg',
  '/icons/companies/logo-15.svg',
  '/icons/companies/logo-16.svg',
  '/icons/companies/logo-17.svg',
]

export function CompaniesMarquee({ className }: { className?: string }) {
  return (
    <section className={cn('border-y py-6', className)}>
      <Marquee repeat={70}>
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Company Logo"
            width={100}
            height={32}
            className="mx-8 h-12 w-auto"
          />
        ))}
      </Marquee>
    </section>
  )
}
