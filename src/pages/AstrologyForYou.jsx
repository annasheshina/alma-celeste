import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import ReviewsBlock from '../components/ReviewsBlock'
import { coursePage } from '../data/content'
import heroImg from '../assets/program-course.jpg'
import portrait from '../assets/portrait-anna.jpg'
import astroImg from '../assets/course-astro.jpg'
import weekImg1 from '../assets/course-week-1.jpg'
import weekImg2 from '../assets/course-week-2.png'
import weekImg3 from '../assets/course-week-3.jpg'
import weekImg4 from '../assets/course-week-4.jpg'

const WEEK_IMAGES = [weekImg1, weekImg2, weekImg3, weekImg4]

export default function AstrologyForYou() {
  const c = coursePage
  return (
    <>
      <PageHero image={heroImg} breadcrumb="Программы · Курс" title={c.heroTitle} subtitle={c.heroSub}>
        <p className="hero-role" style={{ maxWidth: 'none' }}>
          {c.heroBadge}
        </p>
        <div className="hero-actions">
          <Button to={'https://t.me/m/Vi3xeY9_YmEy'} variant="light">
            {c.cta}
          </Button>
        </div>
      </PageHero>

      {/* Иллюстрация */}
      <section className="section tight">
        <div className="container">
          <div className="course-hero-art">
            <img src={astroImg} alt="Астрологическая карта" />
          </div>
        </div>
      </section>

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
          <div className="weeks-list">
            {c.weeks.map((w, i) => (
              <article className="week-card" key={w.title}>
                <div className="week-card-media">
                  <img src={WEEK_IMAGES[i]} alt={w.title} />
                </div>
                <div className="week-card-body">
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
                </div>
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
              <p className="today-bonus-label">Для тех, кто покупает на этой неделе</p>
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
            <div className="price-row price-row-col">
              <span className="price-old">{c.oldPrice}</span>
              <span className="price-current display">{c.price}</span>
            </div>
            <Button to={'https://t.me/m/Vi3xeY9_YmEy'} variant="dark">
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
          <div style={{ marginTop: 44 }}>
            <Button to="/reviews#astrologiya" variant="dark">
              Показать все отзывы
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
