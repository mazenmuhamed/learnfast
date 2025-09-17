'use client'

import { useEffect, useState } from 'react'
import { BadgeQuestionMark } from 'lucide-react'

import { useKeyboardShortcut } from '@/hooks/use-keyboard-shortcut'
import { SHORTCUTS_STORAGE_KEY } from '@/lib/constants'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { ShortcutsDialog } from '../components/dialogs/shortcuts-dialog'

export function HelpButton() {
  const [openDialog, setOpenDialog] = useState(false)

  useKeyboardShortcut('ctrl', '/', () => setOpenDialog(true))

  // Shows shortcuts dialog automatically on first visit after 5 seconds
  useEffect(() => {
    const hasShowen = localStorage.getItem(SHORTCUTS_STORAGE_KEY)

    if (hasShowen) return

    const timeout = setTimeout(() => setOpenDialog(true), 5000)

    localStorage.setItem(SHORTCUTS_STORAGE_KEY, 'true')

    return () => clearTimeout(timeout)
  }, [])

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
