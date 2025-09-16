import { cn } from '@/lib/utils'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onOpenAutoFocus?: (event: Event) => void
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function AppDialog({
  title,
  description,
  children,
  open,
  className,
  onOpenChange,
  onOpenAutoFocus,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2xl" onOpenAutoFocus={onOpenAutoFocus}>
        <DialogHeader className="-space-y-1">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="overflow-y-auto">
          <div className={cn(className)}>{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
