import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'

export function SettingsLoadingSkeleton() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <Skeleton className="h-12 w-1/3 rounded-md" />
        <Skeleton className="h-8 w-1/2 rounded-md" />
      </div>
      <div className="space-y-5">
        <div className="space-y-3">
          <Skeleton className="h-6 w-1/4 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-6 w-1/3 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <Separator />
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-1/3 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-1/2 rounded-md" />
        <Skeleton className="h-4 w-1/3 rounded-md" />
      </div>
    </div>
  )
}
