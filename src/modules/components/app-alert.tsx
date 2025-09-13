'use client'

import { useMemo } from 'react'
import { CircleCheck, CircleAlert, TriangleAlert } from 'lucide-react'

import { cn } from '@/lib/utils'

type Props = {
  status: 'success' | 'error' | 'warning'
  content: string
}

export function AppAlert({ status, content }: Props) {
  const Icon = useMemo(() => {
    switch (status) {
      case 'success':
        return CircleCheck
      case 'error':
        return TriangleAlert
      case 'warning':
        return CircleAlert
      default:
        return CircleCheck
    }
  }, [status])

  return (
    <div
      className={cn(
        'flex items-start rounded-md border px-4 py-3',
        status === 'success' &&
          'border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:border-emerald-500/50 dark:bg-emerald-950/10 dark:text-emerald-400',
        status === 'error' &&
          'border-red-500/50 bg-red-50 text-red-600 dark:border-red-500/50 dark:bg-red-950/10 dark:text-red-400',
        status === 'warning' &&
          'border-amber-500/50 bg-amber-50 text-amber-600 dark:border-amber-500/50 dark:bg-amber-950/10 dark:text-amber-400',
      )}
    >
      <Icon className="me-2 inline-flex size-5 opacity-80" aria-hidden="true" />
      <p className="text-sm">{content}</p>
    </div>
  )
}
