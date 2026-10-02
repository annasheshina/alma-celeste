import ctaBg from '../assets/cta-finale.jpg'
import Button from './Button'
import { FORMAT_PICK_URL } from '../data/site'

export default function CTASection({
  index = '06',
  title = 'Готовы сделать следующий шаг?',
  text = 'Расскажите, что сейчас происходит в вашей жизни — я помогу определить подходящий формат работы.',
  cta = 'Подобрать формат',
  to = FORMAT_PICK_URL,
}) {
  return (
    <section className="cta-section band">
      <img className="band-bg" src={ctaBg} alt="" />
      <div className="band-veil" />
      <div className="container">
        <div className="cta-inner">
          <span className="section-index">{index}</span>
          <h2 className="cta-title display">{title}</h2>
          <p className="cta-text">{text}</p>
          <Button to={to} variant="light">
            {cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
