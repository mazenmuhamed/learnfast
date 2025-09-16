import { cn } from '@/lib/utils'

type Props = { title: string; description: string; className?: string }

export function PageHeader({ title, description, className }: Props) {
  return (
    <div className={cn('grid gap-2', className)}>
      <h1 className="text-popover-foreground text-3xl font-semibold">
        {title}
      </h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
