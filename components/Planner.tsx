import RevealWrapper from './RevealWrapper'

// Days with outfits planned
const outfitDays = new Set([2, 6, 9, 12, 15, 20, 24, 30])
const today = 29

// March 2026 starts on Sunday; with Mon-first grid, offset = 6
const OFFSET = 6
const TOTAL_DAYS = 31

export default function Planner() {
  const cells = []
  for (let i = 0; i < OFFSET; i++) cells.push(null)
  for (let d = 1; d <= TOTAL_DAYS; d++) cells.push(d)

  return (
    <section className="planner-section" id="planner" aria-labelledby="planner-heading">
      <div className="planner-inner">
        <RevealWrapper>
          <p className="section-tag">Outfit Planner</p>
          <h2 id="planner-heading">
            Plan Your Outfits,<br /><em>No Last-Min Panics</em>
          </h2>
          <p className="section-intro" style={{ marginBottom: '1.5rem' }}>
            Map outfits to every event, occasion, and everyday moment. Your week, perfectly styled in advance.
          </p>
          <a href="#" className="btn-primary">Open Planner</a>
        </RevealWrapper>

        <RevealWrapper>
          <div className="mini-cal" role="grid" aria-label="Outfit planner — March 2026">
            <div className="cal-header">
              <span className="cal-month">March 2026</span>
              <div className="cal-nav">
                <button className="cal-btn" aria-label="Previous month">‹</button>
                <button className="cal-btn" aria-label="Next month">›</button>
              </div>
            </div>
            <div className="cal-grid" role="row">
              {['Mo','Tu','We','Th','Fr','Sa','Su'].map((d) => (
                <div key={d} className="cal-day-name" role="columnheader">{d}</div>
              ))}
              {cells.map((day, i) => {
                if (!day) return <div key={`e${i}`} className="cal-day" role="gridcell" />
                const isToday = day === today
                const hasOutfit = outfitDays.has(day)
                const cls = `cal-day${isToday ? ' today' : hasOutfit ? ' outfit' : ''}`
                return (
                  <div
                    key={day}
                    className={cls}
                    tabIndex={0}
                    role="gridcell"
                    aria-current={isToday ? 'date' : undefined}
                    aria-label={
                      isToday ? `Today, March ${day}` :
                      hasOutfit ? `March ${day}, outfit planned` : undefined
                    }
                  >
                    {day}
                  </div>
                )
              })}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}