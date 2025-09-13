import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { prisma } from '@/lib/prisma'

import { OTPForm } from '../_components/forms/otp-form'
import { Container } from '../_components/container'
import { BackButton } from '@/modules/components/back-button'

export const metadata: Metadata = {
  title: 'Verify Account - ShipX',
  description: 'Verify your email to continue using ShipX.',
}

// TODO: Chamge this to be a verification link
export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>
}) {
  const { email } = await searchParams

  if (!email) {
    return notFound()
  }

  const checkIfEmailIsNotVerified = await prisma.user.findFirst({
    where: { AND: [{ email }, { emailVerified: false }] },
  })

  if (!checkIfEmailIsNotVerified) {
    return notFound()
  }

  return (
    <>
      <Container
        title="Verify your account"
        description={`Please verify your email address and enter the OTP sent to ${email}.`}
      >
        <OTPForm />
      </Container>
      <BackButton className="fixed top-6 left-6 max-sm:hidden" />
    </>
  )
}
