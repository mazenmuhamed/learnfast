import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

import { SubscriptionSettingsView } from '@/modules/settings/subscription-settings-view'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Subscription Settings - LearnFast',
}

export default async function SubscriptionSettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  return <SubscriptionSettingsView />
}
