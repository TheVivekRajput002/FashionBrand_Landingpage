import RevealWrapper from './RevealWrapper'

const items = [
  { icon: '👗', label: 'Dress' }, { icon: '🧥', label: 'Coat' },
  { icon: '👔', label: 'Shirt' }, { icon: '👖', label: 'Trousers' },
  { icon: '👠', label: 'Heels' }, { icon: '👒', label: 'Hat' },
  { icon: '👜', label: 'Bag' },  { icon: '🧣', label: 'Scarf' },
  { icon: '🥻', label: 'Saree' },{ icon: '🧤', label: 'Gloves' },
  { icon: '👗', label: 'Another dress' }, { icon: '✨', label: 'Add more' },
]

export default function Wardrobe() {
  return (
    <section className="wardrobe-section" id="wardrobe" aria-labelledby="wardrobe-heading">
      <div className="wardrobe-inner">
        <RevealWrapper>
          <div className="wardrobe-frame" aria-label="Virtual wardrobe preview">
            <p className="wardrobe-label">Your Virtual Wardrobe</p>
            <div className="wardrobe-grid" role="list" aria-label="Wardrobe items">
              {items.map((item, i) => (
                <div key={i} className="w-item" role="listitem" tabIndex={0} aria-label={item.label}>
                  {item.icon}
                </div>
              ))}
            </div>
            <p className="wardrobe-hint">Mix and match pieces to create the perfect look</p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <p className="section-tag">Virtual Wardrobe</p>
          <h2 id="wardrobe-heading">
            Your Personal<br /><em>3D Wardrobe</em>
          </h2>
          <p className="section-intro" style={{ marginBottom: '1.5rem' }}>
            Store every piece you own. Mix and match digitally. See complete outfits before
            you get dressed — no more morning panic.
          </p>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            <a href="#" className="btn-primary">Open Wardrobe</a>
            <a href="#" className="btn-ghost">Add Pieces</a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}