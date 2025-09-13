import type { Metadata } from 'next'

import { MainLayout } from '@/modules/layouts/main-layout'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <ThemeProvider
        storageKey="app-theme"
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </MainLayout>
  )
}
