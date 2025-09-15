import Image from 'next/image'
import { Star } from 'lucide-react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const data = [
  {
    content:
      'LearnFast has been incredibly insightful and has helped me grow as a designer. The platform is easy to use and packed with valuable information that has enhanced my skills and knowledge in UX/UI design.',
    name: 'Paulette Moreno',
    role: 'Product Designer',
    avatar: '/images/users/user-1.jpg',
  },
  {
    content:
      'I highly recommend LearnFast to anyone looking to improve their design skills. The courses are well-structured, engaging, and taught by industry experts. The platform has helped me stay up-to-date with the latest design trends and techniques.',
    name: 'Darryl Mcgee',
    role: 'UX Designer',
    avatar: '/images/users/user-2.jpg',
  },
  {
    content:
      'LearnFast has transformed the way I approach design. The hands-on exercises and real-world projects have been invaluable in helping me build a strong portfolio.',
    name: 'Alex Johnson',
    role: 'UI Designer',
    avatar: '/images/users/user-3.jpg',
  },
  {
    content:
      "The community aspect of LearnFast is fantastic. I have connected with other designers, shared ideas, and received feedback on my work. It's a supportive and inspiring environment that has helped me grow both personally and professionally.",
    name: 'Samantha Lee',
    role: 'Visual Designer',
    avatar: '/images/users/user-4.jpg',
  },
  {
    content:
      'LearnFast has been a game-changer for my design career. The platform offers a wide range of courses that cater to different skill levels and interests. The instructors are knowledgeable and passionate about design, making the learning experience enjoyable and effective.',
    name: 'Michael Smith',
    role: 'Interaction Designer',
    avatar: '/courses/users/user-5.jpg',
  },
  {
    content:
      "The hands-on projects and real-world scenarios presented in the courses have been instrumental in helping me apply what I've learned. I feel much more confident in my design skills now.",
    name: 'Emily Davis',
    role: 'Product Designer',
    avatar: '/courses/users/user-6.jpg',
  },
  {
    content:
      'LearnFast has exceeded my expectations. The platform is user-friendly, and the courses are well-structured and easy to follow. I appreciate the practical approach to learning, which has helped me gain valuable skills that I can apply in my work.',
    name: 'Sophia Turner',
    role: 'UX Researcher',
    avatar: '/courses/users/user-7.jpg',
  },
  {
    content:
      "I've tried several online design platforms, but LearnFast stands out for its quality content and engaging learning experience. The platform has helped me stay motivated and inspired to continue improving my design skills.",
    name: 'James Wilson',
    role: 'UI/UX Designer',
    avatar: '/courses/users/user-8.jpg',
  },
  {
    content:
      'LearnFast has been a valuable resource for my design journey. The platform offers a wide range of courses that cover various design topics, allowing me to explore different areas of interest and expand my skill set.',
    name: 'Olivia Brown',
    role: 'Visual Designer',
    avatar: '/courses/users/user-9.jpg',
  },
  {
    content:
      'The interactive exercises and quizzes have been instrumental in reinforcing my learning. I appreciate the practical approach to design education that LearnFast offers.',
    name: 'Liam Johnson',
    role: 'UX Designer',
    avatar: '/courses/users/user-10.jpg',
  },
]

const logos = [
  '/icons/companies/logo-5.svg',
  '/icons/companies/logo-6.svg',
  '/icons/companies/logo-7.svg',
  '/icons/companies/logo-8.svg',
  '/icons/companies/logo-9.svg',
  '/icons/companies/logo-10.svg',
]

export function RatingSection() {
  return (
    <>
      <Carousel opts={{ align: 'start' }} className="w-full max-w-full">
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 [&_svg]:fill-yellow-500 [&_svg]:text-yellow-500">
              <Star className="size-5 sm:size-7" />
              <Star className="size-5 sm:size-7" />
              <Star className="size-5 sm:size-7" />
              <Star className="size-5 sm:size-7" />
              <Star className="size-5 !fill-yellow-500/20 !text-yellow-500/20 sm:size-7" />
            </div>
            <p className="text-popover-foreground text-2xl font-semibold">
              4.0
            </p>
            <p className="text-muted-foreground">(145)</p>
          </div>
          <div className="mb-2 flex items-center justify-between gap-5">
            <h2 className="text-popover-foreground text-lg font-semibold sm:text-xl md:text-2xl">
              Loved by learners from world’s top companies
            </h2>
            <div className="relative flex items-center justify-end gap-2">
              <CarouselPrevious className="relative inset-0 translate-0 rounded-lg" />
              <CarouselNext className="relative inset-0 translate-0 rounded-lg" />
            </div>
          </div>
          <CarouselContent className="-ml-4 max-w-full py-1 pl-1">
            {data.map((data, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3">
                <RatingBox {...data} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <div className="-my-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Company Logo"
            width={100}
            height={32}
            className="h-10 w-auto md:h-12 dark:invert"
          />
        ))}
      </div>
    </>
  )
}

type RatingBoxProps = {
  content: string
  name: string
  role: string
  avatar: string
}

function RatingBox({ content, name, role, avatar }: RatingBoxProps) {
  return (
    <div className="p-1">
      <Card className="card-hover aspect-square max-h-[19.5rem] w-full gap-4 rounded-2xl">
        <CardContent className="grid gap-3">
          <p className="text-muted-foreground">{content}</p>
        </CardContent>
        <CardFooter className="mt-auto grid gap-2">
          <div className="flex items-center gap-3">
            <Image
              src={avatar}
              alt={name}
              width={45}
              height={45}
              className="h-auto rounded-full object-contain"
            />
            <div className="grid leading-tight">
              <p className="font-medium">{name}</p>
              <p className="text-muted-foreground text-sm">{role}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
