'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HandCoins } from 'lucide-react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function LeagueBox() {
  return (
    <Card className="h-fit rounded-2xl">
      <CardHeader>
        <CardTitle>
          <Link className="text-lg hover:underline" href="/leagues">
            Quartz league
          </Link>
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-none">
          Reach 500 PX by join to the next league
        </CardDescription>
        <CardAction>
          <Image
            src="/icons/league-icon.svg"
            alt="League Icon"
            width={50}
            height={50}
            className="h-auto object-contain"
          />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="bg-secondary/80 dark:bg-input/40 flex size-full h-36 flex-col items-center justify-center gap-3 rounded-2xl border">
          <HandCoins className="text-muted-foreground size-10" />
          <span className="text-muted-foreground text-sm">
            Earn pixels to join this week’s league
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
