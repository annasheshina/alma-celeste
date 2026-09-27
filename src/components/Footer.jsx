import { Link } from 'react-router-dom'
import { FOOTER_LINKS, SOCIALS } from '../data/site'
import Sparkle from './Sparkle'

function SocialIcon({ id }) {
  if (id === 'instagram')
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    )
  if (id === 'telegram')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.9 4.6 18.8 19c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-.9.5l.3-4.6 8.4-7.6c.4-.3-.1-.5-.6-.2l-10.4 6.5-4.5-1.4c-1-.3-1-1 .2-1.4l17.5-6.8c.8-.3 1.5.2 1.2 1.1Z" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 8.2c-.2-1.4-1-2.4-2.3-2.6C17.6 5.2 12 5.2 12 5.2s-5.6 0-7.7.4C3 5.8 2.2 6.8 2 8.2 1.8 9.6 1.8 12 1.8 12s0 2.4.2 3.8c.2 1.4 1 2.4 2.3 2.6 2.1.4 7.7.4 7.7.4s5.6 0 7.7-.4c1.3-.2 2.1-1.2 2.3-2.6.2-1.4.2-3.8.2-3.8s0-2.4-.2-3.8ZM9.9 15V9l5.2 3-5.2 3Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="brand" aria-label="ANNA IZI — ALMA CELESTE">
            <span className="brand-mark">
              <Sparkle size={14} />
            </span>
            <span className="brand-name">
              <strong>ANNA IZI</strong>
              <span>Alma Celeste</span>
            </span>
          </Link>
          <nav className="footer-nav" aria-label="Меню в подвале">
            {FOOTER_LINKS.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.id}
                className="social-link"
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <SocialIcon id={s.id} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© ANNA IZI · Alma Celeste</span>
          <span>Астрология как путь к себе</span>
        </div>
      </div>
    </footer>
  )
}
