type Props = {
  title: string
  description: string
}

export function PageHeader({ title, description }: Props) {
  return (
    <div className="grid gap-2">
      <h1 className="text-popover-foreground text-3xl font-semibold">
        {title}
      </h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
