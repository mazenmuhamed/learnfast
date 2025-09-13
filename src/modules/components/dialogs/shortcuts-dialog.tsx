import {
  EyeClosed,
  Keyboard,
  PencilRuler,
  Search,
  Settings,
  Sidebar,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'

import { AppDialog } from '../app-dialog'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ShortcutsDialog({ open, onOpenChange }: Props) {
  return (
    <AppDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Keyboard Shortcuts"
      description="Use these keyboard shortcuts to navigate the app quickly and efficiently."
    >
      <div className="grid gap-4 py-4">
        <ShortcutItem label="Search" command="K" icon={Search} />
        <ShortcutItem label="Open Settings" command="S" icon={Settings} />
        <ShortcutItem label="Open Shortcuts" command="/" icon={Keyboard} />
        <ShortcutItem label="Toggle Sidebar" command="B" icon={Sidebar} />
        <ShortcutItem
          singleKey
          label="Close Popups"
          command="ESC"
          icon={EyeClosed}
        />
      </div>
      <DialogFooter className="mt-6">
        <Button variant="outline" disabled className="w-full">
          <PencilRuler />
          Customize Shortcuts (Coming Soon)
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
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Icon className="size-[18px]" />
        <span className="text-sm font-medium">{label}</span>
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
