'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BadgePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'

const images = [
  '/images/users/user-1.jpg',
  '/images/users/user-2.jpg',
  '/images/users/user-3.jpg',
]

export function ContinueLearning() {
  const router = useRouter()

  return (
    <div className="grid gap-7">
      <div className="grid gap-1">
        <h2 className="text-2xl font-semibold">Continue Learning</h2>
        <p className="text-muted-foreground text-sm leading-none">
          Resume your courses and keep up the momentum with your learning
        </p>
      </div>
      <div className="relative">
        <div
          onClick={() => router.push('/courses')}
          className="card-hover group relative z-20 grid h-60 w-full grid-cols-2 gap-6 rounded-2xl border p-5 max-sm:grid-cols-1 sm:grid-cols-[0.8fr_1fr]"
        >
          <div className="bg-secondary/80 dark:bg-input/60 flex size-full items-center justify-center rounded-2xl border max-sm:hidden">
            <BadgePlus className="size-20 opacity-60 transition-transform group-hover:scale-105 md:size-28" />
          </div>
          <div className="flex flex-col justify-center gap-2 max-sm:items-center">
            <span className="text-muted-foreground text-xs font-semibold uppercase">
              Course
            </span>
            <div className="flex flex-col">
              <h3 className="text-lg leading-snug font-semibold">
                You don’t have any active courses
              </h3>
              <p className="text-muted-foreground text-sm">
                Select a course and start improving your skills.
              </p>
            </div>
            <Button size="lg" className="my-2 w-full text-base max-sm:max-w-72">
              Browse courses
            </Button>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center -space-x-1.5">
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
              <span className="text-muted-foreground text-center text-sm">
                6216 learning this week
              </span>
            </div>
          </div>
        </div>
        <div
          aria-hidden
          aria-label="Background decoration"
          className="bg-background absolute inset-0 z-10 grid h-60 w-full translate-y-3 scale-[98%] grid-cols-2 gap-2 rounded-3xl border p-2"
        />
        <div
          aria-hidden
          aria-label="Background decoration"
          className="absolute inset-0 grid h-60 w-full translate-y-6 scale-[95%] grid-cols-2 gap-2 rounded-3xl border p-2"
        />
      </div>
    </div>
  )
}
