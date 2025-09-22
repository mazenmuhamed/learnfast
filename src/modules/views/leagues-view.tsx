'use client'

import Link from 'next/link'
import Image from 'next/image'
import { User2 } from 'lucide-react'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

import { Button } from '@/components/ui/button'

import { LoadingIndicator } from '../components/loading-indicator'
import { ErrorBoundaryMessage } from '../components/error-boundary-message'

export function LeaguesView() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="h-[75svh]" />}>
      <Suspense fallback={<LoadingIndicator className="h-[75svh]" />}>
        <LeaguesViewSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

function LeaguesViewSuspense() {
  const trpc = useTRPC()
  const { data: user } = useSuspenseQuery(trpc.user.me.queryOptions())

  return (
    <main className="flex flex-col items-center gap-4 sm:py-10">
      <Image
        src="/icons/league-icon.svg"
        alt="League Icon"
        width={120}
        height={120}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-auto object-contain"
      />
      <div className="grid gap-2">
        <h1 className="text-popover-foreground text-center text-3xl font-semibold sm:text-4xl">
          Quartz League
        </h1>
        <p className="text-muted-foreground text-center text-lg">
          Complete a lesson to join this week’s league
        </p>
        <Button asChild size="lg" className="mx-auto mt-3 rounded-lg text-base">
          <Link href="/courses">Start a lesson</Link>
        </Button>
      </div>
      <div className="mt-8 w-full max-w-xl divide-y rounded-2xl border">
        <UserPlaceholder />
        <UserPlaceholder />
        <UserBox
          name={user.name}
          avatar={user.image}
          backgroundColor={user.backgroundColor}
        />
        <UserPlaceholder />
        <UserPlaceholder />
      </div>
    </main>
  )
}

type UserBoxProps = {
  name: string
  avatar: string | null
  backgroundColor: string | null
}

function UserBox({ name, avatar, backgroundColor }: UserBoxProps) {
  return (
    <Link href="/profile" className="group flex items-center gap-4 px-6 py-4">
      <div className="bg-secondary/30 dark:bg-input/40 h-0.5 w-9 rounded-md"></div>
      <div className="flex items-center gap-3">
        <div
          className="relative h-12 w-12 overflow-hidden rounded-full"
          style={{ backgroundColor: backgroundColor || undefined }}
        >
          <Image
            src={avatar || ''}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto translate-y-0.5 rounded-full object-contain select-none"
          />
        </div>
        <h3 className="group-hover:text-primary flex-1 text-[17px] font-medium transition">
          {name}
        </h3>
      </div>
      <div className="ml-auto w-12">0px</div>
    </Link>
  )
}

function UserPlaceholder() {
  return (
    <div className="flex items-center justify-between gap-2 px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="bg-secondary/30 dark:bg-input/40 h-5 w-9 rounded-md"></div>
        <div className="flex items-center gap-3">
          <div className="bg-secondary/30 dark:bg-input/40 flex size-12 items-center justify-center rounded-full">
            <User2 className="text-muted-foreground h-6 w-6" />
          </div>
          <div className="grid gap-2">
            <div className="bg-secondary/30 dark:bg-input/40 h-5 w-32 rounded-lg"></div>
            <div className="bg-secondary/30 dark:bg-input/40 h-4 w-16 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-secondary/30 dark:bg-input/40 h-6 w-16 rounded-lg"></div>
    </div>
  )
}
