import RevealWrapper from './RevealWrapper'
import { Brain, Calendar, Shirt, MessageSquare, Star } from 'lucide-react'

const icons = [
  { icon: <Brain size={32} strokeWidth={1.5} />, label: 'AI Styling' },
  { icon: <Calendar size={32} strokeWidth={1.5} />, label: 'Planner' },
  { icon: <Shirt size={32} strokeWidth={1.5} />, label: 'Wardrobe' },
  { icon: <MessageSquare size={32} strokeWidth={1.5} />, label: 'StyleBot' },
  { icon: <Star size={32} strokeWidth={1.5} />, label: 'Experts' },
]

export default function AllFeatures() {
  return (
    <section className="all-section" aria-labelledby="all-heading">
      <RevealWrapper className="all-section-header">
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