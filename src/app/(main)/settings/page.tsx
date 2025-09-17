import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Settings - LearnFast',
}

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  redirect('/settings/account')
}
