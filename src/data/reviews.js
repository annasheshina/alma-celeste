import avatar1 from '../assets/avatar-1.jpg'
import avatar2 from '../assets/avatar-2.jpg'
import avatar3 from '../assets/avatar-3.jpg'
import avatar4 from '../assets/avatar-4.jpg'
import shot1 from '../assets/rev-marathon-1.jpg'
import shot2 from '../assets/rev-marathon-2.jpg'
import shot3 from '../assets/rev-marathon-3.jpg'
import shot4 from '../assets/rev-marathon-4.jpg'
import shot5 from '../assets/rev-marathon-5.jpg'
import shot6 from '../assets/rev-marathon-6.jpg'
import shot7 from '../assets/rev-marathon-7.jpg'

export const REVIEW_CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'astrology', label: 'Астрология' },
  { id: 'consultations', label: 'Консультации' },
  { id: 'programs', label: 'Программы' },
]

export const shotReviews = [
  { src: shot1, tag: 'Марафон' },
  { src: shot2, tag: 'Марафон' },
  { src: shot3, tag: 'Марафон' },
  { src: shot4, tag: 'Марафон' },
  { src: shot5, tag: 'Марафон' },
  { src: shot6, tag: 'Марафон' },
  { src: shot7, tag: 'Марафон' },
]

// Редактируемые данные: замените тексты, имена и фотографии на реальные отзывы.
export const reviews = [
  {
    id: 1,
    category: 'astrology',
    name: 'Мария',
    tag: 'Натальная карта',
    avatar: avatar1,
    text: 'Разбор натальной карты перевернул моё представление о себе. Впервые я увидела свои сильные стороны не как случайность, а как систему. Материал остаётся со мной — я возвращаюсь к нему снова и снова.',
  },
  {
    id: 2,
    category: 'consultations',
    name: 'Елена',
    tag: 'Личная консультация',
    avatar: avatar2,
    text: 'Это было гораздо глубже, чем я ожидала от одной встречи. Анна не просто ответила на вопрос — она помогла увидеть всю картину целиком. Текстовый разбор после встречи — отдельная ценность.',
  },
  {
    id: 3,
    category: 'programs',
    name: 'Ольга',
    tag: 'Курс «Венера»',
    avatar: avatar3,
    text: 'Программа про женственность оказалась про жизнь в целом. Я пересмотрела отношение к себе, к желаниям, к работе. Мягко, но очень глубоко — с реальными изменениями в жизни.',
  },
  {
    id: 4,
    category: 'astrology',
    name: 'Наталья',
    tag: 'Прогноз на год',
    avatar: avatar4,
    text: 'Заказывала полный прогноз на год — теперь понимаю, почему события складываются именно так. Планирую важные решения с опорой на периоды, и это очень снимает тревогу.',
  },
]
