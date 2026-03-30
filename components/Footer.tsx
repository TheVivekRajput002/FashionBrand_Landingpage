'use client'
import { useState } from 'react'

const CeropeLogo = () => (
  <a href="#" className="nav-logo">
    <img 
      src="/logo-black.svg" 
      alt="Cerope logo" 
      width="32" 
      height="32" 
      className="nav-logo-svg footer-logo" 
      style={{ filter: 'var(--logo-filter, invert(1))', objectFit: 'contain' }} 
    />
    Cerope
  </a>
)

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer>
      <div className="footer-grid">
        {/* Brand col */}
        <div className="footer-brand">
          <CeropeLogo />
          <p className="footer-tagline">
            Dressed by intelligence. Defined by you.
          </p>
          {/* Newsletter */}
          <form className="footer-newsletter" onSubmit={handleSubscribe} aria-label="Newsletter signup">
            {subscribed ? (
              <p className="footer-newsletter-thanks">✦ You're on the list!</p>
            ) : (
              <>
                <input
                  type="email"
                  className="footer-newsletter-input"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">→</button>
              </>
            )}
          </form>
        </div>

        {/* Features col — first for mobile reading order */}
        <div className="footer-col footer-col-features">
          <h4>Features</h4>
          <ul>
            {['Body Analysis','StyleBot','Virtual Wardrobe','Outfit Planner','Expert Connect'].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {['Home','Contact Us','Feedback','Careers',"FAQ's"].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Policies</h4>
          <ul>
            {['Terms and Conditions','Copyright Policy','Privacy Policy','Cookies Policy'].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social links + copyright */}
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Cerope. All rights reserved.</span>
        <div className="footer-social" aria-label="Social media links">
          {[
            { label: 'Instagram', icon: '📸', href: '#' },
            { label: 'TikTok',    icon: '🎵', href: '#' },
            { label: 'Pinterest', icon: '📌', href: '#' },
          ].map(({ label, icon, href }) => (
            <a key={label} href={href} className="footer-social-link" aria-label={label} title={label}>
              {icon}
            </a>
          ))}
        </div>
        <span className="footer-copy">Made with intelligence ✦ style</span>
      </div>
    </footer>
  )
}