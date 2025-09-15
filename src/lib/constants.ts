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
  '/pricing',
  '/sign-in',
  '/sign-up',
  '/forgot-password',
  '/reset-password',
  '/verify-account',
]

// TODO: Replace placeholder routes with actual routes when available
export const navigationMainItems = [
  { title: 'Home', url: '/home', icon: Home },
  { title: 'Bookmarks', url: '/saved', icon: Bookmark },
  { title: 'Leagues', url: '#', icon: Trophy },
]

export const navigationLearnItems = [
  { title: 'Courses', url: '/courses', icon: GraduationCap },
  { title: 'Briefs', url: '#', icon: PencilRuler },
  { title: 'Career Path', url: '#', icon: Route },
  { title: 'Assessments', url: '#', icon: FileBadge },
  { title: 'Tutorials', url: '#', icon: BookOpen },
]

export const navigationGrowItems = [
  { title: 'Showcase', url: '#', icon: TvMinimal },
  { title: 'Certifications', url: '#', icon: Medal },
  {
    title: 'Salary Explorer',
    url: '#',
    icon: BadgeDollarSign,
  },
  { title: 'Job Board', url: '#', icon: Briefcase },
]
