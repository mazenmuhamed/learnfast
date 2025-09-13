'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

export function BackButton({ className }: { className?: string }) {
  const router = useRouter()

  return (
    <Button
      size="sm"
      variant="outline"
      className={cn('rounded-full', className)}
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Back
    </Button>
  )
}
