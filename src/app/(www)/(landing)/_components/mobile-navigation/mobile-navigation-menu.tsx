'use client'

import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function MobileNavigationMenu({
  children,
  value,
  title,
}: {
  children: React.ReactNode
  value: string
  title: string
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger className="cursor-pointer border-b-0 py-2 hover:no-underline">
          <span className="text-base">{title}</span>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function MenuItem({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon?: LucideIcon
}) {
  return (
    <Link href={href} className="flex h-8 items-center gap-2 text-[15px]">
      {Icon && <Icon className="size-[18px]" />}
      {label}
    </Link>
  )
}
