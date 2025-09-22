'use client'

import z from 'zod'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useTRPC } from '@/trpc/client'
import { UserOutput } from '@/lib/types'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { AppDialog } from '@/modules/components/app-dialog'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DialogFooter } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { CountrySelect } from './country-select'

const formSchema = z.object({
  nickname: z
    .string()
    .min(2, { message: 'Nickname must be at least 2 characters.' })
    .max(10, { message: 'Nickname is too long.' })
    .optional(),
  bio: z.string().max(160, { message: 'Bio is too long.' }).optional(),
  country: z.string().optional(),
  is_account_private: z.boolean().optional(),
})

type Props = {
  user: UserOutput
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditProfileDialog({ user, open, onOpenChange }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: user.nickname || '',
      bio: user.bio || '',
      country: user.country || '',
      is_account_private: user.isPrivateAccount,
    },
  })

  useEffect(() => {
    if (open) {
      form.reset({
        nickname: user.nickname || '',
        bio: user.bio || '',
        country: user.country || '',
        is_account_private: user.isPrivateAccount,
      })
    }
  }, [open, form, user.nickname, user.bio, user.country, user.isPrivateAccount])

  const trpc = useTRPC()
  const queryClient = useQueryClient()

  const updateProfile = useMutation(trpc.user.updateProfile.mutationOptions({}))

  function handleFormSubmit(values: z.infer<typeof formSchema>) {
    updateProfile.mutate(values, {
      onSuccess: () => {
        form.reset(values)
        queryClient.invalidateQueries(trpc.user.me.queryOptions())
        toast.success('Profile updated successfully.')
        onOpenChange(false)
      },
      onError: error => {
        console.log('[UPDATE_PROFILE_ERROR]', error)
        toast.error('Something went wrong.')
      },
    })
  }

  return (
    <AppDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Edit Profile"
      description="Make changes to your profile here."
      className="flex max-h-[90vh] flex-col rounded-2xl sm:max-w-xl 2xl:max-h-[55rem]"
      onOpenAutoFocus={e => e.preventDefault()}
    >
      <ScrollArea className="-mx-6 h-3/4 flex-1 grow px-5">
        <Form {...form}>
          <form
            id="update-profile-form"
            className="space-y-5 px-1 pb-4"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nickname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>What should we call you?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Bio<span className="text-sm font-normal">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      maxLength={160}
                      className="min-h-20 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="flex items-center justify-between">
                    <span>
                      Write a short bio to tell the world about yourself.
                    </span>
                    {field.value && field.value.length > 0 && (
                      <span className="text-sm tabular-nums opacity-70">
                        {field.value.length}/160
                      </span>
                    )}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <CountrySelect
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription className="flex items-center justify-between">
                    Select your country of residence.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <FormField
              control={form.control}
              name="is_account_private"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                  <div className="space-y-0.5">
                    <FormLabel>Make profile private</FormLabel>
                    <FormDescription>
                      Hide your profile from other users and search engines.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-label="Make profile private"
                      className="scale-110"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </ScrollArea>
      <DialogFooter className="mt-auto">
        <Button
          size="lg"
          form="update-profile-form"
          className="w-full text-[15px]"
          disabled={!form.formState.isDirty || updateProfile.isPending}
        >
          {updateProfile.isPending && <Loader className="animate-spin" />}
          Save Changes
        </Button>
      </DialogFooter>
    </AppDialog>
  )
}
