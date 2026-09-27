import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import { STATS } from '../data/site'
import heroImg from '../assets/band-mountains.jpg'
import portrait from '../assets/portrait-anna.jpg'

export default function About() {
  return (
    <>
      <PageHero
        image={heroImg}
        title="Обо мне"
        subtitle="Анна Изи — астролог, психолог и проводник в глубокую работу с собой."
      />
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div>
              <span className="section-index">01</span>
              <h2 className="about-title display">Моя история</h2>
              <p className="about-text">
                Я соединяю знания астрологии, психологии и практики глубинной работы, чтобы не
                просто давать информацию, а помогать вам видеть целостную картину, находить свои
                опоры и создавать жизнь, которая действительно подходит вам.
              </p>
              <p className="about-text" style={{ marginTop: 18 }}>
                Астрология для меня — не про предсказания, а про язык, который помогает понять
                себя: свои циклы, ресурсы, сценарии и направления. Эта страница будет наполняться
                моей историей — здесь появится путь, который привёл меня к этой работе.
              </p>
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
      <CTASection />
      <Footer />
    </>
  )
}
