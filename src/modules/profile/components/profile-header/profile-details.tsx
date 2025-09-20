import { Ellipsis, Share2 } from 'lucide-react'

import { UserOutput } from '@/lib/types'

import { Button } from '@/components/ui/button'

import { AppTabs } from '@/modules/components/app-tabs'
import { ActionTooltip } from '@/modules/components/action-tooltip'

const tabs = [
  { label: 'About', href: '/profile' },
  { label: 'Posts', href: '/profile?tab=posts', disabled: true },
  { label: 'Skills', href: '/profile?tab=skills', disabled: true },
  { label: 'Projects', href: '/profile?tab=projects', disabled: true },
]

export function ProfileDetails({ user }: { user: UserOutput }) {
  return (
    <div className="grid w-full gap-6">
      <div className="flex items-center justify-between gap-5 max-md:flex-col">
        <div className="grid gap-3 max-md:items-center">
          <h1 className="text-popover-foreground text-3xl font-semibold max-md:text-center">
            {user.name}
          </h1>
          <p className="text-muted-foreground text-sm max-md:text-center">
            {user.bio ||
              'Add a bio to your profile to tell people more about yourself.'}
          </p>
        </div>
        <div className="grid gap-3 max-md:w-full max-md:gap-4">
          <div className="flex items-center gap-3">
            <Button className="h-10 rounded-lg text-base max-md:grow">
              Edit profile
            </Button>
            <ActionTooltip tooltip="Share">
              <Button
                size="icon"
                variant="ghost"
                className="size-11 rounded-xl"
              >
                <Share2 className="size-[22px]" />
              </Button>
            </ActionTooltip>
            <ActionTooltip tooltip="More">
              <Button
                size="icon"
                variant="ghost"
                className="size-11 rounded-xl"
              >
                <Ellipsis className="size-[22px]" />
              </Button>
            </ActionTooltip>
          </div>
          <div className="flex items-center gap-2 [_&>button]:h-5 [_&>button]:opacity-80 [_&>button]:hover:opacity-100">
            <Button variant="link" className="p-0 hover:no-underline">
              {user.followers.length} followers
            </Button>
            <span className="text-muted-foreground">·</span>
            <Button variant="link" className="p-0 hover:no-underline">
              {user.followings.length} following
            </Button>
            <span className="text-muted-foreground">·</span>
            <Button variant="link" className="p-0 hover:no-underline">
              0 posts
            </Button>
          </div>
        </div>
      </div>
      <AppTabs items={tabs} className="max-md:[_&>button]:grow" />
    </div>
  )
}
