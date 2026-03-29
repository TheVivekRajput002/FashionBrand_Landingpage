'use client'
import { useState, useEffect, useRef } from 'react'

const initialMessages = [
  { role: 'bot', text: "Hi! I'm StyleBot 👋 What are you dressing for today?" },
  { role: 'user', text: 'I have a rooftop dinner this Saturday evening.' },
  { role: 'bot', text: 'Chic! For a rooftop evening — think flowy midi dress in deep plum or midnight navy. Layer a structured blazer for cooler air. Block heels keep you steady and polished.' },
  { role: 'user', text: 'What about accessories?' },
]

export default function StyleBot() {
  const [messages, setMessages] = useState(initialMessages)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const chatBodyRef = useRef<HTMLDivElement>(null)

  // Intro typing animation on mount
  useEffect(() => {
    const t1 = setTimeout(() => setTyping(true), 2800)
    const t2 = setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Gold hoops, a slim clutch, and a dainty necklace. Keep it tonal — let the silhouette do the talking.' },
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
        { role: 'bot', text: "Great question! I'm curating personalised recommendations based on your style profile — check the full StyleBot to get your complete look." },
      ])
    }, 1800)
  }

  return (
    <section className="stylebot-section" id="stylebot" aria-labelledby="stylebot-heading">
      <div className="stylebot-inner">
        <div className="reveal">
          <p className="section-tag">AI Assistant</p>
          <h2 id="stylebot-heading">
            Confused with<br />What to Buy?<br /><em>Ask StyleBot</em>
          </h2>
          <p className="section-intro" style={{ marginBottom: '1.5rem' }}>
            Your personal smart fashion assistant — available 24/7. Ask anything from outfit
            pairings to seasonal transitions to brand comparisons.
          </p>
          <a href="#" className="btn-primary">Chat with StyleBot</a>
        </div>

        <div className="chat-window reveal" role="log" aria-label="StyleBot conversation preview" aria-live="polite">
          <div className="chat-header">
            <span className="chat-dot" aria-hidden="true" />
            <span className="chat-title">StyleBot · Online</span>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role === 'bot' ? 'msg-bot' : 'msg-user'}`}>
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="typing" aria-label="StyleBot is typing">
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
              placeholder="Suggest an outfit for..."
              autoComplete="off"
              spellCheck={false}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
            />
            <button className="chat-send" onClick={sendMsg} aria-label="Send message">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}