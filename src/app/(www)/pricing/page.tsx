import type { Metadata } from 'next'

import { Navbar } from './_components/navbar'
import { Header } from './_components/header'
import { TeamPlan } from './_components/team-plan'
import { FAQs } from './_components/faqs'
import { ProfitSection } from './_components/profit-section'

export const metadata: Metadata = {
  title: 'Pricing - LearnFast',
  description:
    'Choose the perfect plan for you and start learning with LearnFast today.',
}

export default function PricingPage() {
  return (
    <main className="dark bg-background text-foreground flex min-h-svh flex-col gap-14 pb-20">
      <Navbar />
      <div className="flex flex-col items-center gap-20 max-[1000px]:gap-12">
        <Header />
        <TeamPlan />
        <ProfitSection />
        <FAQs />
      </div>
    </main>
  )
}
