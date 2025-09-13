import type { Metadata } from 'next'
import { cache } from 'react'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Home - LearnFast',
}

const currentUser = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return redirect('/sign-in')
  }

  return session.user
})

export default async function HomePage() {
  await currentUser()

  return <div>HomePage</div>
}
