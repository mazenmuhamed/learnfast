import { UserOutput } from '@/lib/types'

import { Separator } from '@/components/ui/separator'
import { ProfileCover } from './profile-cover'
import { ProfileDetails } from './profile-details'

export function ProfileHeader({ user }: { user: UserOutput }) {
  return (
    <div className="grid gap-8">
      <ProfileCover
        id={user.id}
        name={user.name}
        avatar={user.image}
        coverUrl={user.coverUrl}
        backgroundColor={user.backgroundColor}
      />
      <div className="mt-12 grid gap-6 px-2 md:px-8">
        <ProfileDetails user={user} />
        <Separator />
      </div>
    </div>
  )
}
