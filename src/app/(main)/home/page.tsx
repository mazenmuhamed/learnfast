import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { HomeView } from '@/modules/views/home-view'

export const metadata: Metadata = {
  title: 'Home - LearnFast',
}

export default async function HomePage() {
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
      <HomeView />
    </HydrateClient>
  )
}
