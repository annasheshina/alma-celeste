import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import { TELEGRAM_URL } from '../data/site'

const suitable = [
  'Тема повторяется и не решается «в лоб» — нужен глубокий взгляд',
  'Хотите системную работу, а не разовый ответ',
  'Готовы идти глубже: от понимания к реальным изменениям',
]

const difference = [
  'Одна консультация отвечает на вопрос — личная работа меняет ситуацию',
  'Мы работаем не с симптомом, а с целостной картиной и корнем',
  'Астрология + психология + практики, подобранные под вас',
]

export default function PersonalWork() {
  return (
    <>
      <PageHero
        breadcrumb="Форматы"
        title="Личная работа"
        subtitle="Самый глубокий формат взаимодействия со мной: индивидуальное сопровождение с использованием астрологии, психологии и практик глубокой работы."
      >
        <div className="hero-actions">
          <Button to={TELEGRAM_URL} variant="light">
            Оставить запрос
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionTitle index="01" title="Кому подходит" />
          <ul className="check-list" style={{ maxWidth: 680 }}>
            {suitable.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle
            index="02"
            title="Какие запросы можно приносить"
            note="Отношения, предназначение, кризисы периодов, самоценность, выборы и переходы — любая важная тема."
          />
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle index="03" title="Почему это отличается от одной консультации" />
          <ul className="check-list" style={{ maxWidth: 680 }}>
            {difference.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionTitle index="04" title="Как строится работа" />
          <p className="about-text">
            Работа строится как сопровождение: серия встреч, практики между ними и моя поддержка
            на всём пути. Формат и длительность определяются под ваш запрос — всё начинается с
            заявки и первичного созвона.
          </p>
          <div style={{ marginTop: 44 }}>
            <Button to={TELEGRAM_URL} variant="dark">
              Оставить запрос
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Готовы к глубокой работе?"
        text="Расскажите о вашей ситуации — я отвечу и предложу формат."
        cta="Оставить запрос"
      />
      <Footer />
    </>
  )
}
