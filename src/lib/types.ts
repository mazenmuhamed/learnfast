import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/trpc/routers/_app'

type RouterOutput = inferRouterOutputs<AppRouter>

export type CourseOutput = RouterOutput['course']['getAll'][number]
export type UserOutput = RouterOutput['user']['me']

export interface ICourse {
  title: string
  summary: string
  cover: string // URL to the course image
  exp: number // Experience points awarded upon completion
  duration: number // Duration in minutes
  level: CourseLevel
  description: string
  author: {
    name: string
    avatar: string // URL to the author's avatar image
    role: string
    bio: string
  }
  whatYouWillLearn: string[]
  lessons: Lesson[]
}

export type Lesson = {
  courseId?: string
  title: string
  description: string
}

export enum CourseLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}
