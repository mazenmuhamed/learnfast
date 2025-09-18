import Link from 'next/link'
import { useState } from 'react'
import { Monitor, Moon, Paintbrush, Settings, Sun, User2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { UserOutput } from '@/lib/types'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { BorderBeam } from '@/app/(www)/(landing)/_components/animations/border-beam'

import { UpgradeButton } from './upgrade-button'

type Props = {
  user: UserOutput
  theme: string | undefined
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  handleLogout: () => Promise<void>
}

export function UserMobileNavigation({
  user,
  theme,
  setTheme,
  handleLogout,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="cursor-pointer overflow-hidden rounded-full">
        <Avatar className="rounded-full">
          <AvatarImage src={user.image || ''} alt={user.name} />
          <AvatarFallback>
            <Skeleton className="size-full" />
          </AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="h-full gap-0">
        <SheetHeader>
          <SheetTitle>My Account</SheetTitle>
          <SheetDescription>
            Manage your app settings and personal information
          </SheetDescription>
          <div className="flex items-center gap-3 px-1 pt-4">
            <Avatar className="size-9 rounded-lg">
              <AvatarImage src={user.image || ''} alt={user.name} />
              <AvatarFallback className="rounded-lg">
                <Skeleton className="size-full" />
              </AvatarFallback>
            </Avatar>
            <div className="grid">
              <span className="tu truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </SheetHeader>
        <div className="grid px-3 [&>a]:justify-start">
          <Button asChild variant="ghost">
            <Link href="/profile" onClick={() => setOpen(false)}>
              <User2 />
              Account
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/settings/account" onClick={() => setOpen(false)}>
              <Settings />
              Settings
            </Link>
          </Button>
        </div>
        <Separator className="mx-auto my-3 !w-[90%]" />
        <div className="px-6">
          <div className="flex items-center justify-between py-1 hover:!bg-transparent focus:!bg-transparent">
            <div className="flex items-center gap-2">
              <Paintbrush className="size-4" />
              <span className="text-sm font-medium">Appearance</span>
            </div>
            <div className="dark:bg-input/50 bg-secondary/60 flex items-center space-x-1 rounded-full p-1">
              <button
                onClick={() => setTheme('light')}
                className={cn(
                  'flex size-6 cursor-pointer items-center justify-center rounded-full',
                  theme === 'light' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
              >
                <Sun className="size-4" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={cn(
                  'flex size-6 cursor-pointer items-center justify-center rounded-full',
                  theme === 'dark' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
              >
                <Moon className="size-4" />
              </button>
              <button
                onClick={() => setTheme('system')}
                className={cn(
                  'flex size-6 cursor-pointer items-center justify-center rounded-full',
                  theme === 'system' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
              >
                <Monitor className="size-3" />
              </button>
            </div>
          </div>
        </div>
        <SheetFooter>
          <div className="mt-auto">
            <div className="bg-secondary/20 dark:bg-input/30 relative grid rounded-xl border p-3">
              <p className="text-[15px]">Upgrade to Pro</p>
              <span className="text-muted-foreground text-[13px]">
                To access all features and priority support.
              </span>
              <UpgradeButton className="mt-4 h-9 w-full border">
                See our Plans
              </UpgradeButton>
              <BorderBeam />
            </div>
          </div>
          <Button variant="destructive" onClick={handleLogout}>
            Sign out
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
