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
    })

    if (!user) {
      throw new TRPCError({ code: 'NOT_FOUND' })
    }

    return user
  }),
})
