'use client'

import { useState } from 'react'
import {
  AwardIcon,
  GraduationCap,
  MessageSquareText,
  Smartphone,
  User2,
  Users2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const individualFeatures = [
  { title: '100+ courses, projects & assessments', icon: GraduationCap },
  { title: 'Professional certifications', icon: AwardIcon },
  { title: 'Mentor-led project reviews', icon: MessageSquareText },
  { title: 'Full access on mobile', icon: Smartphone },
]

export function UpgradeBox() {
  const [selectedTab, setSelectedTab] = useState<'individual' | 'team'>(
    'individual',
  )

  return (
    <Card className="h-fit rounded-2xl">
      <Tabs
        defaultValue={selectedTab || 'individual'}
        onValueChange={value => setSelectedTab(value as 'individual' | 'team')}
      >
        <CardHeader className="">
          <CardTitle className="sr-only">Upgrade your plan</CardTitle>
          <TabsList className="[&>button]:data-[state=active]:text-primary! w-full space-x-2 bg-transparent [&>button]:h-9">
            <TabsTrigger value="individual">
              <User2 />
              Individual
            </TabsTrigger>
            <TabsTrigger value="team">
              <Users2 />
              Team
            </TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="individual">
            <div className="grid gap-3">
              <h4 className="text-[17px] font-medium">
                Unlock all features with a Pro plan:
              </h4>
              <ul className="grid gap-2">
                {individualFeatures.map(feature => (
                  <li
                    key={feature.title}
                    className="text-muted-foreground flex items-center gap-3 text-[15px]"
                  >
                    <feature.icon className="size-4" />
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-2 w-full">
                <Link href="/pricing">Get full access with Pro</Link>
              </Button>
              <p className="text-muted-foreground text-center text-xs">
                Billed monthly or annually. Cancel anytime.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="team">
            <div className="grid gap-3">
              <h4 className="text-[17px] font-medium">
                Training 2 or more people?
              </h4>
              <p className="text-muted-foreground text-sm">
                Empower your entire team with full access to LearnFast&lsquo;s
                feature set and learning library.
              </p>
              <Button asChild className="mt-2 w-full">
                <Link href="/pricing">LearnFast for Teams</Link>
              </Button>
              <p className="text-muted-foreground text-center text-xs">
                Billed monthly or annually. Cancel anytime.
              </p>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}
