import { Loader } from 'lucide-react'

import { cn } from '@/lib/utils'

export function LoadingIndicator({ className }: { className?: string }) {
  return (
    <div className={cn('flex w-full items-center justify-center', className)}>
      <Loader className="size-5 animate-spin" />
    </div>
  )
}
