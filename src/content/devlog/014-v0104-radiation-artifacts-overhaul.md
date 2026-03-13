---
title: "Radiation Hazards, Artifact Research & Destructible Debris — VOID RTS Rebuilt From the Ground Up (Again)"
date: "2026-03-13"
version: "v0.104"
summary: "Radioactive artifacts that kill scouts, 31 artifacts across 5 rarity tiers, a timed research system, 14 carrier upgrade modules, destructible space debris with fracture physics, resource-distinct asteroid visuals, and a glowing 3D tractor beam. Another massive overhaul."
---

v0.104 is a deep systems overhaul. Radiation fields, a completely rebuilt artifact economy, 14 carrier upgrade modules, fracturing debris, visually distinct resource asteroids, and a new 3D tractor beam — all built from scratch and woven into the existing roguelike loop. Here's everything that changed.

- **Radiation Hazard System** — higher-tier artifacts (veryRare, extremelyRare) now emit dangerous radiation fields. Scouts and other unshielded ships take voxel damage when approaching radioactive artifacts. Getting near one without protection is a death sentence for light ships
- **Collector RAD Shield** — collectors have a brand-new RAD Shield upgrade (4 tiers) that resists radiation. Partial shielding reduces damage proportionally — do you risk it with a half-upgraded shield, or pull back? Real tactical decisions now live around artifact retrieval
- **31 Artifacts across 5 rarity tiers** — common, uncommon, rare, veryRare, extremelyRare. Common artifact bonuses are intentionally capped at 10% — early finds are modest. Rarity scales up dramatically. Finding an extremelyRare artifact in a Ring 3 sector is a moment
- **Timed Research System** — artifacts and alien tech must be actively researched before you can use them. Smooth animated progress bar with an irregular organic animation. Research durations scale from 30s (common) to 220s (extremely rare). Your fleet level speeds things up
- **Cargo Hold tied to artifact slots** — artifact and alien tech inventory slots are now controlled by the Cargo Hold upgrade. You start with 2 artifact slots and 1 tech slot. Upgrade the hold to reach 6 artifact / 3 tech slots. Every upgrade matters
- **14 Carrier Upgrade Modules** across 5 groups: PROPULSION (4 modules), COMBAT (2), DEFENSE (3), SYSTEMS (2), LOGISTICS (3). The new RAD Shield module sits in Logistics. Element-118 costs removed from tier 1–2 upgrades — E-118 is now a mid-to-late-game resource only
- **Destructible Space Debris** — debris chunks now have HP and can be blown apart by weapons fire. Bigger chunks fracture into 2–3 smaller pieces with full drift and spin physics. Smaller fragments explode into particle effects. Mass-based physics means big chunks have real inertia — fire your cannons at them and watch them shatter
- **Resource-Distinct Asteroid Visuals** — you can now learn to identify resources by sight before scanning:
  - Titanium: cool grey-blue steel tones
  - Palladium: warm golden-brown tones
  - Element-118: deep purple-black with glowing green/cyan emissive veins and soft radioactive glow sprites with orbiting bright particles
- **Harvest Tractor Beam FX** — entirely new 3D soft-glow amber beam during resource mining. Outer glow cylinder with radial gradient, inner bright core, source glow sprite at collector position, pulsing with layered irregular sine-wave animation. Mining now looks like it belongs in the game
- **Unified Amber Color Scheme** — all harvest and collect markers, brackets, and tractor beams are now amber. Artifact hexagon map markers are amber. Mining and collection brackets unified in style and line weight. One coherent visual language for everything resource-related
- **Scout & Collector Movement Tuning** — scout braking is now smooth: wider deceleration zone, gradual coast to stop, no more hard snap-to-position. Collector turning is eased with smooth ease-in/ease-out rotation (angAccelMul 2.2). Per-ship-type angular acceleration tuning table added
- **Sector Boundary Safety Margin** — 5-unit buffer zone beyond sector edges keeps units from getting stuck between asteroids and the sector border. Movement near edges is now smooth and frustration-free
- **Command View remembers last tab** — reopen the C panel and it's right where you left it
- **Game Hint System rebuilt** — 3 colors only (blue / amber / red), two-line support, clean modern sci-fi design. Starting hint now reads "ANOMALOUS SIGNATURES DETECTED" to prompt exploration
- **Element-118 Economy balanced** — Ring 0–1: no E-118 on the map. Ring 2: very rare deposits. Ring 3: abundant but critical for endgame. A future update will require a specialized collector to mine it
- **Research auto-refresh fixed** — was broken by the command-mode game loop architecture; now updates reliably while the carrier management panel is open
- **Move markers hidden when collecting** — collector's move destination marker hides when it has an active harvest or collect target
