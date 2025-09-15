export function ProfitSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-6 max-sm:px-16 md:gap-16">
      <h2 className="text-popover-foreground text-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
        Career investment that pays for itself 75x over
      </h2>
      <div className="flex items-center justify-between gap-5 max-md:flex-col md:gap-16">
        <div className="text-popover-foreground flex flex-col items-center justify-center gap-3">
          <p className="text-popover-foreground text-center text-lg">
            Median annual salary increase
          </p>
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">$8,143</p>
        </div>
        <div className="text-popover-foreground flex flex-col items-center justify-center gap-3">
          <p className="text-popover-foreground text-center text-lg">
            Higher promotion rate*
          </p>
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">68.5%</p>
        </div>
        <div className="text-popover-foreground flex flex-col items-center justify-center gap-3">
          <p className="text-popover-foreground text-center text-lg">
            Reported positive career impact
          </p>
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">94%</p>
        </div>
      </div>
      <p className="text-muted-foreground text-center text-sm max-lg:px-6 max-sm:px-0">
        * 17.2% of LearnFast members reported receiving a promotion, while 10.2%
        being an industry average, according to Radford Workforce Trend Reports
      </p>
    </section>
  )
}
