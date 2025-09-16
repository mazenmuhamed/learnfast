'use client'

import Link from 'next/link'
import { Info, Telescope } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { ActionTooltip } from '../components/action-tooltip'

export function SkillGraphBox() {
  return (
    <Card className="h-fit rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="text-lg hover:underline" href="/profile">
            Skill graph
          </Link>
          <ActionTooltip
            asChild={false}
            contentClassName="max-w-xs text-wrap text-center"
            tooltip="Your score is a 100-point benchmark of your skills, based on your Uxcel Pulse assessment and learning activity."
          >
            <Info className="text-muted-foreground size-4" />
          </ActionTooltip>
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-none">
          Recommended for you
        </CardDescription>
        <CardAction>
          {/* TODO: Make this whatever skill user is interested in */}
          <Badge variant="secondary" className="font-semibold">
            UX
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="bg-secondary/30 dark:bg-input/40 flex size-full min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border p-4">
          <Telescope className="text-muted-foreground size-10" />
          <span className="text-muted-foreground text-center text-sm">
            Discover your strengths and unlock your personalized learning path
          </span>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="dark:bg-popover/50 dark:hover:bg-popover mt-1 w-full rounded-lg text-[15px]"
          >
            <Link href="/assessments">Get started</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
