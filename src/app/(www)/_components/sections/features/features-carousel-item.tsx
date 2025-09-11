import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CarouselItem } from '@/components/ui/carousel'

type Props = {
  name: string
  jobTitle: string
  children: React.ReactNode
}

export function FeaturesCarouselItem({ name, jobTitle, children }: Props) {
  return (
    <CarouselItem className="text-popover-foreground flex w-full justify-between py-4 text-2xl max-lg:flex-col max-lg:gap-6 lg:h-96 lg:text-5xl">
      <div className="select-none lg:max-w-[60%]">{children}</div>
      <div className="flex items-center gap-4 lg:-translate-x-2/4 lg:self-end">
        <Avatar className="size-10 lg:size-12">
          <AvatarImage src={`https://avatar.vercel.sh/${name}`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-base font-medium md:text-lg">{name}</p>
          <p className="text-muted-foreground text-sm">{jobTitle}</p>
        </div>
      </div>
    </CarouselItem>
  )
}
