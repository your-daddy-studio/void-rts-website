---
title: "Modular Station, Scout Dogfighting & 4x Map"
date: "2026-03-03"
version: "v0.047"
summary: "Modular space station with habitat ring, scout banking and circle-strafing, capital ship standoff ranges, and a 4x larger battlefield."
---

- New modular station architecture — 6 hull modules (bridge, docking, hangar, collector pads, habitat support, engine) tracked with moduleIndex and modules map for future per-module damage and building
- Habitat ring is now a solid vertical wheel (XY plane, Bresenham line-filled, completely watertight with no gaps)
- Structural pylons rotate with the ring as one assembly
- Station orientation flipped — bridge now faces the enemy (same direction as fleet)
- Scout banking up to ~70 degrees on turns; capital ships tilt subtly (~20 degrees)
- Scout pitch responds to acceleration
- Scout circle-strafing: scouts orbit attack targets while shooting, like dogfighting fighters
- Heavy/capital ships maintain weapon range instead of closing to melee — destroyers hold at 80%, carriers at 85% of attack range
- Scouts close to 35% of attack range — they get in close
- Big ships actively brake if they overshoot into melee range (mass-proportional resistance)
- MAP_SIZE increased from 44 to 176 (4x larger battlefield)
- Stations pushed to map edges (BASE_Z from 36 to 144)
- Asteroids, crystals, and suns repositioned for larger map
- Camera system adjusted — higher zoom-out ceiling and faster pan speed
- More asteroid fields and crystal deposits spread across the larger space
