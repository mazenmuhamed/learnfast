import {
  Award,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  Clock,
  Earth,
  LucideIcon,
  Smartphone,
  Wifi,
  Zap,
} from 'lucide-react'
import Image from 'next/image'

type Props = {
  instructorName: string
  instructorAvatar: string
  duration: number
  level: string
  lessonsCount: number
  createdAt: Date
}

export function DetailsSection({
  instructorName,
  instructorAvatar,
  duration,
  level,
  lessonsCount,
  createdAt,
}: Props) {
  return (
    <div className="grid gap-8">
      <div className="grid gap-3">
        <h2 className="text-muted-foreground text-[13px] font-semibold uppercase opacity-80">
          Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={instructorAvatar}
                alt={instructorName}
                width={22}
                height={22}
                className="h-full rounded-full object-cover"
              />
              <span className="text-sm font-medium">by {instructorName}</span>
            </div>
            <DetailItem icon={ChartNoAxesCombined} label={`${level} Level`} />
            <DetailItem
              icon={Clock}
              label={`About ${Math.floor(duration / 60)} hours to complete`}
            />
            <DetailItem icon={Zap} label="Gamified and interactive" />
            <DetailItem
              icon={BookOpen}
              label={`${lessonsCount} lessons, 3 levels`}
            />
          </div>
          <div className="grid gap-5">
            <DetailItem icon={Award} label="Certificate of completion" />
            <DetailItem icon={Earth} label="English language" />
            <DetailItem icon={Smartphone} label="Learn on iOS or Android" />
            <DetailItem icon={Wifi} label="Online at your own pace" />
            <DetailItem
              icon={CalendarDays}
              label={`Created at ${createdAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}`}
            />
          </div>
        </div>
      </div>
      <div className="my-4 grid gap-2">
        <h2 className="text-muted-foreground text-[13px] font-semibold uppercase opacity-80">
          Pre requisites
        </h2>
        <p className="text-[15px] font-medium sm:text-base">
          No prior experience is required to take this course.
        </p>
      </div>
    </div>
  )
}

type DetailItemProps = {
  icon: LucideIcon
  label: string
}

function DetailItem({ icon: Icon, label }: DetailItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-muted-foreground size-[22px]" />
      <span className="text-sm">{label}</span>
    </div>
  )
}
