---
title: "3D Holographic Ground Grid, Destructible Debris Overhaul & Gameplay Systems Polish — VOID RTS Rebuilt Again"
date: "2026-03-16"
version: "v0.104"
summary: "The tactical ground grid was rebuilt from scratch in 3D with holographic sector walls, ship wakes, data pulses, and a ripple reveal intro. Debris got a full fracture system with 3-tier wreck voxels and ambient debris fields. Engine heat, weapons tab, procedural artifacts, and a sweeping pass of gameplay fixes round out a deep polish session."
---

v0.104 continued with a deep polish and systems overhaul session. The ground grid was completely rebuilt from scratch as a proper 3D holographic tactical display. The debris system was overhauled with three tiers of wreck voxel templates, destructible fracture physics, and seeded ambient debris fields. Engine heat mechanics, a carrier weapons tab, procedural artifacts, and a wide sweep of gameplay fixes brought the game significantly closer to a stable Phase 2 completion state.

- **3D Ground Grid — completely rebuilt** — the old flat canvas grid is gone. The new grid is a proper 3D instanced mesh system with 4 visual layers:
  - Coarse sector cell lines with per-sector fog-of-war brightness
  - Fine subdivision lines that fade gracefully with zoom level
  - Border edges with deduplication (shared edges rendered once, owned by the revealed side)
  - Glow dot points at fine-grid intersections — tiny round canvas-baked sprites
- **Holographic Sector Walls** — semi-transparent vertical planes rise from sector boundaries when only one side has been revealed. As the second side is scanned, the wall fades out smoothly — it's now interior space. Wall color is ring-coded: cyan (ring 0), green-cyan (ring 1), amber (ring 2), red-orange (ring 3+). Scanline texture scrolls upward continuously for a holographic shimmer effect
- **Ripple Intro Reveal** — when the game starts, the starting sector grid animates in with a smooth circular shockwave from the carrier position. Cubic ease-in-out pacing, soft leading glow, gentle trailing fade. Grid lines, fine lines, border edges, dots, crosses, and walls all follow the same ripple front — everything snaps into place together
- **Ship Wake Effect** — moving ships brighten the grid beneath them proportional to their speed. The wake decays smoothly when the ship stops, leaving a faint trailing highlight for ~0.3 seconds
- **Ambient Sector Rings** — a looping set of expanding ring FX pulses outward across the tactical floor for the first few seconds of each new sector. Canvas-baked ring texture with a radial gradient, additive blending, spawns at random positions across the sector floor avoiding the carrier exclusion zone
- **Debris System Overhaul** — 3 new mid-size wreck tiers between tiny SpaceDebris fragments and BigWreckChunks:
  - **WRECK_SMALL** (~15–35 voxels): angular hull shard with ragged torn edges — looks like a panel that was ripped off
  - **WRECK_MEDIUM** (~60–120 voxels): full destroyed shuttle / fighter-scale hull with blast craters
  - **WRECK_LARGE** (~200–400 voxels): a recognizable destroyed frigate or corvette section — piping, plating, blast holes
- **Debris Fracture Physics** — when a SpaceDebris chunk takes enough damage, it fractures. Voxels are partitioned angularly around the parent center into 2–3 sub-pieces. Each piece above a minimum voxel threshold spawns as a full SpaceDebris with inherited spin and velocity spread along the impact direction. Tiny pieces explode into particle FX instead. The result: big wreck chunks shatter visibly under weapons fire
- **Ambient Debris Fields** — each sector now spawns a seeded ambient debris field on arrival: 10–16 scattered hull fragments in varied palette tags (never two adjacent pieces in the same material), one guaranteed BigWreckChunk visible from spawn, dust cloud sprites, and micro metal fleck scatter. The field is seeded by world position so it's consistent across the run
- **10 Debris Palette Tags** — rust, ice, scorched, patina, copper, silver, alien alloy, pale rock, dark rock, tan sand. Adjacent pieces enforce palette diversity to prevent visual repetition
- **Engine Heat System** — the carrier now accumulates engine heat during sustained movement. The heat bar appears on the right HUD edge only when heat is above trace levels: amber at low heat, orange at 70%, red at 90%. Hitting 100% triggers a forced 6-second cooldown with a pulsing red overheat indicator and a game log entry. The carrier cannot accelerate until cooldown completes. Heat dissipates at 2× the rate it accumulates — idle briefly to manage
- **Carrier Weapons Tab** — new tab in the C panel (carrier management). Two sections:
  - **Fleet Loadouts** — shows every combat ship with both weapon slots listed, weapon name, inline stats (DMG / RNG / CD / AOE / BURST etc.), and a tier badge in the correct color (green/blue/purple/gold for T1–T4)
  - **Weapon Catalogue** — full list of all 40+ weapons organized by tier with type tags (MISSILE / BEAM / BALLISTIC + AOE / PHASE / CHAIN / DOT / DRAIN / GRAV / DEBUFF / SWARM). A placeholder notice marks where weapon equipping will live when research is implemented
- **Procedural Artifact Generator** — artifacts found in later sectors are now procedurally generated from adjective+noun name pairs (20 adjectives × 20 nouns: QUANTUM LENS, VOID CRYSTAL, PHASE MATRIX, etc.), 18 possible stat targets, and rarity-weighted bonuses scaled by ring distance. Higher rings roll better rarity brackets
- **Fade-In System** — a shared `registerFadeIn(group)` function fades any scene object in over 0.8 seconds with a smooth ease-out curve. Applied to wrecks, debris, and environmental spawns — nothing pops in anymore
- **Weapon Overrides Serialized** — weapon override state now serializes and restores correctly across sector transitions, same as fleet stats, upgrades, inventory, and XP. Nothing is lost on sector jump
- **Cell-Spawner wreck integration** — cell spawner now dispatches to the three wreck tiers (`spawnWreckSmall`, `spawnWreckMedium`, `spawnWreckLarge`, `spawnBigWreckChunk`) based on encounter type, replacing the old single-size system
- **Damage system repairs** — subsystem targeting wheel state machine fixes and targeting voxel selection improvements; `getTargetVoxel()` more reliably picks a valid voxel on the expected subsystem zone
- **Wide gameplay bug pass** — a broad sweep of fixes: scanner battery restores correctly on sector entry, carrier management panel auto-refresh now handles both research and upgrade install queues independently, ATLAS radar sector reveal triggers correctly after scanning, ship group assignment survives serialization round-trips, carrier panel last-tab memory is stable across all tab switches
