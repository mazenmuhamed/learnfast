import z from 'zod'
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from '@/trpc/init'

import prisma from '@/lib/prisma'

export const courseRouter = createTRPCRouter({
  getAll: baseProcedure.query(async () => {
    const courses = await prisma.course.findMany({
      include: { author: true, lessons: true },
    })
    return courses
  }),
  findById: baseProcedure
    .input(z.object({ id: z.uuid() }))
    .query(async opts => {
      const { id } = opts.input

      const course = await prisma.course.findUnique({
        where: { id },
        include: { author: true, lessons: true },
      })

      return course
    }),
  addBookmark: protectedProcedure
    .input(z.object({ courseId: z.uuid() }))
    .mutation(async opts => {
      const { courseId } = opts.input
      const { id } = opts.ctx.session

      const existing = await prisma.bookmark.findFirst({
        where: { userId: id, courseId },
      })

      let action: string

      if (existing) {
        await prisma.bookmark.delete({ where: { id: existing.id } })
        action = 'removed'
      } else {
        await prisma.bookmark.create({ data: { userId: id, courseId } })
        action = 'added'
      }

      return { action }
    }),
})
