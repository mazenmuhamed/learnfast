'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

import { CourseBox } from './course-box'
import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

export function CoursesList() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="my-8" />}>
      <Suspense fallback={<LoadingIndicator className="my-32" />}>
        <CoursesListSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

function CoursesListSuspense() {
  const trpc = useTRPC()
  const { data: courses } = useSuspenseQuery(trpc.course.getAll.queryOptions())

  return (
    <div className="grid grid-cols-2 gap-5 max-[850px]:grid-cols-1 xl:grid-cols-3">
      {courses.map(course => (
        <CourseBox key={course.id} course={course} />
      ))}
    </div>
  )
}
