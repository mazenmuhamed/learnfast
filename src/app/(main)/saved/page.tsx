import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { BookmarksView } from '@/modules/course/views/bookmarks-view'

export const metadata: Metadata = {
  title: 'Bookmarks - LearnFast',
  description: 'Your saved bookmarks on LearnFast',
}

export default async function BookmarksPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  prefetch(trpc.bookmark.getUserBookmarks.queryOptions())

  return (
    <HydrateClient>
      <BookmarksView />
    </HydrateClient>
  )
}
