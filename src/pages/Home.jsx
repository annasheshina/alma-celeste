import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import TopicCard from '../components/TopicCard'
import ServiceCard from '../components/ServiceCard'
import ProgramCard from '../components/ProgramCard'
import ReviewsBlock from '../components/ReviewsBlock'
import CTASection from '../components/CTASection'
import { topics, programs, deepFormat } from '../data/content'
import { astrologyServices } from '../data/products'
import { STATS } from '../data/site'
import heroBg from '../assets/hero-main.jpg'
import bandBg from '../assets/band-mountains.jpg'
import quizBg from '../assets/program-venus.jpg'
import portrait from '../assets/portrait-anna.jpg'

const TICKER = ['Понять себя', 'Осознанность', 'Свобода', 'Новая версия себя']

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <img className="hero-bg" src={heroBg} alt="" />
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
              <Button to="/contact" variant="light">
                Выбрать формат работы
              </Button>
              <Button to="/programs" variant="ghost">
                Посмотреть программы
              </Button>
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
              <Button to="/contact" variant="dark">
                Подобрать формат
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- астрология ---------- */}
      <section className="section band on-photo">
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
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- программы ---------- */}
      <section className="section">
        <div className="container">
          <SectionTitle
            index="02"
            title="Программы"
            note="Глубокие программы, которые соединяют астрологию, психологию и практики для реальных изменений."
          />
          <div className="programs-grid">
            {programs.map((p) => (
              <ProgramCard key={p.id} program={p} />
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
      <section className="section">
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
