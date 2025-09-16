import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

type Props = {
  bio: string
  avatar: string
  name: string
  role: string
}

export function InstructorSection({ bio, avatar, name, role }: Props) {
  return (
    <div className="grid gap-6">
      <h2 className="text-popover-foreground text-2xl font-semibold">
        Meet your course instructor
      </h2>
      <div className="grid gap-4 max-[1100px]:grid-cols-1 md:gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <Card className="card-hover group min-h-fit gap-3 rounded-2xl pt-0 max-lg:max-w-80">
          <div className="relative m-1.5 min-h-[20rem] w-auto overflow-hidden rounded-2xl border pb-0">
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardContent className="-mt-2 mb-2 px-4">
            <div className="mt-2 grid gap-2">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-muted-foreground line-clamp-2 text-[15px]">
                {role}
              </p>
            </div>
          </CardContent>
          <CardFooter className="mt-auto px-4">
            <Button size="lg" variant="outline" className="w-full text-base">
              View profile
            </Button>
          </CardFooter>
        </Card>
        <p className="text-[18px] leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}
