'use client'

import { useState } from 'react'
import { BookA, Search } from 'lucide-react'

import { useKeyboardShortcut } from '@/hooks/use-keyboard-shortcut'
import {
  navigationMainItems,
  navigationGrowItems,
  navigationLearnItems,
} from '@/lib/constants'

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
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Main">
            {navigationMainItems.map(item => (
              <CommandItem key={item.title} onSelect={() => setOpen(false)}>
                <item.icon />
                <span>{item.title}</span>
                <CommandShortcut>⌘{item.title.charAt(0)}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Learn">
            {navigationLearnItems.map(item => (
              <CommandItem key={item.title} onSelect={() => setOpen(false)}>
                <item.icon />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Grow">
            {navigationGrowItems.map(item => (
              <CommandItem key={item.title} onSelect={() => setOpen(false)}>
                <item.icon />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
