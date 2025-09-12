import Image from 'next/image'

import { BlurFade } from '../../animations/blur-fade'

export function G2Badges() {
  return (
    <BlurFade inView duration={0.6} direction="up">
      <div className="flex flex-col items-center gap-8">
        <p className="text-muted-foreground opacity-80 max-md:text-center">
          Loved by designers and teams. With 4.8 out of 5 average rating{' '}
          <span className="text-foreground font-medium opacity-100">
            we’re an educational leader on G2
          </span>
        </p>
        <div className="relative flex flex-wrap items-center justify-center gap-4">
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
            className="h-16 w-auto object-contain md:h-24"
          />
          <Image
            src="/images/trusted-and-love/badge-3.svg"
            alt="G2 Leader Badge"
            width={200}
            height={50}
            className="h-16 w-auto object-contain md:h-24"
          />
          <Image
            src="/images/trusted-and-love/badge-4.svg"
            alt="G2 Leader Badge"
            width={200}
            height={50}
            className="h-16 w-auto object-contain md:h-24"
          />
          <Image
            src="/images/trusted-and-love/badge-5.svg"
            alt="G2 Leader Badge"
            width={200}
            height={50}
            className="h-16 w-auto object-contain md:h-24 lg:h-32"
          />
          <Image
            src="/images/trusted-and-love/badge-6.svg"
            alt="G2 Leader Badge"
            width={200}
            height={50}
            className="h-16 w-auto object-contain md:h-24"
          />
          <Image
            src="/images/trusted-and-love/badge-7.svg"
            alt="G2 Leader Badge"
            width={200}
            height={50}
            className="h-16 w-auto object-contain md:h-24"
          />
          <Image
            src="/images/trusted-and-love/badge-8.svg"
            alt="G2 Leader Badge"
            width={200}
            height={50}
            className="h-16 w-auto object-contain md:h-24"
          />
        </div>
      </div>
    </BlurFade>
  )
}
