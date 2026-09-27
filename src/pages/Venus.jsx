import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import ReviewCard from '../components/ReviewCard'
import { venusPage } from '../data/content'
import { TELEGRAM_URL } from '../data/site'
import { reviews } from '../data/reviews'
import heroImg from '../assets/program-venus.jpg'

const programReviews = reviews.filter((r) => r.category === 'programs')

export default function Venus() {
  return (
    <>
      <PageHero
        image={heroImg}
        breadcrumb="Программы"
        title={venusPage.heroTitle}
        subtitle={venusPage.heroSub}
      >
        <div className="hero-actions">
          <Button to={TELEGRAM_URL} variant="light">
            Предзаписаться
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionTitle
            index="01"
            title="Для кого эта программа"
            note="Если вы узнаёте себя хотя бы в паре пунктов — программа для вас."
          />
          <ul className="check-list" style={{ maxWidth: 680 }}>
            {venusPage.forWhom.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="02"
            title="С какими запросами приходят"
          />
          <ul className="check-list" style={{ maxWidth: 680 }}>
            {venusPage.requests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="03"
            title="Что будет внутри"
            note="Каждый модуль соединяет астрологию, психологию и практику."
          />
          <div className="steps-list">
            {venusPage.modules.map((m, i) => (
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
          <SectionTitle index="04" title="Формат и результат" />
          <p className="about-text">
            Программа проходит в бережном онлайн-формате с практиками и сопровождением. Результат —
            контакт с собой, своими желаниями и ценностью, с которым можно строить отношения,
            работу и жизнь. Детали формата уточняются при предзаписи.
          </p>
        </div>
      </section>

      {programReviews.length > 0 && (
        <section className="section tight">
          <div className="container">
            <SectionTitle index="05" title="Отзывы участниц" />
            <div className="reviews-grid">
              {programReviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section tight">
        <div className="container">
          <SectionTitle index="06" title="Вопросы" />
          <div className="faq-list">
            {venusPage.faq.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
          <div style={{ marginTop: 44 }}>
            <Button to={TELEGRAM_URL} variant="dark">
              Предзаписаться
            </Button>
          </div>
        </div>
      </section>

      <CTASection title="Готовы проснуться?" cta="Предзаписаться" />
      <Footer />
    </>
  )
}
