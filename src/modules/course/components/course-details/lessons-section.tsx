import { Lesson } from '@/lib/generated/prisma'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

export function LessonsSection({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="grid">
      <div className="mb-6 grid gap-3">
        <h2 className="text-popover-foreground text-2xl font-semibold">
          Content
        </h2>
        <div className="text-muted-foreground flex items-center gap-2 text-[15px]">
          <p>
            {lessons.length} {lessons.length === 1 ? 'lesson' : 'lessons'}
          </p>
          <span className="translate-y-px">•</span>
          <p>3 levels</p>
          <span className="translate-y-px">•</span>
          <p>Certificate of completion</p>
        </div>
      </div>
      <Separator />
      <div className="grid gap-5 divide-y">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="grid gap-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground flex size-7 min-h-7 min-w-7 items-center justify-center rounded-full">
                  {index + 1}
                </div>
                <h3 className="text-popover-foreground text-base font-medium sm:text-lg">
                  {lesson.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <Progress value={0} className="w-14" />
                <p className="text-muted-foreground min-w-fit space-x-1 text-sm font-medium">
                  0%
                </p>
              </div>
            </div>
            <p>{lesson.description}</p>
            <div className="flex justify-end">
              <Button
                variant="ghost"
                className="text-primary bg-primary/10 hover:text-primary"
              >
                Start lesson
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
