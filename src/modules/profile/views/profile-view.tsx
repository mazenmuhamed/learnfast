'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

import { ProfileHeader } from '../components/profile-header'

export function ProfileView() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="h-[45svh]" />}>
      <Suspense fallback={<LoadingIndicator className="h-[75svh]" />}>
        <ProfileViewSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

function ProfileViewSuspense() {
  const trpc = useTRPC()
  const { data: user } = useSuspenseQuery(trpc.user.me.queryOptions())

  return (
    <div className="grid gap-5">
      <ProfileHeader user={user} />
    </div>
  )
}
