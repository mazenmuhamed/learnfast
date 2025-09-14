'use client'

import { useSidebar } from '@/components/ui/sidebar'

import { GoalsBox } from '@/modules/widgets/goals-box'
import { StreakBox } from '@/modules/widgets/streak-box'
import { LeagueBox } from '@/modules/widgets/league-box'
import { EventsBox } from '@/modules/widgets/events-box'
import { Resources } from '@/modules/widgets/resources'
import { UpgradeBox } from '@/modules/widgets/upgrade-box'
import { SkillGraphBox } from '@/modules/widgets/skill-graph-box'
import { BulletinBoard } from '@/modules/widgets/bulletin-board'
import { ContinueLearning } from '@/modules/widgets/continue-learning'
import { useBreakPoint } from '@/hooks/use-break-point'

export function HomeView() {
  const { state } = useSidebar()
  const isTabletScreen = useBreakPoint(1110)

  return (
    <main
      data-sidebar-collapsed={state === 'collapsed' ? true : undefined}
      className="grid grid-cols-[1.5fr_0.8fr] items-baseline gap-8 data-[sidebar-collapsed=true]:gap-14 max-[1110]:grid-cols-1 lg:data-[sidebar-collapsed=true]:gap-10"
    >
      <div className="grid gap-16">
        <ContinueLearning />
        <BulletinBoard />
        <EventsBox />
        {isTabletScreen ? null : <Resources />}
      </div>
      <div className="grid gap-6">
        <GoalsBox />
        <UpgradeBox />
        <StreakBox />
        <LeagueBox />
        <SkillGraphBox />
        {isTabletScreen ? <Resources /> : null}
      </div>
    </main>
  )
}
