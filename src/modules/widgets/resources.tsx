import Image from 'next/image'

const items = [
  {
    title: 'Mobile App',
    description: 'Download our mobile app for on-the-go learning.',
    image: '/logos/qr-app.png',
  },
  {
    title: 'Slack App',
    description: 'Join our Slack community for support and networking.',
    image: '/logos/slack.png',
  },
  {
    title: 'Figma Templates',
    description: 'Explore our Figma templates for design projects.',
    image: '/logos/figma.png',
  },
  {
    title: 'Notion Templates',
    description: 'Discover templates to improve your workflow.',
    image: '/logos/notion.png',
  },
  {
    title: 'Discord Community',
    description: 'Connect with members for discussions and events.',
    image: '/logos/discord.png',
  },
  {
    title: 'Reddit Community',
    description: 'Explore trending topics, stories, and helpful advice.',
    image: '/logos/reddit.png',
  },
]

export function Resources() {
  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-semibold">Resources</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="card-hover group grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border p-2 pr-4"
          >
            <div className="bg-secondary/80 dark:bg-input/40 flex size-24 items-center justify-center overflow-hidden rounded-xl border backdrop-blur-2xl">
              <Image
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <h3 className="text-[17px] font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
