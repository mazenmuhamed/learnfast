import { Check } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const goals = [
  { title: 'Start your first quiz', completed: false },
  { title: 'Complete a lesson quiz', completed: false },
  { title: 'Complete your profile', completed: true },
]

export function GoalsBox() {
  return (
    <Card className="h-fit rounded-2xl">
      <CardHeader>
        <CardTitle>Getting started</CardTitle>
        <CardDescription>
          Unlock your Aha! moment by working through these quick, rewarding
          steps:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 [&>button]:justify-between">
          {goals.map((goal, index) => (
            <Button key={index} variant="outline" disabled={goal.completed}>
              {goal.title}
              <Badge
                variant={goal.completed ? 'default' : 'outline'}
                className="size-6 rounded-full"
              >
                <Check className="size-4" />
              </Badge>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
