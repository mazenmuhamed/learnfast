'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

type Props = {
  label: string
  items: { title: string; url: string; icon: LucideIcon }[]
}

export function SubNav({ label, items }: Props) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[13px] font-medium">
        {label}
      </SidebarGroupLabel>
      {items.map((item, index) => (
        <div key={index}>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={pathname === item.url}
                  className={cn(
                    pathname === item.url
                      ? '!font-semibold'
                      : 'opacity-80 transition-all hover:opacity-100',
                  )}
                >
                  <Link
                    href={item.url}
                    className={cn(pathname === item.url && 'text-primary')}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </div>
      ))}
    </SidebarGroup>
  )
}
