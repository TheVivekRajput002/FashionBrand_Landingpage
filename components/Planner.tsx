'use client'
import { useMemo } from 'react'
import RevealWrapper from './RevealWrapper'

// Days with outfits planned
const outfitLabels: Record<number, string> = {
  2: 'Casual Friday',
  6: 'Date Night',
  9: 'Board Meeting',
  12: 'Brunch Look',
  15: 'Street Style',
  20: 'Evening Gala',
  24: 'Gym & Coffee',
  30: 'Weekend Wrap',
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAY_NAMES = ['Mo','Tu','We','Th','Fr','Sa','Su']

export default function Planner() {
  const { monthLabel, cells, todayDate } = useMemo(() => {
    const now = new Date()
    const y = now.getFullYear()
    const m = now.getMonth()
    const todayDate = now.getDate()

    // Mon-first offset: getDay() returns 0=Sun…6=Sat; convert to Mon=0
    const firstDay = new Date(y, m, 1).getDay()
    const offset = (firstDay + 6) % 7
    const totalDays = new Date(y, m + 1, 0).getDate()

    const cells: (number | null)[] = []
    for (let i = 0; i < offset; i++) cells.push(null)
    for (let d = 1; d <= totalDays; d++) cells.push(d)

    return { monthLabel: `${MONTHS[m]} ${y}`, cells, todayDate }
  }, [])

  return (
    <section className="planner-section" id="planner" aria-labelledby="planner-heading">
      <div className="planner-inner">
        <RevealWrapper>
          <p className="section-tag">Outfit Planner</p>
          <h2 id="planner-heading">
            Plan Your Outfits,<br /><em>No Last-Min Panics</em>
          </h2>
          <p className="section-intro">
            Map outfits to every event, occasion, and everyday moment. Your week, perfectly styled in advance.
          </p>
          <a href="#" className="btn-primary" style={{ marginTop: '1.5rem' }}>Open Planner</a>
        </RevealWrapper>

        <RevealWrapper>
          <div className="mini-cal" role="grid" aria-label={`Outfit planner — ${monthLabel}`}>
            <div className="cal-header">
              <span className="cal-month">{monthLabel}</span>
              <div className="cal-nav">
                {/* Disabled nav — full calendar navigation is in the app */}
                <button className="cal-btn cal-btn-disabled" aria-label="Previous month" aria-disabled="true" tabIndex={-1}>‹</button>
                <button className="cal-btn cal-btn-disabled" aria-label="Next month" aria-disabled="true" tabIndex={-1}>›</button>
              </div>
            </div>
            <div className="cal-grid" role="row">
              {DAY_NAMES.map((d) => (
                <div key={d} className="cal-day-name" role="columnheader">{d}</div>
              ))}
              {cells.map((day, i) => {
                if (!day) return <div key={`e${i}`} className="cal-day" aria-hidden="true" />
                const isToday = day === todayDate
                const outfitLabel = outfitLabels[day]
                const cls = `cal-day${isToday ? ' today' : outfitLabel ? ' outfit' : ''}`
                return (
                  <div
                    key={day}
                    className={cls}
                    tabIndex={0}
                    role="gridcell"
                    aria-current={isToday ? 'date' : undefined}
                    aria-label={
                      isToday ? `Today, ${monthLabel.split(' ')[0]} ${day}` :
                      outfitLabel ? `${monthLabel.split(' ')[0]} ${day} — ${outfitLabel}` : undefined
                    }
                    title={outfitLabel}
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