'use client'

import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'
import { BrushCleaning, PackageOpen, Search } from 'lucide-react'
import { Suspense, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'
import { useTRPC } from '@/trpc/client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { PageHeader } from '@/modules/components/page-header'
import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

import { CourseBox } from '../components/course-box'

export function BookmarksView() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="h-[70svh]" />}>
      <Suspense fallback={<LoadingIndicator className="h-[70svh]" />}>
        <BookmarksViewSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

const categories = [
  { label: 'Courses', value: 'courses' },
  { label: 'Lessons', value: 'lessons', disabled: true },
  { label: 'Exercises', value: 'exercises', disabled: true },
]

function BookmarksViewSuspense() {
  const [value, setValue] = useState('')
  const [activeCategory, setActiveCategory] = useState('courses')

  const trpc = useTRPC()
  const { data: bookmarks } = useSuspenseQuery(
    trpc.bookmark.getUserBookmarks.queryOptions(),
  )

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter(bookmark =>
      bookmark.course.title.toLowerCase().includes(value.toLowerCase()),
    )
  }, [bookmarks, value])

  return (
    <main className="grid gap-6">
      {bookmarks.length > 0 ? (
        <>
          <div className="flex justify-between max-[735]:flex-col max-sm:gap-5 sm:gap-3">
            <PageHeader
              title="Bookmarks"
              description={`Browse your favorite ${bookmarks.length} learning resources.`}
              className="sm:[&_p]:text-lg"
            />
            <div className="relative h-fit">
              <Search className="absolute top-2/4 left-3 size-4 -translate-y-2/4" />
              <Input
                type="search"
                id="bookmark-filter"
                name="bookmark-filter"
                value={value}
                className="h-9 pl-9"
                onChange={e => setValue(e.target.value)}
                placeholder="Filter bookmarks"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {categories.map(category => (
              <Button
                variant="outline"
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                disabled={category.disabled}
                className={cn(
                  'px-3',
                  activeCategory === category.value &&
                    '!bg-primary/10 !text-primary !border-primary',
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
          <Separator />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredBookmarks.length > 0 ? (
              filteredBookmarks.map(bookmark => (
                <CourseBox key={bookmark.id} course={bookmark.course} />
              ))
            ) : (
              <div className="col-span-3 my-14 flex flex-col items-center justify-center gap-5">
                <PackageOpen className="text-muted-foreground size-12" />
                <p className="text-muted-foreground text-center">
                  No bookmarks found matching &ldquo;{value}&ldquo;
                </p>
              </div>
            )}
          </div>
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
