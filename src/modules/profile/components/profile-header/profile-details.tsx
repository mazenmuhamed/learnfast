import { toast } from 'sonner'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCopyToClipboard } from 'usehooks-ts'
import {
  CalendarDays,
  CheckCircle2,
  Copy,
  Dot,
  Ellipsis,
  Settings,
  Share2,
  UserStar,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { UserOutput } from '@/lib/types'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { AppTabs } from '@/modules/components/app-tabs'
import { countries } from '@/modules/profile/data'
import { ActionTooltip } from '@/modules/components/action-tooltip'

import { EditProfileDialog } from '../edit-profile-dialog'

const tabs = [
  { label: 'About', href: '/profile' },
  { label: 'Posts', href: '/profile?tab=posts', disabled: true },
  { label: 'Skills', href: '/profile?tab=skills', disabled: true },
  { label: 'Projects', href: '/profile?tab=projects', disabled: true },
]

export function ProfileDetails({ user }: { user: UserOutput }) {
  const [open, setOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const [, copy] = useCopyToClipboard()

  const router = useRouter()

  function handleCopyProfileLink() {
    const profileLink = `${window.location.origin}/profile/${user.id}`
    copy(profileLink)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
        toast.success('Profile link copied to clipboard')
      })
      .catch(console.log)
  }

  const userCountry = useMemo(() => {
    if (!user.country) {
      return { name: '', flag: '' }
    }

    const countryIndex = countries.findIndex(c => c.label === user.country)
    const country = countries[countryIndex]

    return { name: country.label, flag: country.code.toLowerCase() }
  }, [user.country])

  console.log(userCountry)

  return (
    <>
      <div className="grid w-full gap-6">
        <div className="flex items-center justify-between gap-5 max-md:flex-col">
          <div className="grid gap-3 max-md:items-center">
            <h1 className="text-popover-foreground text-3xl font-semibold max-md:text-center">
              {user.name}{' '}
              {user.nickname && (
                <span className="text-muted-foreground">({user.nickname})</span>
              )}
            </h1>
            <div className="flex items-center gap-3">
              {user.country && (
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="text-muted-foreground size-[18px]" />
                    <p className="text-muted-foreground text-[15px] leading-none">
                      Joined{' '}
                      {new Date(user.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <Dot className="size-4" />
                  <div className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        'size-4 rounded',
                        `fi fi-${userCountry.flag}`,
                      )}
                    ></span>
                    <span className="text-muted-foreground text-[15px]">
                      {userCountry.name}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <p className="text-muted-foreground text-[15px] max-md:text-center">
              {user.bio ||
                'Add a bio to your profile to tell people more about yourself.'}
            </p>
          </div>
          <div className="grid gap-3 max-md:w-full max-md:gap-4">
            <div className="flex items-center gap-3">
              <Button
                className="h-10 rounded-lg text-base max-md:grow"
                onClick={() => setOpen(true)}
              >
                Edit profile
              </Button>
              <DropdownMenu>
                <ActionTooltip tooltip="Share">
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-11 rounded-xl"
                    >
                      <Share2 className="size-[22px]" />
                    </Button>
                  </DropdownMenuTrigger>
                </ActionTooltip>
                <DropdownMenuContent
                  align="end"
                  side="bottom"
                  className="min-w-56 rounded-xl"
                >
                  <DropdownMenuItem
                    className="rounded-lg"
                    onSelect={handleCopyProfileLink}
                  >
                    {isCopied ? <CheckCircle2 /> : <Copy />}
                    Copy profile link
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <ActionTooltip tooltip="More">
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-11 rounded-xl"
                    >
                      <Ellipsis className="size-[22px]" />
                    </Button>
                  </DropdownMenuTrigger>
                </ActionTooltip>
                <DropdownMenuContent
                  align="end"
                  side="bottom"
                  className="min-w-56 rounded-xl"
                >
                  <DropdownMenuItem
                    className="rounded-lg"
                    onSelect={() => router.push('/settings/account')}
                  >
                    <Settings />
                    Edit profile settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg" disabled>
                    <UserStar />
                    Become an instructor
                    <Badge
                      variant="secondary"
                      className="scale-90 rounded-full"
                    >
                      Soon
                    </Badge>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
      <EditProfileDialog user={user} open={open} onOpenChange={setOpen} />
    </>
  )
}
