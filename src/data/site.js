export const NAV_LINKS = [
  { to: '/astrology', label: 'Астрология' },
  { to: '/programs', label: 'Программы' },
  { to: '/personal-work', label: 'Личная работа' },
  { to: '/about', label: 'Обо мне' },
  { to: '/reviews', label: 'Отзывы' },
]

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { to: '/contact', label: 'Контакты' },
]

export const TELEGRAM_URL = 'https://t.me/anna_izumova'

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/' },
  { id: 'telegram', label: 'Telegram', url: TELEGRAM_URL },
  { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/' },
]

export const STATS = [
  { value: '4+', label: 'года практики' },
  { value: '200+', label: 'клиентов' },
  { value: '13 тыс', label: 'подписчиков' },
]
