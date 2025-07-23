import Image from 'next/image'

export function G2Badges() {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-muted-foreground opacity-80">
        Loved by designers and teams. With 4.8 out of 5 average rating{' '}
        <span className="text-foreground font-medium opacity-100">
          we’re an educational leader on G2
        </span>
      </p>
      <div className="relative flex items-center gap-4">
        <div
          aria-hidden="true"
          aria-orientation="horizontal"
          aria-label="badges overlay"
          className="from-background/80 absolute inset-0 z-10 bg-gradient-to-r via-transparent to-transparent"
        />
        <div
          aria-hidden="true"
          aria-orientation="horizontal"
          aria-label="badges overlay"
          className="from-background/80 absolute inset-0 z-10 bg-gradient-to-l via-transparent to-transparent"
        />
        <Image
          src="/images/trusted-and-love/badge-2.svg"
          alt="G2 Leader Badge"
          width={200}
          height={50}
          priority
          className="h-24 w-auto object-contain"
        />
        <Image
          src="/images/trusted-and-love/badge-3.svg"
          alt="G2 Leader Badge"
          width={200}
          height={50}
          priority
          className="h-24 w-auto object-contain"
        />
        <Image
          src="/images/trusted-and-love/badge-4.svg"
          alt="G2 Leader Badge"
          width={200}
          height={50}
          priority
          className="h-24 w-auto object-contain"
        />
        <Image
          src="/images/trusted-and-love/badge-5.svg"
          alt="G2 Leader Badge"
          width={200}
          height={50}
          priority
          className="h-32 w-auto object-contain"
        />
        <Image
          src="/images/trusted-and-love/badge-6.svg"
          alt="G2 Leader Badge"
          width={200}
          height={50}
          priority
          className="h-24 w-auto object-contain"
        />
        <Image
          src="/images/trusted-and-love/badge-7.svg"
          alt="G2 Leader Badge"
          width={200}
          height={50}
          priority
          className="h-24 w-auto object-contain"
        />
        <Image
          src="/images/trusted-and-love/badge-8.svg"
          alt="G2 Leader Badge"
          width={200}
          height={50}
          priority
          className="h-24 w-auto object-contain"
        />
      </div>
    </div>
  )
}
