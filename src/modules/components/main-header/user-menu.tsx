'use client'

import { toast } from 'sonner'
import { useTheme } from 'next-themes'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'
import { authClient } from '@/lib/auth-client'
import { useBreakPoint } from '@/hooks/use-break-point'
import { SHORTCUTS_STORAGE_KEY } from '@/lib/constants'

import { Skeleton } from '@/components/ui/skeleton'

import { UserMobileNavigation } from './user-mobile-navigation'
import { UserDesktopNavigation } from './user-desktop-navigation'

export function UserMenu() {
  return (
    <ErrorBoundary fallback={<Skeleton className="size-8 rounded-full" />}>
      <Suspense fallback={<Skeleton className="size-8 rounded-full" />}>
        <UserMenuSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

function UserMenuSuspense() {
  const trpc = useTRPC()
  const { data: user } = useSuspenseQuery(trpc.user.me.queryOptions())

  const isMobile = useBreakPoint()
  const { theme, setTheme } = useTheme()

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/'
          localStorage.removeItem(SHORTCUTS_STORAGE_KEY)
        },
        onError: error => {
          console.log('[LOGOUT_ERROR]', error)
          toast.error('Something went wrong.')
        },
      },
    })
  }

  return (
    <>
      {isMobile ? (
        <UserMobileNavigation
          user={user}
          theme={theme}
          setTheme={setTheme}
          handleLogout={handleLogout}
        />
      ) : (
        <UserDesktopNavigation
          user={user}
          theme={theme}
          setTheme={setTheme}
          handleLogout={handleLogout}
        />
      )}
    </>
  )
}
