# ANNA IZI / ALMA CELESTE — E2E Test Plan

App: Vite + React SPA at http://localhost:5173 (dev server already running this branch).
All assertions verified via screenshots + browser console checks (read_dom / browser_console).

## Test 1 — Home page renders and matches spec
Steps:
1. Open `http://localhost:5173/` in Chrome (maximized).
2. Screenshot hero; scroll through the page; screenshot each section.
Expected:
- Hero: photo background, brand "ANNA IZI / Alma Celeste" top-left, nav with 5 links (Астрология, Программы, Личная работа, Обо мне, Отзывы), «Записаться» CTA button, h1 «Астрология как путь к себе», 2 hero buttons («Выбрать формат работы», «Посмотреть программы»), ticker at bottom («Понять себя ✦ Осознанность ✦ Свобода ✦ Новая версия себя»).
- Section «С чем ко мне приходят»: 4 topic cards + panel «Не знаете, что вам сейчас нужно?».
- Dark photo band «Астрология»: 3 glass cards.
- «Программы»: 2 big image cards; «Более глубокие форматы»: 1 card.
- «Обо мне»: portrait + stats (3+, 200+, 7 000) + «Моя история» button.
- «Отзывы»: filter chips (Все/Астрология/Консультации/Программы) + 3 cards on «Все».
- CTA section «Готовы сделать следующий шаг?» + «Подобрать формат».
- Footer: brand, 6 nav links (incl. Контакты), 3 social icons.
- Browser console: no red errors (only [vite] connected lines allowed).

## Test 2 — Home links navigate correctly
Steps (click, verify URL + heading, go back):
- Topic card 1 → /natal-chart (h1 «Натальная карта»); back.
- Topic card «Не знаете, что вам сейчас нужно?» → «Подобрать формат» → /contact (h1 «Контакты»); back.
- Glass card in «Астрология» band → one of /natal-chart | /forecast | /consultation; back.
- «Программы» image card → /venus (h1 «Венера. Пробуждение женщины»); back.
- «Более глубокие форматы» card → /personal-work (h1 «Личная работа»); back.
- «Моя история» → /about (h1 «Обо мне»); back.
- Final CTA «Подобрать формат» → /contact.

## Test 3 — Review filter chips work (adversarial)
On home «Отзывы» section:
- Default «Все» chip active → exactly 3 review cards (Мария, Елена, Ольга — first 3 of 4).
- Click «Консультации» → exactly 1 card, containing name «Елена» and tag «Личная консультация»; Мария/Ольга must NOT be visible.
- Click «Астрология» → exactly 2 cards («Мария» + «Наталья»).
- Click «Все» again → 3 cards return.

## Test 4 — All routes render with correct h1, no console errors
For each route: navigate via address bar, screenshot, check h1:
- / → «Астрология как путь к себе»
- /astrology → «Астрология»
- /natal-chart → «Натальная карта»
- /forecast → «Прогноз и соляр»
- /consultation → «Личная консультация»
- /programs → «Программы»
- /venus → «Венера. Пробуждение женщины»
- /astrology-for-yourself → «Астрология для себя»
- /personal-work → «Личная работа»
- /about → «Обо мне»
- /reviews → «Отзывы»
- /contact → «Контакты»
- /definitely-not-a-page → 404 page, h1 «Страница не найдена»
Console must show no errors after each navigation.

## Test 5 — Header nav + footer links from an inner page
- From /about, click header nav «Отзывы» → /reviews loads.
- Click header «Записаться» → /contact.
- Scroll to footer, click «Астрология» → /astrology loads.
- Footer shows 3 social icons (Instagram, Telegram, YouTube SVGs).

## Test 6 — CTA buttons on inner pages go to /contact
- /venus → «Предзаписаться» (top or bottom) → /contact.
- /astrology-for-yourself → «Присоединиться к курсу» → /contact.
- /personal-work → «Оставить запрос» → /contact.
- /consultation → «Записаться на консультацию» → /contact.
- /natal-chart → product card «Записаться» → /contact.

## Test 7 — Mobile 390px
- Open DevTools (F12), Ctrl+Shift+M, pick iPhone 12 Pro (390×844).
- On /: hamburger (☰) visible; tap it → overlay menu opens with nav links + Записаться; tap ✕ → closes. Tap hamburger again → tap «Программы» → /programs loads, overlay closed.
- Home sections single column; hero readable.
- Exit emulation, restore window.
