import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

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
