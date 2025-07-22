import Link from 'next/link'

import {
  Clapperboard,
  TvMinimalPlay,
  User2,
  Users2,
  type LucideIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { ProductMenuItems } from './product-menu-items'
import { ResourcesMenuItems } from './resources-menu-item'

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

export function DesktopNavigationMenu({
  title,
  children,
  className,
}: {
  title: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-8 px-2 text-base *:[svg]:size-3.5">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className={cn(
          'left-2/4 flex min-w-[800px] -translate-x-2/4 !rounded-xl border-none p-6 py-6',
          className,
        )}
      >
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export function MenuItem({
  href,
  label,
  className,
  icon: Icon,
}: {
  href: string
  icon?: LucideIcon
  label: string
  className?: string
}) {
  return (
    <NavigationMenuLink
      href={href}
      className={cn('-mx-2 rounded-lg py-2.5', className)}
    >
      <div className="flex items-center gap-2.5">
        {Icon && <Icon className="size-4" />}
        <span className="text-sm">{label}</span>
      </div>
    </NavigationMenuLink>
  )
}
