import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  confirmLabel?: string
  onConfirm: VoidFunction
  actionVariant?: 'default' | 'destructive'
}

export function AppAlertDialog({
  open,
  title,
  description,
  onConfirm,
  confirmLabel,
  onOpenChange,
  actionVariant = 'default',
}: Props) {
  function handleDialogAction(e: React.MouseEvent) {
    e.stopPropagation()
    onConfirm()
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="!max-w-96 rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="grid grid-cols-1">
          <AlertDialogAction asChild>
            <Button
              variant={actionVariant}
              onClick={handleDialogAction}
              className="w-full"
            >
              {confirmLabel || 'Continue'}
            </Button>
          </AlertDialogAction>
          <AlertDialogCancel onClick={e => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
