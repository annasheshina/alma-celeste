# Test Plan — Alma Celeste (Vite + React SPA)

App: http://localhost:5173/ (dev server already running)
Evidence from code:
- src/App.jsx: routes "/"→Home, "/moon","/venus","/sun","/abundance","/astrology","/pleiades"; "*"→Home
- src/pages/Home.jsx: logo "Alma Celeste" (uppercase via CSS), h1 "Твоё пространство", nav.room-grid with 6 RoomButtons
- src/components/RoomButton.jsx: Link to room.path with glyph, name, tagline, .room-button-desc overlay (opacity 0 → 1 on :hover, index.css:264-287); glow via box-shadow on :hover (index.css:220-235)
- src/components/RoomPage.jsx + BackButton.jsx: back link "← Вернуться в пространство" → "/"; centered .room-title h1 = room.name; .room-cards with card buttons
- Mobile: index.css:422-474 @media (max-width: 900px) → .room-grid = repeat(2, 1fr), .room-button-desc display:none
- Caveat: home.jpg and astrology.jpg are TEMPORARY copies of other assets — home background and /astrology bg will look like duplicates. Expected, not a bug.

## Test 1 — Home page render
1. Open http://localhost:5173/ in Chrome (maximized).
   PASS: screenshot shows fullscreen background image covering viewport, "ALMA CELESTE" text top-left, centered title "Твоё пространство", and exactly 6 glass buttons in one row at bottom labeled ЛУНА, ВЕНЕРА, СОЛНЦЕ, ИЗОБИЛИЕ, АСТРОЛОГИЯ, ПЛЕЯДЫ.
   FAIL if: blank page, missing/4xx background, fewer than 6 buttons, or labels differ.
2. Check browser console.
   PASS: no red errors. FAIL if JS errors (font/network warnings noted but tolerated).

## Test 2 — Hover glow + description overlay (desktop)
1. Move mouse onto the "ЛУНА" button without clicking.
   PASS: button lifts/enlarges slightly, visible glow (box-shadow), and a dark overlay appears inside the button showing the description text starting "Твоё безопасное пространство..."
   FAIL if: nothing changes visually, or overlay text absent.

## Test 3 — All 6 room navigations (click each button → verify room page)
For each pair (button label → expected URL → expected h1 → expected card count):
- ЛУНА → /moon → h1 "ЛУНА" → 4 cards (Медитации, Расслабление, Безопасность, Эмоции)
- ВЕНЕРА → /venus → h1 "ВЕНЕРА" → 4 cards (Женственность, Привлекательность, Отношения, Тело)
- СОЛНЦЕ → /sun → h1 "СОЛНЦЕ" → 4 cards (Самореализация, Состояние, Предназначение, Энергия)
- ИЗОБИЛИЕ → /abundance → h1 "ИЗОБИЛИЕ" → 4 cards (Деньги, Ценность, Доход, Изобилие)
- АСТРОЛОГИЯ → /astrology → h1 "АСТРОЛОГИЯ" → 4 cards (Мой соляр, Активные сферы периода, Натальная карта, Получить прогноз)
- ПЛЕЯДЫ → /pleiades → h1 "ПЛЕЯДЫ" → 5 cards (Активации, Медитации, Визуализации, Послания, Звёздные практики)
Steps per room: from home, click the button → verify URL in address bar matches expected path → screenshot shows: full-bleed background image, "← Вернуться в пространство" button top-left, centered uppercase room title, card row at bottom with expected count.
PASS: all match. FAIL if: wrong route, missing title/cards, no back button, or blank background.
(Adversarial note: each room must show its own title/cards — proves per-room data, not a static page.)

## Test 4 — Return to home
1. From a room page, click "← Вернуться в пространство".
   PASS: URL becomes "/", home page renders again (logo + title + 6 buttons).
   FAIL if: URL stays, error page, or empty page.

## Test 5 — Mobile layout (~390px)
1. Narrow the window to ~390px width (devtools device emulation or window resize).
   PASS: home shows the 6 rooms as a compact 2-column × 3-row card grid (not a 6-col row clipped); logo, title visible; cards tappable size; background image still covers viewport.
   FAIL if: horizontal overflow/clipped buttons, grid stays 6 columns, or text unreadably overlapping.
2. Tap one room card (e.g. ПЛЕЯДЫ) → navigates to /pleiades; back button returns home.

## Test 6 — Console errors sweep
After all navigation, open browser console.
PASS: zero errors (warnings ok). FAIL: any red error entries.
