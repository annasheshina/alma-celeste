import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import ReviewsBlock from '../components/ReviewsBlock'
import { coursePage } from '../data/content'
import { TELEGRAM_URL } from '../data/site'
import heroImg from '../assets/program-course.jpg'
import portrait from '../assets/portrait-anna.jpg'

export default function AstrologyForYou() {
  const c = coursePage
  return (
    <>
      <PageHero image={heroImg} breadcrumb="Программы · Курс" title={c.heroTitle} subtitle={c.heroSub}>
        <p className="hero-role" style={{ maxWidth: 'none' }}>
          {c.heroBadge}
        </p>
        <div className="hero-actions">
          <Button to={TELEGRAM_URL} variant="light">
            {c.cta}
          </Button>
        </div>
      </PageHero>

      {/* Что даст курс */}
      <section className="section natal-intro">
        <div className="container">
          <div className="natal-intro-inner">
            <span className="natal-ornament" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" />
              </svg>
            </span>
            <h2 className="natal-intro-title display">
              Что даст
              <br />
              этот курс
            </h2>
            <ul className="solar-shows">
              {c.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Автор курса */}
      <section className="section tight">
        <div className="container">
          <div className="course-author">
            <div className="course-author-photo">
              <img src={portrait} alt="Анна Изюмова" />
            </div>
            <div className="course-author-info">
              <p className="guide-includes-label">{c.author.role}</p>
              <h2 className="guide-title display">{c.author.name}</h2>
              <p className="guide-tagline">{c.author.bio}</p>
              <ul className="check-list">
                {c.author.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Программа */}
      <section className="section tight" id="program">
        <div className="container">
          <SectionTitle index="02" title="Программа" note={c.moduleLabel} />
          <div className="weeks-grid">
            {c.weeks.map((w, i) => (
              <article className="week-card" key={w.title}>
                <div className="guide-meta">
                  <span className="guide-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="week-num">{w.num}</span>
                </div>
                <h3 className="week-title display">{w.title}</h3>
                <p className="week-sub">{w.sub}</p>
                <ul className="check-list">
                  {w.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {w.result && <p className="week-result">{w.result}</p>}
                {w.bonus && <p className="week-bonus">{w.bonus}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Формат + бонусы */}
      <section className="section tight">
        <div className="container course-format-grid">
          <div>
            <SectionTitle index="03" title="Формат" />
            <ul className="check-list" style={{ maxWidth: 560 }}>
              {c.format.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle index="04" title="Бонусы модуля" />
            <ul className="check-list" style={{ maxWidth: 560 }}>
              {c.bonuses.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="today-bonus">
              <p className="today-bonus-label">Для тех, кто покупает сегодня</p>
              <p className="today-bonus-title">{c.todayBonus.title}</p>
              <p className="today-bonus-text">{c.todayBonus.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Цена */}
      <section className="section tight">
        <div className="container">
          <div className="price-block">
            <p className="guide-includes-label">Стоимость модуля</p>
            <div className="price-row">
              <span className="price-current display">{c.price}</span>
              <span className="price-old">{c.oldPrice}</span>
            </div>
            <Button to={TELEGRAM_URL} variant="dark">
              {c.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="section tight">
        <div className="container">
          <SectionTitle index="05" title="Отзывы моих клиентов и учеников" />
          <ReviewsBlock />
        </div>
      </section>

      <Footer />
    </>
  )
}
