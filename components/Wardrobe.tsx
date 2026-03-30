import RevealWrapper from './RevealWrapper'
import { VerticalImageStack } from './ui/vertical-image-stack'

export default function Wardrobe() {
  return (
    <section className="wardrobe-section" id="wardrobe" aria-labelledby="wardrobe-heading">
      <div className="wardrobe-inner">
        {/* Text Column */}
        <div className="wardrobe-text">
          <RevealWrapper>
            <h2 id="wardrobe-heading">
              Your Personal<br />
              <em>3D Wardrobe</em>
            </h2>
            <p className="section-intro">
              Store every piece you own. Mix and match digitally in real 3D space. See complete outfits before
              you even step into your closet — no more morning panic.
            </p>
            <div className="wardrobe-actions">
              <a href="#" className="btn-primary">Open Wardrobe</a>
              <a href="#" className="btn-ghost">Add Pieces</a>
            </div>
          </RevealWrapper>
        </div>

        {/* Visual Column */}
        <div className="wardrobe-visual">
          <RevealWrapper className="wardrobe-visual-inner">
            <VerticalImageStack />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}