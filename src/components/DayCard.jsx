import { useEffect, useState } from 'react'
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
      {open && (
        <div className="daycard-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="daycard" onClick={(e) => e.stopPropagation()}>
            <button className="daycard-close" aria-label="Закрыть" onClick={() => setOpen(false)}>
              ×
            </button>
            <span className="daycard-eyebrow">Карта дня · {today}</span>
            <span className="daycard-symbol" aria-hidden="true">{card.symbol}</span>
            <span className="daycard-divider" aria-hidden="true">✦</span>
            <h3 className="daycard-title display">{card.title}</h3>
            <p className="daycard-quote">{card.quote}</p>
            <span className="daycard-foot">ANNA IZI · карта обновляется каждый день</span>
          </div>
        </div>
      )}
    </>
  )
}
