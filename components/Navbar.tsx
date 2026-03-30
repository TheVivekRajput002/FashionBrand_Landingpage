'use client'
import { useState, useEffect, useRef } from 'react'
import { Sun, Moon } from 'lucide-react'

const NAV_SECTIONS = ['features', 'analyze', 'wardrobe', 'stylebot', 'experts']

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [isDark, setIsDark] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    // Scroll shrink logic
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Active section via IntersectionObserver
    useEffect(() => {
        const observers: IntersectionObserver[] = []
        NAV_SECTIONS.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id)
                },
                { threshold: 0.35 }
            )
            obs.observe(el)
            observers.push(obs)
        })
        return () => observers.forEach((o) => o.disconnect())
    }, [])

    const openDrawer = () => {
        setDrawerOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeDrawer = () => {
        setDrawerOpen(false)
        document.body.style.overflow = ''
    }

    const toggleTheme = () => {
        const next = !isDark
        setIsDark(next)
        document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
    }

    return (
        <>
            {/* OVERLAY */}
            <div
                className={`nav-overlay ${drawerOpen ? 'open' : ''}`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            {/* DRAWER */}
            <nav
                className={`nav-drawer ${drawerOpen ? 'open' : ''}`}
                id="navDrawer"
                aria-label="Mobile navigation"
                role="dialog"
                aria-modal="true"
            >
                <button className="drawer-close" onClick={closeDrawer} aria-label="Close menu">✕</button>
                {NAV_SECTIONS.map((id) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={closeDrawer}
                        className={activeSection === id ? 'active' : ''}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
                <a
                    href="#analyze"
                    onClick={closeDrawer}
                    className="btn-primary"
                    style={{ marginTop: '1.5rem', justifyContent: 'center' }}
                >
                    Get Started
                </a>
            </nav>

            {/* MAIN NAV */}
            <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
                <a href="#" className="nav-logo">
                    <img 
                        src="/logo-black.svg" 
                        alt="Cerope logo" 
                        width="32" 
                        height="32" 
                        className="nav-logo-svg" 
                        style={{ filter: isDark ? 'invert(1)' : 'none', objectFit: 'contain' }} 
                    />
                    Cerope
                </a>
                <ul className="nav-links">
                    {NAV_SECTIONS.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={activeSection === id ? 'active' : ''}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav-right">
                    <button
                        className="icon-btn"
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title="Toggle theme"
                        style={{ position: 'relative' }}
                    >
                        <Sun 
                            className={`absolute transition-all duration-500 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} 
                            size={20} 
                            strokeWidth={1.5}
                        />
                        <Moon 
                            className={`absolute transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} 
                            size={20} 
                            strokeWidth={1.5}
                        />
                    </button>
                    <a href="#analyze" className="nav-cta">Get Started</a>
                    <button
                        className="icon-btn hamburger"
                        onClick={openDrawer}
                        aria-label="Open navigation menu"
                        aria-expanded={drawerOpen}
                        aria-controls="navDrawer"
                    >
                        ☰
                    </button>
                </div>
            </nav>
        </>
    )
}