import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BlurFade } from '../../animations/blur-fade'

export function JoinBox() {
  return (
    <BlurFade inView duration={0.6} delay={0.4} direction="up">
      <div className="bg-popover text-popover-foreground my-6 grid w-full grid-cols-2 items-center justify-between rounded-3xl p-8 max-lg:grid-cols-1 max-lg:gap-8 max-md:gap-6 sm:p-12 md:my-10 md:p-14 lg:gap-20 lg:p-20">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/trusted-and-love/people.webp"
            alt="People"
            width={180}
            height={180}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            className="h-12 w-fit rounded-lg object-contain"
          />
          <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl">
            Join 400,000+ UX & Product pros who grow their career with LearnFast
          </h3>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-muted-foreground opacity-80 md:text-xl">
            Thousands of professionals are using LearnFast to learn faster, get
            promoted, and grow in the AI-powered product world. You’re next.
          </p>
          <div className="flex flex-col gap-2">
            <Button size="lg" className="h-12 w-full text-lg">
              Join the community
            </Button>
            <Button size="lg" variant="ghost" className="h-12 w-full text-lg">
              Explore the platform
            </Button>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}
