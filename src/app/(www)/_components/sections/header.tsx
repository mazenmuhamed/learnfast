'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const images = [
  '/images/users/user-1.jpg',
  '/images/users/user-2.jpg',
  '/images/users/user-3.jpg',
  '/images/users/user-4.jpg',
]

export function Header() {
  return (
    <header className="main-container flex flex-col items-center space-y-14 py-20">
      <div className="bg-background flex w-fit items-center gap-2 rounded-full border p-1.5 shadow-sm">
        <div className="flex -space-x-1.5">
          {images.map((src, index) => (
            <Image
              key={index}
              className="ring-background rounded-full ring-1"
              src={src}
              width={20}
              height={20}
              alt={`avatar-${index + 1}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          Trusted by{' '}
          <strong className="text-foreground font-medium">60K+</strong> design &
          developers professionals.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-6xl">
          Learn <span className="text-primary">Design & Development</span>{' '}
          skills, faster and better with LearnFast
        </h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-center text-lg">
          Bite-sized, interactive learning for busy professionals — master
          design, development, and AI-powered skills to stay ahead in just 5
          minutes a day.
        </p>
        <div className="mx-auto flex items-center gap-2">
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link href="/">Discover Courses</Link>
          </Button>
          <Button asChild size="lg" className="text-base">
            <Link href="/sign-in">Get Started</Link>
          </Button>
        </div>
      </div>
      <video
        loop
        muted
        autoPlay
        playsInline
        className="w-full max-w-full rounded-3xl"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </header>
  )
}
