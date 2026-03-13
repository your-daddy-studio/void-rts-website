---
title: "Phase 2: Sector Content, Fleet Progression & Living Galaxy — The Biggest Update in VOID RTS History"
date: "2026-03-13"
version: "v0.102"
summary: "The galaxy comes alive. Fleet stats, XP leveling, energy shields, 20 new weapons, alien factions, branching narrative events, black holes, discoveries, and a full story system — 4 new JS files, 32 files changed, 7,617 lines added in a single update."
---

v0.102 is the biggest single update in the game's history. This was Phase 2: Sector Content, Fleet Progression & Living Galaxy — an entirely new layer of systems built on top of the existing combat and exploration foundation. Four new JS files. Thirty-two files changed. Seven thousand six hundred and seventeen lines added. The game went from a combat prototype with exploration to a deep roguelike space RPG.

- **Fleet Stats system** — 18 stats with multiplicative bonuses, fully integrated into combat and movement. Carrier upgrades now use 5 tiered modules purchasable from a new panel (C key): repair bay, shield projector, sensor array, cargo bay, flight deck
- **XP / Leveling system** — ships earn experience, levels are tracked per run. 10 allocatable stat categories, 3 points per level, max level 30. Full panel on TAB key — entirely new progression layer that didn't exist before
- **Energy Shields** — completely new defensive system built from the ground up. Shields absorb hits before hull damage, have a recharge delay, render as translucent spheres around ships, and can be boosted by shield pickups found in sectors
- **Discoveries system** — 20 unique artifacts with permanent stat boosts, 12 alien tech items with active and passive abilities, 5 wreck types, and a full inventory system. Finding a legendary artifact in a deep sector now actually changes how your fleet fights
- **Alien Tech active abilities** (F1–F3 keys): phase cloak, EMP pulse, swarm drones, warp jump, pulse beacon, void mines — each pulled from carried alien tech items
- **Echo Protocol story system** — 10 narrative fragments spread across 3 acts. Full-screen typewriter overlay with system boot messages, hex data streams, and glitch FX. Ship Log panel (L key) tracks your collected fragments. The story unfolds as you explore
- **3 Alien Factions** — entirely new diplomatic layer, rebuilt from the ground up:
  - Crystalline Collective (scanning / knowledge focus)
  - Mechanist Enclave (weapons / engineering focus)
  - Voidborn Nomads (navigation / shields focus)
  - Each faction has reputation from -100 to +100 that changes based on your actions
- **14 Narrative Events with branching choices** — A/B/C options, each with costs, requirements, and faction reputation effects. No two runs will play out the same way
- **20 New Weapons across 4 tiers** — from Tier 1 side-grades up to Tier 4 legendaries. Entirely new weapon behaviors: AoE splash, burst fire, frag splitting, chain lightning, phase (bypasses shields), damage over time, pierce, drain, swarm drones, gravity wells, area debuffs. Named weapons include scatter shot, plasma cannon, railgun, torpedo launcher, singularity cannon, nova lance, swarm launcher, quantum torpedo, and echo resonator
- **Black Holes** — new sector hazard with full accretion disk visuals and real gravity pull that affects ships and missiles in flight. E-118 crystal clusters spawn nearby
- **Gravity Anomalies** — 3 types: slow zones, push fields, orbital forces — each changes how combat plays out in the sector
- **7 New Scan Signals** on the frequency analyzer: wreck, trade post, gravity anomaly, faction outpost, artifact, black hole, shield pickup
- **Trade post proximity UI** — fly close to a trade post to open a buy/sell interface
- **Ship spawn animation** — ships now fly out from the carrier and form up, instead of appearing instantly
- **Scanner pacing** — intentionally slow at the start (14s sector / 8s cell). Upgrades reduce these times, making progression feel earned
- **Fog of War extended** — planets and suns in unexplored sectors are now hidden until revealed
- **4 new JS files**: `fleet-stats.js`, `shields.js`, `discoveries.js`, `events.js`
