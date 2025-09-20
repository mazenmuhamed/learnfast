'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ControllerRenderProps, useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { avatarBackgroundColors } from '@/lib/constants'

import { ScrollArea } from '@/components/ui/scroll-area'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { BlurFade } from '@/app/(www)/(landing)/_components/animations/blur-fade'

type Props = {
  form: ReturnType<typeof useForm<any>>
  description?: string
}

type AvatarPickerProps = Props & {
  disableTransition?: boolean
}

export function AvatarPicker({
  form,
  disableTransition,
  description,
}: AvatarPickerProps) {
  const [backgroundColor, setBackgroundColor] = useState(
    form.getValues('backgroundColor'),
  )

  return disableTransition ? (
    <div className="space-y-6">
      <BackgroundPicker
        form={form}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        description={description}
      />
      <SelectAvatar
        form={form}
        backgroundColor={backgroundColor}
        description={description}
      />
    </div>
  ) : (
    <BlurFade direction="left" inView className="space-y-6">
      <BackgroundPicker
        form={form}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        description={description}
      />
      <SelectAvatar
        form={form}
        backgroundColor={backgroundColor}
        description={description}
      />
    </BlurFade>
  )
}

type BackgroundPickerProps = Props & {
  backgroundColor: string
  setBackgroundColor: (color: string) => void
}

export function BackgroundPicker({
  form,
  description,
  backgroundColor,
  setBackgroundColor,
}: BackgroundPickerProps) {
  function handlePickColor(
    field: ControllerRenderProps<any, 'backgroundColor'>,
    color: string,
  ) {
    setBackgroundColor(color)
    field.onChange(color)
  }

  return (
    <FormField
      control={form.control}
      name="backgroundColor"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Pick a background color</FormLabel>
          <FormControl>
            <ScrollArea>
              <div className="flex items-center gap-3 p-1">
                {avatarBackgroundColors.map(color => (
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
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type SelectAvatarProps = Props & {
  backgroundColor: string
}

export function SelectAvatar({
  form,
  backgroundColor,
  description,
}: SelectAvatarProps) {
  return (
    <FormField
      control={form.control}
      name="avatar"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="mb-2">Choose your avatar</FormLabel>
          <FormControl>
            <ScrollArea>
              <div className="grid grid-cols-3 gap-3 p-1">
                {new Array(12).fill(null).map((_, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor }}
                    onClick={() =>
                      field.onChange(`/profile-avatars/avatar-${index + 1}.png`)
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
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
