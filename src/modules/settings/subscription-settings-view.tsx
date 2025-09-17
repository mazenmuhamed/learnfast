import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function SubscriptionSettingsView() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h2 className="text-popover-foreground text-xl font-semibold">
          Current plan
        </h2>
        <p className="text-muted-foreground text-sm">
          Here’s a snapshot of your current subscription.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <p className="text-popover-foreground text-lg font-medium">
            LearnFast Starter
          </p>
          <p className="text-muted-foreground text-sm">Free</p>
        </div>
        <Button asChild size="sm">
          <Link href="/pricing">Change plan</Link>
        </Button>
      </div>
    </div>
  )
}
