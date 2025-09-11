'use client'

import Image from 'next/image'

const logos = [
  '/icons/companies/logo-14.svg',
  '/icons/companies/logo-15.svg',
  '/icons/companies/logo-4.svg',
  '/icons/companies/logo-16.svg',
  '/icons/companies/logo-17.svg',
]

export function Institutions() {
  return (
    <section className="main-container flex flex-col gap-6 border-y py-16">
      <p className="text-muted-foreground text-center">
        Our curriculum is crafted with industry expertise and{' '}
        <span className="text-foreground font-medium">
          used by forward-thinking educational institutions
        </span>
      </p>
      <div className="flex flex-wrap items-center justify-center px-5 max-sm:gap-5 sm:justify-between">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            width={100}
            height={50}
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-20"
          />
        ))}
      </div>
    </section>
  )
}
