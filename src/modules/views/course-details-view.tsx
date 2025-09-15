'use client'

import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

import { Separator } from '@/components/ui/separator'

import { CourseHeader } from '../course/course-details/course-header'
import { LoadingIndicator } from '../components/loading-indicator'
import { ErrorBoundaryMessage } from '../components/error-boundary-message'
import { CourseDescription } from '../course/course-details/course-desciption'
import { DetailsSection } from '../course/course-details/details-section'
import { CourseOverview } from '../course/course-details/course-overview'
import { UpgradeBox } from '../widgets/upgrade-box'
import { SkillsGainSection } from '../course/course-details/skills-gain-section'
import { LessonsSection } from '../course/course-details/lessons-section'
import { InstructorSection } from '../course/course-details/instructor-section'
import { RatingSection } from '../course/course-details/rating-section'
import { JoinBox } from '../course/course-details/join-box'
import { RecommendedForYou } from '../widgets/recommended-for-you'

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
    <div className="grid gap-20">
      <div className="relative grid grid-cols-[1.8fr_1fr] gap-10 max-[1100px]:grid-cols-1 xl:gap-20">
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
          <DetailsSection
            instructorName={course.author.name}
            instructorAvatar={course.author.avatar}
            duration={course.duration}
            level={course.level}
            lessonsCount={course.lessons.length}
            createdAt={course.createdAt}
          />
          <SkillsGainSection data={course.whatYouWillLearn} />
          <LessonsSection lessons={course.lessons} />
        </div>
        <div className="relative h-full max-[1100px]:hidden">
          <div className="sticky top-28 grid gap-5">
            <CourseOverview cover={course.cover} title={course.title} />
            <UpgradeBox />
          </div>
        </div>
      </div>
      <InstructorSection
        bio={course.author.bio}
        avatar={course.author.avatar}
        name={course.author.name}
        role={course.author.role}
      />
      <RatingSection />
      <JoinBox />
      <RecommendedForYou numberOfCourses={3} />
    </div>
  )
}
