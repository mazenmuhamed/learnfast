import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Page not found - ShipX',
}

export default function Notfound() {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-8">
      <Image
        src="/brand/logo.svg"
        alt="ShipX Logo"
        width={60}
        height={60}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="mb-4 place-self-center"
      />
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">404 - Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist. Please check the URL or
          return to the homepage.
        </p>
      </div>
      <Button asChild variant="outline">
        <Link href="/home">
          <ArrowLeft />
          Return to App
        </Link>
      </Button>
    </main>
  )
}
