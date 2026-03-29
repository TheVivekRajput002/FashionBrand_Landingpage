import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero — Cerope AI Fashion Platform">
      <div className="hero-left">
        <span className="hero-tag">AI-Powered Fashion</span>
        <h1>
          Elevate Your<br />
          <em>Wardrobe,</em><br />
          Style Your Vibe
        </h1>
        <p className="hero-sub">
          Cerope blends AI intelligence with personal style — discover what truly suits you,
          curate your wardrobe, and step out with confidence every day.
        </p>
        <div className="hero-actions">
          <a href="#analyze" className="btn-primary">Discover Your Style</a>
          <a href="#stylebot" className="btn-ghost">Meet StyleBot</a>
        </div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <div className="hero-card-stack">
          <div className="hero-card hero-card-accent overflow-hidden relative border-0">
            <Image src="/images/fashion/5.webp" alt="Body shape analysis" fill className="object-cover opacity-50" />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20">
              <p className="card-label text-white">Body Shape</p>
              <p className="card-sub text-white/80">Analyzed</p>
            </div>
          </div>
          <div className="hero-card hero-card-accent2 overflow-hidden relative border-0">
             <Image src="/images/fashion/6.webp" alt="Style reference" fill className="object-cover opacity-60" />
          </div>
          <div className="hero-card hero-card-main overflow-hidden relative border-0">
            <Image src="/images/fashion/7.webp" alt="Cerope AI Styling" fill className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end pb-4 px-2">
              <p className="card-label text-white text-sm">Cerope AI</p>
              <p className="card-sub text-white/80">Style Intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}