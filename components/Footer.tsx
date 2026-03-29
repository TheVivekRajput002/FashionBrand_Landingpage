const CeropeLogo = () => (
  <a href="#" className="nav-logo">
    <svg viewBox="0 0 32 32" fill="none" role="img" aria-label="Cerope" width="32" height="32">
      <title>Cerope</title>
      <path d="M4 16C4 14 8 8 14 9.5C18 10.5 18 10.5 22 9.5C28 8 28 16 22 18.5C18 20 14 19 12 21C10 23 9 25 8 24C6 22 4 20 4 16Z" stroke="#CBC8FF" strokeWidth="1.2" fill="none" />
    </svg>
    Cerope
  </a>
)

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <CeropeLogo />
          <p className="footer-tagline">
            Revolutionizing fashion with AI-powered styling solutions. Your style, elevated.
          </p>
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
        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            {['Body Analysis','StyleBot','Virtual Wardrobe','Outfit Planner','Expert Connect'].map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Cerope. All rights reserved.</span>
        <span className="footer-copy">Made with intelligence ✦ style</span>
      </div>
    </footer>
  )
}