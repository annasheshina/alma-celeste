import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { GIFTS, DICE_PRIZES } from '../data/gifts'

const DICE_FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

function Dice() {
  const [face, setFace] = useState(5)
  const [rolling, setRolling] = useState(false)

  const roll = () => {
    if (rolling) return
    setRolling(true)
    const win = Math.floor(Math.random() * 6)
    let ticks = 0
    const timer = setInterval(() => {
      setFace(Math.floor(Math.random() * 6))
      ticks += 1
      if (ticks >= 14) {
        clearInterval(timer)
        setFace(win)
        window.location.href = DICE_PRIZES[win].url
      }
    }, 90)
  }

  return (
    <div className="dice-panel">
      <div className="dice-head">
        <div className="eyebrow">Беспроигрышная лотерея</div>
        <h3 className="dice-title">Кинь кубик — выиграй подарок</h3>
        <p className="dice-sub">
          Один из шести призов достанется тебе в любом случае. Главный — личный разбор с Анной.
        </p>
      </div>
      <button
        type="button"
        className={'dice' + (rolling ? ' rolling' : '')}
        onClick={roll}
        aria-label="Кинуть кубик"
      >
        {DICE_FACES[face]}
      </button>
      <button type="button" className="btn btn-ghost" onClick={roll} disabled={rolling}>
        {rolling ? 'Кубик катится…' : 'Кинуть кубик'}
      </button>
    </div>
  )
}

export default function Gifts() {
  return (
    <section className="section gifts-section" id="gifts">
      <div className="container">
        <SectionTitle index="04" eyebrow="Подарки" title="Бесплатные эфиры и практики — возьми своё" />
        <p className="gifts-lead">
          Записи эфиров и практики о натальной карте, состоянии и тонких телах. Смотри, слушай и применяй — это мой подарок тебе.
        </p>
        <div className="gifts-grid">
          {GIFTS.map((g) => (
            <a key={g.title} className="gift-card" href={g.url} target="_blank" rel="noreferrer">
              <div className="gift-media"><img src={g.img} alt={g.title} loading="lazy" /></div>
              <div className="gift-body">
                <div className="gift-tag">{g.tag}</div>
                <div className="gift-title">{g.title}</div>
                <div className="gift-cta">Смотреть →</div>
              </div>
            </a>
          ))}
        </div>
        <Dice />
      </div>
    </section>
  )
}
