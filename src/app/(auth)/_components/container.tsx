type Props = {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export function Container({ title, description, children, className }: Props) {
  return (
    <div className="flex w-full flex-col gap-6 max-sm:px-3 sm:max-w-md">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          {description}
        </p>
      </div>
      <div className={className}>{children}</div>
    </div>
  )
}
