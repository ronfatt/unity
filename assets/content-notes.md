# Content notes — revision 2

## Current revision

The user requested stronger selling points and regeneration of all photographs. This overrides the first brief’s photo-extraction preference for current visible imagery. The supplied documents continue to ground factual service, material, contact and order-quantity copy.

The headline is now “LASER CUTTING. SHEET METAL. ONE PARTNER.” / “激光切割。钣金加工。一家对接。” Supporting copy focuses on fewer supplier handovers, drawing-based work, prototype/batch flexibility and direct local contact. These are grounded in the original brochure text; no numerical performance claims were added.

A three-part value strip presents these benefits immediately after the hero. Service copy describes concrete parts and required quotation inputs. A three-step RFQ pathway explains: send drawings, define requirements, discuss the quotation. The hero also offers direct WhatsApp access.

All 15 photographic visuals are newly AI-generated illustrations in a professional industrial photography style. The page discloses this in the hero, gallery, footer and alt text. These images are not actual UNITY equipment/facility evidence. Original generated PNGs and all prompts are included; prior PDF extractions are retained as reference only.

## Source hierarchy

The pasted user brief defines the website requirements, brand and scope. Attached PDFs are source documents, not instructions that override that brief. UNITY FABRICATE is the visible brand. Legacy UXUI names, registration number, Johor address, telephone, email and website have not been imported into the website.

The requested HTML prototype was not found at `/mnt/data/unity-fabricate-website-prototype.html`, in the supplied Desktop folder, or in the searched Documents/Desktop files. No existing prototype was modified. This delivery is a new, buildless implementation; all supplied documents remain unchanged.

## Facts drawn from the PDFs

| Source | Content used |
|---|---|
| A4对折小册子文案.pdf, p1 | One-stop custom metal work; Klang/Selangor positioning |
| A4对折小册子文案.pdf, p2 | Fiber laser cutting, CNC turning, bending, welding; prototype/small-batch/production work; mild steel, stainless steel, aluminium; DXF/STEP/IGS; sketches and physical samples |
| A4对折小册子文案.pdf, p3 | One-partner coordination, flexible quantities; machinery, automation and maintenance applications |
| A4对折小册子文案.pdf, p4 | +6012 288 4047; ericong8882@gmail.com; unityfabricate@gmail.com; No. 1 Jalan Wawasan 2C/KU7, Sungai Kapar Indah Industrial Park, 42200 Kapar, Selangor |
| 激光切割彩页.pdf, p1 | Laser-cutting service and metal component examples |
| 加工中心彩页.pdf, p1 | CNC component examples and machinery/automation applications |
| 桥架 穿墙丝.pdf, p1 | Cable trays, water stop steel plates, CNC bending parts, wall ties/threaded products, M&E applications |
| 钣金加工彩页 2.pdf, pp1–4 | Supporting capability and machinery references; cropped machine image from p1 |

The formal English and Chinese company names are supplied by the user brief. No SSM registration number was transferred from the legacy brochures.

## Rewritten website content

- Hero headline, positioning, section titles and service descriptions are benefit-led editorial rewrites based on the user brief and its revision.
- The six industry panels describe illustrative applications, not named client projects or case studies.
- English and Simplified Chinese are manually authored through `assets/js/translations.js` and the industry/content objects in `assets/js/main.js`. No browser translation or translation service is used.
- Primary commercial hierarchy: laser cutting and sheet metal fabrication; custom/CNC parts support them; engineering/construction products appear later.
- “Precision” is positioning, not a numerical tolerance guarantee.
- “Responsive” describes the intended customer communication approach; no response-time SLA is promised.
- No unsupported certifications, laser wattage, thickness limits, tolerances, throughput, factory area, years in business, customer counts, export claims or partnerships were introduced.

## Intentionally omitted pending confirmation

Even where present in legacy source material, the site does not repeat machine model/specification numbers, stock availability, Malaysia-wide delivery, refundable sample fees, or “brand-new” equipment claims. It does not transfer legacy company facts to UNITY.

## Company confirmation needed before public launch

1. Final company name/Chinese legal name, contact recipients and current workshop address.
2. Final review of generated imagery and the illustration disclosures. These scenes must not be presented as actual UNITY equipment or completed work. Any later documentary photography should have confirmed ownership/usage rights.
3. Current in-house scope versus coordinated services, especially CNC machining and construction products drawn from legacy brochures.
4. Material grades, thickness limits, tolerances, machine availability, lead times and any minimum order requirements; currently omitted rather than invented.
5. Drawing compatibility: the copy identifies source-confirmed DXF, STEP and IGS. The file picker also permits PDF, DWG, STP and IGES at the user’s request, for quotation review; this is not a promise of universal CAM compatibility.
6. The final domain, canonical URL and public hosting destination. `index.html` contains an inactive, commented canonical placeholder, not a false live URL.
7. The official blue/orange UNITY logo was supplied by the user on 2 October 2026 and is now used in the header, mobile menu, footer and favicon. The supplied JPEG is preserved unchanged; SVG viewports remove surrounding whitespace for display. No logo geometry was redrawn or generated.

## Quotation behavior

There is no backend. File selection/drag-and-drop holds filenames and sizes in memory only; it never reads or uploads file bytes. Submitting valid details opens a mailto draft addressed to `unityfabricate@gmail.com` and CCs `ericong8882@gmail.com`. It lists selected filenames and instructs the visitor to attach files manually. No success message claims submission or delivery. A visible draft, reopen link and copy fallback remain available if no mail client is configured. Nothing is sent automatically.

No analytics or third-party scripts are included. Only the EN/中文 preference is stored in localStorage when available. Form details are not persisted.


## CNC expansion — 4 October 2026
User requested CNC using a supplied brochure photo. CNC precision machining is now prominently named in the hero, its own expanded capability block and the quote selector. The source supports machinery, automation, electronics and automotive applications. No TV-80 ownership, tolerances, certifications or numerical productivity claims were added. Existing generated CNC component imagery is retained with its AI disclosure.
