import { useState } from 'react'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import ReviewsBlock from '../components/ReviewsBlock'
import CTASection from '../components/CTASection'
import SectionTitle from '../components/SectionTitle'
import { shotReviews } from '../data/reviews'
import bandBg from '../assets/band-mountains.jpg'

export default function Reviews() {
  const [open, setOpen] = useState(null)
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

      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="02"
            title="Живые отзывы из чатов"
            note="Сообщения участниц марафонов и программ — как есть."
          />
          <div className="shot-grid">
            {shotReviews.map((s, i) => (
              <button
                className="shot-card"
                key={s.src}
                onClick={() => setOpen(i)}
                aria-label="Открыть отзыв крупно"
              >
                <img src={s.src} alt="" loading="lazy" />
                <span className="shot-tag">{s.tag}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="shot-lightbox" onClick={() => setOpen(null)}>
          <button className="shot-close" aria-label="Закрыть">
            ×
          </button>
          <img src={shotReviews[open].src} alt="" />
        </div>
      )}

      <CTASection />
      <Footer />
    </>
  )
}
