import Image from 'next/image'

import { TextAnimate } from '../../animations/text-animate'

export function Feedback() {
  return (
    <div className="grid w-full items-center justify-between gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
      <div className="flex flex-col gap-5">
        <Image
          src="/icons/stars.svg"
          alt="stars"
          width={200}
          height={200}
          sizes="(max-width: 768px) 100px, 200px"
          className="mr-auto h-10 w-auto select-none"
        />
        <TextAnimate
          once
          as="h2"
          by="word"
          animation="fadeIn"
          delay={0.2}
          duration={0.4}
          className="text-4xl font-medium sm:text-5xl"
        >
          Loved & trusted by professionals at the world’s top companies
        </TextAnimate>
        <TextAnimate
          once
          as="p"
          by="word"
          animation="fadeIn"
          delay={0.4}
          duration={0.4}
          className="text-muted-foreground text-base sm:text-xl"
        >
          See why thousands of members have chosen LearnFast to accelerate their
          professional development.
        </TextAnimate>
      </div>
      <div className="flex lg:justify-end">
        <Image
          src="/images/trusted-and-love/people.webp"
          alt="People"
          width={200}
          height={200}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          className="h-14 w-auto rounded-lg object-cover"
        />
      </div>
    </div>
  )
}
