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
  useSidebar,
} from '@/components/ui/sidebar'

type Props = {
  label: string
  items: { title: string; url: string; icon: LucideIcon }[]
}

export function SubNav({ label, items }: Props) {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()

  function handleButtonClick() {
    if (!isMobile) return
    setOpenMobile(false)
  }

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
                  isActive={pathname.startsWith(item.url)}
                  className={cn(
                    pathname.startsWith(item.url)
                      ? '!font-semibold'
                      : 'opacity-80 transition-all hover:opacity-100',
                  )}
                >
                  <Link
                    href={item.url}
                    className={cn(
                      pathname.startsWith(item.url) && '!text-primary',
                    )}
                    onClick={handleButtonClick}
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
