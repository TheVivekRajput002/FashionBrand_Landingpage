'use client'
import { HTMLAttributes, useEffect, useRef, ReactNode } from 'react'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function RevealWrapper({ children, className = '', ...props }: RevealProps) {
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
    <div ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  )
}