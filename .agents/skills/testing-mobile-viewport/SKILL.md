---
name: testing-mobile-viewport
description: How to test mobile-width responsive layouts in Chrome when the app's breakpoint is below the minimum OS window width
---

# Testing mobile responsive layouts in Chrome

When a checklist asks for ~390px viewport testing:

1. `wmctrl -r :ACTIVE: -e 0,x,y,w,h` can resize the Chrome window, but Chrome enforces a **minimum window width (~530 px real)**. If the app's mobile breakpoint is at e.g. 900px, a 530px window still triggers the mobile layout — but for a truer phone-width check use DevTools device emulation.
2. In Chrome: press `F12` to open DevTools, then `Ctrl+Shift+M` to toggle the device toolbar. Click the "Dimensions" dropdown and pick a preset (e.g. **iPhone 12 Pro = 390×844**) instead of typing into the width field — the width/height fields are small and easy to mistarget.
3. Clicks inside the emulated frame are real taps on the page, so navigation/tappability can be verified the same way as desktop.
4. After emulation, press `Ctrl+Shift+M` then `F12` again to leave device mode and close DevTools, and re-maximize with `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`.
5. For Vite dev servers (`npm run dev`), the default port is **5173**; the console normally only shows `[vite] connected` debug lines — anything else red is worth investigating.

Devin Secrets Needed: none.
