import Image from 'next/image'

const logos = [
  '/icons/companies/logo-5.svg',
  '/icons/companies/logo-6.svg',
  '/icons/companies/logo-7.svg',
  '/icons/companies/logo-8.svg',
  '/icons/companies/logo-9.svg',
  '/icons/companies/logo-10.svg',
]

export function TeamPlan() {
  return (
    <div className="bg-muted w-full max-xl:p-5 xl:h-24">
      <div className="mx-auto flex h-full max-w-5xl flex-col items-center gap-3 xl:flex-row xl:gap-20">
        <p className="text-primary-foreground">Looking for a team plan?</p>
        <div className="flex flex-wrap items-center gap-2 max-md:justify-center max-sm:gap-0.5 md:gap-8">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Company Logo"
              width={100}
              height={32}
              className="h-11 w-auto dark:invert"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
