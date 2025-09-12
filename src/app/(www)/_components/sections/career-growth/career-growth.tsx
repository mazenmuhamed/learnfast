'use client'

import { TextAnimate } from '../../animations/text-animate'
import { CareerGrowthCards } from './career-growth-cards'

export function CareerGrowth() {
  return (
    <section className="main-container flex flex-col items-center gap-20 py-20">
      <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-center md:gap-8">
        <TextAnimate
          once
          as="h2"
          by="word"
          animation="fadeIn"
          delay={0.2}
          duration={0.4}
          className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl"
        >
          Everything you need for a successful career growth
        </TextAnimate>
        <TextAnimate
          once
          as="p"
          by="word"
          animation="fadeIn"
          delay={0.4}
          duration={0.4}
          className="text-muted-foreground sm:text-lg lg:text-xl"
        >
          Stop bouncing from tool to tool to track your skill growth. LearnFast
          offers a complete suite of tools for modern product professionals.
        </TextAnimate>
      </div>
      <CareerGrowthCards />
      <div className="flex w-full flex-wrap items-center justify-between max-md:justify-center max-md:gap-8">
        <div className="flex flex-col gap-4 max-lg:items-center">
          <p className="text-4xl font-bold lg:text-6xl">400K+</p>
          <p className="text-muted-foreground">
            members upskill with LearnFast
          </p>
        </div>
        <div className="flex flex-col gap-4 max-lg:items-center">
          <p className="text-4xl font-bold lg:text-6xl">3M+</p>
          <p className="text-muted-foreground">learning modules completed</p>
        </div>
        <div className="flex flex-col gap-4 max-lg:items-center">
          <p className="text-4xl font-bold lg:text-6xl">4.7/5</p>
          <p className="text-muted-foreground">
            average course rating from our learners
          </p>
        </div>
      </div>
    </section>
  )
}
