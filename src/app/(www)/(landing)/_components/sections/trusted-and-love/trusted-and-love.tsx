'use client'

import { Feedback } from './feedback'
import { JoinBox } from './join-box'
import { Videos } from './videos'

export function TrustedAndLove() {
  return (
    <section className="main-container flex flex-col items-center gap-20 pt-20">
      <JoinBox />
      <Feedback />
      <Videos />
    </section>
  )
}
