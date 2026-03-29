'use client'
import { useState } from 'react'

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [isDark, setIsDark] = useState(true)

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
                <a href="#features" onClick={closeDrawer}>Features</a>
                <a href="#analyze" onClick={closeDrawer}>Analyze</a>
                <a href="#wardrobe" onClick={closeDrawer}>Wardrobe</a>
                <a href="#stylebot" onClick={closeDrawer}>StyleBot</a>
                <a href="#experts" onClick={closeDrawer}>Experts</a>
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
            <nav className="main-nav" role="navigation" aria-label="Main navigation">
                <a href="#" className="nav-logo">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cerope logo" width="32" height="32">
                        <title>Cerope</title>
                        <path
                            d="M4 16C4 14 8 8 14 9.5C18 10.5 18 10.5 22 9.5C28 8 28 16 22 18.5C18 20 14 19 12 21C10 23 9 25 8 24C6 22 4 20 4 16Z"
                            stroke="#CBC8FF"
                            strokeWidth="1.2"
                            fill="none"
                        />
                    </svg>
                    Cerope
                </a>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#analyze">Analyze</a></li>
                    <li><a href="#wardrobe">Wardrobe</a></li>
                    <li><a href="#stylebot">StyleBot</a></li>
                    <li><a href="#experts">Experts</a></li>
                </ul>
                <div className="nav-right">
                    <button
                        className="icon-btn"
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title="Toggle theme"
                    >
                        {isDark ? '☀️' : '🌙'}
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