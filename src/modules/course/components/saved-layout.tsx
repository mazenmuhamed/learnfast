import { BrushCleaning, Link } from 'lucide-react'

type Props = {
  bookmarksLength: number
  children: React.ReactNode
}

export async function SavedLayout({ children, bookmarksLength }: Props) {

  return (
    <main className="grid gap-6">
      {bookmarksLength > 0 ? (
        children
      ) : (
        <div className="mx-auto mt-32 flex w-full max-w-lg flex-col items-center justify-center gap-4">
          <BrushCleaning className="text-muted-foreground mb-5 size-24" />
          <h1 className="text-popover-foreground text-center text-4xl font-semibold">
            You haven’t saved anything yet
          </h1>
          <p className="text-muted-foreground text-center">
            Explore LearnFast{' '}
            <Link
              href="/courses"
              className="text-popover-foreground text-lg underline"
            >
              courses
            </Link>{' '}
            and start bookmarking your favorite learning resources.
          </p>
        </div>
      )}
    </main>
  )
}
