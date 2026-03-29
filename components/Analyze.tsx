import RevealWrapper from './RevealWrapper'

export default function Analyze() {
  return (
    <section className="analyze-section" id="analyze" aria-labelledby="analyze-heading">
      <div className="analyze-grid">
        <RevealWrapper>
          <p className="section-tag">AI Analysis</p>
          <h2 id="analyze-heading">
            Style Starts with<br /><em>Knowing Yourself</em>
          </h2>
          <p className="section-intro" style={{ marginBottom: '1.5rem' }}>
            Click a coupon to unlock a personalised analysis. Our AI examines your body shape
            and skin type to recommend what truly flatters you.
          </p>
          <a href="#" className="btn-primary">View All Analyses</a>
        </RevealWrapper>

        <RevealWrapper>
          <div className="analyze-cards">
            <button className="coupon-card" aria-label="Upload your image to discover your body shape — analyze now">
              <div className="coupon-thumb body" aria-hidden="true">👆</div>
              <div>
                <p className="coupon-label">Upload Your Image</p>
                <p className="coupon-desc">Discover your Body Shape — Analyze Now</p>
              </div>
            </button>
            <button className="coupon-card" aria-label="Upload your image to discover your skin type — analyze now">
              <div className="coupon-thumb skin" aria-hidden="true">👆</div>
              <div>
                <p className="coupon-label">Upload Your Image</p>
                <p className="coupon-desc">Discover your Skin Type — Analyze Now</p>
              </div>
            </button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}