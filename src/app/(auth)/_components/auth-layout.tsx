import { Logo } from '@/modules/components/logo'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-4">
      <Logo />
      {children}
    </main>
  )
}
