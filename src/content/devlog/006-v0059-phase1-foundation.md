---
title: "Phase 1 Foundation — The Biggest Update Yet"
date: "2026-03-04"
version: "v0.059"
summary: "Massive structural overhaul. Ships now have 5 destroyable subsystems, physics-based explosions with chain reactions, persistent debris fields, 3D shockwaves, a full FX particle system, and a new modular update architecture. The codebase grew from 12 to 16 JS files. Phase 1 of 6 complete."
---

This is the largest single update since the project began — Phase 1 of 6 planned phases, rebuilding the game's combat and damage systems from the ground up. Four brand-new JavaScript files added to the codebase: `fx.js`, `damage-system.js`, `explosion-physics.js`, `debris.js`. The codebase grew from 12 to 16 JS files.

- **Structural Damage System** — ships no longer have simple HP. Every ship now has 5 subsystems (engines, weapons, sensors, hull, life support) mapped to voxel types. Health is computed from surviving voxels. Damage is proportional: damaged engines = slower ship (minimum 20% speed), damaged weapons = slower fire rate, damaged sensors = shorter sight range (minimum 50%), hull goes critical below 30%, life support affects crew
- **Physics-Based Explosions** — force-based with quadratic falloff, mass-weighted impulse pushing nearby ships, asteroids, and debris. Chain reactions: dying ships have a 15% chance to trigger secondary explosions, up to 3 levels deep
- **Persistent Debris Fields** — destroyed ships leave tumbling wreckage that persists for 120 seconds. Wreckage is built from surviving voxels using InstancedMesh, split into 2–4 sub-chunks with individual tumble and drift. Cap of 200 active fields. Groundwork laid for future radar-blocking debris
- **3D Shockwaves** — flat rings replaced with proper space shockwaves: expanding icosphere shells plus 3 rings at random orientations slicing through. Sqrt expansion curve for an explosive feel
- **FX Particle Pool** — 500-particle pool using THREE.Points with AdditiveBlending. Radial gradient sprites. Point light pool (8 max). Screen flash overlay on detonation
- **Voxel + Metal Spark Hit FX** — projectile impacts now spawn voxel debris cubes plus fast tiny white-hot metal sparks (metal-on-metal fracture look) plus a brief flash light
- **Subsystem Micro-Bars** — 5 orange bars below HP on unit cards showing engines/weapons/sensors/hull/life support health at a glance
- **Target Lock Badge** — enemy cards show a "TARGET" label with a gentle orange glow pulse when locked by selected ships
- **Selection Status** — now displays damaged subsystem percentages inline (ENG:65% WPN:40%)
- **Enemy Charge AI** — enemies charge toward player ships in engage mode with no home leash
- **Update Registry System** — entirely new `_gameUpdates` architecture where each system self-registers with a priority number. Prevents merge conflicts and enables modular expansion going forward
