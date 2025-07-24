import Image from 'next/image'

import type { Testimonial } from './data'

import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

type Props = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: Props) {
  return (
    <Card className="bg-popover text-popover-foreground gap-4 rounded-3xl border-none shadow-none">
      {testimonial.badge && (
        <CardHeader className="flex items-center justify-between">
          <Badge className="bg-green-300/30 py-0.5 text-xs font-semibold text-green-600 uppercase">
            {testimonial.badge}
          </Badge>
        </CardHeader>
      )}
      <CardContent>
        <p>{testimonial.content}</p>
        {testimonial.hasRating && (
          <Image
            src="/icons/stars.svg"
            alt="Rating stars"
            width={130}
            height={30}
            className="mt-4"
          />
        )}
      </CardContent>
      <CardFooter className="flex items-center gap-4 pt-1">
        <Avatar className="size-11">
          <AvatarImage
            src={`https://avatar.vercel.sh/${testimonial.name}`}
            alt={testimonial.name}
          />
          <AvatarFallback>{testimonial.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{testimonial.name}</span>
          <span className="text-muted-foreground text-sm">
            {testimonial.title}
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
