'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Dribbble, Facebook, Github, Linkedin, Twitch } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const mainLinks = [
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Impact Report' },
  { href: '#', label: 'Wall of Love' },
  { href: '#', label: 'What’s New' },
  { href: '#', label: 'Product Roadmap' },
  { href: '#', label: 'Help Center' },
]

const categoriesLinks = [
  { href: '#', label: 'Pro Membership' },
  { href: '#', label: 'Courses' },
  { href: '#', label: 'Skill Assessments' },
  { href: '#', label: 'Project Briefs' },
  { href: '#', label: 'Tutorials' },
  { href: '#', label: 'Professional Profile' },
  { href: '#', label: 'Professional UX Certifications' },
  { href: '#', label: 'Salary Explorer' },
  { href: '#', label: 'Design Job Board' },
]

const communityLinks = [
  { href: '#', label: 'Community Events' },
  { href: '#', label: 'Designer Rankings' },
  { href: '#', label: 'Discord Community' },
  { href: '#', label: 'LearnFast Mentors' },
  { href: '#', label: 'LearnFast Instructors' },
  { href: '#', label: 'LearnFast Advocates' },
]

const resourcesLinks = [
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Learner Stories' },
  { href: '#', label: 'Customer Stories' },
  { href: '#', label: 'Guides' },
  { href: '#', label: 'LearnFast for Universities' },
  { href: '#', label: 'LearnFast for Non-profits' },
  { href: '#', label: 'Gift Membership' },
  { href: '#', label: 'Affiliate Program' },
  { href: '#', label: 'Write for Us' },
  { href: '#', label: 'Compare LearnFast' },
]

const businessLinks = [
  { href: '#', label: 'LearnFast Teams' },
  { href: '#', label: 'Design Leaders & Managers' },
  { href: '#', label: 'L&D Leaders and HR' },
  { href: '#', label: 'Design Team Training' },
  { href: '#', label: 'UX Skill Mapping' },
  { href: '#', label: 'For Technology Companies' },
  { href: '#', label: 'For Banking & Fintech Companies' },
  { href: '#', label: 'For Consulting & Agencies' },
]

const popularLinks = [
  { href: '#', label: 'UX Design Foundations' },
  { href: '#', label: 'UI Components I' },
  { href: '#', label: 'Common Design Patterns' },
  { href: '#', label: 'UX Research' },
  { href: '#', label: 'UX Writing' },
  { href: '#', label: 'Mobile Design' },
  { href: '#', label: 'AI in UX/UI Design' },
  { href: '#', label: 'View All' },
]

const assessmentsLinks = [
  { href: '#', label: 'LearnFast Pulse' },
  { href: '#', label: 'Figma Assessment' },
  { href: '#', label: 'Product Designer Certification' },
  { href: '#', label: 'UX/UI Designer Certification' },
  { href: '#', label: 'UX Designer Certification' },
  { href: '#', label: 'UX Writer Certification' },
  { href: '#', label: 'View All' },
]

export function Footer() {
  return (
    <div className="bg-popover text-popover-foreground">
      <div className="main-container flex flex-col">
        <div className="grid items-center gap-8 py-20 md:grid-cols-[1.6fr_0.4fr] md:justify-between md:gap-20">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Ready to bring your skills to the next level?
          </h2>
          <Button
            asChild
            size="lg"
            className="h-12 w-fit text-lg md:justify-self-end"
          >
            <Link href="/sign-up">Join to Community</Link>
          </Button>
        </div>
        <footer className="flex w-full flex-col gap-10 border-y py-20 lg:flex-row">
          <div className="flex w-full gap-8 max-lg:items-center lg:max-w-72 lg:flex-col">
            <div className="flex flex-col gap-8 max-lg:flex-1/2">
              <Link href="/" className="flex w-fit items-center gap-2">
                <Image
                  src="/brand/logo.svg"
                  alt="LearnFast Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto select-none dark:invert"
                  priority
                />
                <span className="text-lg font-semibold">LearnFA</span>
              </Link>
              <div className="flex flex-col gap-2">
                {mainLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-[15px] opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 max-sm:flex-col-reverse max-sm:items-center">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 max-lg:hidden [&_svg]:size-[18px] [&_svg]:cursor-pointer">
                  <Linkedin />
                  <Facebook />
                  <Github />
                  <Dribbble />
                  <Twitch />
                </div>
                <Image
                  src="/icons/AppStore.svg"
                  alt="App Store Logo"
                  width={150}
                  height={60}
                  priority
                  className="h-12 w-auto"
                />
                <Image
                  src="/icons/GooglePlay.svg"
                  alt="Google Play Logo"
                  width={150}
                  height={60}
                  priority
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex flex-col max-lg:gap-5">
                <div className="flex items-center gap-2 lg:hidden [&_svg]:size-[18px] [&_svg]:cursor-pointer">
                  <Linkedin />
                  <Facebook />
                  <Github />
                  <Dribbble />
                  <Twitch />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-x-5 gap-y-8 md:grid-cols-3">
            <FooterColumn title="Products" links={categoriesLinks} />
            <FooterColumn title="Community" links={communityLinks} />
            <FooterColumn title="Resources" links={resourcesLinks} />
            <FooterColumn
              title="LearnFast for Business"
              links={businessLinks}
            />
            <FooterColumn title="Popular Courses" links={popularLinks} />
            <FooterColumn
              title="Assessments & Career Certifications"
              links={assessmentsLinks}
            />
          </div>
        </footer>
        <div className="py-10 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} LearnFast Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="mb-2 text-[17px] font-semibold">{title}</h3>
      {links.map(link => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            'w-fit text-[15px] opacity-80 transition-opacity hover:opacity-100',
            link.label.toLowerCase() === 'view all' &&
              'text-primary font-medium',
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
