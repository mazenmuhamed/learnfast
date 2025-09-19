'use client'

import Link from 'next/link'
import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon, Eye, EyeOff } from 'lucide-react'

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
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password is to short'),
})

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  })

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await authClient.signUp.email(
      {
        name: '',
        email: values.email,
        password: values.password,
        callbackURL: '/home',
      },
      {
        onRequest: () => {
          setErrorMessage(null)
        },
        onSuccess: () => {
          toast.success('Your account has been created.')
          router.replace('/profile-setup')
        },
        onError: ctx => {
          switch (ctx.error.code as keyof typeof authClient.$ERROR_CODES) {
            case 'SOCIAL_ACCOUNT_ALREADY_LINKED':
              setErrorMessage('An account with this email already exists.')
              break
            case 'INVALID_EMAIL_OR_PASSWORD':
              setErrorMessage('Invalid email or password.')
              break
            case 'PASSWORD_TOO_SHORT':
              setErrorMessage('Password is too short.')
              break
            case 'PASSWORD_TOO_LONG':
              setErrorMessage('Password is too long.')
              break
            default:
              setErrorMessage('Something went wrong.')
              break
          }
          console.error('[SIGN_UP_ERROR]', ctx.error)
        },
      },
    )
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
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
        {errorMessage && <AppAlert status="error" content={errorMessage} />}
        <div className="mt-4 flex w-full flex-col items-center gap-4">
          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isDirty || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <LoaderIcon className="animate-spin" />
            )}
            Sign up
          </Button>
          <div className="flex items-center gap-1 text-sm">
            <p className="text-muted-foreground text-center">
              Already have an account?
            </p>
            <Link href="/sign-in" className="font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </Form>
  )
}
