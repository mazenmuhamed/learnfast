import Image from 'next/image'

export function Feedback() {
  return (
    <div className="grid w-full items-center justify-between gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
      <div className="flex flex-col gap-5">
        <Image
          src="/icons/stars.svg"
          width={200}
          height={200}
          alt="stars"
          sizes="(max-width: 768px) 100px, 200px"
          priority
        />
        <h2 className="text-4xl font-medium sm:text-5xl">
          Loved & trusted by professionals at the world’s top companies
        </h2>
        <p className="text-muted-foreground text-base sm:text-xl">
          See why thousands of members have chosen Uxcel to accelerate their
          professional development.
        </p>
      </div>
      <div className="flex lg:justify-end">
        <Image
          src="/images/trusted-and-love/people.webp"
          alt="People"
          width={200}
          height={200}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}
