import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import { consultationSteps } from '../data/content'
import { TELEGRAM_URL } from '../data/site'
import bandBg from '../assets/band-mountains.jpg'

export default function Consultation() {
  return (
    <>
      <PageHero
        image={bandBg}
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
          <div style={{ marginTop: 44 }}>
            <Button to={TELEGRAM_URL} variant="dark">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  )
}
