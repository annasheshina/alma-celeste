import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import { coursePage } from '../data/content'
import heroImg from '../assets/program-course.jpg'

export default function AstrologyForYou() {
  return (
    <>
      <PageHero
        image={heroImg}
        breadcrumb="Программы · Курс"
        title={coursePage.heroTitle}
        subtitle={coursePage.heroSub}
      >
        <p className="hero-role" style={{ maxWidth: 'none' }}>
          Набор на текущий поток открыт
        </p>
        <div className="hero-actions">
          <Button to="/contact" variant="light">
            Присоединиться к курсу
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionTitle index="01" title="Для кого курс" />
          <ul className="check-list" style={{ maxWidth: 680 }}>
            {coursePage.forWhom.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle index="02" title="Чему вы научитесь" />
          <ul className="check-list" style={{ maxWidth: 680 }}>
            {coursePage.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle index="03" title="Программа курса" />
          <div className="steps-list">
            {coursePage.modules.map((m, i) => (
              <div className="step-item" key={m}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step-title">{m}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle index="04" title="Формат и что входит" />
          <p className="about-text">
            Онлайн-формат с уроками, практикой на своей карте и поддержкой. Входит: видеоуроки,
            рабочие материалы, разборы и закрытое пространство для вопросов. Детали текущего
            потока — при записи.
          </p>
          <div style={{ marginTop: 44 }}>
            <Button to="/contact" variant="dark">
              Присоединиться к курсу
            </Button>
          </div>
        </div>
      </section>

      <CTASection title="Начните читать свою карту" cta="Присоединиться к курсу" />
      <Footer />
    </>
  )
}
