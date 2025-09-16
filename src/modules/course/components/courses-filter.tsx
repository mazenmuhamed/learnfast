'use client'

import { useState } from 'react'
import {
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Clock,
  Filter,
  Info,
  User2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ActionTooltip } from '@/modules/components/action-tooltip'

const categories = ['All', 'UX', 'Product Design']

// TODO: Implement the actual filter logic
export function CoursesFilter() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div className="flex flex-col max-md:gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
            disabled={category !== 'All'}
            className="px-3"
          >
            {category}
          </Button>
        ))}
        <ActionTooltip
          asChild={false}
          className="ml-1"
          tooltip="Filter by category (will be implemented soon)"
        >
          <Info className="size-4" />
        </ActionTooltip>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              For you <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56" align="end">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              For you
              <Check className="ml-auto" />
            </DropdownMenuItem>
            <DropdownMenuItem>Popular</DropdownMenuItem>
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Alphabetical</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56" align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ChartNoAxesCombined />
              Difficulty
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Clock />
              Length
            </DropdownMenuItem>
            <DropdownMenuItem>
              <User2 />
              Instructor
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ActionTooltip
          asChild={false}
          className="mr-1"
          tooltip="Sort and filter options (will be implemented soon)"
        >
          <Info className="size-4" />
        </ActionTooltip>
      </div>
    </div>
  )
}
