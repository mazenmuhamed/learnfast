import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

import { SetupProfileDialog } from '@/modules/profile/components/setup-profile-dialog'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Profile Setup - LearnFast',
}

export default async function CompleteProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  // If the user already has a name and image, redirect to home
  if (session.user.name && session.user.image) {
    return redirect('/home')
  }

  return <SetupProfileDialog />
}
