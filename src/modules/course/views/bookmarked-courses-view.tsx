'use client'

import { PackageOpen, Search } from 'lucide-react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense, useMemo, useState } from 'react'

import { useTRPC } from '@/trpc/client'

import { Input } from '@/components/ui/input'
import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

import { CourseBox } from '../components/course-box'

export function BookmarkedCoursesView() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="h-[75svh]" />}>
      <Suspense fallback={<LoadingIndicator className="h-[75svh]" />}>
        <BookmarkedCoursesSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

function BookmarkedCoursesSuspense() {
  const trpc = useTRPC()

  const [value, setValue] = useState('')

  const { data: bookmarks } = useSuspenseQuery(
    trpc.bookmark.getUserBookmarks.queryOptions(),
  )

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter(bookmark =>
      bookmark.course.title.toLowerCase().includes(value.toLowerCase()),
    )
  }, [bookmarks, value])

  return (
    <div className="grid gap-6">
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
    </div>
  )
}
