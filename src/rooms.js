import homeImg from './assets/home.jpg'
import moonImg from './assets/moon.jpg'
import venusImg from './assets/venus.jpg'
import sunImg from './assets/sun.jpg'
import abundanceImg from './assets/abundance.jpg'
import astrologyImg from './assets/astrology.jpg'
import pleiadesImg from './assets/pleiades.jpg'

export const homeImage = homeImg

export const rooms = [
  {
    path: '/moon',
    name: 'Луна',
    image: moonImg,
    glyph: '☾',
    tagline: 'Эмоции и внутренний мир',
    description:
      'Твоё безопасное пространство. Замедлиться, почувствовать свои эмоции, восстановить энергию и соединиться со своим истинным «я».',
    cards: ['Медитации', 'Расслабление', 'Безопасность', 'Эмоции'],
  },
  {
    path: '/venus',
    name: 'Венера',
    image: venusImg,
    glyph: '♀',
    tagline: 'Женственность и отношения',
    description:
      'Твоё пространство притяжения. Соединись со своей природой, раскрой уникальную красоту и создай гармоничные отношения.',
    cards: ['Женственность', 'Привлекательность', 'Отношения', 'Тело'],
  },
  {
    path: '/sun',
    name: 'Солнце',
    image: sunImg,
    glyph: '☀',
    tagline: 'Самореализация',
    description:
      'Твоё предназначение и самореализация. Соединись с внутренней силой, раскрой таланты и найди свой путь.',
    cards: ['Самореализация', 'Состояние', 'Предназначение', 'Энергия'],
  },
  {
    path: '/abundance',
    name: 'Изобилие',
    image: abundanceImg,
    glyph: '❖',
    tagline: 'Деньги и ценность',
    description:
      'Твоя энергия ценности и денег. Раскрывай денежный поток, активируй ресурсы и учись создавать изобилие.',
    cards: ['Деньги', 'Ценность', 'Доход', 'Изобилие'],
  },
  {
    path: '/astrology',
    name: 'Астрология',
    image: astrologyImg,
    glyph: '⊕',
    tagline: 'Натальная карта и прогнозы',
    description:
      'Карта твоего неба. Изучай натальную карту, активные сферы периода и получай личные прогнозы.',
    cards: ['Мой соляр', 'Активные сферы периода', 'Натальная карта', 'Получить прогноз'],
  },
  {
    path: '/pleiades',
    name: 'Плеяды',
    image: pleiadesImg,
    glyph: '✦',
    tagline: 'Высшие знания и визуализации',
    description:
      'Твоё космическое происхождение. Вспомни свою истинную природу, соединись с энергией звёзд и активируй свои дары.',
    cards: ['Активации', 'Медитации', 'Визуализации', 'Послания', 'Звёздные практики'],
  },
]
