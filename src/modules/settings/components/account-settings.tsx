import z from 'zod'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'
import { UserOutput } from '@/lib/types'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { AppAlertDialog } from '@/modules/components/app-alert-dialog'

const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(3, 'Name must be at least 3 character(s)')
    .max(20, 'Name must be at most 20 character(s)'),
  email: z.email('Invalid email address'),
})

export function AccountSettings({ user }: { user: UserOutput }) {
  const [showAlert, setShowAlert] = useState(false)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: user.name, email: user.email },
  })

  const trpc = useTRPC()
  const queryClient = useQueryClient()

  const deleteAccount = useMutation(trpc.user.deleteAccount.mutationOptions())
  const updateAccount = useMutation(
    trpc.user.updateInformation.mutationOptions(),
  )

  function handleSubmit(values: z.infer<typeof formSchema>) {
    updateAccount.mutate(values, {
      onSuccess: () => {
        form.reset(values)
        updateAccount.reset()

        toast.success('Account updated successfully')

        queryClient.invalidateQueries(trpc.user.me.queryOptions())
      },
      onError: error => {
        console.log('[UPDATE_ACCOUNT_ERROR]', error)

        form.setError('name', { message: error.message })
        toast.error('Something went wrong')
      },
    })
  }

  function handleDeleteAccount() {
    toast.loading('Deleting account...', { id: 'delete-account' })

    deleteAccount.mutate(undefined, {
      onSuccess: () => {
        toast.success('Account deleted successfully', { id: 'delete-account' })
        router.replace('/')
      },
      onError: error => {
        console.log('[DELETE_ACCOUNT_ERROR]', error)
        toast.error('Something went wrong', { id: 'delete-account' })
      },
    })
  }

  return (
    <>
      <div className="grid gap-8 sm:py-4">
        <div className="grid gap-2">
          <h2 className="text-popover-foreground text-xl font-semibold">
            General
          </h2>
          <p className="text-muted-foreground text-sm">
            Update your account settings.
          </p>
        </div>
        <Form {...form}>
          <form
            className="space-y-5"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="text-muted-foreground text-[13px]">
                    You can change your name once every 7 days.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="text-muted-foreground text-[13px]">
                    Email cannot be changed at the moment
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={!form.formState.isDirty || form.formState.isSubmitting}
            >
              {updateAccount.isPending && <Loader className="animate-spin" />}
              Save changes
            </Button>
          </form>
        </Form>
        <Separator />
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-popover-foreground text-xl font-semibold">
              Delete Account
            </h2>
            <Button
              size="sm"
              variant="link"
              className="text-destructive hover:no-underline"
              onClick={() => setShowAlert(true)}
            >
              Delete Account
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            We’d hate to see you go, but you’re welcome to delete your account
            anytime. Just remember, once you delete it, it’s gone forever.
          </p>
        </div>
      </div>
      <AppAlertDialog
        open={showAlert}
        onOpenChange={setShowAlert}
        title="Delete Account"
        description="Are you sure you want to delete your account? you can't undo this action."
        confirmLabel="Yes, delete my account"
        actionVariant="destructive"
        onConfirm={handleDeleteAccount}
      />
    </>
  )
}
