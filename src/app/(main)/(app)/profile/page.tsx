import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { ProfileView } from '@/modules/profile/views/profile-view'

import 'flag-icons/css/flag-icons.min.css'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Profile - LearnFast',
  description: 'Your profile information on LearnFast',
}

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  prefetch(trpc.user.me.queryOptions())

  return (
    <>
      <HydrateClient>
        <ProfileView />
      </HydrateClient>
    </>
  )
}
