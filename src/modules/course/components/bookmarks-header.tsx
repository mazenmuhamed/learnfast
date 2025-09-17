'use client'

import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import { AppTabs } from '@/modules/components/app-tabs'
import { PageHeader } from '@/modules/components/page-header'

const categories = [
  { label: 'Courses', href: '/saved/courses' },
  { label: 'Lessons', href: '/saved/lessons', disabled: true },
  { label: 'Exercises', href: '/saved/exercises', disabled: true },
]

type Props = {
  searchValue: string
  setSearchValue: (value: string) => void
  children: React.ReactNode
  bookmarksLength: number
}

export function BookmarksHeader({
  children,
  searchValue,
  setSearchValue,
  bookmarksLength,
}: Props) {
  return (
    <>
      <div className="flex justify-between max-[735]:flex-col max-sm:gap-5 sm:gap-3">
        <PageHeader
          title="Bookmarks"
          description={`Browse your favorite ${bookmarksLength} learning resources.`}
          className="sm:[&_p]:text-lg"
        />
        <div className="relative h-fit">
          <Search className="absolute top-2/4 left-3 size-4 -translate-y-2/4" />
          <Input
            type="search"
            id="bookmark-filter"
            name="bookmark-filter"
            value={searchValue}
            className="h-9 pl-9"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Filter bookmarks"
          />
        </div>
      </div>
      <AppTabs items={categories} />
      <Separator />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
    </>
  )
}
