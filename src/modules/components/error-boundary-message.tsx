import { cn } from '@/lib/utils'

export function ErrorBoundaryMessage({ className }: { className?: string }) {
  return (
    <div className={cn('flex w-full items-center justify-center', className)}>
      <span>Something went wrong!</span>
    </div>
  )
}
