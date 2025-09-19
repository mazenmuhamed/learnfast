'use client'

import z from 'zod'
import Image from 'next/image'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { ControllerRenderProps, useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { useTRPC } from '@/trpc/client'

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

  const router = useRouter()

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

  function handleSubmit(values: z.infer<typeof formSchema>) {
    completeProfile.mutate(values, {
      onSuccess() {
        setOpen(false)
        router.refresh()
        router.replace('/home')
        toast.success('Your done! Welcome aboard 🚀')
      },
      onError(error) {
        console.error('[UPDATE_PROFILE_ERROR]', error)
        toast.error('Something went wrong.')
      },
    })
  }

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
                  <AvatarPicker form={form} />
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
                aria-busy={completeProfile.isPending}
                aria-disabled={completeProfile.isPending}
                disabled={!form.formState.isDirty || completeProfile.isPending}
              >
                {completeProfile.isPending && (
                  <Loader className="animate-spin" />
                )}
                Save Profile
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={completeProfile.isPending}
                aria-busy={completeProfile.isPending}
                aria-disabled={completeProfile.isPending}
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

type FullNameFormProps = FormItemsProps & {}

function FullNameForm({ form }: FullNameFormProps) {
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

const backgroundColors = [
  'hsl(252, 100%, 80%)',
  'hsl(4, 90%, 85%)',
  'hsl(48, 100%, 85%)',
  'hsl(141, 70%, 80%)',
  'hsl(204, 100%, 80%)',
  'hsl(338, 100%, 85%)',
  'hsl(174, 100%, 80%)',
  'hsl(0, 100%, 100%)',
  'hsl(0, 0%, 20%)',
]

type AvatarPickerProps = FormItemsProps & {}

function AvatarPicker({ form }: AvatarPickerProps) {
  const [backgroundColor, setBackgroundColor] = useState(
    form.getValues('backgroundColor'),
  )

  function handlePickColor(
    field: ControllerRenderProps<z.infer<typeof formSchema>, 'backgroundColor'>,
    color: string,
  ) {
    setBackgroundColor(color)
    field.onChange(color)
  }

  return (
    <BlurFade direction="left" inView className="space-y-5">
      <FormField
        control={form.control}
        name="backgroundColor"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pick a background color</FormLabel>
            <FormControl>
              <ScrollArea>
                <div className="flex items-center gap-3 p-1">
                  {backgroundColors.map(color => (
                    <div
                      key={color}
                      style={{ backgroundColor: color }}
                      onClick={() => handlePickColor(field, color)}
                      className={cn(
                        'size-8 cursor-pointer rounded-full border opacity-60 transition hover:scale-105 hover:opacity-100 dark:border-none',
                        color === backgroundColor &&
                          'ring-primary opacity-100 ring-2',
                      )}
                    />
                  ))}
                </div>
              </ScrollArea>
            </FormControl>
            <FormDescription>
              You can change this later in your profile settings.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="avatar"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="mb-2">Choose your avatar</FormLabel>
            <FormControl>
              <ScrollArea>
                <div className="grid grid-cols-3 gap-2 p-1">
                  {new Array(12).fill(null).map((_, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor }}
                      onClick={() =>
                        field.onChange(
                          `/profile-avatars/avatar-${index + 1}.png`,
                        )
                      }
                      className={cn(
                        'group relative flex size-36 cursor-pointer items-center justify-center overflow-hidden rounded-full border opacity-70 transition hover:opacity-100 dark:border-none',
                        field.value ===
                          `/profile-avatars/avatar-${index + 1}.png` &&
                          'ring-primary opacity-100 ring-3',
                      )}
                    >
                      <Image
                        key={index}
                        src={`/profile-avatars/avatar-${index + 1}.png`}
                        alt={`Avatar ${index + 1}`}
                        quality={100}
                        fill
                        sizes="(max-width: 640px) 100vw, 36px"
                        className="translate-y-1 scale-105 object-contain transition-transform group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
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
