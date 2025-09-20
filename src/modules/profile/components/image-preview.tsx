import Image from 'next/image'
import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ActionTooltip } from '@/modules/components/action-tooltip'

type Props = {
  image: string
  onDelete: VoidFunction
}

export function ImagePreview({ image, onDelete }: Props) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
      <Image src={image} alt="Image preview" fill className="object-cover" />
      <ActionTooltip tooltip="Remove">
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 z-10 size-8 rounded-full"
          onClick={onDelete}
        >
          <X />
        </Button>
      </ActionTooltip>
    </div>
  )
}
