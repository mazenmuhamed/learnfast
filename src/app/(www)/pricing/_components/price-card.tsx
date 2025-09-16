import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { BorderBeam } from '@/app/(www)/(landing)/_components/animations/border-beam'

type Props = {
  type: 'Starter' | 'Pro'
  price: number | string
  note: string
  description: string
  features: string[]
  isCurrentPlan?: boolean
  isYearlyActive?: boolean
}

export function PriceCard({
  type,
  price,
  note,
  description,
  features,
  isCurrentPlan,
  isYearlyActive,
}: Props) {
  const isSepratedNote = note.includes(' | ')
  const firstNote = isSepratedNote && note.split(' | ')[0]
  const secondNote = isSepratedNote && note.split(' | ')[1]

  return (
    <Card
      className={cn(
        'bg-input/30 relative w-full max-w-96 rounded-3xl p-8 lg:w-96',
        type === 'Pro' && 'bg-primary/15 text-primary-foreground',
      )}
    >
      {type === 'Pro' && <BorderBeam size={200} />}
      <CardHeader className="p-0">
        <CardTitle>
          <div className="grid gap-5">
            <span className="font-semibold">{type}</span>
            <span
              className={cn(
                'text-5xl font-bold',
                type === 'Starter' && 'text-popover-foreground',
              )}
            >
              {price}
            </span>
          </div>
        </CardTitle>
        <CardDescription
          className={cn(
            'mt-1.5 text-base',
            type === 'Pro' && 'text-primary-foreground',
          )}
        >
          {note.includes(' | ') ? (
            <>
              <span className="text-primary font-medium">{firstNote}</span>
              <span> | {secondNote}</span>
            </>
          ) : (
            note
          )}
        </CardDescription>
        {isYearlyActive && (
          <CardAction>
            <Badge className="rounded-full text-[14px]">Most Popular</Badge>
          </CardAction>
        )}
      </CardHeader>
      <Button
        size="lg"
        variant={type === 'Pro' ? 'default' : 'secondary'}
        disabled={isCurrentPlan}
        className="h-12 rounded-xl text-base"
      >
        {isCurrentPlan ? 'Current Plan' : 'Upgrade to Pro'}
      </Button>
      <CardContent className="mt-1 p-0">
        <div className="flex flex-col gap-7">
          <p
            className={cn(
              'text-[17px]',
              type === 'Starter' && 'text-muted-foreground',
            )}
          >
            {description}
          </p>
          <ul className="grid gap-4">
            {features.map(feature => (
              <li key={feature} className="flex items-center gap-3">
                <div className="bg-secondary text-secondary-foreground flex size-5 min-h-5 min-w-5 items-center justify-center rounded-full">
                  <Check className="size-[15px]" />
                </div>
                <span
                  className={cn(type === 'Starter' && 'text-muted-foreground')}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
