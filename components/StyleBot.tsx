'use client'
import { useState, useEffect, useRef } from 'react'
import RevealWrapper from './RevealWrapper'

const PLACEHOLDERS = [
  'a rooftop dinner...',
  'a job interview...',
  'a beach holiday...',
  'a first date...',
  'a gallery opening...',
]

const initialMessages = [
  { role: 'bot', text: "Hi! I'm StyleBot 👋 What are you dressing for today?" },
  { role: 'user', text: 'I have a rooftop dinner this Saturday evening.' },
  { role: 'bot', text: 'Chic! For a rooftop evening — think flowy midi dress in deep plum or midnight navy. Layer a structured blazer for cooler air. Block heels keep you steady and polished.' },
  { role: 'user', text: 'What brands work for my budget of ₹3,000?' },
]

export default function StyleBot() {
  const [messages, setMessages] = useState(initialMessages)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const [phIdx, setPhIdx] = useState(0)
  const chatBodyRef = useRef<HTMLDivElement>(null)

  // Cycling placeholder
  useEffect(() => {
    const iv = setInterval(() => setPhIdx((p) => (p + 1) % PLACEHOLDERS.length), 3000)
    return () => clearInterval(iv)
  }, [])

  // Intro typing animation + brand-tier reply
  useEffect(() => {
    const t1 = setTimeout(() => setTyping(true), 2800)
    const t2 = setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Under ₹3,000? Try Zara for elevated basics, Mango for structured pieces, or H&M for trend-forward looks — all ship fast and hold up well. Want a curated cart?' },
      ])
    }, 5000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    if (chatBodyRef.current) chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
  }, [messages, typing])

  const sendMsg = () => {
    const val = input.trim()
    if (!val) return
    setMessages((prev) => [...prev, { role: 'user', text: val }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: "Great choice! I'm curating personalised picks based on your style profile — open the full StyleBot for your complete look." },
      ])
    }, 1800)
  }

  return (
    <section className="stylebot-section" id="stylebot" aria-labelledby="stylebot-heading">
      <div className="stylebot-inner">
        <RevealWrapper>
          <p className="section-tag">AI Assistant</p>
          <h2 id="stylebot-heading">
            What to Wear?<br /><em>Ask StyleBot</em>
          </h2>
          <p className="section-intro" style={{ marginBottom: '1.5rem' }}>
            Your personal smart fashion assistant — available 24/7. Ask anything from outfit
            pairings to seasonal transitions to brand comparisons.
          </p>
          <a href="#" className="btn-primary">Chat with StyleBot</a>
        </RevealWrapper>

        <RevealWrapper className="chat-window" role="log" aria-label="StyleBot conversation preview" aria-live="polite">
          <div className="chat-header">
            <span className="chat-dot" aria-hidden="true" />
            <span className="chat-title">StyleBot · Online</span>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role === 'bot' ? 'msg-bot' : 'msg-user'}`}>
                {msg.role === 'bot' && (
                  <span className="msg-avatar" aria-hidden="true">C</span>
                )}
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="typing" aria-label="StyleBot is typing">
                <span className="msg-avatar" aria-hidden="true">C</span>
                <span /><span /><span />
              </div>
            )}
          </div>

          <div className="chat-input-bar">
            <label htmlFor="chatInput" className="sr-only">Ask StyleBot a fashion question</label>
            <input
              className="chat-input"
              type="search"
              id="chatInput"
              placeholder={`Suggest an outfit for ${PLACEHOLDERS[phIdx]}`}
              autoComplete="off"
              spellCheck={false}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
            />
            <button className="chat-send" onClick={sendMsg} aria-label="Send message">→</button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}