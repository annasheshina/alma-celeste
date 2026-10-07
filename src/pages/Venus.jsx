import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import ReviewCard from '../components/ReviewCard'
import { venusPage } from '../data/content'
import { reviews } from '../data/reviews'
import illRelease from '../assets/ill-release.jpg'
import illGoddess from '../assets/ill-goddess.jpg'
import illCircle from '../assets/ill-circle.jpg'
import illBonus from '../assets/ill-bonus.jpg'
import portraitAnna from '../assets/portrait-anna.jpg'
import guideVenera from '../assets/guide-venera.png'

const programReviews = reviews.filter((r) => r.category === 'programs')

export default function Venus() {
  return (
    <>
      <PageHero
        breadcrumb="Программы"
        title={venusPage.heroTitle}
        subtitle={venusPage.heroSub}
      >
        <div className="hero-actions">
          <Button to={'https://t.me/m/4VNxLES-NjAy'} variant="light">
            {venusPage.cta}
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle index="01" title={venusPage.programsTitle} />
            <ul className="check-list" style={{ maxWidth: 680 }}>
              {venusPage.programs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <img className="split-photo" src={illRelease} alt="" />
        </div>
      </section>

      <section className="section tight">
        <div className="container split">
          <img className="split-photo" src={illGoddess} alt="" />
          <div>
            <SectionTitle index="02" title="Твоя внутренняя Богиня" />
            <p className="about-text" style={{ maxWidth: 680 }}>
              {venusPage.goddessIntro}
            </p>
            <ul className="check-list" style={{ maxWidth: 680 }}>
              {venusPage.goddess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container split">
          <div>
            <SectionTitle index="03" title={venusPage.consultTitle} />
            <div className="about-text" style={{ maxWidth: 680 }}>
              {venusPage.consult.map((p) => (
                <p key={p} style={{ marginBottom: 18 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <img className="split-photo arch" src={portraitAnna} alt="Анна Изюмова" />
        </div>
      </section>

      <section className="section tight">
        <div className="container split">
          <div>
            <SectionTitle index="04" title={venusPage.journalTitle} />
            <p className="about-text" style={{ maxWidth: 680 }}>
              {venusPage.journalIntro}
            </p>
            <ul className="check-list" style={{ maxWidth: 680 }}>
              {venusPage.journal.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <img className="split-art" src={guideVenera} alt="Гайд-журнал «Моя Венера»" />
        </div>
      </section>

      <section className="section tight">
        <div className="container split">
          <img className="split-photo" src={illCircle} alt="" />
          <div>
            <SectionTitle index="05" title="Поле Женщин" />
            <div className="about-text" style={{ maxWidth: 680 }}>
              <p style={{ marginBottom: 18 }}>{venusPage.circleTitle}</p>
              {venusPage.circle.map((p) => (
                <p key={p} style={{ marginBottom: 18 }}>
                  {p}
                </p>
              ))}
              <p style={{ marginBottom: 18 }}>{venusPage.levelsTitle}</p>
            </div>
            <ul className="check-list" style={{ maxWidth: 680 }}>
              {venusPage.levels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle index="06" title="Что будет внутри" />
          <div className="weeks-grid">
            {venusPage.blocks.map((b, i) => (
              <article className="week-card" key={b.num}>
                <div className="guide-meta">
                  <span className="guide-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="week-num">{b.num}</span>
                </div>
                <h3 className="week-title">{b.title}</h3>
                <ul className="check-list">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {b.result && <p className="week-result">{b.result}</p>}
                {b.bonus && <p className="week-bonus">{b.bonus}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container split">
          <img className="split-photo" src={illBonus} alt="" />
          <div>
            <SectionTitle index="07" title="Бонусы" />
            <ul className="check-list" style={{ maxWidth: 680 }}>
              {venusPage.bonuses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="today-bonus" style={{ maxWidth: 680 }}>
              <p className="today-bonus-title">{venusPage.inviteTitle}</p>
              <p className="today-bonus-text">{venusPage.inviteText}</p>
              <div style={{ marginTop: 26 }}>
                <Button to={'https://t.me/m/4VNxLES-NjAy'} variant="dark">
                  {venusPage.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {programReviews.length > 0 && (
        <section className="section tight">
          <div className="container">
            <SectionTitle index="08" title="Отзывы участниц" />
            <div className="reviews-grid">
              {programReviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
            <div style={{ marginTop: 44 }}>
              <Button to="/reviews#venera" variant="dark">
                Смотреть все отзывы
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="section tight">
        <div className="container">
          <SectionTitle index="09" title="Вопросы" />
          <div className="faq-list">
            {venusPage.faq.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
          <div style={{ marginTop: 44 }}>
            <Button to={'https://t.me/m/4VNxLES-NjAy'} variant="dark">
              {venusPage.cta}
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Готовы проснуться?"
        cta={venusPage.cta}
        to="https://t.me/m/4VNxLES-NjAy"
      />
      <Footer />
    </>
  )
}
