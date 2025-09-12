'use client'

import { useMemo } from 'react'

import { testimonials, Testimonial } from './data'
import { TestimonialCard } from './testimonial-card'
import { BlurFade } from '@/app/(www)/_components/animations/blur-fade'

export function Testimonials() {
  const dataChunks = useMemo(() => {
    const chunkSize = Math.ceil(testimonials.length / 3)
    const result: Testimonial[][] = []
    for (let i = 0; i < testimonials.length; i += chunkSize) {
      result.push(testimonials.slice(i, i + chunkSize))
    }
    return result
  }, [])

  return (
    <section className="main-container grid gap-3 pb-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
      {dataChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="flex flex-col gap-5">
          {chunk.map((testimonial, index) => (
            <BlurFade
              inView
              key={index}
              direction="up"
              delay={0.1 * (chunkIndex * chunk.length + index)}
            >
              <TestimonialCard key={index} testimonial={testimonial} />
            </BlurFade>
          ))}
        </div>
      ))}
    </section>
  )
}
