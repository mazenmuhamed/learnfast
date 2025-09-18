'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { authClient } from '@/lib/auth-client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AppAlert } from '@/modules/components/app-alert'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  email: z.email('Invalid email address'),
  // password: z
  //   .string()
  //   .nonempty('Password is required')
  //   .min(6, 'Password is to short'),
  // rememberMe: z.boolean().optional(),
})

export function SignInForm() {
  // const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  })

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    // await authClient.signIn.email(
    //   {
    //     ...values,
    //     callbackURL: '/home',
    //     rememberMe: values.rememberMe || false,
    //   },
    //   {
    //     onRequest: () => {
    //       setErrorMessage(null)
    //     },
    //     onError: ctx => {
    //       switch (ctx.error.code as keyof typeof authClient.$ERROR_CODES) {
    //         case 'USER_NOT_FOUND':
    //           setErrorMessage(ctx.error.message)
    //           break
    //         case 'INVALID_EMAIL_OR_PASSWORD':
    //           setErrorMessage(ctx.error.message)
    //           break
    //         case 'PASSWORD_TOO_SHORT':
    //           setErrorMessage(ctx.error.message)
    //           break
    //         case 'PASSWORD_TOO_LONG':
    //           setErrorMessage(ctx.error.message)
    //           break
    //         case 'EMAIL_NOT_VERIFIED':
    //           setErrorMessage('Email not verified. Please check your inbox.')
    //           authClient.emailOtp.sendVerificationOtp({
    //             type: 'email-verification',
    //             email: values.email,
    //           })
    //           break
    //         default:
    //           setErrorMessage('Something went wrong.')
    //           break
    //       }
    //       console.error('[SIGN_IN_ERROR]', ctx.error)
    //     },
    //   },
    // )
    await authClient.emailOtp.sendVerificationOtp(
      {
        type: 'sign-in',
        email: values.email,
      },
      {
        onRequest: () => {
          setErrorMessage(null)
        },
        onSuccess: () => {
          toast.success('OTP sent to your email')
          router.push(`/verify-otp?email=${values.email}&type=sign-in`)
        },
        onError: ctx => {
          switch (ctx.error.code as keyof typeof authClient.$ERROR_CODES) {
            case 'USER_EMAIL_NOT_FOUND':
              setErrorMessage(ctx.error.message)
              break
            case 'INVALID_EMAIL':
              setErrorMessage(ctx.error.message)
              break
            case 'SOCIAL_ACCOUNT_ALREADY_LINKED':
              setErrorMessage(
                'Email already associated with a social account. Please use social sign-in.',
              )
              break
            default:
              setErrorMessage('Something went wrong.')
              break
          }
        },
      },
    )
  }

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Password</FormLabel>
                <Link
                  href="/forgot-password"
                  className="text-muted-foreground text-[13px] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <FormControl>
                <div className="relative">
                  <Input type={showPassword ? 'text' : 'password'} {...field} />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="text-muted-foreground absolute top-2/4 right-2 size-6 -translate-y-2/4 transform"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-4" /> */}
        {/* <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="font-normal">Remember me</FormLabel>
              <ActionTooltip
                side="right"
                asChild={false}
                tooltip="Keep me logged in on this device"
              >
                <CircleQuestionMark className="text-muted-foreground size-3.5" />
              </ActionTooltip>
            </FormItem>
          )}
        /> */}
        <div className="my-4">
          {errorMessage && (
            <AppAlert
              status={
                errorMessage.includes('Email not verified')
                  ? 'warning'
                  : 'error'
              }
              content={errorMessage}
            />
          )}
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isDirty || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <LoaderIcon className="animate-spin" />
            )}
            Continue with Email
          </Button>
          {/* <div className="flex items-center gap-1 text-sm">
            <p className="text-muted-foreground text-center">
              Don&apos;t have an account?
            </p>
            <Link href="/sign-up" className="font-medium hover:underline">
              Sign up
            </Link>
          </div> */}
        </div>
      </form>
    </Form>
  )
}
