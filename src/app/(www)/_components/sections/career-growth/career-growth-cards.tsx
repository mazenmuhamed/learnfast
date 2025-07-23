import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Card, CardContent } from '@/components/ui/card'

type Testimonial = { title: string; content: string; image: string }

const testimonials: Testimonial[] = [
  {
    title: 'COURSES & career paths',
    content: 'Over 40 interactive UX, PM, AI courses for any role & level.',
    image: '/images/career-growth/card-1.webp',
  },
  {
    title: 'ASSESSMENTS',
    content:
      'Get customized learning recommendations & AI-powered skill insights.',
    image: '/images/career-growth/card-2.webp',
  },
  {
    title: 'CERTIFICATION',
    content:
      'Stand out from the crowd and gain credibility with professional certification.',
    image: '/images/career-growth/card-3.webp',
  },
  {
    title: 'Tutorials',
    content:
      'Enhance your skills with tutorials created by industry experts and thought leaders.',
    image: '/images/career-growth/card-4.webp',
  },
  {
    title: 'PROJECTS',
    content:
      'Complete real-world exercises and build your professional portfolio.',
    image: '/images/career-growth/card-5.webp',
  },
  {
    title: 'PROFILE',
    content:
      'Create your professional profile that highlights your skills and showcases your finest work.',
    image: '/images/career-growth/card-6.webp',
  },
  {
    title: 'mobile app',
    content:
      'Build a learning habit by taking Uxcel with you. Learn on the go with our mobile app.',
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
]

export default function CareerGrowthCards() {
  return (
    <div className="grid items-baseline gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map(({ title, content, image }, index) => (
        <Card
          key={index}
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
      ))}
    </div>
  )
}
