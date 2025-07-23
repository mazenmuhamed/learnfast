import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CarouselItem } from '@/components/ui/carousel'

type Props = {
  name: string
  jobTitle: string
  children: React.ReactNode
}

export function FeaturesCarouselItem({ name, jobTitle, children }: Props) {
  return (
    <CarouselItem className="text-popover-foreground flex h-96 w-full justify-between py-4 text-5xl">
      <div className="max-w-[60%]">{children}</div>
      <div className="flex -translate-x-2/4 items-center gap-4 self-end">
        <Avatar className="size-12">
          <AvatarImage src={`https://avatar.vercel.sh/${name}`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-lg font-medium">{name}</p>
          <p className="text-muted-foreground text-sm">{jobTitle}</p>
        </div>
      </div>
    </CarouselItem>
  )
}
