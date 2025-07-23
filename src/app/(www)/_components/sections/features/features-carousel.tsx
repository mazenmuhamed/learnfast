'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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
        />
        <div className="flex items-center gap-1">
          {categories.map((category, index) => (
            <p
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="text-muted-foreground cursor-pointer text-lg"
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
            articles on design.
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
        <div className="absolute top-5 right-10 flex items-center">
          <CarouselPrevious className="size-10 translate-x-2 [&_svg]:!size-5" />
          <CarouselNext className="size-10 [&_svg]:!size-5" />
        </div>
      </Carousel>
    </section>
  )
}

type FeaturesCarouselItemProps = {
  name: string
  jobTitle: string
  children: React.ReactNode
}

function FeaturesCarouselItem({
  name,
  jobTitle,
  children,
}: FeaturesCarouselItemProps) {
  return (
    <CarouselItem className="text-popover-foreground flex h-96 w-full justify-between py-4 text-5xl">
      <div className="max-w-[60%]">{children}</div>
      <div className="flex -translate-x-2/4 items-center gap-4 self-end">
        <Avatar className="size-12">
          <AvatarImage src={`https://avatar.vercel.sh/${name}`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-lg font-medium">{name}</p>
          <p className="text-muted-foreground text-sm">{jobTitle}</p>
        </div>
      </div>
    </CarouselItem>
  )
}
