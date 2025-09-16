'use client'

import Link from 'next/link'
import {
  ChartNoAxesCombined,
  Clock,
  FileText,
  LucideIcon,
  Pin,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const boards = [
  {
    category: 'New course',
    title: 'Human-Centered AI',
    description:
      'Learn AI design principles to create user-centered, trustworthy, and effective AI experiences.',
    link: '#',
    duration: '3h',
    note: {
      icon: ChartNoAxesCombined,
      text: 'Advanced',
    },
    action: 'View course',
  },
  {
    category: 'Not sure where to start?',
    title: 'Take the LearnFast career quiz',
    description:
      'Complete our short test and get personalized learning recommendations tailored to your role and level.',
    link: '#',
    duration: '20m',
    note: {
      icon: FileText,
      text: '25 questions',
    },
    action: 'Take the quiz',
  },
  {
    category: 'Certifications',
    title: 'Certify your skills',
    description:
      'Earn certifications to validate skills and impress employers. Advance your career with verified credentials.',
    link: '#',
    action: 'Learn more',
  },
]

export function BulletinBoard() {
  return (
    <Carousel>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">Bulletin Board</h2>
            <Badge variant="secondary" className="size-5">
              <span className="text-sm font-semibold">{boards.length}</span>
            </Badge>
          </div>
          <div className="relative flex items-center gap-2">
            <CarouselPrevious className="relative inset-0 translate-0 rounded-lg" />
            <CarouselNext className="relative inset-0 translate-0 rounded-lg" />
          </div>
        </div>
        <CarouselContent className="-ml-4 max-w-full py-1 pl-1">
          {boards.map((board, index) => (
            <CarouselItem key={index} className="pl-6 md:basis-1/2">
              <BoardCard {...board} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  )
}

type BoardCardProps = {
  category: string
  title: string
  description: string
  link: string
  duration?: string
  note?: { text: string; icon: LucideIcon }
  action: string
}

function BoardCard({
  category,
  title,
  description,
  link,
  duration,
  note,
  action,
}: BoardCardProps) {
  return (
    <Link href={link}>
      <Card className="card-hover aspect-square max-h-[19.4rem] w-full gap-4 rounded-2xl">
        <CardHeader>
          <CardTitle className="grid gap-2">
            <span className="text-primary text-[13px] font-semibold uppercase">
              {category}
            </span>
            {title}
          </CardTitle>
          <CardAction>
            <Pin className="text-primary fill-primary size-6 rotate-45" />
          </CardAction>
        </CardHeader>
        <CardContent className="-mt-1 grid gap-3">
          <p className="text-muted-foreground text-[15px]">{description}</p>
          <div className="flex items-center gap-4">
            {duration && (
              <div className="text-muted-foreground flex items-center gap-1.5">
                <Clock className="size-4" />
                <span className="text-[15px]">{duration}</span>
              </div>
            )}
            {note && (
              <div className="text-muted-foreground flex items-center gap-1.5">
                <note.icon className="size-4" />
                <span className="text-[15px]">{note.text}</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="mt-auto grid gap-2 [&_button]:w-full">
          <Button variant="outline" className="h-10 rounded-lg text-base">
            {action}
          </Button>
          <Button
            variant="ghost"
            className="rounded-lg opacity-70 transition hover:opacity-100"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            Mark as read
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
