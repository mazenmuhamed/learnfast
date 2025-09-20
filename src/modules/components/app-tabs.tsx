'use client'

import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

type Props = {
  items: { label: string; href: string; disabled?: boolean }[]
  defaultActiveTab?: string
  className?: string
}

export function AppTabs({ items, defaultActiveTab, className }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {items.map((item, index) => {
        const isActive =
          pathname === item.href ||
          item.href === `${pathname}/${defaultActiveTab}`

        return (
          <Button
            variant="outline"
            key={index}
            disabled={item.disabled}
            onClick={() => router.push(item.href)}
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
