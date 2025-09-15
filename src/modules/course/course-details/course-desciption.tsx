export function CourseDescription({ content }: { content: string }) {
  return (
    <div className="grid gap-6">
      <h2 className="text-popover-foreground text-2xl font-semibold">
        About this course
      </h2>
      <p className="text-muted-foreground">{content}</p>
    </div>
  )
}
