import Link from 'next/link'
import Image from 'next/image'
import {
  MenuIcon,
  User2,
  Users2,
  Clapperboard,
  TvMinimalPlay,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { ProductMenuItems } from './product-menu-items'
import { ResourcesMenuItem } from './resources-menu-item'
import { MenuItem, MobileNavigationMenu } from './mobile-navigation-menu'

export function MobileNavigation() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader className="space-y-2">
            <SheetTitle>
              <Link href="/" className="flex w-fit items-center gap-2">
                <Image
                  src="/brand/logo.svg"
                  alt="LearnFast Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto select-none dark:invert"
                  priority
                />
                <span className="text-xl font-semibold">LearnFast</span>
              </Link>
            </SheetTitle>
            <SheetDescription>
              Explore our resources, join our community, and start your learning
              journey today!
            </SheetDescription>
          </SheetHeader>
          <div className="flex h-full flex-col px-4">
            <ProductMenuItems />
            <MobileNavigationMenu value="item-2" title="Events">
              <div className="mt-2 flex flex-col gap-2">
                <MenuItem
                  href="/"
                  label="Upcoming Events"
                  icon={TvMinimalPlay}
                />
                <MenuItem href="/" label="Past Events" icon={Clapperboard} />
              </div>
            </MobileNavigationMenu>
            <ResourcesMenuItem />
            <MobileNavigationMenu value="item-2" title="Pricing">
              <div className="mt-2 flex flex-col gap-2">
                <MenuItem href="/" label="For Individuals" icon={User2} />
                <MenuItem href="/" label="For Teams" icon={Users2} />
              </div>
            </MobileNavigationMenu>
            <Link href="/" className="py-2 font-medium">
              For Teams
            </Link>
            <Separator className="my-4" />
            <div className="flex flex-col gap-2">
              <Button asChild variant="outline" className="text-[15px]">
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild className="text-[15px]">
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
