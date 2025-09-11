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

import { FeaturesCarouselItem } from './features-carousel-item'

const categories = ['Designers', 'Career Shifters', 'Students', 'Teams']

export function FeaturesCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <section className="main-container relative flex flex-col gap-5 py-20">
      <div className="flex items-center justify-between">
        <Image
          src="/images/features/double-quotes.svg"
          alt="Double quotes"
          width={60}
          height={60}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-10 w-auto object-contain lg:h-14"
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
          <FeaturesCarouselItem
            name="Ryan Blackwell"
            jobTitle="UX Designer & Writer"
          >
            Uxcel has opened doors to career opportunities I once thought
            impossible,{' '}
            <span className="text-primary">
              boosting my confidence and earnings by 20%.
            </span>{' '}
            The skills I’ve developed here have been the key to unlocking such
            growth.
          </FeaturesCarouselItem>
          <FeaturesCarouselItem name="Megan Smith" jobTitle="Product Designer">
            Transitioning{' '}
            <span className="text-primary">
              from graphic to product design,
            </span>{' '}
            Uxcel has been instrumental in expanding my knowledge beyond UI,
            helping me master the core UX principles behind effective design.
          </FeaturesCarouselItem>
          <FeaturesCarouselItem name="John Doe" jobTitle="Full Stack Developer">
            What I like most about Uxcel is its{' '}
            <span className="text-primary">clear system for studying</span> and
            consolidating knowledge — unlike typical university courses or
            articles on design. It’s a game-changer for my career.
          </FeaturesCarouselItem>
          <FeaturesCarouselItem
            name="Fujitsu Design Team"
            jobTitle="Design Team"
          >
            Fujitsu transformed its design team dynamics with Uxcel, fostering a
            <span className="text-primary">culture of continuous learning</span>{' '}
            that improved collaboration and skill advancement.
          </FeaturesCarouselItem>
        </CarouselContent>
        <div className="absolute top-5 right-10 flex items-center max-md:hidden">
          <CarouselPrevious className="size-10 translate-x-2 [&_svg]:!size-5" />
          <CarouselNext className="size-10 [&_svg]:!size-5" />
        </div>
      </Carousel>
    </section>
  )
}
