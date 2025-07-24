'use client'

import { Feedback } from './feedback'
import { G2Badges } from './g2-badges'
import { JoinBox } from './join-box'
import { Videos } from './vidoes'

export function TrustedAndLove() {
  return (
    <section className="main-container flex flex-col items-center gap-20 pt-20">
      <G2Badges />
      <JoinBox />
      <Feedback />
      <Videos />
    </section>
  )
}
