import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { BookmarkedCoursesView } from '@/modules/course/views/bookmarked-courses-view'

export const metadata: Metadata = {
  title: 'Bookmarked Courses - LearnFast',
  description: 'Your saved bookmarks on LearnFast',
}

export const dynamic = 'force-dynamic'

export default async function BookmarkedCoursesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  prefetch(trpc.bookmark.getUserBookmarks.queryOptions())

  return (
    <HydrateClient>
      <BookmarkedCoursesView />
    </HydrateClient>
  )
}
