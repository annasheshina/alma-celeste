import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import { consultationSteps } from '../data/content'

export default function Consultation() {
  return (
    <>
      <PageHero
        breadcrumb="Астрология · Консультация"
        title="Личная консультация"
        subtitle="Это не просто часовой звонок, а комплексный формат: от определения запроса до сопровождения после встречи."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            index="01"
            title="Как проходит работа"
            note="Каждый этап выстроен так, чтобы вы ушли не с информацией, а с пониманием и опорой."
          />
          <div className="steps-list">
            {consultationSteps.map((s, i) => (
              <div className="step-item" key={s.title}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 44, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Button to={'https://t.me/m/OWrGX13JM2Uy'} variant="dark">
              Записаться на консультацию
            </Button>
            <Button to="/reviews#astrologiya" variant="ghost-dark">
              Отзывы
            </Button>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  )
}
