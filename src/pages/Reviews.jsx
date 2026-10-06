import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import ReviewsBlock from '../components/ReviewsBlock'
import CTASection from '../components/CTASection'
import SectionTitle from '../components/SectionTitle'
import { SHOT_SECTIONS } from '../data/reviews'
import Button from '../components/Button'
import bandBg from '../assets/band-mountains.jpg'

const FLAT = SHOT_SECTIONS.flatMap((sec) =>
  sec.shots.map((src) => ({ src, tag: sec.label }))
)

export default function Reviews() {
  const [open, setOpen] = useState(null)
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    let tries = 0
    const tick = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: tries === 0 ? 'instant' : 'smooth' })
      if (tries++ < 8 && document.readyState !== 'complete') setTimeout(tick, 250)
    }
    const t = setTimeout(tick, 50)
    return () => clearTimeout(t)
  }, [hash])

  const openAt = (secIdx, shotIdx) =>
    setOpen(
      SHOT_SECTIONS.slice(0, secIdx).reduce((n, s) => n + s.shots.length, 0) +
        shotIdx
    )
  const step = (d) =>
    setOpen((v) => (v === null ? v : (v + d + FLAT.length) % FLAT.length))

  return (
    <>
      <PageHero
        image={bandBg}
        title="Отзывы"
        subtitle="Реальные истории и результаты людей, с которыми мы работали."
      />
      <section className="section">
        <div className="container">
          <ReviewsBlock />
        </div>
      </section>

      {SHOT_SECTIONS.map((sec, si) => (
        <section className="section tight" key={sec.id} id={sec.id} style={{ scrollMarginTop: 90 }}>
          <div className="container">
            <SectionTitle
              index={String(si + 2).padStart(2, '0')}
              title={sec.label}
              note="Отзывы из Telegram-чата «Анна Изи. Отзывы» — как есть."
            />
            <div className="shot-grid">
              {sec.shots.map((src, i) => (
                <button
                  className="shot-card"
                  key={src}
                  onClick={() => openAt(si, i)}
                  aria-label="Открыть отзыв крупно"
                >
                  <img src={src} alt="" loading="lazy" />
                  <span className="shot-tag">{sec.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {open !== null && (
        <div className="shot-lightbox" onClick={() => setOpen(null)}>
          <button className="shot-close" aria-label="Закрыть">
            ×
          </button>
          <img src={FLAT[open].src} alt="" />
          <div className="shot-nav">
            <button
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              aria-label="Предыдущий отзыв"
            >
              ←
            </button>
            <span>{FLAT[open].tag}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              aria-label="Следующий отзыв"
            >
              →
            </button>
          </div>
        </div>
      )}

      <section className="section tight">
        <div className="container reviews-tg-cta">
          <p className="reviews-tg-note">
            Все отзывы публикуются в открытом чате — присоединяйтесь и читайте истории вживую.
          </p>
          <Button to="https://t.me/anna_izi_otziv" variant="dark">
            Читать все отзывы в Telegram
          </Button>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
