import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { DAY_CARDS } from '../data/dayCards'

function cardOfTheDay() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const day = Math.floor((now - start) / 86400000)
  return DAY_CARDS[(day + now.getFullYear()) % DAY_CARDS.length]
}

export default function DayCard() {
  const [open, setOpen] = useState(false)
  const [card] = useState(cardOfTheDay)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })

  return (
    <>
      <button type="button" className="btn btn-ghost daycard-btn" onClick={() => setOpen(true)}>
        <span>Получить карту дня</span>
        <span aria-hidden="true">✦</span>
      </button>
      {open &&
        createPortal(
          <div className="daycard-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
            <div className="daycard" onClick={(e) => e.stopPropagation()}>
              <button className="daycard-close" aria-label="Закрыть" onClick={() => setOpen(false)}>
                ×
              </button>
              <div className="daycard-art">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="daycard-body">
                <span className="daycard-eyebrow">Карта дня · {today}</span>
                <h3 className="daycard-title display">{card.title}</h3>
                <p className="daycard-message">{card.message}</p>
                <div className="daycard-advice">
                  <span className="daycard-advice-label">Рекомендация</span>
                  <p className="daycard-advice-text">{card.advice}</p>
                </div>
                <span className="daycard-foot">АННА ИЗИ · карта обновляется каждый день</span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
