'use client'

import { useState } from 'react'
import { BellIcon, Dot } from 'lucide-react'

import { useIsHover } from '@/hooks/use-is-hover'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

// TODO: Temp data, replace with real data later
const initialNotifications = [
  {
    id: 1,
    user: 'Chris Tompson',
    action: 'requested review on',
    target: 'PR #42: Feature implementation',
    timestamp: '15 minutes ago',
    unread: true,
  },
  {
    id: 2,
    user: 'Emma Davis',
    action: 'shared',
    target: 'New component library',
    timestamp: '45 minutes ago',
    unread: true,
  },
  {
    id: 3,
    user: 'James Wilson',
    action: 'assigned you to',
    target: 'API integration task',
    timestamp: '4 hours ago',
    unread: false,
  },
  {
    id: 4,
    user: 'Alex Morgan',
    action: 'replied to your comment in',
    target: 'Authentication flow',
    timestamp: '12 hours ago',
    unread: false,
  },
  {
    id: 5,
    user: 'Sarah Chen',
    action: 'commented on',
    target: 'Dashboard redesign',
    timestamp: '2 days ago',
    unread: false,
  },
  {
    id: 6,
    user: 'Miky Derya',
    action: 'mentioned you in',
    target: 'Origin UI open graph image',
    timestamp: '2 weeks ago',
    unread: false,
  },
]

export function NotificationButton() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const {
    isOpened,
    onOpenChange,
    containerRef,
    handleTriggerClick,
    onMouseEnter,
    onMouseLeave,
  } = useIsHover()

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({ ...notification, unread: false })),
    )
  }

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    )
  }

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <div ref={containerRef}>
      <Popover open={isOpened} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="size-8"
            onClick={handleTriggerClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-label="Open notifications"
          >
            <BellIcon aria-hidden="true" className="size-[18px]" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="min-w-96 -translate-x-4 p-1 drop-shadow-xl"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <div className="flex items-baseline justify-between gap-4 px-3 py-2">
            <div className="pt-1 text-sm font-semibold">Notifications</div>
            {unreadCount > 0 && (
              <button
                className="cursor-pointer text-xs font-medium hover:underline"
                onClick={handleMarkAllAsRead}
              >
                Mark all as read
              </button>
            )}
          </div>
          <Separator className="my-1.5" />
          {notifications.map(notification => (
            <div
              key={notification.id}
              className="hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors"
            >
              <div className="relative flex items-start gap-3 pe-3">
                <Avatar className="size-11">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${notification.user}`}
                    alt={notification.user}
                  />
                  <AvatarFallback>
                    {notification.user[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <button
                    className="text-foreground/80 text-left after:absolute after:inset-0"
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <span className="text-foreground font-medium hover:underline">
                      {notification.user}
                    </span>{' '}
                    {notification.action}{' '}
                    <span className="text-foreground font-medium hover:underline">
                      {notification.target}
                    </span>
                    .
                  </button>
                  <div className="text-muted-foreground text-xs">
                    {notification.timestamp}
                  </div>
                </div>
                {notification.unread && (
                  <div className="absolute end-0 self-center">
                    <Dot />
                  </div>
                )}
              </div>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
