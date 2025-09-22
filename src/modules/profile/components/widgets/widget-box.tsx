import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  title: string
  description: string
  href?: string
  action?: string
  children?: React.ReactNode
  onActionClick?: () => void
  disabled?: boolean
}

export function WidgetBox({
  href,
  title,
  action = 'Add',
  disabled,
  children,
  description,
  onActionClick,
}: Props) {
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-popover-foreground text-2xl font-semibold">
          {title}
        </h2>
        <Button
          variant="link"
          disabled={disabled}
          asChild={!!href}
          className={cn(
            'p-0 text-[15px] opacity-80 hover:no-underline hover:opacity-100',
            href && 'text-muted-foreground hover:text-muted-foreground',
          )}
          onClick={onActionClick}
        >
          {href ? <Link href={href}>{action}</Link> : action}
        </Button>
      </div>
      {children ?? (
        <div className="bg-secondary/30 dark:bg-input/40 flex h-32 w-full items-center justify-center rounded-2xl p-4">
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      )}
    </div>
  )
}
