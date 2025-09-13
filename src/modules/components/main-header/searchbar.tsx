'use client'

import { useState } from 'react'
import {
  BookA,
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from 'lucide-react'

import { useKeyboardShortcut } from '@/hooks/use-keyboard-shortcut'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export function Searchbar() {
  const [open, setOpen] = useState(false)

  useKeyboardShortcut('ctrl', 'k', () => setOpen(open => !open))

  return (
    <>
      <Button
        size="sm"
        variant="secondary"
        className="hover:bg-background dark:bg-input dark:text-foreground dark:ring-primary dark:hover:bg-muted dark:hover:text-foreground group min-w-52 transition hover:ring-2 max-sm:hidden"
        onClick={() => setOpen(true)}
      >
        <Search />
        <span>
          Search{' '}
          <span className="opacity-0 transition group-hover:opacity-100">
            &ldquo;Ctrl+K&ldquo;
          </span>
        </span>
        <Separator orientation="vertical" className="ml-auto !h-[60%]" />
        <BookA className="mx-1" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
