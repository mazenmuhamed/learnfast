import Link from 'next/link'

import { Clapperboard, TvMinimalPlay, User2, Users2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { ProductMenuItems } from './product-menu-items'
import { ResourcesMenuItems } from './resources-menu-item'
import { MenuItem } from './desktop-navigation-menu'

export function DesktopNavigation() {
  return (
    <>
      <NavigationMenu viewport={false} className="max-lg:hidden">
        <NavigationMenuList>
          <ProductMenuItems />
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-8 px-2 text-base *:[svg]:size-3.5">
              Events
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-2/4 flex min-w-68 -translate-x-2/4 !rounded-xl border-none">
              <div className="flex w-full flex-col">
                <MenuItem
                  href="/"
                  label="Upcoming Events"
                  icon={TvMinimalPlay}
                  className="-mx-0 w-full"
                />
                <MenuItem
                  href="/"
                  label="Past Events"
                  icon={Clapperboard}
                  className="-mx-0 w-full"
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <ResourcesMenuItems />
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-8 px-2 text-base *:[svg]:size-3.5">
              Pricing
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-2/4 flex min-w-68 -translate-x-2/4 !rounded-xl border-none">
              <div className="flex w-full flex-col">
                <MenuItem
                  href="/"
                  label="For Individuals"
                  icon={User2}
                  className="-mx-0 w-full"
                />
                <MenuItem
                  href="/"
                  label="For Teams"
                  icon={Users2}
                  className="-mx-0 w-full"
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        asChild
        variant="ghost"
        className="ml-1 px-2 text-base max-lg:hidden"
      >
        <Link href="/">For Teams</Link>
      </Button>
    </>
  )
}
