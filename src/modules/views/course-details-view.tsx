'use client'

import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

import { CourseHeader } from '../course/course-details/course-header'
import { LoadingIndicator } from '../components/loading-indicator'
import { ErrorBoundaryMessage } from '../components/error-boundary-message'
import { Separator } from '@/components/ui/separator'
import { CourseDescription } from '../course/course-details/course-desciption'
import { DetailsBox } from '../course/course-details/details-box'

type Props = { id: string }

export function CourseDetailsView({ id }: Props) {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="h-[80svh]" />}>
      <Suspense fallback={<LoadingIndicator className="h-[80svh]" />}>
        <CourseDetailsViewSuspense id={id} />
      </Suspense>
    </ErrorBoundary>
  )
}

function CourseDetailsViewSuspense({ id }: Props) {
  const trpc = useTRPC()
  const { data: course } = useSuspenseQuery(
    trpc.course.findById.queryOptions({ id }),
  )

  if (!course) {
    return notFound()
  }

  return (
    <div className="grid grid-cols-[1.5fr_1fr] gap-8">
      <div className="grid gap-8">
        <CourseHeader
          title={course.title}
          summary={course.summary}
          duration={course.duration}
          level={course.level}
          exp={course.exp}
        />
        <Separator />
        <CourseDescription content={course.description} />
        <DetailsBox
          instructorName={course.author.name}
          instructorAvatar={course.author.avatar}
          duration={course.duration}
          level={course.level}
          lessonsCount={course.lessons.length}
          createdAt={course.createdAt}
        />
      </div>
    </div>
  )
}
