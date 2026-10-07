import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { guideJournals, guideSteps } from '../data/products'
import { TELEGRAM_URL } from '../data/site'

const STEP_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" key="1">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M8 3v4M16 3v4M4 10h16" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" key="2">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2.4" />
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" key="3">
    <circle cx="12" cy="12" r="5.5" />
    <ellipse cx="12" cy="12" rx="10" ry="3.4" transform="rotate(-18 12 12)" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" key="4">
    <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" key="5">
    <path d="M4 6c2.7-1.4 5.3-1.4 8 0 2.7-1.4 5.3-1.4 8 0v13c-2.7-1.4-5.3-1.4-8 0-2.7-1.4-5.3-1.4-8 0z" />
    <path d="M12 6v13" />
  </svg>,
]

export default function NatalChart() {
  return (
    <>
      <PageHero
        breadcrumb="Продукты · Натальная карта"
        title="Натальная карта"
        subtitle="Твоя карта — это не просто описание тебя, а ключ к более осознанной, наполненной и гармоничной жизни."
      />

      {/* 01 — введение */}
      <section className="section natal-intro">
        <div className="container">
          <div className="natal-intro-inner">
            <span className="natal-ornament" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" />
              </svg>
            </span>
            <h2 className="natal-intro-title display">
              Натальная карта —
              <br />
              ключ к твоим возможностям.
            </h2>
            <p className="natal-intro-text">
              Натальная карта — это уникальная карта неба в момент твоего рождения.
            </p>
            <p className="natal-intro-text">
              Она помогает увидеть свои особенности, сильные стороны и точки роста, а затем
              использовать это знание в реальной жизни.
            </p>

          </div>
        </div>
      </section>

      {/* 02–03 — гайд-журналы */}
      <section className="section tight" id="guides">
        <div className="container">
          {guideJournals.map((g) => (
            <article
              key={g.id}
              className={`guide-product${g.mirrored ? ' guide-product--rev' : ''}`}
            >
              <div className="guide-info">
                <div className="guide-meta">
                  <span className="guide-index">{g.index}</span>
                  <span className="guide-glyph" aria-hidden="true">
                    {g.symbol}
                  </span>
                </div>
                <h2 className="guide-title display">{g.title}</h2>
                <p className="guide-tagline">{g.tagline}</p>
                <p className="guide-desc">{g.description}</p>
                <p className="guide-includes-label">{g.includesLabel}</p>
                <ul className="check-list">
                  {g.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="guide-buy">
                  <span className="guide-price">
                    {g.price}
                    {g.priceNote && <span className="guide-price-note">{g.priceNote}</span>}
                  </span>
                  <Button to={g.ctaUrl || TELEGRAM_URL} variant="dark">
                    {g.cta}
                  </Button>
                </div>
              </div>
              <div className="guide-visual">
                <img className="guide-journal" src={g.image} alt={g.imageAlt} />
                {g.imageCaption && (
                  <p className="guide-caption display">{g.imageCaption}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04 — как создаются гайд-журналы */}
      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="03"
            title="Как создаются твои гайд-журналы"
            note="Это не универсальные рекомендации, а персональный разбор твоей натальной карты."
          />
          <ol className="guide-steps">
            {guideSteps.map((s, i) => (
              <li className="guide-step" key={s.num}>
                <span className="guide-step-ico" aria-hidden="true">
                  {STEP_ICONS[i]}
                </span>
                <span className="guide-step-num">{s.num}</span>
                <span className="guide-step-title">{s.title}</span>
                {s.sub && <span className="guide-step-sub">{s.sub}</span>}
                {i < guideSteps.length - 1 && (
                  <span className="guide-step-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05–06 — финальные текстовые блоки */}
      <section className="section natal-final">
        <div className="container natal-final-grid">
          <div className="final-block">
            <h2 className="final-title display">
              Твоя натальная карта —<br />
              это не ограничения,
              <br />
              а возможности.
            </h2>
            <p className="final-text">
              Когда ты понимаешь свои особенности, ты можешь опираться на свои сильные стороны,
              мягко работать с вызовами и создавать жизнь, которая действительно подходит тебе.
            </p>
            <a className="btn btn-dark" href="#guides">
              <span>Выбрать свой гайд</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="final-block">
            <h2 className="final-title display">А если хочется глубже?</h2>
            <p className="final-text">
              Гайды — это прекрасный способ начать знакомство с астрологией и конкретной сферой
              своей жизни. Если ты хочешь увидеть всю картину, задать вопросы и получить
              индивидуальные рекомендации — можно выбрать личную консультацию.
            </p>
            <Button to="/consultation" variant="dark">
              Личная консультация
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
