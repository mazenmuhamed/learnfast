import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { PageHeader } from '@/modules/components/page-header'
import { CoursesFilter } from '@/modules/course/components/courses-filter'
import { Separator } from '@/components/ui/separator'
import { CoursesList } from '@/modules/course/components/courses-list'

export const metadata: Metadata = {
  title: 'Courses - LearnFast',
}

export default async function CoursesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  prefetch(trpc.course.getAll.queryOptions())
  prefetch(trpc.bookmark.getUserBookmarks.queryOptions())

  return (
    <HydrateClient>
      <main className="grid gap-4">
        <PageHeader
          title="Courses"
          description="Improve your skills through interactive, hands-on professional courses."
        />
        <CoursesFilter />
        <Separator className="my-2" />
        <CoursesList />
      </main>
    </HydrateClient>
  )
}
