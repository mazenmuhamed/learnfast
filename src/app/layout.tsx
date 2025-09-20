import type { Metadata } from 'next'
import { Outfit as FontSans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Toaster } from '@/components/ui/sonner'
import { TRPCReactProvider } from '@/trpc/client'

import './globals.css'

const font = FontSans({
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'LearnFast',
  description: 'LearnFast - Accelerate Your Learning Journey with us',
  keywords: [
    'LearnFast',
    'learning',
    'education',
    'knowledge',
    'skills',
    'personal development',
  ],
  authors: [{ name: 'Mazen' }],
  creator: 'Mazen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.variable}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
