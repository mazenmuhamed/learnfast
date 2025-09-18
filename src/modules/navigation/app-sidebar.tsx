'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { useBreakPoint } from '@/hooks/use-break-point'
import { useKeyboardShortcut } from '@/hooks/use-keyboard-shortcut'
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
  const router = useRouter()
  const isMobile = useBreakPoint()

  const { state } = useSidebar()

  useKeyboardShortcut('ctrl', 'h', () => router.push('/home'))
  useKeyboardShortcut('ctrl', 's', () => router.push('/saved/courses'))

  return (
    <Sidebar variant="sidebar" collapsible="icon" {...props}>
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
      {!isMobile && (
        <SidebarFooter>
          <HelpButton />
        </SidebarFooter>
      )}
      <SidebarRail />
    </Sidebar>
  )
}
