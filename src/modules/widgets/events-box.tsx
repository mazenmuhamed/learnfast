import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, Clock, Users2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const data = [
  {
    category: 'Free event',
    image: '/images/users/user-event-1.jpg',
    title: 'Webinar | Journey Mapping: What Goes Wrong and How to Get It Right',
    description:
      '🕒 1 hour | 🎯 For product & UX professionals | 💬 Live Q&A included In this live webinar, you’ll explore the common pitfalls of customer journey',
    date: 'Aug 20',
    time: '5:00 PM',
    going: 825,
  },
  {
    category: 'Pro event',
    image: '/images/users/user-event-2.jpg',
    title: 'Workshop | Practicing PM–UX Alignment Across the Product Lifecycle',
    description:
      '🕒 90 minutes | 🎯 For PM & UX pros | 👥 Limited to 50 seats | 💵 $15 Uxcel Pro / $50 Standard Product managers and UX designers often share',
    date: 'Aug 23',
    time: '6:00 PM',
  },
]

export function EventsBox() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <Button asChild variant="ghost" size="sm">
          <Link href="#">View all</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((event, index) => (
          <Card
            key={index}
            className="card-hover group min-h-fit gap-3 rounded-2xl pt-0"
          >
            <div className="relative m-1.5 min-h-[21rem] w-auto overflow-hidden rounded-2xl border pb-0">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Badge
                variant="secondary"
                className="absolute top-4 left-4 z-10 font-medium"
              >
                {event.category}
              </Badge>
            </div>
            <CardContent className="-mt-2 px-4">
              <span className="text-muted-foreground text-[13px] font-semibold uppercase">
                Event
              </span>
              <div className="mt-2 grid gap-2">
                <h3 className="text-base font-semibold">{event.title}</h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">
                  {event.description}
                </p>
              </div>
            </CardContent>
            <CardFooter className="mt-auto px-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground text-sm">
                    {event.date}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground text-sm">
                    {event.time}
                  </span>
                </div>
                {event.going && (
                  <div className="flex items-center gap-1.5">
                    <Users2 className="text-muted-foreground size-4" />
                    <span className="text-muted-foreground text-sm">
                      {event.going} going
                    </span>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
