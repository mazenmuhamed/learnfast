import CareerGrowthCards from './career-growth-cards'

export function CareerGrowth() {
  return (
    <section className="main-container flex flex-col items-center gap-20 py-20">
      <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <h2 className="text-center text-5xl font-semibold">
          Everything you need for a successful career growth
        </h2>
        <p className="text-muted-foreground text-xl">
          Stop bouncing from tool to tool to track your skill growth. Uxcel
          offers a complete suite of tools for modern product professionals.
        </p>
      </div>
      <CareerGrowthCards />
      <div className="grid w-full grid-cols-3 justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-6xl font-bold">400K+</p>
          <p className="text-muted-foreground">members upskill with Uxcel</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-6xl font-bold">3M+</p>
          <p className="text-muted-foreground">learning modules completed</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-6xl font-bold">4.7/5</p>
          <p className="text-muted-foreground">
            average course rating from our learners
          </p>
        </div>
      </div>
    </section>
  )
}
