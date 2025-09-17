'use client'

import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Props = {
  items: { label: string; href: string; disabled?: boolean }[]
}

export function AppTabs({ items }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2">
      {items.map((item, index) => (
        <Button
          variant="outline"
          key={index}
          disabled={item.disabled}
          onClick={() => router.push(item.href)}
          className={cn(
            'px-3',
            pathname === item.href &&
              '!bg-primary/10 !text-primary !border-primary',
          )}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}
