import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, TELEGRAM_URL } from '../data/site'
import Sparkle from './Sparkle'
import BrandName from './BrandName'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="АННА ИЗИ — ALMA CELESTE">
          <span className="brand-mark">
            <Sparkle size={14} />
          </span>
          <BrandName />
        </Link>
        <nav className="main-nav" aria-label="Основное меню">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="btn btn-light header-cta">
            Записаться
          </a>
          <button
            className="menu-toggle"
            aria-label="Открыть меню"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Записаться
          </a>
        </div>
      )}
    </>
  )
}
