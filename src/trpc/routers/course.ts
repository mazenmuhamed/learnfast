import z from 'zod'
import { baseProcedure, createTRPCRouter } from '@/trpc/init'

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
})
