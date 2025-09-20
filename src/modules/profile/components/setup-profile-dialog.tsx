'use client'

import z from 'zod'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useTRPC } from '@/trpc/client'
import { authClient } from '@/lib/auth-client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { BlurFade } from '@/app/(www)/(landing)/_components/animations/blur-fade'
import { AvatarPicker } from './avatar-picker'

const formSchema = z.object({
  name: z
    .string()
    .min(1, "What's your name?")
    .min(3, 'Name is too short')
    .max(14, 'Name is too long'),
  avatar: z.string().min(1, 'Please select an avatar'),
  backgroundColor: z.string().optional(),
})

export function SetupProfileDialog() {
  const [open, setOpen] = useState(true)
  const [dialogContent, setDialogContent] = useState<'name' | 'avatar'>('name')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      avatar: '',
      backgroundColor: 'hsl(252, 100%, 80%)',
    },
  })

  const trpc = useTRPC()
  const completeProfile = useMutation(
    trpc.user.completeProfile.mutationOptions(),
  )

  useEffect(() => {
    if (dialogContent === 'avatar' && form.formState.errors.name) {
      setDialogContent('name')
    }
  }, [dialogContent, form.formState.errors.name])

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await authClient.updateUser({ name: values.name, image: values.avatar })

    completeProfile.mutate(values, {
      onSuccess() {
        setOpen(false)
        toast.success('Your done! Welcome aboard 🚀')

        // To force a reload and refetch of the user's session
        window.location.href = '/home'
      },
      onError(error) {
        console.error('[UPDATE_PROFILE_ERROR]', error)
        toast.error('Something went wrong.')
      },
    })
  }

  const isLoading = completeProfile.isPending || form.formState.isSubmitting

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-h-[90vh] rounded-2xl">
        <DialogHeader className="relative">
          <DialogTitle>Complete your profile</DialogTitle>
          <DialogDescription>
            Please complete your profile to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="py-1">
          <Form {...form}>
            <form
              id="setup-profile-form"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              {dialogContent === 'name' ? (
                <FullNameForm form={form} />
              ) : (
                <ScrollArea className="h-[60svh]">
                  <AvatarPicker
                    form={form}
                    description="You can change this later in your profile settings."
                  />
                </ScrollArea>
              )}
            </form>
          </Form>
        </div>
        <DialogFooter>
          {dialogContent === 'name' ? (
            <Button
              type="button"
              className="w-full"
              onClick={() => setDialogContent('avatar')}
            >
              Continue
            </Button>
          ) : (
            <div className="grid w-full gap-2">
              <Button
                type="submit"
                form="setup-profile-form"
                className="w-full"
                aria-busy={isLoading}
                aria-disabled={isLoading}
                disabled={!form.formState.isDirty || isLoading}
              >
                {isLoading && <Loader className="animate-spin" />}
                Save Profile
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={isLoading}
                aria-busy={isLoading}
                aria-disabled={isLoading}
                onClick={() => setDialogContent('name')}
              >
                Back
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

type FormItemsProps = {
  form: ReturnType<typeof useForm<z.infer<typeof formSchema>>>
}

function FullNameForm({ form }: FormItemsProps) {
  return (
    <BlurFade direction="left" inView>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What should we call you? (This is public)</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>
              You can change this later in your profile settings.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </BlurFade>
  )
}
