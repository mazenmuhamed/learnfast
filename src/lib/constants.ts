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

export const publicRoutes = [
  '/',
  '/sign-in',
  '/sign-up',
  '/forgot-password',
  '/reset-password',
  '/verify-account',
]

export const navigationMainItems = [
  { title: 'Home', url: '/home', icon: Home },
  { title: 'Bookmarks', url: '/bookmarks', icon: Bookmark },
  { title: 'Leagues', url: 'leagues', icon: Trophy },
]

export const navigationLearnItems = [
  { title: 'Courses', url: '/courses', icon: GraduationCap },
  { title: 'Briefs', url: '/briefs', icon: PencilRuler },
  { title: 'Career Path', url: '/career-path', icon: Route },
  { title: 'Assessments', url: '/assessments', icon: FileBadge },
  { title: 'Tutorials', url: '/tutorials', icon: BookOpen },
]

export const navigationGrowItems = [
  { title: 'Showcase', url: '/showcase', icon: TvMinimal },
  { title: 'Certifications', url: '/certifications', icon: Medal },
  { title: 'Salary Explorer', url: '/salary-explorer', icon: BadgeDollarSign },
  { title: 'Job Board', url: '/job-board', icon: Briefcase },
]
