import Link from 'next/link'
import { BrushCleaning } from 'lucide-react'
import type { Metadata } from 'next'

import { caller } from '@/trpc/server'

import { BookmarksHeader } from '@/modules/course/components/bookmarks-header'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Bookmarks - LearnFast',
  description: 'Your saved bookmarks on LearnFast',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const bookmarks = await caller.bookmark.getUserBookmarks()

  return (
    <main className="grid gap-6">
      {bookmarks.length > 0 ? (
        <>
          <BookmarksHeader bookmarksLength={bookmarks.length} />
          {children}
        </>
      ) : (
        <div className="mx-auto mt-32 flex w-full max-w-lg flex-col items-center justify-center gap-4">
          <BrushCleaning className="text-muted-foreground mb-5 size-24" />
          <h1 className="text-popover-foreground text-center text-4xl font-semibold">
            You haven’t saved anything yet
          </h1>
          <p className="text-muted-foreground text-center">
            Explore LearnFast{' '}
            <Link
              href="/courses"
              className="text-popover-foreground text-lg underline"
            >
              courses
            </Link>{' '}
            and start bookmarking your favorite learning resources.
          </p>
        </div>
      )}
    </main>
  )
}
