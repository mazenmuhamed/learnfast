'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export function FeatureCards() {
  return (
    <ScrollArea>
      <div className="flex items-stretch justify-between gap-5">
        <FeatureCard
          image="/images/features/card-1.png"
          title="Designed to help you learn faster"
        />
        <FeatureCard
          image="/images/features/card-2.webp"
          title="Tailored for focused UX & AI skill development"
        />
        <FeatureCard
          image="/images/features/card-3.svg"
          title="Optimized for real career results"
        />
      </div>
      <ScrollBar orientation="horizontal" className="opacity-0" />
    </ScrollArea>
  )
}

function FeatureCard({ image, title }: { image: string; title: string }) {
  return (
    <Card className="bg-popover text-popover-foreground w-[26rem] cursor-pointer rounded-3xl border-none shadow-none">
      <CardContent>
        <div className="relative h-80 w-full">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 50vw, 33vw"
            className="size-auto object-contain"
          />
        </div>
      </CardContent>
      <CardFooter className="flex w-full items-center justify-between">
        <h3 className="max-w-[80%] text-xl font-semibold xl:text-2xl">
          {title}
        </h3>
        <Button size="icon" variant="secondary" className="rounded-full">
          <Plus />
        </Button>
      </CardFooter>
    </Card>
  )
}
