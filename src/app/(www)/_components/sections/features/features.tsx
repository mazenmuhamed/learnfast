'use client'

import Image from 'next/image'

import { FeatureCards } from './feature-cards'
import { FeatureAccordions } from './feature-accordions'

export function Features() {
  return (
    <section className="main-container flex flex-col gap-20 py-20">
      <FeatureHeader
        title="Made to help you achieve real career results"
        description="From beginners to working professionals, Uxcel helps you build real-world skills, track your growth, and earn certifications that make a difference."
      />
      <FeatureCards />
      <div className="py-20">
        <p className="text-center text-[7rem] font-bold">
          <span className="text-muted-foreground opacity-60">
            Learn with US
          </span>{' '}
          <span className="text-primary">Faster</span>
        </p>
      </div>
      <FeatureHeader
        title="A learning platform that powers real career growth"
        description="We’re not another boring course platform. Uxcel turns career growth into a daily habit with a modern, AI-powered learning experience designed to fit into yours."
      />
      <FeatureAccordions />
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-4xl font-semibold">
          Our certifications are recognized by top companies
        </h3>
        <p className="text-muted-foreground text-center text-lg">
          Join the ranks of successful professionals who have advanced their
          careers with Uxcel.
        </p>
        <Image
          src="/images/features/certification.webp"
          alt="Professional certifications"
          width={600}
          height={400}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          className="rounded-2xl object-contain"
        />
      </div>
    </section>
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
    <div className="flex items-center justify-between gap-20">
      <h2 className="flex-3/5 text-5xl leading-14 font-bold">{title}</h2>
      <p className="flex-2/5 text-[19px]">{description}</p>
    </div>
  )
}
