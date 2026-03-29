import RevealWrapper from './RevealWrapper'
import VerticalTabs from './ui/vertical-tabs'

export default function Experts() {
  return (
    <section className="experts-section" id="experts" aria-labelledby="experts-heading" style={{ overflow: 'hidden' }}>
      <RevealWrapper>
        <p className="section-tag center">Human + AI</p>
        <h2 id="experts-heading" style={{ textAlign: 'center', margin: '.5rem auto 1rem' }}>
          Meet Our <em>Style Experts</em>
        </h2>
        <p className="section-intro" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
          When AI isn't enough, our network of rigorously vetted fashion professionals is just one tap away.
          Every expert is handpicked for their speciality, cultural fluency, and styling track record.
        </p>
      </RevealWrapper>

      <RevealWrapper>
        <VerticalTabs />
      </RevealWrapper>
    </section>
  )
}