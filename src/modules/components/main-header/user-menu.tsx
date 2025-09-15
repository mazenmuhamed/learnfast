'use client'

import { User } from 'better-auth'
import { toast } from 'sonner'
import { useTheme } from 'next-themes'
import { DoorOpen, LayoutGrid, Monitor, Moon, Sun, User2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { authClient } from '@/lib/auth-client'

import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ActionTooltip } from '../action-tooltip'

export function UserMenu({ user }: { user: User }) {
  const { theme, setTheme } = useTheme()

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/'
        },
        onError: error => {
          console.log('[LOGOUT_ERROR]', error)
          toast.error('Something went wrong.')
        },
      },
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer overflow-hidden rounded-full">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user.image || ''} alt={user.name} />
          <AvatarFallback className="rounded-lg">
            <Skeleton className="size-full" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={4}
        className="min-w-56 rounded-2xl border-none shadow-none drop-shadow-xl"
      >
        <DropdownMenuLabel className="px-2 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-9 rounded-lg">
              <AvatarImage src={user.image || ''} alt={user.name} />
              <AvatarFallback className="rounded-lg">
                <Skeleton className="size-full" />
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center justify-between py-1 hover:!bg-transparent focus:!bg-transparent">
            <span className="text-sm font-medium">Appearance</span>
            <div className="bg-input/60 flex items-center space-x-1 rounded-full p-1.5">
              <ActionTooltip
                asChild={false}
                tooltip="Light"
                onClick={() => setTheme('light')}
                className={cn(
                  'flex size-7 cursor-pointer items-center justify-center rounded-full',
                  theme === 'light' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
              >
                <Sun className="size-5" />
              </ActionTooltip>
              <ActionTooltip
                asChild={false}
                tooltip="Dark"
                onClick={() => setTheme('dark')}
                className={cn(
                  'flex size-7 cursor-pointer items-center justify-center rounded-full',
                  theme === 'dark' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
              >
                <Moon className="size-5" />
              </ActionTooltip>
              <ActionTooltip
                asChild={false}
                tooltip="System"
                onClick={() => setTheme('system')}
                className={cn(
                  'flex size-7 cursor-pointer items-center justify-center rounded-full',
                  theme === 'system' &&
                    'bg-primary [&_svg]:!text-primary-foreground',
                )}
              >
                <Monitor className="size-5" />
              </ActionTooltip>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-1">
          <DropdownMenuItem>
            <LayoutGrid />
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User2 />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={handleLogout}>
            <DoorOpen />
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
