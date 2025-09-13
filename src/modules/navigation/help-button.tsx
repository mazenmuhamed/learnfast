'use client'

import { useState } from 'react'
import { BadgeQuestionMark } from 'lucide-react'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { ShortcutsDialog } from '../components/dialogs/shortcuts-dialog'
import { useKeyboardShortcut } from '@/hooks/use-keyboard-shortcut'

export function HelpButton() {
  const [openDialog, setOpenDialog] = useState(false)

  useKeyboardShortcut('ctrl', '/', () => setOpenDialog(true))

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
      <ShortcutsDialog open={openDialog} onOpenChange={setOpenDialog} />
    </>
  )
}
