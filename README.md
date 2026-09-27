# ANNA IZI — ALMA CELESTE

Многостраничный сайт личного бренда: астрологические услуги, программы и курсы.

«Астрология как путь к себе» — глубокие знания, которые помогают понять, прожить и создавать свою жизнь.

## Стек

Vite + React 19 + React Router 7, чистый CSS (дизайн-система в `src/index.css`), oxlint.

## Разработка

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build в dist/
npm run lint    # oxlint
```

## Маршруты

| Маршрут | Страница |
| --- | --- |
| `/` | Главная |
| `/astrology` | Раздел «Астрология» |
| `/natal-chart` | Натальная карта (письменные разборы) |
| `/forecast` | Прогноз и соляр |
| `/consultation` | Личная консультация |
| `/programs` | Программы |
| `/venus` | «Венера. Пробуждение женщины» |
| `/astrology-for-yourself` | Курс «Астрология для себя» |
| `/personal-work` | Личная работа |
| `/about` | Обо мне |
| `/reviews` | Отзывы |
| `/contact` | Контакты (точка входа всех CTA) |

## Структура

- `src/data/` — редактируемый контент: `site.js` (меню, соцсети, статистика), `content.js` (карточки главной, шаги, программы, FAQ), `products.js` (продукты разборов и прогнозов), `reviews.js` (отзывы — заменяйте тексты и фото здесь).
- `src/components/` — переиспользуемые компоненты: Header, Footer, Button, SectionTitle, TopicCard, ServiceCard, ProductCard, ProgramCard, ReviewCard, ReviewsBlock, CTASection, PageHero.
- `src/pages/` — страницы маршрутов.
- `src/assets/` — изображения.

Чтобы добавить продукт или отзыв — добавьте объект в соответствующий массив в `src/data/`, новых компонентов не нужно.
