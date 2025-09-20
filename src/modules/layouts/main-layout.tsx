import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import { caller } from '@/trpc/server'

import { AppSidebar } from '@/modules/navigation/app-sidebar'
import { MainHeader } from '@/modules/components/main-header'

import { UpgradeBanner } from '../components/upgrade-banner'
import { UserStatusBanner } from '../profile/components/user-status-banner'
import { SetupProfileDialog } from '../profile/components/setup-profile-dialog'

export async function MainLayout({ children }: React.PropsWithChildren) {
  const user = await caller.user.me()

  // If user is not complete, show the setup profile dialog
  if (!user.name && !user.image) {
    return <SetupProfileDialog />
  }

  return (
    <SidebarProvider
      defaultOpen={false}
      style={
        {
          '--sidebar-width': '14rem',
          '--sidebar-width-mobile': '16rem',
          '--sidebar-width-icon': '3.3rem',
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <MainHeader />
        <UpgradeBanner />
        <UserStatusBanner />
        <main className="relative flex flex-1 p-4 pt-8">
          <div className="mx-auto w-full max-w-6xl p-4">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
