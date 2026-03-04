---
title: "Bloom/Glow Effects & Destination Marker Dedup"
date: "2026-03-04"
version: "v0.058"
summary: "Every HUD element now glows with color-matched bloom effects. Destination markers deduplicated so grouped ships show one marker instead of a stack."
---

- Bloom/glow effects added across all HUD elements — resource icons glow with color-matched text-shadow (purple palladium, blue titanium, amber element-118), game log lines have double text-shadow bloom per category (combat red, warning yellow, harvest purple, system green)
- HUD buttons gained text-shadow glow with enhanced box-shadow on hover/active states
- Ship card corner brackets now use drop-shadow filter, brighter on hover/selected; HP bars have expanded box-shadow glow (6px + 12px outer); hull integrity segments glow on full/critical states
- Selection detail text has text-shadow glow on ship name, type, and status fields
- Minimap corner brackets use drop-shadow filter with title text glow
- 2D overlay selection brackets rendered with canvas shadowBlur=6 for a soft glow effect
- 3D tactical overlay element color brightened from #00ff66 to #22ff88 for more presence
- Destination marker deduplication — when multiple selected ships share nearby destinations (within 10 units), only one marker is shown at the averaged center position instead of stacking multiple markers on top of each other
