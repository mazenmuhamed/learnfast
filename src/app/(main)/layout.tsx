import { ThemeProvider } from '@/components/theme-provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="app-theme"
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
