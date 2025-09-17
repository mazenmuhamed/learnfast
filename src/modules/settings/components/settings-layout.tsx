import { AppTabs } from '@/modules/components/app-tabs'
import { Separator } from '@/components/ui/separator'
import { PageHeader } from '@/modules/components/page-header'

const tabs = [
  { label: 'Account', href: '/settings/account' },
  { label: 'Subscription', href: '/settings/subscription' },
]

export function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-2xl gap-6">
      <div className="grid gap-4">
        <PageHeader
          title="Settings"
          description="Manage and update your LearnFast account info"
          className="sm:[&_p]:text-lg"
        />
        <AppTabs items={tabs} />
      </div>
      <Separator />
      <div className="sm:py-2">{children}</div>
    </div>
  )
}
