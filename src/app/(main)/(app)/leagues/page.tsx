import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { LeaguesView } from '@/modules/views/leagues-view'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Leagues - LearnFast',
}

export default async function LeaguesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  prefetch(trpc.user.me.queryOptions())

  return (
    <HydrateClient>
      <LeaguesView />
    </HydrateClient>
  )
}
