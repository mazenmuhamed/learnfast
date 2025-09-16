'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { cn } from '@/lib/utils'
import { useTRPC } from '@/trpc/client'

import { Button } from '@/components/ui/button'
import { CourseBox } from '@/modules/course/components/course-box'
import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

type Props = {
  /**
   * Number of courses to display (default: 2)
   */
  numberOfCourses?: number
}

export function RecommendedForYou({ numberOfCourses = 2 }: Props) {
  if (numberOfCourses > 4 || numberOfCourses < 2) {
    throw new Error('The number of courses must be between 2 and 4')
  }

  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="my-8" />}>
      <Suspense fallback={<LoadingIndicator className="my-16" />}>
        <RecommendedForYouSuspense numberOfCourses={numberOfCourses} />
      </Suspense>
    </ErrorBoundary>
  )
}

function RecommendedForYouSuspense({ numberOfCourses = 2 }: Props) {
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
      <div
        className={cn(
          'grid gap-4 md:grid-cols-2',
          numberOfCourses === 3 && 'lg:grid-cols-3',
          numberOfCourses >= 4 && 'lg:grid-cols-4',
        )}
      >
        {courses.slice(4, 4 + numberOfCourses).map(course => (
          <CourseBox key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
