import RevealWrapper from './RevealWrapper'

const icons = [
  { icon: '🧠', label: 'AI Styling' },
  { icon: '📅', label: 'Planner' },
  { icon: '🪞', label: 'Wardrobe' },
  { icon: '💬', label: 'StyleBot' },
  { icon: '🌟', label: 'Experts' },
]

export default function AllFeatures() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-background" aria-labelledby="all-heading">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center">
        <RevealWrapper className="flex flex-col items-center text-center max-w-2xl mb-16 md:mb-24">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Everything in One Place
          </p>
          <h2 id="all-heading" className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Cerope Does All This<br className="hidden md:block" />
            <em className="font-serif italic text-muted-foreground ml-2">&amp; More</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper className="w-full">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 w-full max-w-6xl mx-auto" role="list" aria-label="Cerope features">
            {icons.map((item, i) => (
              <div 
                key={item.label} 
                className="flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 rounded-[2rem] bg-muted/30 dark:bg-muted/10 border border-border/40 hover:border-border/80 hover:bg-background transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl w-[42%] sm:w-[30%] md:w-[22%] lg:w-[16%] group backdrop-blur-sm" 
                role="listitem"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div 
                  className="text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 transition-transform duration-500 group-hover:scale-110 drop-shadow-sm" 
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground/80 group-hover:text-foreground text-center tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper className="mt-16 md:mt-24">
          <a 
            href="#analyze" 
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-10 py-5 text-sm md:text-base font-medium transition-transform duration-300 hover:scale-105 hover:bg-foreground/90 active:scale-95 shadow-lg"
          >
            Start Your Style Journey
          </a>
        </RevealWrapper>
      </div>
    </section>
  )
}