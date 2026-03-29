import RevealWrapper from './RevealWrapper'

const features = [
  { icon: '🪄', color: 'violet', title: 'Surprise Me', desc: 'Let Cerope curate a complete outfit from your wardrobe — or suggest new pieces that complement your existing collection.' },
  { icon: '✨', color: 'cyan',   title: 'Enhance My Outfit', desc: 'Upload your current look and get AI-powered suggestions to elevate it — accessories, layers, colour pairings and more.' },
  { icon: '🏷️', color: 'plum',  title: 'Brand Recommendations', desc: 'Discover brands that align with your body shape, skin tone, budget, and aesthetic — personalised just for you.' },
  { icon: '🌿', color: 'violet', title: 'Seasonal Transition', desc: 'Get a curated seasonal guide that transitions your wardrobe seamlessly — no more "I have nothing to wear" moments.' },
  { icon: '🎯', color: 'cyan',   title: 'Occasion Styling', desc: 'From boardrooms to brunches — choose an occasion and Cerope builds the perfect outfit for every vibe and venue.' },
  { icon: '👗', color: 'plum',   title: 'Mix & Match', desc: 'Drag, drop, and combine pieces from your virtual wardrobe to create and preview looks before you even get dressed.' },
]

export default function Features() {
  return (
    <section className="section" id="features" aria-labelledby="feat-heading">
      <RevealWrapper>
        <p className="section-tag">What Cerope Does</p>
        <h2 id="feat-heading">
          Fashion Intelligence,<br /><em>Reimagined</em>
        </h2>
        <p className="section-intro">
          Every feature is designed to make you feel seen, styled, and confident — powered by AI that understands your unique self.
        </p>
      </RevealWrapper>

      <div className="features-grid">
        {features.map((f, i) => (
          <RevealWrapper key={f.title} delay={`${i * 100}ms`}>
            <div className="feature-card">
              <div className={`feat-icon ${f.color}`} aria-hidden="true">{f.icon}</div>
              <p className="feat-title">{f.title}</p>
              <p className="feat-desc">{f.desc}</p>
              <a href="#" className="feat-link">Explore <span className="arrow" aria-hidden="true">→</span></a>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}