import { Check } from 'lucide-react'

export function SkillsGainSection({ data }: { data: string[] }) {
  return (
    <div className="grid gap-6">
      <h2 className="text-popover-foreground text-2xl font-semibold">
        Skills you’ll gain with course:
      </h2>
      <div className="grid gap-4">
        {data.map((skill, index) => {
          const heading = skill.split('—')[0]
          const description = skill.split('—')[1]
          return (
            <div key={index} className="flex min-h-10 items-start gap-3">
              <div className="bg-primary text-primary-foreground flex size-5 min-h-5 min-w-5 translate-y-1 items-center justify-center rounded-full sm:size-[22px] sm:min-h-[22px] sm:min-w-[22px]">
                <Check className="size-4 sm:size-[18px]" />
              </div>
              <p className="text-[15px] leading-normal sm:text-base">
                <span className="font-semibold">{heading}</span>
                <span>— {description}</span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
