'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

import { Container } from '@/modules/components/container'
import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

import { LinksBox } from '../components/widgets/links-box'
import { SummaryBox } from '../components/widgets/summary-box'
import { ToolstackBox } from '../components/widgets/toolstack-box'
import { ProfileHeader } from '../components/profile-header'
import { CourseCertificatesBox } from '../components/widgets/course-certificates-box'
import { ActivityBox } from '../components/widgets/activity-box'
import { AchievementsBox } from '../components/widgets/achievements-box'

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
    <div className="grid gap-14">
      <ProfileHeader user={user} />
      <Container className="px-2 md:px-8">
        <Container.Content>
          <SummaryBox />
          <LinksBox />
          <CourseCertificatesBox />
          <ToolstackBox />
        </Container.Content>
        <Container.StickyAside hideOnMobile={false}>
          <AchievementsBox />
          <ActivityBox />
        </Container.StickyAside>
      </Container>
    </div>
  )
}
