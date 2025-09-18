'use client'

import Link from 'next/link'
import {
  Bookmark,
  ChartNoAxesCombined,
  ChevronRight,
  Clock,
  HandCoins,
  Loader,
  Star,
  Users2,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { useBookmark } from '@/modules/course/hooks/use-bookmark'

import { Button } from '@/components/ui/button'
import { ActionTooltip } from '@/modules/components/action-tooltip'

type Props = {
  id: string
  title: string
  summary: string
  duration: number
  level: string
  exp: number
}

export function CourseHeader({
  id,
  title,
  summary,
  duration,
  level,
  exp,
}: Props) {
  const { isBookmarked, handleAddBookmark, isPending } = useBookmark(id)

  return (
    <div className="grid gap-4">
      <Button
        asChild
        variant="link"
        className="text-muted-foreground gap-1 !px-0"
      >
        <Link href="/courses" className="w-fit text-[15px]">
          Courses <ChevronRight />
        </Link>
      </Button>
      <div className="grid gap-5">
        <h1 className="text-popover-foreground text-3xl font-semibold sm:text-4xl">
          {title}
        </h1>
        <p className="text-muted-foreground">{summary}</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-[15px]">
              {Math.floor(duration / 60)} hours
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChartNoAxesCombined className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-[15px]">{level}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-yellow-500 text-yellow-500" />
            <span className="text-muted-foreground font-semibold">4.8</span>
            <span className="text-muted-foreground text-sm">(3.7k)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users2 className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-[15px]">
              7105 learners
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <HandCoins className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-[15px]">{exp} EXP</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button size="lg" className="w-fit rounded-lg text-base">
            Start course for free
          </Button>
          <ActionTooltip tooltip="Bookmark">
            <Button
              size="icon"
              variant="ghost"
              className="size-10 rounded-lg"
              onClick={handleAddBookmark}
            >
              {isPending ? (
                <Loader className="size-5 animate-spin max-sm:size-6" />
              ) : (
                <Bookmark
                  className={cn(
                    'size-5 max-sm:size-6',
                    isBookmarked && 'text-primary fill-primary',
                  )}
                />
              )}
            </Button>
          </ActionTooltip>
        </div>
      </div>
    </div>
  )
}
