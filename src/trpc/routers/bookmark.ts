import z from 'zod'
import { createTRPCRouter, protectedProcedure } from '@/trpc/init'

import prisma from '@/lib/prisma'

export const bookmarkRouter = createTRPCRouter({
  checkIfBookmarked: protectedProcedure
    .input(z.object({ courseId: z.string() }))
    .query(async opts => {
      const { courseId } = opts.input
      const { id } = opts.ctx.session

      const bookmark = await prisma.bookmark.findFirst({
        where: { userId: id, courseId },
      })

      return !!bookmark
    }),
  getUserBookmarks: protectedProcedure.query(async opts => {
    const { id } = opts.ctx.session

    const bookmarks = await prisma.bookmark.findMany({
      where: { userId: id },
      include: { course: { include: { author: true, lessons: true } } },
    })

    return bookmarks.map(b => b) || []
  }),
})
