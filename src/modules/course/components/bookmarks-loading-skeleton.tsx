import { CardLoadingSkeleton } from '@/modules/components/card-loading-skeleton'

export function BookmarksLoadingSkeleton() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <CardLoadingSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}
