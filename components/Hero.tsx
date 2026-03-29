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
          <div className="hero-card hero-card-accent">
            <p className="card-label">Body Shape</p>
            <p className="card-sub">Analyzed</p>
          </div>
          <div className="hero-card hero-card-accent2" />
          <div className="hero-card hero-card-main">
            <svg className="fashion-silhouette" viewBox="0 0 140 200" fill="none" aria-hidden="true">
              <ellipse cx="70" cy="28" rx="20" ry="22" fill="none" stroke="rgba(203,200,255,0.4)" strokeWidth="1" />
              <path d="M50 50 L30 90 L40 95 L55 75 L55 140 L85 140 L85 75 L100 95 L110 90 L90 50 Z" fill="none" stroke="rgba(152,140,242,0.5)" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M55 140 L50 190 L65 190 L70 155 L75 190 L90 190 L85 140 Z" fill="none" stroke="rgba(203,200,255,0.3)" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            <p className="card-label" style={{ marginTop: '1rem', fontSize: '.875rem' }}>Cerope AI</p>
            <p className="card-sub">Style Intelligence</p>
          </div>
        </div>
      </div>
    </section>
  )
}