import { createTRPCRouter } from '@/trpc/init'

import { userRouter } from './user'
import { courseRouter } from './course'
import { bookmarkRouter } from './bookmark'

export const appRouter = createTRPCRouter({
  user: userRouter,
  course: courseRouter,
  bookmark: bookmarkRouter,
})

export type AppRouter = typeof appRouter
