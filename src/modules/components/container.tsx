import { cn } from '@/lib/utils'

type Props = { children: React.ReactNode; className?: string }

/**
 * A responsive container component that arranges its children in a grid layout.
 * It consists of a main content area and a sticky sidebar, adapting to different
 * screen sizes for optimal display.
 */
export function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        'relative grid grid-cols-[1.8fr_1fr] gap-10 max-[1100px]:grid-cols-1 xl:gap-20',
        className,
      )}
    >
      {children}
    </div>
  )
}

function Content({ children, className }: Props) {
  return <div className={cn('grid gap-12', className)}>{children}</div>
}

type StickyAsideProps = Props & {
  hideOnMobile?: boolean
}

function StickyAside({
  children,
  className,
  hideOnMobile = true,
}: StickyAsideProps) {
  return (
    <aside
      className={cn('relative h-full', hideOnMobile && 'max-[1100px]:hidden')}
    >
      <div className={cn('sticky top-28 grid gap-5', className)}>
        {children}
      </div>
    </aside>
  )
}

/**
 * The main content area of the Container component, designed to hold the primary
 * content. It uses a grid layout with a gap between items and accepts additional
 */
Container.Content = Content
/**
 * A sticky column that remains sticky within the viewport as the user
 */
Container.StickyAside = StickyAside
