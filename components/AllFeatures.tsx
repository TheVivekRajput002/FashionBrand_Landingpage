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
    <section className="all-section" aria-labelledby="all-heading">
      <RevealWrapper className="all-section-header">
        <p className="all-section-tag">Everything in One Place</p>
        <h2 id="all-heading" className="all-section-title">
          Cerope Does All This<br />
          <em>&amp; More</em>
        </h2>
      </RevealWrapper>

      <RevealWrapper>
        <div className="all-icons" role="list" aria-label="Cerope features">
          {icons.map((item, i) => (
            <div
              key={item.label}
              className="all-icon-item"
              role="listitem"
            >
              <div
                className="all-icon"
                style={{ animationDelay: `${i * 0.5}s` }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <span className="all-icon-label">{item.label}</span>
            </div>
          ))}
        </div>
      </RevealWrapper>

      <RevealWrapper>
        <a href="#analyze" className="btn-primary">
          Start Your Style Journey
        </a>
      </RevealWrapper>
    </section>
  )
}