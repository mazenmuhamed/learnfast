import { useMemo, useState } from 'react'
import {
  BookMarked,
  EyeClosed,
  Keyboard,
  PencilRuler,
  Search,
  Settings,
  Sidebar,
  type LucideIcon,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'

import { AppDialog } from '../app-dialog'

const shortcuts = [
  {
    type: 'navigation',
    actions: [
      { label: 'Home', command: 'H', icon: Settings },
      { label: 'Bookmarks', command: 'S', icon: BookMarked },
    ],
  },
  {
    type: 'command',
    actions: [
      { label: 'Search', command: 'K', icon: Search },
      {
        label: 'Open shortcuts dialog',
        command: '/',
        icon: Keyboard,
      },
      { label: 'Toggle the sidebar', command: 'B', icon: Sidebar },
      {
        label: 'Close popups',
        command: 'ESC',
        icon: EyeClosed,
        singleKey: true,
      },
    ],
  },
]

export function ShortcutsDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [value, setValue] = useState('')

  const filteredShortcuts = useMemo(
    () =>
      shortcuts.filter(shortcut =>
        shortcut.actions.some(action =>
          action.label.toLowerCase().includes(value.toLowerCase()),
        ),
      ),
    [value],
  )

  return (
    <AppDialog
      open={open}
      onOpenChange={onOpenChange}
      onOpenAutoFocus={e => e.preventDefault()}
      title="Keyboard Shortcuts"
      description="Use these keyboard shortcuts to navigate the app quickly and efficiently."
      className="-mt-1 px-1"
    >
      <div className="py-2">
        <div className="relative w-full">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 transform" />
          <Input
            type="search"
            className="h-9 pl-9"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Search for shortcuts"
          />
        </div>
        <div className="grid gap-5 py-4">
          {filteredShortcuts.length === 0 ? (
            <p className="text-muted-foreground py-6 text-center text-sm">
              No shortcuts found.
            </p>
          ) : (
            filteredShortcuts.map((shortcut, index) => (
              <div key={index} className="grid gap-2">
                <h3 className="text-muted-foreground px-1 text-sm font-medium">
                  {shortcut.type === 'navigation' ? 'Navigation' : 'Commands'}
                </h3>
                {shortcut.actions.map((action, index) => (
                  <ShortcutItem key={index} {...action} />
                ))}
              </div>
            ))
          )}
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" disabled className="w-full">
          <PencilRuler />
          Customize Shortcuts{' '}
          <Badge variant="secondary" className="rounded-full py-0.5">
            <span className="text-xs font-medium">Pro</span>
          </Badge>
        </Button>
      </DialogFooter>
    </AppDialog>
  )
}

type ShortcutItemProps = {
  label: string
  command: string
  icon: LucideIcon
  singleKey?: boolean
}

function ShortcutItem({
  label,
  command,
  singleKey,
  icon: Icon,
}: ShortcutItemProps) {
  return (
    <div className="flex items-center justify-between px-1">
      <div className="flex items-center space-x-3">
        <Icon className="size-[18px]" />
        <span className="text-[15px] font-medium">{label}</span>
      </div>
      <p className="text-muted-foreground text-sm font-medium">
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-sm font-medium opacity-100 select-none">
          {singleKey ? (
            command
          ) : (
            <>
              <span className="text-xs">CTRL</span> + {command}
            </>
          )}
        </kbd>
      </p>
    </div>
  )
}
