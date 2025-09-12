'use client'

import Image from 'next/image'
import { PlayIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const data = [
  {
    image: '/images/trusted-and-love/user-1.webp',
    description:
      "With LearnFast, I've gained so much confidence talking with clients.",
    name: 'Blake Feldman',
    title: 'Product Designer · 15+ years in design',
  },
  {
    image: '/images/trusted-and-love/user-2.webp',
    description:
      'LearnFast helped me level up from a junior to a senior designer',
    name: 'Chieri Wada',
    title: 'UX/UI Designer · 8+ years in design',
  },
  {
    image: '/images/trusted-and-love/user-3.webp',
    description: 'LearnFast really helped me during my career change.',
    name: 'Ryan Blackwell',
    title: 'Full Stack Developer · 5+ years in design',
  },
]

export function Videos() {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <Card
          key={index}
          className="bg-popover text-popover-foreground rounded-3xl border-0 p-0 shadow-none"
        >
          <CardContent className="relative p-0">
            <div className="relative h-[32rem] w-full">
              <div
                aria-hidden="true"
                aria-label="Video overlay"
                className="absolute inset-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-transparent to-zinc-900/60"
              />
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="rounded-3xl object-cover"
              />
              <div className="absolute inset-x-0 bottom-14 z-20 flex items-center justify-center px-5">
                <p className="text-center text-xl text-zinc-50">
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-x-0 -bottom-7 z-20 flex items-center justify-center">
                <Button size="icon" className="size-14 rounded-full">
                  <PlayIcon className="size-6 fill-zinc-50" />
                  <span className="sr-only">Play Video</span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-px pt-5 pb-8">
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p className="text-foreground">{item.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
