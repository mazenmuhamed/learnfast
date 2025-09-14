'use client'

import Link from 'next/link'
import Image from 'next/image'

import { authClient } from '@/lib/auth-client'

import { Button } from '@/components/ui/button'

import { BlurFade } from '@/app/(www)/_components/animations/blur-fade'
import { BorderBeam } from '@/app/(www)/_components/animations/border-beam'
import { TextAnimate } from '@/app/(www)/_components/animations/text-animate'

const images = [
  '/images/users/user-1.jpg',
  '/images/users/user-2.jpg',
  '/images/users/user-3.jpg',
  '/images/users/user-4.jpg',
]

export function Header() {
  const { data: user } = authClient.useSession()

  return (
    <header className="main-container flex flex-col items-center space-y-8 py-10 md:space-y-10 md:py-16 lg:space-y-14 lg:py-20">
      <div className="bg-background relative flex w-fit items-center gap-2 overflow-hidden rounded-full border p-1.5 shadow-sm">
        <div className="flex -space-x-1.5 max-[376px]:hidden">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={20}
              height={20}
              alt={`avatar-${index + 1}`}
              sizes="(max-width: 640px) 20px, 20px"
              className="ring-background rounded-full ring-1"
            />
          ))}
        </div>
        <p className="text-muted-foreground text-xs md:text-sm">
          Trusted by{' '}
          <strong className="text-foreground font-medium">60K+</strong> design &
          developers professionals.
        </p>
        <BorderBeam
          size={60}
          duration={3}
          borderWidth={1}
          colorFrom="transparent"
        />
      </div>
      <div className="flex flex-col gap-6">
        <BlurFade inView direction="up">
          <h1 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Learn <span className="text-primary">Design & Development</span>{' '}
            skills, faster and better with LearnFast
          </h1>
        </BlurFade>
        <TextAnimate
          once
          as="p"
          delay={0.1}
          duration={0.5}
          animation="blurInUp"
          className="text-muted-foreground mx-auto max-w-3xl text-center text-base md:text-lg"
        >
          Bite-sized, interactive learning for busy professionals — master
          design, development, and AI-powered skills to stay ahead in just 5
          minutes a day.
        </TextAnimate>
        <BlurFade
          className="mx-auto flex items-center gap-2"
          inView
          direction="up"
          delay={0.3}
        >
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link href="/courses">Discover Courses</Link>
          </Button>
          <Button asChild size="lg" className="text-base">
            <Link href={user ? '/home' : '/sign-in'}>
              {user ? 'Go to App' : 'Get Started'}
            </Link>
          </Button>
        </BlurFade>
      </div>
      <BlurFade inView direction="up" delay={0.5}>
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full max-w-full rounded-3xl"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </BlurFade>
      <div />
    </header>
  )
}
