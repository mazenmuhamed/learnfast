'use client'

import { cn } from '@/lib/utils'
import { useTabsQuery } from '@/hooks/use-tabs-query'

import { Button } from '@/components/ui/button'

type Props = {
  items: { label: string; value: string; disabled?: boolean }[]
}

export function Tabs({ items }: Props) {
  const { activeTab, handleTabChange } = useTabsQuery()

  return (
    <div className="flex items-center gap-2">
      {items.map(item => {
        const isActive = activeTab === item.value

        return (
          <Button
            variant="outline"
            key={item.value}
            disabled={item.disabled}
            onClick={() => handleTabChange(item.value)}
            className={cn(
              'px-3',
              isActive && '!bg-primary/10 !text-primary !border-primary',
            )}
          >
            {item.label}
          </Button>
        )
      })}
    </div>
  )
}
