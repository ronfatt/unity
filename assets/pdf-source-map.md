# Historical PDF extraction record — first revision

This is a retained provenance record for the original supplied materials. Its statements about displayed website imagery apply only to the first revision. The current website uses the AI-generated photographs documented in `source-map.md`.

# Image source map

All visible photography comes from the user-supplied PDFs. No internet stock imagery or newly generated imagery was used. The supplied concept PNG was reviewed for direction only, not presented as evidence of the actual workshop or its equipment.

15 distinct embedded color images are retained at native resolution in `images/extracted/`. Soft masks are retained separately where relevant. Optimized WebP derivatives are in `images/web/`. All source pages listed below are **page 1**, and embedded image indices are zero-based Poppler `pdfimages -list` indices (including mask entries).

| Web asset | PDF | Image index | Native size | Main web size | Website use |
|---|---|---:|---|---|---|
| `laser-cutting-sparks.webp` | 激光切割彩页.pdf | 0 | 1536 × 1024 | 1536 × 1024 | Homepage hero (native 1536 px; preloaded) |
| `laser-cutting-steel.webp` | 激光切割彩页.pdf | 13 | 904 × 500 | 904 × 500 | Primary laser-cutting service |
| `fiber-laser-machine.webp` | 激光切割彩页.pdf | 6 | 796 × 270 | 796 × 270 | Machine gallery / lightbox |
| `laser-cut-steel-components.webp` | 激光切割彩页.pdf | 9 | 852 × 606 | 852 × 606 | Automation industry panel; laser-cutting gallery / lightbox |
| `sheet-metal-component-selection.webp` | 激光切割彩页.pdf | 10 | 982 × 1032 | 982 × 1032 | Custom-project industry panel; sheet-metal gallery / lightbox |
| `precision-machined-components.webp` | 加工中心彩页.pdf | 9 | 2428 × 1382 | 1600 × 911 | CNC capability section; machinery industry panel; machined-parts gallery / lightbox |
| `turned-metal-components.webp` | 加工中心彩页.pdf | 10 | 1508 × 1088 | 1200 × 866 | Maintenance industry panel; machined-parts gallery / lightbox |
| `cnc-press-brake.webp` | 桥架 穿墙丝.pdf | 5 | 2194 × 1828 | 1400 × 1166 | Primary sheet-metal fabrication service |
| `cable-tray-channel.webp` | 桥架 穿墙丝.pdf | 7 | 1406 × 926 | 1200 × 790 | Engineering & construction product card |
| `water-stop-steel-plates.webp` | 桥架 穿墙丝.pdf | 9 | 1056 × 600 | 1000 × 568 | Engineering & construction product card |
| `cable-tray-corner.webp` | 桥架 穿墙丝.pdf | 11 | 1714 × 1004 | 1200 × 703 | Construction industry panel; construction gallery / lightbox |
| `formed-sheet-metal.webp` | 桥架 穿墙丝.pdf | 13 | 1268 × 1060 | 1200 × 1003 | M&E industry panel; sheet-metal gallery / lightbox |
| `threaded-steel-rods.webp` | 桥架 穿墙丝.pdf | 19 | 1102 × 826 | 1000 × 750 | Construction gallery / lightbox |
| `wall-tie-assembly.webp` | 桥架 穿墙丝.pdf | 25 | 1028 × 208 | 1000 × 202 | Engineering & construction product card |
| `sheet-metal-laser-machine.webp` | 钣金加工彩页 2.pdf | 2 | 826 × 292 | 545 × 292 | Machine gallery / lightbox; cropped to exclude the operator’s legacy-branded shirt |

## Extraction and optimization

Run `python3 assets/extract-assets.py /path/to/source-folder` with Pillow and Poppler installed. The script extracts embedded rasters at native resolution and preserves selected originals. It recombines PDF soft masks onto white, avoiding the dark rectangles that raw unmasked PDF images can contain. This restores the intended source transparency; it does not retouch equipment or logos.

- WebP quality: 84 for primary images, 82 for responsive derivatives.
- Responsive widths: 480 and 800 px where the original supports them; never upscale.
- Hero retains its original 1536 px width rather than inventing detail at 2200 px. The same compressed hero is preloaded and used on mobile to retain detail when its tall container crops the landscape image.
- The sheet-metal machine photograph is cropped to `(0, 0, 545, 292)` from an 826 × 292 original to exclude the legacy-branded operator. No branding was painted out.
- Other photos retain native aspect ratio. Web containers use `object-fit: cover` or `contain`, never stretching.
- Brochure typography, logos and contact blocks are separate PDF objects and were not incorporated into web imagery.
- Native cutout masks accompany the press brake, construction cutouts and fiber-laser machine.
- No JPEG fallbacks are necessary for modern browsers supporting WebP; lossless native PNG originals remain available.

## Inspected but not used

- `钣金加工彩页 2.pdf`, page 1: eight machine thumbnails are approximately 148 × 146–148 px. Too small for large cards; omitted. The wide machine view is used only as a small, cropped gallery image.
- `加工中心彩页.pdf`, page 1: standalone CNC center (518 × 482), mixed components (452 × 287), and shop image (454 × 249) were evaluated but not needed; the higher-resolution component images were selected.
- `激光切割彩页.pdf`, page 1: small plate sample (487 × 342) omitted in favor of a clearer 852 × 606 component photo.
- Factory/building photos in the laser and sheet-metal PDFs show dominant UXUI branding and were omitted. No factory photograph is labelled as a verified UNITY facility.
- Construction hardware thumbnails of 341 × 215 and 317 × 175 were omitted in favor of clearer product cutouts.
- `钣金加工彩页 2.pdf`, pages 2–4 duplicate laser, construction and CNC content. The original dedicated PDFs were preferred to avoid duplicate assets.
- `A4对折小册子文案.pdf` contains text, not embedded photographic assets; used for company copy and contact details.
- `ChatGPT 图像 2026年9月30日 09_54_40.png` is labelled as a design concept with equipment images intended to be replaced by real photography. It was not used as a documentary image source.

## Provenance limitation

These PDFs establish where each image was supplied, not ownership of the depicted equipment or proof that the photographs show UNITY’s workshop. The gallery explicitly identifies brochure images as examples. Confirm usage rights and which machines belong to UNITY before a public launch; replace with verified UNITY photography when available.
