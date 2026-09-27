import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../data/site'
import Sparkle from './Sparkle'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="ANNA IZI — ALMA CELESTE">
          <span className="brand-mark">
            <Sparkle size={14} />
          </span>
          <span className="brand-name">
            <strong>ANNA IZI</strong>
            <span>Alma Celeste</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Основное меню">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="btn btn-light header-cta">
            Записаться
          </Link>
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
          <Link to="/contact" onClick={() => setOpen(false)}>
            Записаться
          </Link>
        </div>
      )}
    </>
  )
}
