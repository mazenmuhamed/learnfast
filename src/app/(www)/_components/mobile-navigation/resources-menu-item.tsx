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

import { Separator } from '@/components/ui/separator'

import { MenuItem, MobileNavigationMenu } from './mobile-navigation'

export function ResourcesMenuItem() {
  return (
    <MobileNavigationMenu value="item-1" title="Resources">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground my-2 text-xs font-semibold uppercase">
          Blog
        </p>
        <MenuItem href="/" label="Uxcel Blog" icon={MessageCircleMore} />
        <MenuItem href="/" label="Learner Stories" icon={User2} />
        <MenuItem href="/" label="Customer Stories" icon={UsersRound} />
        <MenuItem href="/" label="Write for US" icon={Pencil} />
        <Separator className="my-2" />
        <p className="text-muted-foreground my-2 text-xs font-semibold uppercase">
          Company
        </p>
        <MenuItem href="/" label="About US" icon={MousePointerClick} />
        <MenuItem href="/" label="Impact Report" icon={Rocket} />
        <MenuItem href="/" label="Wall of Love" icon={Heart} />
        <MenuItem href="/" label="What's New" icon={BellDot} />
        <MenuItem href="/" label="Product Roadmap" icon={LineSquiggle} />
        <MenuItem href="/" label="Help Center" icon={BadgeQuestionMark} />
        <Separator className="my-2" />
        <p className="text-muted-foreground my-2 text-xs font-semibold uppercase">
          Career paths
        </p>
        <MenuItem href="/" label="Product Designer" />
        <MenuItem href="/" label="UI/UX Designer" />
        <MenuItem href="/" label="Web Developer" />
        <MenuItem href="/" label="Data Analyst" />
        <MenuItem href="/" label="Software Engineer" />
        <MenuItem href="/" label="Machine Learning Engineer" />
        <Separator className="my-2" />
        <p className="text-muted-foreground my-2 text-xs font-semibold uppercase">
          More
        </p>
        <MenuItem
          href="/"
          label="Uxcel for Universities"
          icon={GraduationCap}
        />
        <MenuItem href="/" label="Uxcel Cares" icon={Cross} />
        <MenuItem href="/" label="Affiliate Program" icon={BadgeDollarSign} />
        <MenuItem href="/" label="Gift Membership" icon={Gift} />
      </div>
    </MobileNavigationMenu>
  )
}
