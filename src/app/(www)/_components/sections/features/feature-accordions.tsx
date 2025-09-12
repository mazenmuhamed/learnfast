import { useState } from 'react'
import {
  ArrowRight,
  ClipboardList,
  FileBadge,
  GraduationCap,
  PencilRuler,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BlurFade } from '../../animations/blur-fade'

const data = [
  {
    icon: GraduationCap,
    title: 'Interactive courses & career paths',
    description:
      'Build a strong foundation in UX design and AI with our guided courses and career paths. Whether you’re just starting out or looking to sharpen your skills, our interactive lessons help you grow step by step — no matter your role or experience level.',
  },
  {
    icon: ClipboardList,
    title: 'Skill assessments',
    description:
      'Track your skills in UX, product, and AI literacy with LearnFast’s adaptive assessments. Our data-driven Skill Graph shows exactly where you stand — and with AI-powered insights, you’ll get personalized guidance on what to improve and how to grow, whether you’re learning solo or scaling a team.',
  },
  {
    icon: FileBadge,
    title: 'Professional certifications',
    description:
      'LearnFast’s exam-based design certification helps you stand out and showcase your expertise to employers and peers, advancing your career in the competitive design industry.',
  },
  {
    icon: PencilRuler,
    title: 'Real-world projects',
    description:
      'Gain hands-on design experience with real-world projects, build your portfolio, and improve your work through expert feedback from mentors and community leaders.',
  },
]

export function FeatureAccordions() {
  const [activeAccordion, setActiveAccordion] = useState('item-0')

  return (
    <BlurFade inView duration={0.6} delay={0.4} direction="up">
      <div className="grid grid-cols-1">
        <div className="mx-auto w-full max-w-3xl">
          <Accordion
            type="single"
            collapsible={true}
            defaultValue="item-0"
            onValueChange={value => setActiveAccordion(value)}
          >
            {data.map((feature, index) => (
              <AccordionItem key={index} value={'item-' + index}>
                <AccordionTrigger className="py-4 text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <feature.icon
                      className={cn(
                        'size-6',
                        activeAccordion === 'item-' + index && 'text-primary',
                      )}
                    />
                    {feature.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="mt-2 flex flex-col gap-3 text-base">
                  {feature.description}
                  <Button
                    variant="ghost"
                    className="group text-primary w-fit !px-0 hover:bg-transparent focus:bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </BlurFade>
  )
}
