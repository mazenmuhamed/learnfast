import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Page not found - ShipX',
}

export default function Notfound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-8">
      <div className="mt-4 space-y-5 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">404 - Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist. Please check the URL or
          return to the homepage.
        </p>
      </div>
      <Button asChild variant="outline">
        <Link href="/">
          <ArrowLeft />
          Return to Home
        </Link>
      </Button>
    </main>
  )
}
