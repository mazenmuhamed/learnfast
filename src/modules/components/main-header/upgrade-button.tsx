import { Gem } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { ShineBorder } from '@/app/(www)/(landing)/_components/animations/shine-border'
import Link from 'next/link'

export function UpgradeButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className={cn('relative rounded-lg', className)}
    >
      <Link href="/pricing">
        <Gem />
        Upgrade
        <ShineBorder
          borderWidth={1.5}
          shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        />
      </Link>
    </Button>
  )
}
