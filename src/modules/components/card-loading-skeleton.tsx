import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export function CardLoadingSkeleton() {
  return (
    <Card className="min-h-fit gap-3 rounded-2xl pt-0">
      <div className="bg-secondary/80 dark:bg-input/40 relative m-1.5 flex min-h-64 w-auto items-center justify-center overflow-hidden rounded-2xl border pb-0">
        <Skeleton className="h-full w-full" />
      </div>
      <CardContent className="relative -mt-2 px-4">
        <div className="absolute top-2 right-4">
          <Skeleton className="size-11 rounded-full" />
        </div>
        <div className="mb-2 h-6 w-2/5">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="mt-2 grid gap-2">
          <Skeleton className="h-10 w-4/5" />
        </div>
      </CardContent>
      <CardFooter className="mt-auto px-4">
        <div className="flex w-2/4 items-center gap-3">
          <Skeleton className="h-7 w-1/2" />
          <Skeleton className="h-7 w-1/2" />
        </div>
      </CardFooter>
    </Card>
  )
}
