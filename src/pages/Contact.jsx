import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { SOCIALS } from '../data/site'

export default function Contact() {
  const telegram = SOCIALS.find((s) => s.id === 'telegram')
  return (
    <>
      <PageHero
        title="Контакты"
        subtitle="Расскажите, что сейчас происходит в вашей жизни — я помогу определить подходящий формат работы и отвечу на вопросы."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="about-text">
            Самый быстрый способ связаться — написать мне в Telegram. Опишите коротко ваш запрос,
            и я отвечу с предложением формата и ближайшими датами.
          </p>
          <div className="hero-actions" style={{ marginTop: 36 }}>
            <Button to={telegram.url} variant="dark">
              Написать в Telegram
            </Button>
            <Button to="/" variant="ghost-dark" arrow={false}>
              На главную
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
