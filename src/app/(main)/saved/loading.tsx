import { LoaderIcon } from 'lucide-react'

// TODO: Replace with a better skeleton loader
export default function Loading() {
  return (
    <div className="flex h-[75svh] items-center justify-center">
      <LoaderIcon className="size-5 animate-spin" />
    </div>
  )
}
