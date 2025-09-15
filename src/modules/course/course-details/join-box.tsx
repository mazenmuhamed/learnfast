import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const logos = [
  '/icons/companies/logo-11.svg',
  '/icons/companies/logo-12.svg',
  '/icons/companies/logo-13.svg',
  '/icons/companies/logo-14.svg',
  '/icons/companies/logo-15.svg',
  '/icons/companies/logo-16.svg',
  '/icons/companies/logo-17.svg',
]

export function JoinBox() {
  return (
    <section className="grid items-center gap-4">
      <div className="bg-popover text-popover-foreground grid w-full grid-cols-2 items-center justify-between rounded-4xl p-8 max-lg:grid-cols-1 max-lg:gap-8 max-md:gap-6 sm:p-12 md:my-10 md:p-14 lg:gap-20 lg:p-16">
        <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Join over 500K learners and start Introduction to Design Audits course
          today!
        </h3>
        <div className="flex flex-col gap-8">
          <p className="text-muted-foreground opacity-80 md:text-xl">
            Thousands of professionals are using LearnFast to learn faster, get
            promoted, and grow in the AI-powered product world. You’re next.
          </p>
          <div className="flex flex-col gap-2">
            <Button size="lg" className="h-12 w-full rounded-xl text-lg">
              Start course for free
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 w-full rounded-xl text-lg"
            >
              <Link href="/pricing">Get full access with Pro</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center gap-6">
        <p className="text-muted-foreground text-center text-sm">
          Our course library is used by forward-thinking educational
          institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-8">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Company Logo"
              width={100}
              height={32}
              className="h-8 w-auto sm:h-10 md:h-12 dark:invert"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
