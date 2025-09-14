import type { Metadata } from 'next'

import { Separator } from '@/components/ui/separator'

import { Header } from './_components/sections/header'
import { Features } from './_components/sections/features'
import { CareerGrowth } from './_components/sections/career-growth'
import { Institutions } from './_components/sections/features/institutions'
import { CompaniesMarquee } from './_components/sections/companies-marquee'
import { FeaturesCarousel } from './_components/sections/features/features-carousel'
import { TrustedAndLove } from './_components/sections/trusted-and-love'
import { Testimonials } from './_components/sections/testimonials'
import { ScrollTopButton } from './_components/scroll-top-button'
import { Footer } from './_components/footer'

export const metadata: Metadata = {
  title: 'Learn & Improve Your Skills - LearnFast',
  description:
    'Be the best version of yourself with LearnFast. Explore our resources to learn and improve your skills.',
}

export default async function LandingPage() {
  return (
    <>
      <Header />
      <Features />
      <Institutions />
      <FeaturesCarousel />
      <Separator />
      <CareerGrowth />
      <TrustedAndLove />
      <CompaniesMarquee className="border-y-0 py-6 sm:py-4" />
      <Testimonials />
      <Footer />
      <ScrollTopButton yHeight={500} />
    </>
  )
}
