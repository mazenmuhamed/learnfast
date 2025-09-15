'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Bookmark, ChartNoAxesCombined, Clock, StarIcon } from 'lucide-react'

import { CourseOutput } from '@/lib/types'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

import { ActionTooltip } from '../components/action-tooltip'

export function CourseBox({ course }: { course: CourseOutput }) {
  function handleBookmarkClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="card-hover group min-h-fit gap-3 rounded-2xl pt-0">
        <div className="bg-secondary/80 dark:bg-input/40 relative m-1.5 flex min-h-64 w-auto items-center justify-center overflow-hidden rounded-2xl border pb-0">
          <Image
            src={course.cover}
            alt={course.title}
            width={150}
            height={400}
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <ActionTooltip tooltip="Bookmark">
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 size-8"
              onClick={handleBookmarkClick}
            >
              <Bookmark className="size-5" />
            </Button>
          </ActionTooltip>
        </div>
        <CardContent className="relative -mt-2 px-4">
          <div className="absolute top-2 right-4">
            <Image
              src={course.author.avatar}
              alt={course.author.name}
              width={35}
              height={35}
              quality={100}
              className="h-full rounded-full object-cover"
            />
          </div>
          <span className="text-muted-foreground text-[13px] font-semibold uppercase">
            Course
          </span>
          <div className="mt-2 grid gap-2">
            <h3 className="text-base font-semibold">{course.title}</h3>
            <span className="text-primary leading-none">
              {course.author.name}
            </span>
            <p className="text-muted-foreground my-1 line-clamp-2 text-sm">
              {course.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="mt-auto px-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Clock className="text-muted-foreground size-4" />
                <span className="text-muted-foreground text-[15px]">
                  {Math.floor(course.duration / 60)}h
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <ChartNoAxesCombined className="text-muted-foreground size-4" />
                <span className="text-muted-foreground text-[15px]">
                  {course.level}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="size-4 fill-yellow-500 text-yellow-500" />
            <span className="text-muted-foreground font-semibold">4.8</span>
            <span className="text-muted-foreground text-sm">(3.7k)</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
