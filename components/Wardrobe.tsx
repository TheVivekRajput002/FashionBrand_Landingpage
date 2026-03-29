import RevealWrapper from './RevealWrapper'
import { VerticalImageStack } from './ui/vertical-image-stack'

export default function Wardrobe() {
  return (
    <section className="wardrobe-section flex flex-col lg:flex-row items-center gap-12 lg:gap-24 container mx-auto px-4 md:px-8 py-24" id="wardrobe" aria-labelledby="wardrobe-heading">
      <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
        <RevealWrapper>
          <p className="section-tag mb-4 inline-block text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">Virtual Wardrobe</p>
          <h2 id="wardrobe-heading" className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-foreground mb-6">
            Your Personal<br />
            <em className="font-serif italic text-muted-foreground">3D Wardrobe</em>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-lg">
            Store every piece you own. Mix and match digitally in real 3D space. See complete outfits before
            you even step into your closet — no more morning panic.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium transition-transform hover:scale-105 shadow-md">
              Open Wardrobe
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 text-sm font-medium transition-transform hover:scale-105 border border-border/50">
              Add Pieces
            </a>
          </div>
        </RevealWrapper>
      </div>

      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <RevealWrapper className="w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-card border border-border/40 relative">
          <VerticalImageStack />
        </RevealWrapper>
      </div>
    </section>
  )
}