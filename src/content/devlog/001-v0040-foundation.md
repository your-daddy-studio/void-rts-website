---
title: "The Foundation: From Prototype to v0.040"
date: "2026-03-02"
version: "v0.040"
summary: "Single-file space RTS prototype — five ship types, fog of war, patrol routes, target lock HUD, destructible voxel asteroids."
---

- Single HTML file prototype, ~3,350 lines, Three.js r128
- 5 ship types: fighter, cruiser, collector, bomber (AoE), scout (fast, long sight range)
- Fog of war: 88x88 grid, 3 states (unknown/explored/visible), minimap overlay
- Attack-move (F+RCLICK), patrol with up to 8 waypoints (P+RCLICK), attack-ground (G+RCLICK)
- 6-layer animated target lock HUD with color shift based on target HP
- Destructible voxel asteroids, crystal asteroids for palladium harvesting
- Collector harvest loop: fly to crystal, mine, return to base
- 3 decorative voxel suns at map edges with glow + rotation
- 2 bases per side, camera oriented with player base at bottom
- Minimap with click-to-pan and fog overlay
