'use client'

import { testimonial, Testimonial } from './data'
import { TestimonialCard } from './testimonial-card'

const chunkArray = (
  array: Testimonial[],
  chunkSize: number,
): Testimonial[][] => {
  const result: Testimonial[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const dataChunks = chunkArray(testimonial, Math.ceil(testimonial.length / 3))

export function Testimonials() {
  return (
    <section className="main-container grid grid-cols-3 gap-5 pb-20">
      {dataChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="flex flex-col gap-5">
          {chunk.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      ))}
    </section>
  )
}
