'use client'

import { TooltipContentProps } from '@radix-ui/react-tooltip'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

type Props = {
  asChild?: boolean
  className?: string
  tooltip: string
  children?: React.ReactNode
  side?: TooltipContentProps['side']
  contentClassName?: string
}

export function ActionTooltip({
  side = 'top',
  children,
  tooltip,
  asChild,
  className,
  contentClassName,
}: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild={asChild ?? true} className={className}>
        {children}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        className={cn('font-medium', contentClassName)}
      >
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
}
