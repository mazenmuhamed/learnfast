import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { caller, HydrateClient, prefetch, trpc } from '@/trpc/server'

import { CourseDetailsView } from '@/modules/views/course-details-view'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  const course = await caller.course.findById({ id })

  if (!course) {
    return {
      title: 'Course not found',
      description: 'The requested course could not be found.',
    }
  }

  return {
    title: `${course.title} - LearnFast`,
    description: course.summary,
  }
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  prefetch(trpc.course.getAll.queryOptions())
  prefetch(trpc.course.findById.queryOptions({ id }))

  return (
    <HydrateClient>
      <CourseDetailsView id={id} />
    </HydrateClient>
  )
}
