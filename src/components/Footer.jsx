import { Link } from 'react-router-dom'
import { FOOTER_LINKS, LEGAL_DOCS, SOCIALS } from '../data/site'
import Sparkle from './Sparkle'
import BrandName from './BrandName'

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
  if (id === 'rutube')
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="4" />
        <path d="M10 9.2v5.6L15 12z" fill="currentColor" stroke="none" />
      </svg>
    )
  if (id === 'vk')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.658 4 8.234c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.56.744z" />
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
          <Link to="/" className="brand" aria-label="АННА ИЗИ — ALMA CELESTE">
            <span className="brand-mark">
              <Sparkle size={14} />
            </span>
            <BrandName />
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
          <nav className="footer-legal" aria-label="Документы">
            {LEGAL_DOCS.map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noreferrer">
                {d.label}
              </a>
            ))}
          </nav>
          <span>© АННА ИЗИ · Alma Celeste</span>
          <span>Астрология как путь к себе</span>
        </div>
      </div>
    </footer>
  )
}
