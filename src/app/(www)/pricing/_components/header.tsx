'use client'

import { useState } from 'react'

import { Switch } from '@/components/ui/switch'

import { PriceCard } from './price-card'

export function Header() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <header className="flex flex-col gap-5 max-sm:px-5">
      <h1 className="text-popover-foreground text-center text-4xl leading-tight font-bold md:text-5xl">
        Pricing Plans
      </h1>
      <div className="flex items-center justify-center gap-3">
        <span
          data-active={isYearly ? true : false}
          className="text-muted-foreground data-[active=false]:text-popover-foreground hover:text-popover-foreground cursor-pointer font-medium transition"
          onClick={() => setIsYearly(false)}
        >
          Pay Monthly
        </span>
        <Switch
          checked={isYearly}
          aria-label="Toggle billing period "
          className="scale-110 cursor-pointer"
          onCheckedChange={() => setIsYearly(prev => !prev)}
        />
        <span
          data-active={isYearly ? 'true' : undefined}
          className="text-muted-foreground data-[active=true]:text-popover-foreground hover:text-popover-foreground cursor-pointer font-medium transition"
          onClick={() => setIsYearly(true)}
        >
          Save with Yearly
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-6 max-[768px]:grid-cols-1 sm:px-5">
        <PriceCard
          isCurrentPlan
          type="Starter"
          note="limited access"
          price="Free"
          description="Basic access to interactive learning and skill-building tools."
          features={[
            'Every first course level free',
            'Projects & community feedback',
            'Benchmarking assessments',
            'Professional profile',
            'Arcade games',
            'Discord community',
          ]}
        />
        <PriceCard
          type="Pro"
          price={isYearly ? '$8/mo' : '$19/mo'}
          isYearlyActive={isYearly}
          note={isYearly ? 'Save $132 | billed yearly' : 'Billed monthly'}
          description="Unlimited access to all learning content and professional tools."
          features={[
            'Access LearnFast’s full content library',
            'Course certificates and industry-leading certifications',
            'Mentor-led project reviews',
            'Advanced professional profile',
            'Guided career paths',
            'Full mobile app access',
            'Pro-only community & events',
          ]}
        />
      </div>
    </header>
  )
}
