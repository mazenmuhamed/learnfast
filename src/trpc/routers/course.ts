import { baseProcedure, createTRPCRouter } from '@/trpc/init'

import prisma from '@/lib/prisma'

export const courseRouter = createTRPCRouter({
  getAll: baseProcedure.query(async () => {
    const courses = await prisma.course.findMany({
      include: { author: true, lessons: true },
    })
    return courses
  }),
})
