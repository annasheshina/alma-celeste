# PROD https://www.annaizi.ru — E2E Test Plan

Target: production site. Already verified prod serves latest bundle (contains Подарки/Карта дня/33 333 strings) and legal PDFs + deep links return 200 via curl. All assertions verified via screenshots + browser console.

## Test 1 — Home page: sections, Подарки, dice lottery, Карта дня
1. Open https://www.annaizi.ru/ (maximized). Screenshot hero.
   - Expect: hero renders, h1 «Астрология как путь к себе», nav with 6 links incl. «Подарки», «Получить карту дня» button visible.
2. Click «Получить карту дня».
   - Expect: overlay dialog opens with a VERTICAL illustrated card (image + title + message + «Рекомендация» block + footer «ANNA IZI · карта обновляется каждый день»).
   - Click the large × close button → overlay closes, page interactive again.
3. Scroll to «Подарки» section (index 04, title «Бесплатные эфиры и практики — возьми своё»).
   - Expect: 6 gift cards with cover images (no broken images), dice panel «Беспроигрышная лотерея» + «Кинь кубик — выиграй подарок».
4. Click dice/«Кинуть кубик».
   - Expect: button disables/shows «Кубик катится…» during roll; after ~1.5s a prize link appears: «Твой приз» + prize name + «забрать →». The prize must be one of DICE_PRIZES (Личный разбор с Анной or one of 5 gift titles).
   - Roll again → prize may change (verify it re-rolls: prize area resets then shows a prize again).
5. Scroll rest of page; verify sections render; check footer: 4 legal doc links (Публичная оферта, Оферта (курс), Политика обработки ПД, Согласие на обработку ПД) + 4 social icons (Instagram, Telegram, Rutube, ВКонтакте).

## Test 2 — «Подарки» nav link scrolls to gifts section (adversarial)
1. From an inner page (e.g. /reviews), click header «Подарки».
   - Expect: navigates to / AND scrolls to the #gifts section (gifts section visible in viewport, NOT just page top).
   - KNOWN RISK: ScrollToTop scrolls to 0 on pathname change and nothing scrolls to the hash → likely lands at top of home instead of #gifts. Verify and report.
2. While already on / (scrolled to a different position), click «Подарки» again.
   - Expect: scrolls to #gifts. If it does nothing (pathname unchanged → no scroll), report as bug.

## Test 3 — /astrology-for-yourself course page
1. Open URL directly (deep link — also proves vercel.json rewrite in-browser, not just curl).
   - Expect: page renders (not 404/blank), h1 «Астрология для себя».
2. Scroll to «Программа»: 4 week cards stacked vertically, EACH with an illustration image on the left.
3. «Формат» section: 2 images on the right side.
4. Price block: «40 000 ₽» shown struck-through above «33 333 ₽».
5. Below price: «Бонусы модуля» list + block «Тем, кто купит на этой неделе» / «В подарок — модуль по продвижению».
6. «Отзывы моих клиентов и учеников» → button «Показать все отзывы» → lands on /reviews#astrologiya AND scrolls to the «Астрология» reviews section (section title visible).

## Test 4 — /forecast bottom buttons
- Scroll to bottom: two buttons — «Личная консультация» → /consultation (verify h1 «Личная консультация»); back; «Отзывы» → /reviews#prognozy scrolling to «Прогнозы» section.

## Test 5 — /consultation review button
- «Отзывы» button → /reviews#astrologiya, scrolls to «Астрология» section.

## Test 6 — /venus review button
- After «Отзывы участниц»: «Смотреть все отзывы» → /reviews#venera, scrolls to «Венера» section.

## Test 7 — /natal-chart details
- SUN WAY and МОЯ VENERA cards: price «7 777 ₽» with «+ голосовое сопровождение» note next to/right of price.
- «Купить МОЯ VENERA» button present (external t.me link — do NOT click external links, verify href only via hover/DOM).
- Steps list ends with step 05 «Твой гайд-журнал» sub «с действиями».

## Test 8 — /reviews anchors (direct deep link)
- Type https://www.annaizi.ru/reviews#prognozy in address bar (fresh load).
  - Expect: page loads AND scrolls to «Прогнозы» section (screenshot must show Прогнозы heading in viewport).
- Also spot-check shot-grid renders real review screenshots (not broken).

## Test 9 — Footer legal docs + socials
- Click «Публичная оферта» → opens /docs/oferta.pdf (200, PDF viewer or download). Verify at least one PDF opens in browser. Others already verified 200 via curl; click-through at least one link.
- Verify 4 social icons present with correct hrefs (instagram/telegram/rutube/vk — hover or DOM check).

## Test 10 — Mobile 390px
- iPhone 12 Pro emulation on /: hamburger opens/closes overlay, «Подарки» link behavior, grids 1-col.
- Карта дня modal on mobile: opens, card fits/readable, × closes.
- No horizontal scroll: check at 390px that no content overflows horizontally (scroll right attempt / visual check).

## Test 11 — Global bug sweep (throughout)
- browser_console after each page: no errors (vite debug lines absent on prod is fine; React DevTools info is fine).
- Any 404 resource errors in console (broken images/fonts).
- Visual: no horizontal scrollbar, no text overflow.
