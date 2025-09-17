import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { SettingsView } from '@/modules/settings/views/settings-view'

export const metadata: Metadata = {
  title: 'Settings - LearnFast',
}

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  prefetch(trpc.user.me.queryOptions())

  return (
    <HydrateClient>
      <SettingsView />
    </HydrateClient>
  )
}
