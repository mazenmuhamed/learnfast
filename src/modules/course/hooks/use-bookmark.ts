import { toast } from 'sonner'
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

  const { mutate: addBookmark } = useMutation(
    trpc.course.addBookmark.mutationOptions(),
  )
  const { data: bookmarks, isPending } = useSuspenseQuery(
    trpc.bookmark.getUserBookmarks.queryOptions(),
  )

  const isBookmarked = !!bookmarks.find(b => b.courseId === id)

  function handleAddBookmark(e: React.MouseEvent) {
    e.preventDefault()

    toast.loading('Loading...', { id: 'bookmark' })

    addBookmark(
      { courseId: id },
      {
        onSuccess: data => {
          if (data.action === 'removed') {
            toast.success('Course removed from bookmarks', { id: 'bookmark' })
          } else {
            toast.success('Course saved to bookmarks', { id: 'bookmark' })
          }

          queryClient.invalidateQueries(
            trpc.bookmark.getUserBookmarks.queryOptions(),
          )
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
