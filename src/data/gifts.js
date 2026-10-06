import giftVenera from '../assets/gift-venera.webp'
import giftMatrix from '../assets/gift-matrix.webp'
import giftReality from '../assets/gift-reality.webp'
import gift3d from '../assets/gift-3d.webp'
import giftBodies from '../assets/gift-bodies.webp'
import giftPrognoz from '../assets/gift-prognoz.webp'
import giftHeals from '../assets/gift-heals.webp'

export const GIFTS = [
  { img: giftVenera, tag: 'Эфир', title: 'Женский круг. Венера, пробуждение Женщины', url: 'https://t.me/anna_romannaa/1561' },
  { img: giftMatrix, tag: 'Эфир', title: 'Состояние и энергия. Как управлять матрицей', url: 'https://t.me/anna_romannaa/1568' },
  { img: giftReality, tag: 'Практика', title: 'Проектирование реальности', url: 'https://t.me/anna_romannaa/1651' },
  { img: gift3d, tag: 'Эфир', title: '3D, 4D, 5D, 6D реальности', url: 'https://t.me/anna_romannaa/1691' },
  { img: giftBodies, tag: 'Видео', title: 'Тонкие тела человека', url: 'https://www.instagram.com/reel/DZu7zanjjwk/' },
  { img: giftPrognoz, tag: 'Эфир', title: 'Мой год в прогнозе и реальности', url: 'https://rutube.ru/video/4ed602b14da1da1b087e81cab78c916e/' },
  { img: giftHeals, tag: 'Открытый эфир', title: 'Астрология, которая исцеляет', url: 'https://rutube.ru/video/b922c010c9ba22ead5e8f275d740507c/' },
]

export const DICE_PRIZES = [
  { label: 'Личный разбор с Анной', note: 'Главный приз — разбор твоей натальной карты', url: 'https://t.me/anna_romannaa' },
  ...GIFTS.slice(0, 5).map((g) => ({ label: g.title, note: g.tag, url: g.url })),
]
