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
  onOpenChange,
  onOpenAutoFocus,
  className,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn('rounded-2xl', className)}
        onOpenAutoFocus={onOpenAutoFocus}
      >
        <DialogHeader className="-space-y-1">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
