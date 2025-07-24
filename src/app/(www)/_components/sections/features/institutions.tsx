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
      <div className="flex items-center justify-between px-5">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            width={100}
            height={50}
            className="h-20 w-auto"
          />
        ))}
      </div>
    </section>
  )
}
