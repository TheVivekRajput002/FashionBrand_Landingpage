import RevealWrapper from './RevealWrapper'

export default function Analyze() {
  return (
    <section className="analyze-section" id="analyze" aria-labelledby="analyze-heading">
      <div className="analyze-grid">
        {/* Left: Header + CTA */}
        <RevealWrapper>
          <h2 id="analyze-heading">
            Style Starts with<br /><em>Knowing Yourself</em>
          </h2>
          <p className="section-intro">
            Click a card to unlock a personalised analysis. Our AI examines your body shape,
            skin type, and colour season to recommend what truly flatters you.
          </p>
          <a href="#" className="btn-primary" style={{ marginTop: '1.5rem' }}>
            Start Your Analysis
          </a>
        </RevealWrapper>

        {/* Right: Cards + decorative visual */}
        <RevealWrapper delay="100ms">
          <div className="analyze-cards">
            <button className="coupon-card" aria-label="Discover your body shape through AI analysis">
              <div className="coupon-thumb body" aria-hidden="true">🧍</div>
              <div>
                <p className="coupon-label">Body Shape Analysis</p>
                <p className="coupon-desc">Discover silhouettes that flatter you most</p>
              </div>
            </button>
            <button className="coupon-card" aria-label="Discover your skin type through AI analysis">
              <div className="coupon-thumb skin" aria-hidden="true">🎨</div>
              <div>
                <p className="coupon-label">Skin Type Analysis</p>
                <p className="coupon-desc">Find shades and formulas made for your skin</p>
              </div>
            </button>
            <button className="coupon-card" aria-label="Discover your colour season through AI analysis">
              <div className="coupon-thumb colour" aria-hidden="true">🌸</div>
              <div>
                <p className="coupon-label">Colour Season Analysis</p>
                <p className="coupon-desc">Unlock your seasonal palette for every look</p>
              </div>
            </button>
          </div>

          {/* Decorative AI diagram */}
          <div className="analyze-diagram" aria-hidden="true">
            <div className="analyze-diagram-core">
              <span>AI</span>
            </div>
            <div className="analyze-diagram-ring">
              {['Shape', 'Skin', 'Colour', 'Style', 'Brand', 'Season'].map((label) => (
                <div key={label} className="analyze-diagram-node">{label}</div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}