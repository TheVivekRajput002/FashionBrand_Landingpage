const items = [
  'Body Shape Analysis', 'Skin Type Detection', 'AI StyleBot',
  'Virtual Wardrobe', 'Outfit Planner', 'Brand Recommendations',
  'Fashion Experts', 'Seasonal Guides',
]

export default function MarqueeSection() {
  const doubled = [...items, ...items] // seamless loop

  return (
    <div className="marquee-wrap" aria-hidden="true" role="presentation">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}