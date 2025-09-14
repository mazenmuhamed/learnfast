import { LoaderIcon } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex h-[calc(100svh-8.5rem)] items-center justify-center">
      <LoaderIcon className="size-5 animate-spin" />
    </div>
  )
}
