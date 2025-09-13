'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import {
  navigationMainItems,
  navigationGrowItems,
  navigationLearnItems,
} from '@/lib/constants'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar'

import { Logo } from '@/modules/components/logo'
import { SubNav } from './sub-nav'
import { MainNav } from './main-nav'
import { HelpButton } from './help-button'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon" className="!items-center" {...props}>
      <SidebarHeader className="mt-2 px-3">
        <Logo
          href="/home"
          className={cn(
            state === 'collapsed' && '[&_img]:size-10 [&_span]:hidden',
          )}
        />
      </SidebarHeader>
      <SidebarContent className="-space-y-2">
        <MainNav items={navigationMainItems} />
        <SidebarSeparator
          className={cn(
            'mx-auto',
            state === 'collapsed' ? '!w-[50%]' : '!w-[85%]',
          )}
        />
        <SubNav label="Learn" items={navigationLearnItems} />
        <SidebarSeparator
          className={cn(
            'mx-auto',
            state === 'collapsed' ? '!w-[50%]' : '!w-[85%]',
          )}
        />
        <SubNav label="Grow" items={navigationGrowItems} />
      </SidebarContent>
      <SidebarFooter>
        <HelpButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
