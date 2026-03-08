---
title: "Unified Command Panel & ATLAS Rebuilt From the Ground Up"
date: "2026-03-09"
version: "v0.089"
summary: "The command interface and tactical radar have been entirely redesigned. BASE EXPANSION and SHIPYARD merged into a single panel. ATLAS is now a proper full-screen tactical system with sector grid, fleet roster, and cursor-synced readouts."
---

v0.089 is the biggest UI overhaul in the project's history. Two separate control panels collapsed into one. The tactical radar rebuilt completely. A new support ship added. And a nasty crash that was corrupting the canvas every frame — fixed.

- **Unified Command Panel** — BASE MODULES and SHIPS are now a single panel (B/V keys) with tabs and ship subcategories: LIGHT, MEDIUM, HEAVY, UTILITY, MINING, ATLAS
- **Corvette renamed to Bomber** across the entire codebase; Frigate moved to MEDIUM category
- **New Repair Vessel** — support ship with twin repair beam emitter arms, auto-heals nearby friendlies at 0.08/s within range 8, tech-gated behind habitat_t2; ~250 voxels
- **ATLAS radar rebuilt from scratch** — full-screen crosshair cursor lines, sector + cell readout at cursor (e.g. "D4.7"), large sector (48u) and small grid cell (12u) highlights, 12u grid cell labels throughout the map (A1.1 through H8.16)
- **Fleet roster panel** added to ATLAS view (top-left): all friendly unit types shown with symbols and live counts
- **Game log repositioned** to left-middle in ATLAS mode to avoid roster overlap
- **Enemy ships, exhaust particles, and engine trails** correctly hidden in ATLAS view
- **Critical overlay crash fixed** — fleet roster code was accidentally scoped inside `_trDrawThanatos()` instead of `drawTacticalOverlay()`, causing a ReferenceError for `e`/`uiFade` every frame in ATLAS; this leaked canvas state (corrupted `globalAlpha`) and made cursor brackets and selection rings invisible even after switching back to normal view
- **Combat spacing overhauled** — avoidance zones widened to 4x collision radius in combat, push strength increased 1.5x, lateral spread added for ships attacking the same target; standoff multipliers increased across all ship types
- **Sector names in orders** — all move/attack/patrol/formation feedback now shows sector + cell (e.g. "NAVIGATION ORDER — D4.7")
- **Game starts in normal 3D view** — no longer boots directly into ATLAS
- Dev mode now spawns 2 radar arrays + 1 launch pad at start
