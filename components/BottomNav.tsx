'use client'
import { useState, useEffect } from 'react'

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['features', 'analyze', 'wardrobe', 'stylebot', 'planner', 'experts']
    const sectionEls = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.45 }
    )

    sectionEls.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const isActive = (id: string) => activeSection === id ? 'active' : ''

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <div className="bottom-nav-inner">
        <a href="#" className={`bnav-item ${activeSection === 'home' ? 'active' : ''}`} aria-label="Home">
          <span className="bnav-icon" aria-hidden="true">🏠</span>
          <span className="bnav-label">Home</span>
        </a>
        <a href="#wardrobe" className={`bnav-item ${isActive('wardrobe')}`} aria-label="Wardrobe">
          <span className="bnav-icon" aria-hidden="true">👗</span>
          <span className="bnav-label">Wardrobe</span>
        </a>
        <a href="#stylebot" className={`bnav-item ${isActive('stylebot')}`} aria-label="StyleBot">
          <span className="bnav-icon" aria-hidden="true">💬</span>
          <span className="bnav-label">StyleBot</span>
        </a>
        <a href="#planner" className={`bnav-item ${isActive('planner')}`} aria-label="Planner">
          <span className="bnav-icon" aria-hidden="true">📅</span>
          <span className="bnav-label">Planner</span>
        </a>
        <a href="#experts" className={`bnav-item ${isActive('experts')}`} aria-label="Experts">
          <span className="bnav-icon" aria-hidden="true">🌟</span>
          <span className="bnav-label">Experts</span>
        </a>
      </div>
    </nav>
  )
}