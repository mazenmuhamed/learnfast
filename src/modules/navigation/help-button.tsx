'use client'

import { useState } from 'react'
import { BadgeQuestionMark } from 'lucide-react'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function HelpButton() {
  const [openDialog, setOpenDialog] = useState(false)

  console.log(openDialog)

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Help"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-fit"
            onClick={() => setOpenDialog(true)}
          >
            <BadgeQuestionMark />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  )
}
