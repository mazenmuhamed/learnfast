'use client'

import { PackageOpen } from 'lucide-react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense, useMemo, useState } from 'react'

import { useTRPC } from '@/trpc/client'

import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

import { CourseBox } from '../components/course-box'
import { BookmarksHeader } from '../components/bookmarks-header'
import { SavedLayout } from '../components/saved-layout'

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
    <SavedLayout bookmarksLength={bookmarks.length}>
      <BookmarksHeader
        searchValue={value}
        setSearchValue={setValue}
        bookmarksLength={bookmarks.length}
      >
        {filteredBookmarks.length > 0 ? (
          filteredBookmarks.map(bookmark => (
            <CourseBox key={bookmark.id} course={bookmark.course} />
          ))
        ) : (
          <div className="my-14 flex flex-col items-center justify-center gap-5">
            <PackageOpen className="text-muted-foreground size-12" />
            <p className="text-muted-foreground text-center">
              No bookmarks found matching &ldquo;{value}&ldquo;
            </p>
          </div>
        )}
      </BookmarksHeader>
    </SavedLayout>
  )
}
