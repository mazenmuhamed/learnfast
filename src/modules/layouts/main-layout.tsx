import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import { AppSidebar } from '@/modules/navigation/app-sidebar'
import { MainHeader } from '@/modules/components/main-header'

export function MainLayout({ children }: React.PropsWithChildren) {
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
        <main className="flex flex-1 p-4">
          <div className="mx-auto w-full max-w-6xl p-4">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
