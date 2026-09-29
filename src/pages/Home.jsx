import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import TopicCard, { scrollToAnchor } from '../components/TopicCard'
import ServiceCard from '../components/ServiceCard'
import ProgramCard from '../components/ProgramCard'
import ReviewsBlock from '../components/ReviewsBlock'
import CTASection from '../components/CTASection'
import { topics, programs, deepFormat } from '../data/content'
import { astrologyServices } from '../data/products'
import { STATS, TELEGRAM_URL } from '../data/site'
import heroBg from '../assets/hero-main.jpg'
import heroBgMobile from '../assets/hero-main-mobile.jpg'
import bandBg from '../assets/band-mountains.jpg'
import quizBg from '../assets/program-venus.jpg'
import portrait from '../assets/portrait-anna.jpg'

const TICKER = ['Понять себя', 'Осознанность', 'Свобода', 'Новая версия себя']

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (!el) return
    const t = setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.classList.add('is-active')
    }, 150)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <picture>
          <source media="(max-width: 760px)" srcSet={heroBgMobile} />
          <img className="hero-bg" src={heroBg} alt="" />
        </picture>
        <div className="hero-veil" />
        <Header />
        <div className="container" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex' }}>
          <div className="hero-content">
            <h1 className="hero-title display">
              Астрология
              <br />
              как путь к себе
            </h1>
            <p className="hero-sub">
              Глубокие знания, которые помогают понять, прожить и создавать свою жизнь.
            </p>
            <p className="hero-role">
              Астролог, психолог и проводник в глубокую работу с собой.
            </p>
            <div className="hero-actions">
              <a
                href="#sec-about"
                className="btn btn-light"
                onClick={(e) => scrollToAnchor(e, 'sec-about')}
              >
                <span>Обо мне</span>
              </a>
              <a href="#programs" className="btn btn-ghost">
                <span>Посмотреть программы</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <span className="hero-vertical">Природа · Знания · Женственность · Свобода</span>
        <div className="hero-ticker">
          {TICKER.map((w, i) => (
            <span key={w}>
              {w}
              {i < TICKER.length - 1 && <span className="sep">✦</span>}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- с чем ко мне приходят ---------- */}
      <section className="section">
        <div className="container">
          <SectionTitle
            index="01"
            title="С чем ко мне приходят"
            note="У каждого свой запрос, но за ним всегда стоит одно — желание лучше понять себя и создавать свою жизнь."
          />
          <div className="topics-layout">
            <div className="topics-grid">
              {topics.map((t) => (
                <TopicCard key={t.id} topic={t} />
              ))}
            </div>
            <div className="quiz-panel">
              <img className="quiz-panel-bg" src={quizBg} alt="" />
              <div className="quiz-panel-veil" />
              <h3 className="quiz-title">Не знаете, что вам сейчас нужно?</h3>
              <p className="quiz-text">
                Пройдите короткий опрос — я помогу определить подходящий формат.
              </p>
              <Button to={TELEGRAM_URL} variant="dark">
                Подобрать формат
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- астрология ---------- */}
      <section className="section band on-photo" id="sec-astrology" style={{ scrollMarginTop: 90 }}>
        <img className="band-bg" src={bandBg} alt="" />
        <div className="band-veil" />
        <div className="container">
          <SectionTitle
            title="Астрология"
            note="Инструмент, который помогает лучше понять себя, свои циклы и направления, увидеть возможности и принимать решения осознанно."
            linkTo="/astrology"
            linkLabel="Все услуги →"
          />
          <div className="services-grid">
            {astrologyServices.map((s) => (
              <div className="scroll-anchor" id={`sec-${s.id}`} key={s.id}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- программы ---------- */}
      <section className="section" id="programs" style={{ scrollMarginTop: 90 }}>
        <div className="container">
          <SectionTitle
            index="02"
            title="Программы"
            note="Глубокие программы, которые соединяют астрологию, психологию и практики для реальных изменений."
          />
          <div className="programs-grid">
            {programs.map((p) => (
              <div className="scroll-anchor" id={`sec-${p.id}`} key={p.id}>
                <ProgramCard program={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- более глубокие форматы ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="03"
            title="Более глубокие форматы"
            note="Для тех, кто хочет не только понимать, но и менять свою жизнь."
          />
          <ProgramCard program={deepFormat} />
        </div>
      </section>

      {/* ---------- обо мне ---------- */}
      <section className="section" id="sec-about" style={{ scrollMarginTop: 60 }}>
        <div className="container">
          <div className="about-layout">
            <div>
              <span className="section-index">04</span>
              <h2 className="about-title display">Обо мне</h2>
              <p className="about-text">
                Я соединяю знания астрологии, психологии и практики глубинной работы, чтобы не
                просто давать информацию, а помогать вам видеть целостную картину, находить свои
                опоры и создавать жизнь, которая действительно подходит вам.
              </p>
              <div style={{ marginTop: 32 }}>
                <Button to="/about" variant="dark">
                  Моя история
                </Button>
              </div>
            </div>
            <img className="about-photo" src={portrait} alt="Анна Изи" />
          </div>
          <div className="stats-row">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- отзывы ---------- */}
      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="05"
            title="Отзывы"
            note="Реальные истории и результаты людей, с которыми мы работали."
            linkTo="/reviews"
            linkLabel="Все отзывы →"
          />
          <ReviewsBlock limit={3} />
        </div>
      </section>

      <CTASection index="06" />
      <Footer />
    </>
  )
}
