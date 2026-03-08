---
title: "Sun Guaranteed on Every Map + Planet Mining"
date: "2026-03-07"
version: "v0.083"
summary: "Every map now guarantees at least one sun via procedural placement. Planet mining rigs confirmed working — deploy a Collector to a planet and generate palladium and titanium passively. 29 JS files, ~17,505 lines."
---

Two standalone systems landed in v0.083: a procedural sun placement guarantee and confirmed planet mining rig deployment.

- **Guaranteed Sun Spawning** — new `spawnMapSun()` in `environment.js` runs 40 random placement attempts and picks the best position that is at least 60 units from both bases and 35 units from any planet. If no valid position is found, it falls back to map center. Every map now has at least one sun.
- **3 Sun Color Palettes** — suns spawn as orange, red, or blue, with radius randomized between 5 and 7 voxels
- **Spawn Order Fix** — sun placement runs after planets are positioned, so suns never overlap planet locations
- **Game Reset Cleanup** — `createUnits()` now properly tears down and re-spawns both planets and suns on reset, no leftover objects from the previous session
- **Planet Mining Rigs** — Q + Right Click on a planet with a Collector selected deploys a Planet Mining Rig (requires Mining Corps T2 tech). Each rig generates 8 palladium + 12 titanium every 10 seconds
- **Codebase**: 29 JS files, ~17,505 lines total
