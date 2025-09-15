'use client'

import Image from 'next/image'

import { BlurFade } from '@/app/(www)/(landing)/_components/animations/blur-fade'
import { TextAnimate } from '@/app/(www)/(landing)/_components/animations/text-animate'
import { FeatureCards } from './feature-cards'
import { FeatureAccordions } from './feature-accordions'

export function Features() {
  return (
    <BlurFade inView duration={0.6} direction="up">
      <section className="main-container flex flex-col gap-20 py-20">
        <FeatureHeader
          title="Made to help you achieve real career results"
          description="From beginners to working professionals, LearnFast helps you build real-world skills, track your growth, and earn certifications that make a difference."
        />
        <FeatureCards />
        <FeatureHeader
          title="A learning platform that powers real career growth"
          description="We’re not another boring course platform. LearnFast turns career growth into a daily habit with a modern, AI-powered learning experience designed to fit into yours."
        />
        <FeatureAccordions />
        <BlurFade
          inView
          direction="up"
          duration={0.6}
          className="flex flex-col items-center gap-5"
        >
          <h3 className="text-center text-2xl font-semibold md:text-4xl">
            Our certifications are recognized by top companies
          </h3>
          <p className="text-muted-foreground text-center text-sm md:text-lg">
            Join the ranks of successful professionals who have advanced their
            careers with LearnFast.
          </p>
          <BlurFade
            inView
            direction="up"
            duration={0.8}
            delay={0.4}
            className="flex w-full justify-center"
          >
            <Image
              src="/images/features/certification.webp"
              alt="Professional certifications"
              width={600}
              height={400}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              className="h-auto rounded-2xl object-contain"
            />
          </BlurFade>
        </BlurFade>
      </section>
    </BlurFade>
  )
}

function FeatureHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 max-lg:text-center lg:flex-row lg:gap-20">
      <TextAnimate
        once
        as="h2"
        by="word"
        animation="fadeIn"
        delay={0.2}
        duration={0.4}
        className="flex-3/5 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-14"
      >
        {title}
      </TextAnimate>
      <TextAnimate
        once
        as="p"
        by="word"
        animation="fadeIn"
        delay={0.4}
        duration={0.4}
        className="text-muted-foreground flex-2/5 text-[15px] md:text-base lg:text-[19px]"
      >
        {description}
      </TextAnimate>
    </div>
  )
}
