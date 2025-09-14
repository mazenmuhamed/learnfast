'use client'

import { useEffect, useState } from 'react'
import { Info, Zap } from 'lucide-react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { ActionTooltip } from '../components/action-tooltip'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function StreakBox() {
  const [currentDay, setCurrentDay] = useState('')

  useEffect(() => {
    const today = new Date()
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' }
    const day = today.toLocaleDateString('en-US', options)
    setCurrentDay(day)
  }, [])

  return (
    <Card className="h-fit rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-lg">0 day streak</span>
          <ActionTooltip
            asChild={false}
            contentClassName="max-w-xs text-wrap text-center"
            tooltip="Your streak grows with daily learning, but weekends won’t break it. Skip a day? A saver covers you, refreshing monthly"
          >
            <Info className="text-muted-foreground size-4" />
          </ActionTooltip>
        </CardTitle>
        <CardDescription className="leading-none">
          Earn 100 PX to start a new streak
        </CardDescription>
        <CardAction>
          <Zap className="text-primary fill-primary size-10" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {weekdays.map((day, index) => (
            <div
              key={index}
              data-active={day === currentDay}
              className="text-muted-foreground data-[active=true]:text-accent-foreground data-[active=true]:bg-muted data-[active=true]:dark:bg-input/30 flex flex-col items-center gap-2 rounded-lg py-3 font-medium data-[active=true]:font-bold"
            >
              <span className="bg-muted-foreground/80 dark:bg-input/60 size-5 rounded-full">
                &nbsp;
              </span>
              <span className="text-sm">{day.charAt(0)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
