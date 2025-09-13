'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { useIsClient } from 'usehooks-ts'
import {
  CheckIcon,
  Globe,
  Keyboard,
  Lock,
  MessageCircle,
  MinusIcon,
  Paintbrush,
} from 'lucide-react'

import { useKeyboardShortcut } from '@/hooks/use-keyboard-shortcut'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'

const data = {
  nav: [
    {
      name: 'Appearance',
      id: 'appearance',
      icon: Paintbrush,
      content: <AppearanceSettings />,
    },
    { name: 'Messages & media', id: 'messages-media', icon: MessageCircle },
    { name: 'Language & region', id: 'language-region', icon: Globe },
    { name: 'Privacy & visibility', id: 'privacy-visibility', icon: Lock },
    { name: 'Shortcuts', id: 'shortcuts', icon: Keyboard },
  ],
}

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsDialog({ open, onOpenChange }: Props) {
  const [activeTab, setActiveTab] = useState<string>('appearance')

  useKeyboardShortcut('ctrl', 's', () => onOpenChange(true))

  const activeIndex = data.nav.findIndex(i => i.id === activeTab)
  const title = data.nav[activeIndex].name
  const content = data.nav[activeIndex].content

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Configure your application settings
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map(item => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          isActive={item.id === activeTab}
                          onClick={() => setActiveTab(item.id)}
                        >
                          <item.icon />
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
            <header className="flex h-14 items-center gap-2">
              <p className="px-4 text-sm font-medium">{title}</p>
            </header>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
              {content}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  )
}

const themes = [
  { value: 'light', label: 'Light', image: '/images/theme/ui-light.png' },
  { value: 'dark', label: 'Dark', image: '/images/theme/ui-dark.png' },
  { value: 'system', label: 'System', image: '/images/theme/ui-system.png' },
]

function AppearanceSettings() {
  const { theme, setTheme } = useTheme()

  const isClient = useIsClient()

  if (!isClient) return null

  return (
    <div className="flex flex-col gap-2">
      <fieldset className="space-y-4">
        <legend className="text-foreground text-sm leading-none font-medium">
          Choose a theme
        </legend>
        <RadioGroup
          className="flex gap-3"
          defaultValue={theme}
          onValueChange={value => setTheme(value)}
        >
          {themes.map((item, index) => (
            <label key={`${index}-${item.value}`}>
              <RadioGroupItem
                id={`${index}-${item.value}`}
                value={item.value}
                className="peer sr-only after:absolute after:inset-0"
              />
              <Image
                src={item.image}
                alt={item.label}
                width={88}
                height={70}
                className="border-input peer-focus-visible:ring-ring/50 peer-data-[state=checked]:border-ring peer-data-[state=checked]:bg-accent relative cursor-pointer overflow-hidden rounded-md border shadow-xs transition-[color,box-shadow] outline-none peer-focus-visible:ring-[3px] peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50"
              />
              <span className="group peer-data-[state=unchecked]:text-muted-foreground/70 mt-2 flex items-center gap-1">
                <CheckIcon
                  size={16}
                  className="group-peer-data-[state=unchecked]:hidden"
                  aria-hidden="true"
                />
                <MinusIcon
                  size={16}
                  className="group-peer-data-[state=checked]:hidden"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium">{item.label}</span>
              </span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  )
}
