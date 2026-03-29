'use client'
import { HTMLAttributes, useEffect, useRef, ReactNode } from 'react'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: string   // e.g. "100ms", "200ms" — staggers the reveal transition
}

export default function RevealWrapper({ children, className = '', delay, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: delay } : undefined}
      {...props}
    >
      {children}
    </div>
  )
}