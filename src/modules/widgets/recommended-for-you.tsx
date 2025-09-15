'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

import { Button } from '@/components/ui/button'
import { CourseBox } from '@/modules/course/course-box'
import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

export function RecommendedForYou() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="my-8" />}>
      <Suspense fallback={<LoadingIndicator className="my-16" />}>
        <RecommendedForYouSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

function RecommendedForYouSuspense() {
  const trpc = useTRPC()
  const { data: courses } = useSuspenseQuery(trpc.course.getAll.queryOptions())

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Recommended for you</h2>
        <Button asChild variant="ghost" size="sm">
          <Link href="/courses">View all</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.slice(2, 4).map(course => (
          <CourseBox key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
