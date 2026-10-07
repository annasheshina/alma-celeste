import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { forecastGuides, forecastSteps } from '../data/products'
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

const SOLAR_SHOWS = [
  'какая сфера жизни становится центральной',
  'куда направляется энергия года',
  'какие темы могут выйти на первый план',
  'какие возможности стоит замечать',
  'на что важно обратить внимание',
]

export default function Forecast() {
  const [mini, deep] = forecastGuides
  return (
    <>
      <PageHero
        breadcrumb="Прогноз · Соляр"
        title={'Твой новый год\nначинается здесь.'}
        subtitle="Узнай главную тему своего года, почувствуй его направление и получи ориентиры, которые помогут использовать его возможности."
      >
        <a className="btn btn-light" href="#formats">
          <span>Выбрать свой формат</span>
          <span aria-hidden="true">→</span>
        </a>
      </PageHero>

      {/* Что такое соляр */}
      <section className="section natal-intro">
        <div className="container">
          <div className="natal-intro-inner">
            <span className="natal-ornament" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" />
              </svg>
            </span>
            <h2 className="natal-intro-title display">Что такое соляр?</h2>
            <p className="natal-intro-text">
              Соляр — это астрологический прогноз на твой личный год, который начинается в
              момент возвращения Солнца к его положению в натальной карте.
            </p>
            <p className="solar-shows-label">Он помогает увидеть:</p>
            <ul className="solar-shows">
              {SOLAR_SHOWS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Мини-прогноз — типографический, без изображения */}
      <section className="section tight" id="formats">
        <div className="container">
          <article className="guide-product guide-product--mini">
            <div className="guide-info">
              <div className="guide-meta">
                <span className="guide-index">{mini.index}</span>
                <span className="guide-glyph" aria-hidden="true">
                  {mini.symbol}
                </span>
              </div>
              <h2 className="guide-title display">{mini.title}</h2>
              <p className="guide-tagline">{mini.tagline}</p>
              <p className="guide-desc">{mini.description}</p>
              <span className="guide-price">{mini.price}</span>
            </div>
            <div className="guide-side">
              <p className="guide-includes-label">{mini.includesLabel}</p>
              <ol className="guide-toc">
                {mini.includes.map((item, i) => (
                  <li key={item.title}>
                    <span className="guide-toc-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="guide-toc-body">
                      <span className="guide-toc-title">{item.title}</span>
                      <span className="guide-toc-text">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="guide-actions">
              <Button to={mini.ctaUrl || TELEGRAM_URL} variant="dark">
                {mini.cta}
              </Button>
              <p className="guide-format">{mini.format}</p>
            </div>
          </article>

          {/* Глубокий прогноз — с реальным мокапом */}
          <article className="guide-product guide-product--deep">
            <div className="guide-info">
              <div className="guide-meta">
                <span className="guide-index">{deep.index}</span>
                <span className="guide-glyph" aria-hidden="true">
                  {deep.symbol}
                </span>
              </div>
              <h2 className="guide-title display">{deep.title}</h2>
              <p className="guide-tagline">{deep.tagline}</p>
              <p className="guide-desc">{deep.description}</p>
              <p className="guide-includes-label">{deep.includesLabel}</p>
              <ol className="guide-toc guide-toc--grid">
                {deep.includes.map((item, i) => (
                  <li key={item.title}>
                    <span className="guide-toc-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="guide-toc-body">
                      <span className="guide-toc-title">{item.title}</span>
                      <span className="guide-toc-text">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <span className="guide-price">{deep.price}</span>
            </div>
            <div className="guide-visual">
              <img className="guide-journal" src={deep.image} alt={deep.imageAlt} />
              {deep.bonus && <p className="guide-bonus">{deep.bonus}</p>}
            </div>
            <div className="guide-actions">
              <Button to={deep.ctaUrl || TELEGRAM_URL} variant="dark">
                {deep.cta}
              </Button>
              <p className="guide-format">{deep.format}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Как создаётся прогноз */}
      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="03"
            title="Как создаётся твой прогноз"
            note="Это не универсальные рекомендации, а персональный разбор твоей натальной карты."
          />
          <ol className="guide-steps">
            {forecastSteps.map((s, i) => (
              <li className="guide-step" key={s.num}>
                <span className="guide-step-ico" aria-hidden="true">
                  {STEP_ICONS[i]}
                </span>
                <span className="guide-step-num">{s.num}</span>
                <span className="guide-step-title">{s.title}</span>
                {s.sub && <span className="guide-step-sub">{s.sub}</span>}
                {i < forecastSteps.length - 1 && (
                  <span className="guide-step-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Финальные текстовые блоки */}
      <section className="section natal-final">
        <div className="container natal-final-grid">
          <div className="final-block">
            <h2 className="final-title display">
              Твой год —<br />
              это про возможности.
            </h2>
            <p className="final-text">
              Когда ты понимаешь, куда направлена энергия года, ты можешь вовремя замечать
              важные возможности и создавать год, который действительно подходит тебе.
            </p>
            <a className="btn btn-dark" href="#formats">
              <span>Выбрать свой формат</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="final-block">
            <h2 className="final-title display">А если хочется глубже?</h2>
            <p className="final-text">
              Прогноз помогает увидеть картину года, но если ты хочешь рассмотреть свою карту
              глубже, задать вопросы и получить индивидуальные рекомендации — можно выбрать
              личную консультацию.
            </p>
            <div className="final-actions">
              <Button to="/consultation" variant="dark">
                Личная консультация
              </Button>
              <Button to="/reviews#prognozy" variant="ghost-dark">
                Отзывы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
