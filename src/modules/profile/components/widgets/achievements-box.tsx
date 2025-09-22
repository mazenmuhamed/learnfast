'use client'

import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function AchievementsBox() {
  return (
    <Card className="h-fit rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg">Achievements</CardTitle>
        <CardDescription className="text-muted-foreground leading-none">
          All your earned badges in one place
        </CardDescription>
        <CardAction>
          <Button
            variant="link"
            className="text-muted-foreground p-0 text-[15px] opacity-80 hover:no-underline hover:opacity-100"
          >
            Explore
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="bg-secondary/30 dark:bg-input/40 flex size-full h-36 flex-col items-center justify-center gap-3 rounded-2xl border">
          <Image
            src="/icons/league-icon.svg"
            alt="League Icon"
            width={50}
            height={50}
            className="h-auto object-contain"
          />
          <span className="text-muted-foreground text-sm">
            Earn badges as you build your skills
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
