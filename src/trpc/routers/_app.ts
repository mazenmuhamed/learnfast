import { createTRPCRouter } from '@/trpc/init'

import { userRouter } from './user'
import { courseRouter } from './course'

export const appRouter = createTRPCRouter({
  user: userRouter,
  course: courseRouter,
})

export type AppRouter = typeof appRouter
