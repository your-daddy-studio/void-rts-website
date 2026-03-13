---
title: "FBX Voxel Converter & New Carrier — Built From the Ground Up"
date: "2026-03-12"
version: "v0.095"
summary: "A complete FBX-to-voxel pipeline was built from scratch, and the carrier ship was rebuilt using it — going from hand-built to a detailed ~7000 voxel model through an entirely new toolchain."
---

v0.095 was a major tooling session. The headline is a completely new standalone converter tool (`fbx-to-voxel.html`) that turns FBX 3D models into game-ready voxel ships — built entirely from scratch this session. The carrier ship was then rebuilt using it, replacing the old hand-crafted model with a massively more detailed result.

- **FBX-to-Voxel Converter** (`fbx-to-voxel.html`) — a brand new standalone tool, built entirely this session:
  - Drag-and-drop loading of FBX files and their textures
  - Triangle rasterization that walks actual triangle surfaces (not just face centers) for accurate voxel fills
  - Auto-rescale to a target voxel count
  - Color quantization with a click-to-paint UI for assigning voxel types in 3D (P key toggles paint mode, adjustable brush size)
  - Save-to-file output for direct game integration
- **New Carrier model** — the carrier was rebuilt from the ground up using the new converter:
  - Source: "Star 10" FBX model voxelized to ~7000 voxels — the largest ship in the fleet by a wide margin
  - Per-voxel texture color preservation was explored but abandoned due to z-fighting between adjacent differently-colored voxels
  - Final approach: standard type-based team colors, same rendering pipeline as all other ships — clean, consistent, zero artifacts
- **Engine FX overhaul** — all ships got larger, more powerful engine effects:
  - Bigger glow sprites on engine nozzles
  - Wider ribbon trails
  - Carrier specifically: thick, heavy engine thrust matching its new scale
- **`buildTexturedShip()` function added** — new utility for future use: per-color InstancedMesh grouping, interior scan-line fill for hollow FBX shells, auto-engine assignment for rear 12% of ship geometry
- **7 new JS modules added**: `cell-spawner.js`, `encounters.js`, `frequency-analyzer.js`, `mining.js`, `run-state.js`, `scan-hud.js`, `scan-sidebar.js` — codebase now 37 files, ~28,500 lines
