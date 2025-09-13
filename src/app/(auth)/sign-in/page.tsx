import type { Metadata } from 'next'

import { Container } from '../_components/container'
import { SignInForm } from '../_components/forms/sign-in-form'
import { SocialButton } from '../_components/social-button'

import { BackButton } from '@/modules/components/back-button'

export const metadata: Metadata = {
  title: 'Sign in - LearnFast',
}

export default function SignInPage() {
  return (
    <>
      <Container
        title="Welcome back"
        description="Fill in your details to sign in to your account. You can also continue using your Google or GitHub account."
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-2">
          <SocialButton provider="google" />
          <SocialButton provider="github" />
        </div>
        <div className="flex w-full items-center gap-2">
          <hr className="grow" />
          <span className="text-sm font-medium">or</span>
          <hr className="grow" />
        </div>
        <SignInForm />
      </Container>
      <div className="text-muted-foreground *:[a]:hover:text-foreground text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{' '}
        and <a href="#">Privacy Policy</a>.
      </div>
      <BackButton className="fixed top-6 left-6 max-sm:hidden" />
    </>
  )
}
