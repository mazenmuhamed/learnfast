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

export const publicRoutes = ['/', '/pricing']
export const authRoutes = ['/sign-in', '/sign-up']

// TODO: Replace placeholder routes with actual routes when available
export const navigationMainItems = [
  { title: 'Home', url: '/home', icon: Home },
  { title: 'Bookmarks', url: '/saved/courses', icon: Bookmark },
  { title: 'Leagues', url: '/leagues', icon: Trophy },
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

export const SHORTCUTS_STORAGE_KEY = 'shortcuts-has-been-shown'

export const avatarBackgroundColors = [
  'hsl(252, 100%, 80%)',
  'hsl(4, 90%, 85%)',
  'hsl(48, 100%, 85%)',
  'hsl(141, 70%, 80%)',
  'hsl(204, 100%, 80%)',
  'hsl(338, 100%, 85%)',
  'hsl(174, 100%, 80%)',
  'hsl(0, 100%, 100%)',
  'hsl(0, 0%, 20%)',
]
