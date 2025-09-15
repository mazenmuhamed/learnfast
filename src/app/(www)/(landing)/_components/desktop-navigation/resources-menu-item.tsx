import {
  Rocket,
  GraduationCap,
  BadgeDollarSign,
  Pencil,
  UsersRound,
  User2,
  MessageCircleMore,
  MousePointerClick,
  Heart,
  BellDot,
  LineSquiggle,
  BadgeQuestionMark,
  Cross,
  Gift,
} from 'lucide-react'

import { DesktopNavigationMenu, MenuItem } from './desktop-navigation-menu'

export function ResourcesMenuItems() {
  return (
    <DesktopNavigationMenu title="Resources">
      <div className="flex flex-1 flex-col">
        <h3 className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
          Blog
        </h3>
        <MenuItem href="/" label="LearnFast Blog" icon={MessageCircleMore} />
        <MenuItem href="/" label="Learner Stories" icon={User2} />
        <MenuItem href="/" label="Customer Stories" icon={UsersRound} />
        <MenuItem href="/" label="Write for US" icon={Pencil} />
      </div>
      <div className="bg-border mx-4 max-h-full w-px" />
      <div className="flex flex-1 flex-col">
        <h3 className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
          Company
        </h3>
        <MenuItem href="/" label="About US" icon={MousePointerClick} />
        <MenuItem href="/" label="Impact Report" icon={Rocket} />
        <MenuItem href="/" label="Wall of Love" icon={Heart} />
        <MenuItem href="/" label="What's New" icon={BellDot} />
        <MenuItem href="/" label="Product Roadmap" icon={LineSquiggle} />
        <MenuItem href="/" label="Help Center" icon={BadgeQuestionMark} />
      </div>
      <div className="bg-border mx-4 max-h-full w-px" />
      <div className="flex flex-1 flex-col">
        <h3 className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
          More
        </h3>
        <MenuItem
          href="/"
          label="LearnFast for Universities"
          icon={GraduationCap}
        />
        <MenuItem href="/" label="LearnFast Cares" icon={Cross} />
        <MenuItem href="/" label="Affiliate Program" icon={BadgeDollarSign} />
        <MenuItem href="/" label="Gift Membership" icon={Gift} />
      </div>
    </DesktopNavigationMenu>
  )
}
