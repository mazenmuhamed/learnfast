import { cache } from 'react'
import { headers } from 'next/headers'
import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'

import { auth } from '@/lib/auth'

export const createTRPCContext = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return { session }
})

type Context = Awaited<ReturnType<typeof createTRPCContext>>

const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory
export const baseProcedure = t.procedure

export const protectedProcedure = t.procedure.use(async opts => {
  const { session } = opts.ctx

  if (!session || !session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return opts.next({ ctx: { ...opts.ctx, session: session.user } })
})
