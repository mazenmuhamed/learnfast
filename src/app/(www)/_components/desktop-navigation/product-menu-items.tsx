import Link from 'next/link'
import {
  Award,
  Rocket,
  ShieldUser,
  PencilRuler,
  ClipboardList,
  GraduationCap,
  BadgeDollarSign,
  BriefcaseBusiness,
} from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import { DesktopNavigationMenu, MenuItem } from './desktop-navigation'

export function ProductMenuItems() {
  return (
    <DesktopNavigationMenu title="Product" className="-translate-x-[28%]">
      <div className="flex flex-1 flex-col">
        <h3 className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
          Learn & practice
        </h3>
        <MenuItem href="/" label="Courses" icon={GraduationCap} />
        <MenuItem href="/" label="Skill Assessment" icon={ClipboardList} />
        <MenuItem href="/" label="Project Briefs" icon={PencilRuler} />
        <Separator className="my-2" />
        <MenuItem href="/" label="Impact Report" icon={Rocket} />
        <span className="text-muted-foreground mt-1 text-[13px]">
          LearnFast is a career investment that pays for itself 75x over
        </span>
      </div>
      <div className="bg-border mx-4 max-h-full w-px" />
      <div className="flex flex-1 flex-col">
        <h3 className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
          Grow
        </h3>
        <MenuItem href="/" label="Professional Certifications" icon={Award} />
        <MenuItem href="/" label="Professional Profile" icon={ShieldUser} />
        <MenuItem href="/" label="Salary Explorer" icon={BadgeDollarSign} />
        <MenuItem href="/" label="Design Job Board" icon={BriefcaseBusiness} />
      </div>
      <div className="bg-border mx-4 max-h-full w-px" />
      <div className="flex flex-1 flex-col">
        <h3 className="text-muted-foreground mb-3 text-xs font-semibold uppercase">
          Career paths
        </h3>
        <MenuItem href="/" label="Product Designer" />
        <MenuItem href="/" label="UI/UX Designer" />
        <MenuItem href="/" label="Web Developer" />
        <MenuItem href="/" label="Data Analyst" />
        <MenuItem href="/" label="Software Engineer" />
        <MenuItem href="/" label="Machine Learning Engineer" />
        <Separator className="my-2" />
        <div className="flex flex-col">
          <span className="mt-1 text-[13px] font-medium">
            Not sure where to start?
          </span>
          <span className="text-muted-foreground mt-1 text-xs">
            Take our{' '}
            <Link href="/" className="text-primary">
              Skill Assessment
            </Link>{' '}
            to find the best path for you.
          </span>
        </div>
      </div>
    </DesktopNavigationMenu>
  )
}
