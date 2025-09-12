'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { BlurFade } from '../../animations/blur-fade'
import { FeaturesCarouselItem } from './features-carousel-item'

const categories = ['Designers', 'Career Shifters', 'Students', 'Teams']

const data = [
  {
    name: 'Ryan Blackwell',
    jobTitle: 'UX Designer & Writer',
    content:
      'LearnFast has opened doors to career opportunities I once thought impossible, boosting my confidence and earnings by 20%. The skills I’ve developed here have been the key to unlocking such growth.',
  },
  {
    name: 'Megan Smith',
    jobTitle: 'Product Designer',
    content:
      'Transitioning from graphic to product design, LearnFast has been instrumental in expanding my knowledge beyond UI, helping me master the core UX principles behind effective design.',
  },
  {
    name: 'John Doe',
    jobTitle: 'Full Stack Developer',
    content:
      'What I like most about LearnFast is its clear system for studying and consolidating knowledge — unlike typical university courses or articles on design. It’s a game-changer for my career.',
  },
  {
    name: 'Fujitsu Design Team',
    jobTitle: 'Design Team',
    content:
      'Fujitsu transformed its design team dynamics with LearnFast, fostering a culture of continuous learning that improved collaboration and skill advancement.',
  },
]

export function FeaturesCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <BlurFade inView duration={0.6} direction="up">
      <section className="main-container relative flex flex-col gap-5 py-20">
        <div className="flex items-center justify-between">
          <Image
            src="/images/features/double-quotes.svg"
            alt="Double quotes"
            width={60}
            height={60}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-10 w-auto object-contain lg:h-12 xl:h-14"
          />
          <div className="flex items-center gap-1">
            {categories.map((category, index) => (
              <p
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="text-muted-foreground cursor-pointer md:text-lg"
              >
                <span className={cn(index + 1 === current && 'text-primary')}>
                  {category}
                </span>
                {index < categories.length - 1 && <span> / </span>}
              </p>
            ))}
          </div>
        </div>
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {data.map((item, index) => (
              <FeaturesCarouselItem
                key={index}
                name={item.name}
                jobTitle={item.jobTitle}
              >
                {item.content}
              </FeaturesCarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-5 right-10 flex items-center max-xl:hidden">
            <CarouselPrevious className="size-10 translate-x-2 [&_svg]:!size-5" />
            <CarouselNext className="size-10 [&_svg]:!size-5" />
          </div>
        </Carousel>
      </section>
    </BlurFade>
  )
}
