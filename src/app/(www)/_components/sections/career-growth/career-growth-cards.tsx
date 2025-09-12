import Image from 'next/image'
import { useMemo } from 'react'

import { cn } from '@/lib/utils'

import { Card, CardContent } from '@/components/ui/card'
import { BlurFade } from '../../animations/blur-fade'

type Data = { title: string; content: string; image: string }

const data: Data[] = [
  {
    title: 'COURSES & career paths',
    content: 'Over 40 interactive UX, PM, AI courses for any role & level.',
    image: '/images/career-growth/card-1.webp',
  },
  {
    title: 'Tutorials',
    content:
      'Enhance your skills with tutorials created by industry experts and thought leaders.',
    image: '/images/career-growth/card-4.webp',
  },

  {
    title: 'CERTIFICATION',
    content:
      'Stand out from the crowd and gain credibility with professional certification.',
    image: '/images/career-growth/card-3.webp',
  },

  {
    title: 'PROFILE',
    content:
      'Create your professional profile that highlights your skills and showcases your finest work.',
    image: '/images/career-growth/card-6.webp',
  },
  {
    title: 'PROJECTS',
    content:
      'Complete real-world exercises and build your professional portfolio.',
    image: '/images/career-growth/card-5.webp',
  },
  {
    title: 'mobile app',
    content:
      'Build a learning habit by taking LearnFast with you. Learn on the go with our mobile app.',
    image: '/images/career-growth/card-7.webp',
  },
  {
    title: 'UX GLOSSARY',
    content: 'Navigate through the most commonly used UX & Product terms.',
    image: '/images/career-growth/card-8.webp',
  },
  {
    title: 'COMMUNITY & events',
    content: 'Connect with peers, and learn from industry thought-leaders.',
    image: '/images/career-growth/card-9.webp',
  },
  {
    title: 'ASSESSMENTS',
    content:
      'Get customized learning recommendations & AI-powered skill insights.',
    image: '/images/career-growth/card-2.webp',
  },
]

export function CareerGrowthCards() {
  const dataChunks = useMemo(() => {
    const chunkSize = Math.ceil(data.length / 3)
    const result: Data[][] = []
    for (let i = 0; i < data.length; i += chunkSize) {
      result.push(data.slice(i, i + chunkSize))
    }
    return result
  }, [])

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {dataChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="flex flex-col gap-3">
          {chunk.map(({ title, content, image }, index) => (
            <BlurFade
              inView
              key={index}
              direction="up"
              delay={0.1 * (chunkIndex * chunk.length + index)}
            >
              <Card
                className={cn(
                  'bg-popover text-popover-foreground rounded-3xl border-none shadow-none',
                  (index === 0 || index === 2) && 'self-end',
                )}
              >
                <CardContent className="flex flex-col gap-4 px-6 py-2">
                  <div className="space-y-2">
                    <h3 className="text-muted-foreground text-[15px] font-semibold uppercase">
                      {title}
                    </h3>
                    <blockquote className="text-xl font-semibold">
                      {content}
                    </blockquote>
                    <div className="mt-5">
                      <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      ))}
    </div>
  )
}
