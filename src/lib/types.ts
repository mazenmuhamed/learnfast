export interface Course {
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
