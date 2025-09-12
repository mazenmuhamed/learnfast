import type { Metadata } from 'next'

import { LandingPageView } from './views/landing-page-view'

export const metadata: Metadata = {
  title: 'Learn & Improve Your Skills - LearnFast',
  description:
    'Be the best version of yourself with LearnFast. Explore our resources to learn and improve your skills.',
}

export default function HomePage() {
  return <LandingPageView />
}
