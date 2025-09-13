'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { authClient } from '@/lib/auth-client'

import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  otp: z
    .string()
    .length(6, 'OTP must be 6 characters')
    .nonempty('OTP is required'),
})

export function OTPForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: '' },
  })

  async function handleFormSubmit(values: z.infer<typeof formSchema>) {
    await authClient.emailOtp.verifyEmail(
      {
        email: searchParams.get('email') || '',
        otp: values.otp,
      },
      {
        onRequest: () => {
          toast.loading('Verifying OTP...', { id: 'verify_otp' })
        },
        onSuccess: () => {
          toast.success('Congratulations! 🎉', {
            description: 'Your account has been verified, you can now sign in.',
            id: 'verify_otp',
          })
          router.replace('/sign-in')
        },
        onError: ctx => {
          console.log(ctx)
          toast.error(ctx.error?.message || 'Failed to verify OTP', {
            id: 'verify_otp',
          })
        },
      },
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="mx-auto">
                      {new Array(6).fill(0).map((_, index) => (
                        <InputOTPSlot
                          index={index}
                          key={index}
                          className="size-12"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isDirty || form.formState.isSubmitting}
          >
            Verify OTP
          </Button>
        </div>
      </form>
    </Form>
  )
}
