import { Gem } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { ShineBorder } from '@/app/(www)/_components/animations/shine-border'

export function UpgradeButton({ className }: { className?: string }) {
  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn('relative rounded-lg', className)}
    >
      <Gem />
      Upgrade
      <ShineBorder
        borderWidth={1.5}
        shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
      />
    </Button>
  )
}
