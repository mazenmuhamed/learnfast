import Link from 'next/link'
import Image from 'next/image'

export function Logo() {
  return (
    <Link href="/" className="flex w-fit items-center gap-2">
      <Image
        src="/brand/logo.svg"
        alt="Logo"
        width={27}
        height={27}
        className="object-contain"
        priority
      />
      <span className="text-lg font-semibold">LearnFast</span>
    </Link>
  )
}
