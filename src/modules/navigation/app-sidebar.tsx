'use client'

import * as React from 'react'
import {
  BadgeDollarSign,
  Bookmark,
  BookOpen,
  Briefcase,
  FileBadge,
  GraduationCap,
  Home,
  Medal,
  PencilRuler,
  Route,
  Trophy,
  TvMinimal,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar'

import { Logo } from '@/modules/components/logo'
import { MainNav } from './main-nav'
import { SubNav } from './sub-nav'

const navigationMainItems = [
  { title: 'Home', url: '/home', icon: Home },
  { title: 'Bookmarks', url: '/bookmarks', icon: Bookmark },
  { title: 'Leagues', url: 'leagues', icon: Trophy },
]

const navigationLearnItems = [
  { title: 'Courses', url: '/courses', icon: GraduationCap },
  { title: 'Briefs', url: '/briefs', icon: PencilRuler },
  { title: 'Career Path', url: '/career-path', icon: Route },
  { title: 'Assessments', url: '/assessments', icon: FileBadge },
  { title: 'Tutorials', url: '/tutorials', icon: BookOpen },
]

const navigationGrowItems = [
  { title: 'Showcase', url: '/showcase', icon: TvMinimal },
  { title: 'Certifications', url: '/certifications', icon: Medal },
  { title: 'Salary Explorer', url: '/salary-explorer', icon: BadgeDollarSign },
  { title: 'Job Board', url: '/job-board', icon: Briefcase },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon" className="!items-center" {...props}>
      <SidebarHeader className="px-3">
        <Logo
          href="/home"
          className={cn(
            state === 'collapsed' && '[&_img]:size-10 [&_span]:hidden',
          )}
        />
      </SidebarHeader>
      <SidebarContent className="-space-y-2">
        <MainNav items={navigationMainItems} />
        <SidebarSeparator className="mx-auto !w-[80%]" />
        <SubNav label="Learn" items={navigationLearnItems} />
        <SidebarSeparator className="mx-auto !w-[80%]" />
        <SubNav label="Grow" items={navigationGrowItems} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
