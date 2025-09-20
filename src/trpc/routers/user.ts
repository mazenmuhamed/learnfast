import z from 'zod'
import { headers } from 'next/headers'

import { TRPCError } from '@trpc/server'
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from '@/trpc/init'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const userRouter = createTRPCRouter({
  checkAuth: baseProcedure.query(async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session || !session.user) {
      return null
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    })

    return user
  }),
  me: protectedProcedure.query(async opts => {
    const { session } = opts.ctx

    const user = await prisma.user.findUnique({
      where: { id: session.id },
      include: { followers: true, followings: true },
    })

    if (!user) {
      throw new TRPCError({ code: 'NOT_FOUND' })
    }

    return user
  }),
  updateInformation: protectedProcedure
    .input(z.object({ name: z.string().min(3).max(20).optional() }))
    .mutation(async opts => {
      const { session } = opts.ctx
      const { name } = opts.input

      const user = await prisma.user.findUnique({
        where: { id: session.id },
      })

      if (!user) {
        throw new TRPCError({ code: 'NOT_FOUND' })
      }

      // Check if last time user updated their name from more than 7 days ago
      if (name && user.name !== name) {
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

        if (user.nameUpdatedAt && user.nameUpdatedAt > sevenDaysAgo) {
          throw new TRPCError({
            code: 'FORBIDDEN',
            message: 'You can only change your name once every 7 days.',
          })
        }
      }

      await prisma.user.update({
        where: { id: session.id },
        data: { name, nameUpdatedAt: new Date() },
      })
    }),
  updateProfileAvatar: protectedProcedure
    .input(
      z.object({
        avatar: z.string().optional(),
        backgroundColor: z.string().optional(),
      }),
    )
    .mutation(async opts => {
      const { session } = opts.ctx
      const { avatar, backgroundColor } = opts.input

      const user = await prisma.user.findUnique({
        where: { id: session.id },
      })

      if (!user) {
        throw new TRPCError({ code: 'NOT_FOUND' })
      }

      if (avatar === user.image && backgroundColor === user.backgroundColor) {
        return // No changes, exit early
      }

      await prisma.user.update({
        where: { id: session.id },
        data: { image: avatar, backgroundColor },
      })
    }),
  completeProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(3).max(20),
        avatar: z.string(),
        backgroundColor: z.string().optional(),
      }),
    )
    .mutation(async opts => {
      const { session } = opts.ctx
      const { name, avatar, backgroundColor } = opts.input

      const user = await prisma.user.findUnique({
        where: { id: session.id },
      })

      if (!user) {
        throw new TRPCError({ code: 'NOT_FOUND' })
      }

      await prisma.user.update({
        where: { id: session.id },
        data: { name, image: avatar, backgroundColor },
      })
    }),
  deleteAccount: protectedProcedure.mutation(async opts => {
    const { session } = opts.ctx
    await prisma.user.delete({ where: { id: session.id } })
  }),
})
