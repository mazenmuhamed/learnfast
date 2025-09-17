import Link from 'next/link'
import { Settings } from 'lucide-react'

import { HydrateClient, prefetch, trpc } from '@/trpc/server'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

import { Logo } from '@/modules/components/logo'

import { UserMenu } from './user-menu'
import { Searchbar } from './searchbar'
import { UpgradeButton } from './upgrade-button'
import { NotificationButton } from './notification-button'
import { ActionTooltip } from '../action-tooltip'

export async function MainHeader() {
  prefetch(trpc.user.me.queryOptions())

  return (
    <header className="bg-background sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14">
      <div className="flex items-center gap-2">
        <ActionTooltip tooltip="CTRL + B">
          <SidebarTrigger className="-ml-1" />
        </ActionTooltip>
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-5"
        />
        <Logo href="/home" className="sm:hidden" />
        <Searchbar />
      </div>
      <div className="flex items-center gap-3 sm:gap-5">
        <UpgradeButton className="max-sm:hidden" />
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-5 max-sm:hidden"
        />
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="icon"
            variant="ghost"
            aria-label="Open settings"
            className="size-8 max-sm:hidden"
          >
            <Link href="/settings">
              <Settings aria-hidden="true" className="size-[18px]" />
            </Link>
          </Button>
          <NotificationButton />
        </div>
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-5"
        />
        <HydrateClient>
          <UserMenu />
        </HydrateClient>
      </div>
    </header>
  )
}
