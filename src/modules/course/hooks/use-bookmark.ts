import { toast } from 'sonner'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'

/**
 * A hook to manage bookmarking functionality for a course.
 * @param id - The ID of the course to bookmark or unbookmark.
 */
export function useBookmark(id: string) {
  const trpc = useTRPC()
  const queryClient = useQueryClient()

  const router = useRouter()

  const { mutate: addBookmark } = useMutation(
    trpc.course.addBookmark.mutationOptions(),
  )
  const { data: bookmarks, isPending } = useSuspenseQuery(
    trpc.bookmark.getUserBookmarks.queryOptions(),
  )

  const [isBookmarked, setIsBookmarked] = useState(() => {
    return !!bookmarks.find(b => b.courseId === id)
  })

  // const isBookmarked = !!bookmarks.find(b => b.courseId === id)

  function handleAddBookmark(e: React.MouseEvent) {
    e.preventDefault()

    // Optimistic UI update
    setIsBookmarked(pre => !pre)

    toast.loading('Loading...', { id: 'bookmark' })

    addBookmark(
      { courseId: id },
      {
        onSuccess: data => {
          if (data.action === 'removed') {
            toast.success('Removed from bookmarks', { id: 'bookmark' })
          } else {
            toast.success('Saved to bookmarks', { id: 'bookmark' })
          }

          queryClient.invalidateQueries(
            trpc.bookmark.getUserBookmarks.queryOptions(),
          )

          // Refresh the page if the last bookmark was removed
          if (bookmarks.length === 1 && data.action === 'removed') {
            router.refresh()
          }
        },
        onError: error => {
          console.log('[ADD_BOOKMARK_ERROR]', error)
          toast.error('Something went wrong.')
        },
      },
    )
  }

  return { handleAddBookmark, isBookmarked, isPending }
}
