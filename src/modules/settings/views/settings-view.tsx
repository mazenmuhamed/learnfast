'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useSuspenseQuery } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'
import { useTabsQuery } from '@/hooks/use-tabs-query'

import { Separator } from '@/components/ui/separator'

import { Tabs } from '@/modules/components/tabs'
import { PageHeader } from '@/modules/components/page-header'
import { LoadingIndicator } from '@/modules/components/loading-indicator'
import { ErrorBoundaryMessage } from '@/modules/components/error-boundary-message'

import { AccountSettings } from '../components/account-settings'
import { SubscriptionSettings } from '../components/subscription-settings'

export function SettingsView() {
  return (
    <ErrorBoundary fallback={<ErrorBoundaryMessage className="h-[75svh]" />}>
      <Suspense fallback={<LoadingIndicator className="h-[75svh]" />}>
        <SettingsViewSuspense />
      </Suspense>
    </ErrorBoundary>
  )
}

const tabs = [
  { label: 'Account', value: 'account' },
  { label: 'Subscription', value: 'subscription' },
]

function SettingsViewSuspense() {
  const { activeTab } = useTabsQuery({ defaultValue: 'account' })

  const trpc = useTRPC()
  const { data: user } = useSuspenseQuery(trpc.user.me.queryOptions())

  if (!activeTab) {
    return <LoadingIndicator className="h-[75svh]" />
  }

  return (
    <main className="mx-auto grid max-w-2xl gap-6">
      <div className="grid gap-5">
        <PageHeader
          title="Settings"
          description="Manage and update your LearnFast account info"
          className="sm:[&_p]:text-lg"
        />
        <Tabs items={tabs} />
      </div>
      <Separator />
      {activeTab === 'account' && <AccountSettings user={user} />}
      {activeTab === 'subscription' && <SubscriptionSettings />}
    </main>
  )
}
