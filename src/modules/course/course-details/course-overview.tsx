import Image from 'next/image'
import { Award } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export function CourseOverview({
  cover,
  title,
}: {
  cover: string
  title: string
}) {
  return (
    <Card className="card-hover group max-h-fit gap-3 rounded-2xl pt-0">
      <div className="bg-secondary/80 dark:bg-input/40 relative m-1.5 flex min-h-64 w-auto items-center justify-center overflow-hidden rounded-2xl border pb-0">
        <Image
          src={cover}
          alt={title}
          width={150}
          height={400}
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="relative -mt-2 px-4">
        <div className="mt-2 grid gap-2">
          <div className="text-popover-foreground flex items-center gap-2">
            <Award className="size-5" />
            <h3 className="text-base font-semibold">
              Earn your course certificate
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={0} />
            <p className="text-muted-foreground min-w-fit space-x-1 text-sm font-medium">
              <span>0%</span>
              <span>Complete</span>
            </p>
          </div>{' '}
          <p className="text-muted-foreground my-1 line-clamp-2 text-sm">
            Complete the course to earn your certificate of completion and
            showcase your expertise.
          </p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto px-4">
        <Button className="w-full">Start course for free</Button>
      </CardFooter>
    </Card>
  )
}
