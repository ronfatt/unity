# Current image source map — revision 2

The user requested that every website photograph be regenerated in a professional photographic style. All 15 photographic assets in the current website are newly AI-generated using **built-in imagegen**, not extracted PDF photos. They are photorealistic illustrative visuals, not photographs of UNITY’s real premises, equipment or completed jobs.

- Original generated PNGs: `assets/images/generated/`.
- Optimized website WebP images: `assets/images/web-v2/`.
- Native dimensions: 1536 × 1024 for every image.
- Website derivatives: original size plus 800px and 480px versions; hero uses its full native width.
- Compression: WebP 84, responsive variants 82. Resizing/compression only; no creative retouching after generation.
- Full prompts and built-in tool mode: `image-prompts.md`.
- Machine-readable record: `image-manifest.json`.
- Source PDF extractions are retained in `images/extracted/` and their historical mapping is in `pdf-source-map.md`. They are not referenced by the current page.

| Current WebP filename | Subject | Page use |
|---|---|---|
| `laser-cutting-sparks.webp` | Newly generated industrial photographic illustration | Homepage hero |
| `laser-cutting-steel.webp` | Newly generated industrial photographic illustration | Laser cutting primary service |
| `cnc-press-brake.webp` | Newly generated industrial photographic illustration | Sheet metal primary service; forming-process closeup |
| `precision-machined-components.webp` | Newly generated industrial photographic illustration | CNC service; machinery panel; gallery |
| `laser-cut-steel-components.webp` | Newly generated industrial photographic illustration | Automation panel; laser gallery |
| `sheet-metal-component-selection.webp` | Newly generated industrial photographic illustration | Custom-project panel; sheet-metal gallery |
| `turned-metal-components.webp` | Newly generated industrial photographic illustration | Maintenance panel; machined-parts gallery |
| `formed-sheet-metal.webp` | Newly generated industrial photographic illustration | M&E panel; enclosure gallery |
| `cable-tray-channel.webp` | Newly generated industrial photographic illustration | Construction product card |
| `water-stop-steel-plates.webp` | Newly generated industrial photographic illustration | Construction product card |
| `cable-tray-corner.webp` | Newly generated industrial photographic illustration | Construction industry panel; gallery |
| `threaded-steel-rods.webp` | Newly generated industrial photographic illustration | Threaded components gallery |
| `wall-tie-assembly.webp` | Newly generated industrial photographic illustration | Construction product card |
| `fiber-laser-machine.webp` | Newly generated industrial photographic illustration | Machine gallery |
| `sheet-metal-laser-machine.webp` | Newly generated industrial photographic illustration | Sheet cutting equipment gallery |

## Visual direction

A consistent charcoal/steel palette; controlled amber highlights; close process details; credible product geometry; textured workbench environments; no legacy branding, brochure typography, catalog cutouts or collaged thumbnail grids. Construction photography is supporting content, while laser cutting and sheet-metal fabrication remain primary.

## Website disclosure

The hero includes an AI-generated process-visual label. The gallery explains that all process/product images are AI-generated illustrations and do not depict actual UNITY facilities, equipment or projects. The footer repeats a concise notice. Alternative text identifies each photograph as an AI-generated illustration. No image is used as evidence of a machine model, capacity, certification or completed client project.

## Regeneration

Use the recorded prompts with the built-in imagegen tool if a scene needs revision. The original `extract-assets.py` still reproduces the historical PDF references; its `images/web/` output is deliberately separate from the current generated `images/web-v2/` assets.


## Official logo — 2 October 2026

The user-supplied blue/orange UNITY logo replaces the temporary brand mark and letter-U favicon. `assets/brand/unity-logo-original.jpg` preserves the original JPEG. The SVG assets embed that unchanged file with cropped viewports for branding; they are raster-backed, not vector originals. Header, mobile menu, footer and browser favicon now use the supplied identity.
