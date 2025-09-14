import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { Navbar } from './_components/navbar'
import { DiscountBanner } from './_components/banner'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  prefetch(trpc.user.checkAuth.queryOptions())

  return (
    <HydrateClient>
      <DiscountBanner />
      <Navbar />
      {children}
    </HydrateClient>
  )
}
