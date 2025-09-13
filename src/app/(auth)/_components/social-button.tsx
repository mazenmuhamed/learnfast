'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import { useTransition } from 'react'

import { cn } from '@/lib/utils'
import { authClient } from '@/lib/auth-client'

import { Button } from '@/components/ui/button'

type Props = {
  provider: 'google' | 'github'
  isDisabled?: boolean
}

export function SocialButton({ provider, isDisabled }: Props) {
  const [isPending, startTransition] = useTransition()

  // if the provider is not specified, it throws an error.
  if (provider === null || provider === undefined) {
    throw new Error('Please add a provider name')
  }

  function handleSocialSignIn() {
    startTransition(async () => {
      await authClient.signIn.social(
        { provider, callbackURL: '/home', errorCallbackURL: '/sign-in' },
        {
          onError: ctx => {
            console.log('[SOCIAL_SIGN_IN_ERROR]', ctx.error)
            toast.error('Something went wrong.')
          },
        },
      )
    })
  }

  return (
    <Button
      type="button"
      variant="outline"
      disabled={isPending || isDisabled}
      onClick={handleSocialSignIn}
    >
      <Image
        src={`/icons/${provider}-logo.svg`}
        alt={`${provider} logo`}
        width={18}
        height={18}
        draggable={false}
        className={cn(provider === 'github' && 'dark:invert')}
      />
      Continue with {provider.replace(/^\w/, c => c.toUpperCase())}
    </Button>
  )
}
