import RevealWrapper from './RevealWrapper'
import VerticalTabs from './ui/vertical-tabs'

export default function Experts() {
  return (
    <section className="experts-section" id="experts" aria-labelledby="experts-heading" style={{ overflow: 'hidden' }}>
      <RevealWrapper>
        <p className="section-tag center">Human + AI</p>
        <p className="section-intro" style={{ margin: '.75rem auto 3rem', textAlign: 'center' }}>
          When AI isn't enough, our network of curated fashion professionals is just one tap away.
        </p>
      </RevealWrapper>

      <RevealWrapper>
        <VerticalTabs />
      </RevealWrapper>
    </section>
  )
}