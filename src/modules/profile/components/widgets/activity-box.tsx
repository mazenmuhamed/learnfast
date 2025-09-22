'use client'

import { useState } from 'react'
import {
  BookOpen,
  Clock,
  Earth,
  Eye,
  FileBadge,
  GraduationCap,
  Handshake,
  Heart,
  MessageSquareText,
  PencilRuler,
  type LucideIcon,
} from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ActivityBox() {
  const [selectedTab, setSelectedTab] = useState<'learning' | 'community'>(
    'learning',
  )

  return (
    <Tabs
      defaultValue={selectedTab || 'learning'}
      onValueChange={value => setSelectedTab(value as 'learning' | 'community')}
    >
      <Card className="h-fit rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Your activity</CardTitle>
          <CardDescription className="text-muted-foreground leading-none">
            Track your learning and the community.
          </CardDescription>
        </CardHeader>
        <TabsList className="[&>button]:data-[state=active]:text-primary! w-full space-x-2 bg-transparent px-6 [&>button]:h-8">
          <TabsTrigger value="learning">
            <BookOpen />
            Learning
          </TabsTrigger>
          <TabsTrigger value="community">
            <Earth />
            Community
          </TabsTrigger>
        </TabsList>
        <CardContent>
          <TabsContent value="learning">
            <div className="grid grid-cols-2 gap-4">
              <ActivityBoxItem label="Courses" icon={GraduationCap} value={0} />
              <ActivityBoxItem label="Briefs" icon={PencilRuler} value={0} />
              <ActivityBoxItem label="Assessments" icon={FileBadge} value={0} />
              <ActivityBoxItem label="Hours" icon={Clock} value={0} />
            </div>
          </TabsContent>
          <TabsContent value="community">
            <div className="grid grid-cols-2 gap-4">
              <ActivityBoxItem
                label="Project reviews"
                icon={MessageSquareText}
                value={0}
              />
              <ActivityBoxItem
                label="Reviews (total claps)"
                icon={Handshake}
                value={0}
              />
              <ActivityBoxItem label="Impressions" icon={Heart} value={0} />
              <ActivityBoxItem label="Profile views" icon={Eye} value={0} />
            </div>
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  )
}

type ActivityBoxItemProps = {
  label: string
  icon: LucideIcon
  value: number
}

function ActivityBoxItem({ label, icon: Icon, value }: ActivityBoxItemProps) {
  return (
    <div className="grid gap-1.5">
      <p className="text-muted-foreground text-sm">{label}</p>
      <div className="text-popover-foreground flex items-center gap-2">
        <Icon className="size-[22px]" />
        <p className="leading-none font-medium">{value}</p>
      </div>
    </div>
  )
}
