# Revision 2 QA — 2 October 2026

## Current result

The revised site was reopened locally after the photography and content changes. The existing in-app preview was refreshed to the new version.

| Width | English | Chinese | Horizontal overflow | Broken images |
|---|---|---|---|---|
| 1440px | Pass | Pass | None | None |
| 1280px | Pass | Pass | None | None |
| 768px | Pass | Pass | None | None |
| 390px | Pass | Pass | None | None |

- Full-page screenshots reviewed for the new headline, value strip, service photographs, gallery, RFQ steps and form.
- Exactly one H1, zero browser script errors and zero HTTP resource errors.
- All 15 photographic source names point to the new `web-v2` directory; no published page/JS reference points to the old PDF-derived web images.
- Industry tabs: all six panels checked; keyboard arrow switching passed.
- Gallery filters: all 9 images, laser 1, sheet 2, CNC 2, construction 2, machines 2.
- Lightbox opening, next-image keyboard action and Escape passed.
- Mobile menu navigation and expanded-state reset passed.
- RFQ generates a draft with name, company, contact fields, selected service/material, quantity, message and filename; no upload or delivery is claimed.
- Invalid file-extension rejection passed.
- Both WhatsApp links use the supplied Malaysian number and authorized default message. No messages were sent.
- Native dialogs, translated accessible names, reduced-motion rules and buildless execution are preserved.
- Generated imagery is explicitly labelled as illustrative in the page and in accessible alternative text.

## Limits

The checks use local Chromium at the specified sizes, not physical-device certification. No public deployment was performed. Lighthouse is not installed, so a numeric performance score is not claimed. Image generation establishes an illustrative visual style, not equipment ownership, process specifications or production evidence.


## Official logo update
Verified original logo assets load at 1440, 1280, 768 and 390 px in English and Chinese; no horizontal overflow. Visually inspected mobile header and footer. Preserved original JPEG, refreshed browser preview and screenshots.


## Mobile app-style revision
EN/中文 checked at 320, 390, 430, 768 and 1440 pixels: no horizontal overflow or JavaScript errors. Tested bottom navigation and current-section state, contact sheet open/Escape close, exact WhatsApp and email destinations. Visually inspected home, service cards, contact sheet and single-column RFQ form. No external messages were sent. Keyboard avoidance uses VisualViewport and requires final on-device keyboard verification.
