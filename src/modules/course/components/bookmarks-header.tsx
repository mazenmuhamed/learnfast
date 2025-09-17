'use client'

import { Separator } from '@/components/ui/separator'

import { AppTabs } from '@/modules/components/app-tabs'
import { PageHeader } from '@/modules/components/page-header'

const categories = [
  { label: 'Courses', href: '/saved/courses' },
  { label: 'Lessons', href: '/saved/lessons', disabled: true },
  { label: 'Exercises', href: '/saved/exercises', disabled: true },
]

export function BookmarksHeader({
  bookmarksLength,
}: {
  bookmarksLength: number
}) {
  return (
    <>
      <PageHeader
        title="Bookmarks"
        description={`Browse your favorite ${bookmarksLength} learning resources.`}
        className="sm:[&_p]:text-lg"
      />
      <AppTabs items={categories} />
      <Separator />
    </>
  )
}
