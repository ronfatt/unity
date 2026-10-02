# UNITY FABRICATE website — revision 2

Open `index.html` directly in a modern browser. No build, package installation or framework is required. For a local server, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8765/.

## Current design

All 15 website photographs were regenerated with built-in imagegen in a cohesive professional industrial photography style. They are disclosed as AI-generated illustrations. The selling proposition is now laser cutting + sheet metal fabrication through one partner, supported by drawing-based customization and flexible order quantities.

## Files

- `index.html` — semantic English page, metadata, bilingual entry points and business structured data.
- `assets/css/styles.css` — responsive visual system and reduced-motion behavior.
- `assets/js/translations.js` — manually written EN/中文 interface and copy.
- `assets/js/main.js` — industry tabs, mobile navigation, gallery/lightbox and quotation draft.
- `assets/favicon.svg` — typographic U favicon.
- `assets/images/web-v2/` — optimized generated photographs and responsive variants.
- `assets/images/generated/` — the 15 original generated PNGs.
- `assets/image-prompts.md` — final prompts and generation mode.
- `assets/pdf-source-map.md` — historical PDF extraction mapping; not current website imagery.
- `assets/images/extracted/` — native selected PDF images and their transparency masks.
- `assets/extract-assets.py` — reproducible Poppler/Pillow extraction workflow.
- `assets/image-manifest.json` — generated image provenance, resolutions and prompts.
- `assets/source-map.md` — current per-image provenance, placement and disclosures.
- `assets/content-notes.md` — source facts, editorial copy and confirmation items.
- `QA.md` — browser validation and limitations.

## Public hosting

Publish only `index.html`, `assets/css/`, `assets/js/`, `assets/images/web-v2/` and `assets/favicon.svg` to a static HTTPS host. Keep extraction scripts, originals, manifests and review documentation in the handoff archive, rather than the public deployment. Set the confirmed canonical URL in the HTML before launch. The site has not been published to a public domain.

No form backend is configured. The quotation form opens a draft in the visitor’s email application; drawings must be attached manually. Telephone and WhatsApp actions use the supplied Malaysian contact number.

## Editing

Edit the English HTML together with its corresponding English and Chinese translation keys. Dynamic industry copy and mail-draft messages live in `main.js`. Keep brand names, image labels and machine capability claims consistent with confirmed company information.


## Official logo — 2 October 2026

The user-supplied blue/orange UNITY logo replaces the temporary brand mark and letter-U favicon. `assets/brand/unity-logo-original.jpg` preserves the original JPEG. The SVG assets embed that unchanged file with cropped viewports for branding; they are raster-backed, not vector originals. Header, mobile menu, footer and browser favicon now use the supplied identity.


## Mobile app-style layout
The mobile website now includes a fixed five-item bottom navigation, section highlighting, touch-sized controls, horizontally scrollable category chips, rounded service cards and a single-column quotation form. Contact opens a native accessible dialog with WhatsApp +60122884047, mailto:ericong8882@gmail.com and click-to-call. Safe-area padding accommodates device edges. This remains a browser website, with no native app installation or offline capability.
