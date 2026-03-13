---
title: "Exploration Grid, Carrier Redesign & the Birth of a Real RTS"
date: "2026-03-10"
version: "v0.090"
summary: "The 3D grid was rebuilt from the ground up to support sector-by-sector exploration. The carrier was completely redesigned into a 3000-voxel behemoth. Resources now flow through carriers. The game finally plays like an RTS."
---

v0.090 is the version where VOID RTS stopped being a tech demo and started being a game. The exploration system, carrier economy, and starting fleet were rebuilt from scratch to create a real strategic loop: expand, explore, exploit.

- **3D ground grid rebuilt from the ground up** — previously a single overdrawing mesh, now three separate mesh layers (internal sector lines, unique border segments, unique cross markers) that eliminate all overdraw artifacts and allow per-element visibility control
- **Sector exploration system** — the grid is no longer fully visible from the start; sectors must be explored to reveal them; grid lines appear only in explored sectors; borders show if either adjacent sector is revealed; crosses show if any adjacent sector is revealed — exactly like classic fog-of-war mechanics but in full 3D space
- **Everything hides in unexplored sectors** — asteroids, planets, suns, enemy stations, enemy ships — nothing renders until scouts push the frontier
- **Diagonal exploration** — uses Chebyshev adjacency (8-directional), so scouts exploring diagonally reveal corners naturally
- **Carrier completely redesigned** — from a modest hull to a 3000-voxel titan: 40u wide × 93u long, open hangar bay along the full underbelly, stepped command tower, 10 engine nacelles across the rear; by far the largest ship in the game
- **Carrier-based economy** — collectors now return resources to the nearest friendly carrier instead of the map origin; the carrier is the economic heart of the fleet
- **Starting fleet redesigned** — players begin with 1 carrier + 1 bomber + 2 scouts + 1 collector, all spawning at map center (sector D4); the carrier is immediately operational
- **ATLAS view overhauled** — 3D crosses replaced with subtle interior intersection dots; grid brightness dynamically responds to zoom level so the overlay never overwhelms the view at distance; dead rendering functions `_trDrawSweep` and `_trDrawRangeRings` removed
- **Map border removed** — the hard edge is gone; the play area fades into infinite space, reinforcing the "void" aesthetic
