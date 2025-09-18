import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { prisma } from '@/lib/prisma'

import { OTPForm } from '../_components/forms/otp-form'
import { Container } from '../_components/container'

import { BackButton } from '@/modules/components/back-button'

export const metadata: Metadata = {
  title: 'Verify Account - ShipX',
  description: 'Verify your email to continue using ShipX.',
}

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; type?: string }>
}) {
  const { email, type } = await searchParams

  if (!email || !type) {
    return notFound()
  }

  const checkIfEmailRequiresVerification = await prisma.verification.findFirst({
    where: { identifier: `${type}-otp-${email}` },
  })

  if (!checkIfEmailRequiresVerification) {
    return redirect('/sign-in')
  }

  console.log(checkIfEmailRequiresVerification)

  return (
    <>
      <Container
        title="Verify your account"
        description={`Please verify your email address and enter the OTP sent to ${email}`}
      >
        <OTPForm />
      </Container>
      <BackButton className="fixed top-6 left-6 max-sm:hidden" />
    </>
  )
}
