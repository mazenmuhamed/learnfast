'use client'

import { useState } from 'react'
import { Settings } from 'lucide-react'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { SettingsDialog } from '../components/dialogs/settings-dialog'

export function SettingsNav() {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Settings"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-fit"
            onClick={() => setOpenDialog(true)}
          >
            <Settings />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SettingsDialog open={openDialog} onOpenChange={setOpenDialog} />
    </>
  )
}
