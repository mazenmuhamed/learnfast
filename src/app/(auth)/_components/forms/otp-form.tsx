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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { RotateCcw } from 'lucide-react'

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
    // await authClient.emailOtp.verifyEmail(
    //   {
    //     email: searchParams.get('email') || '',
    //     otp: values.otp,
    //   },
    //   {
    //     onRequest: () => {
    //       toast.loading('Verifying OTP...', { id: 'verify_otp' })
    //     },
    //     onSuccess: () => {
    //       toast.success('Congratulations! 🎉', {
    //         description: 'Your account has been verified, you can now sign in.',
    //         id: 'verify_otp',
    //       })
    //       router.replace('/sign-in')
    //     },
    //     onError: ctx => {
    //       console.log(ctx)
    //       toast.error(ctx.error?.message || 'Failed to verify OTP', {
    //         id: 'verify_otp',
    //       })
    //     },
    //   },
    // )
    await authClient.signIn.emailOtp(
      {
        email: searchParams.get('email') || '',
        otp: values.otp,
      },
      {
        onRequest: () => {
          toast.loading('Verifying OTP...', { id: 'verify_otp' })
        },
        onSuccess: () => {
          form.reset()
          toast.success('Welcome back! 🎉', { id: 'verify_otp' })
          router.replace('/home')
        },
        onError: ctx => {
          console.log(ctx)
          switch (ctx.error.code as keyof typeof authClient.$ERROR_CODES) {
            case 'INVALID_OTP':
              toast.error('Invalid OTP. Please try again.', {
                id: 'verify_otp',
              })
              break
            case 'OTP_EXPIRED':
              form.setError('otp', { message: 'OTP has expired' })
              toast.error('OTP has expired. Please request a new one.', {
                id: 'verify_otp',
              })
              router.replace('/sign-in')
              break
            default:
              toast.error('Something went wrong.', { id: 'verify_otp' })
              break
          }
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
                <FormLabel className="items-center justify-center">
                  One-Time Password (OTP)
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    onComplete={value => {
                      field.onChange(value)
                      form.handleSubmit(handleFormSubmit)()
                    }}
                    {...field}
                  >
                    <InputOTPGroup className="mx-auto">
                      {new Array(6).fill(0).map((_, index) => (
                        <InputOTPSlot
                          index={index}
                          key={index}
                          className="size-10"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="text-center">
                  Enter the 6-digit code we sent to your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid items-center space-y-2">
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isDirty || form.formState.isSubmitting}
            >
              Verify OTP
            </Button>
            <Button
              type="button"
              variant="link"
              className="text-muted-foreground hover:text-foreground mx-auto"
              onClick={() => router.replace('/sign-in')}
            >
              Resend
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
