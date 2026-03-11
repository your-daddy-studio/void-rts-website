---
title: "Scanner Sidebar & Targeting HUD — Built From the Ground Up"
date: "2026-03-11"
version: "v0.093"
summary: "The scanner interface was completely rebuilt from scratch — a new SVG-based sidebar panel, CRT frequency monitor, terminal readout, and a fully redesigned targeting HUD."
---

v0.093 is one of the biggest single-session overhauls the game has seen. The entire scanner interface was thrown out and rebuilt from the ground up as a professional, multi-component system with its own sidebar, frequency visualizer, and terminal display.

- **New scanner sidebar** (`scan-sidebar.js`) — an entirely new SVG-based panel that slides in from the right when scan mode is active; blocks mouse input from passing through to the game canvas underneath
- **Terminal readout** — dynamic terminal showing scanned cell contents with character-by-character typewriter animation, scramble effect on the last character, and clickable rows that navigate the scan HUD directly to that cell
- **6 control buttons** — full 3-state system (normal / hover / clicked) matching the SVG asset style, with smooth CSS transitions and glow effects
- **Frequency monitor** — Canvas overlay rendering the exact waveform, bloom, phosphor persistence, CRT vignette, scanlines, filled gradient area, ghost trails, multi-pass bloom, and 16-segment colored signal line from the frequency analyzer — all live inside the sidebar panel
- **Dimmed backdrop** — gradient overlay behind the sidebar for readability
- **Scanner targeting HUD improvements** — hint text above the inner ring with contextual messages ("ENTER TO SCAN", "LOCKING ON...", "SCANNED", etc.); already-scanned sectors skip the lock-on animation entirely
- **Scanner no longer exits to ATLAS** after a phase 1 sector scan — stays in scan mode as intended
- **Cell spawner overhaul** — only enemy and pirate units spawn as 3D models; asteroids, planets, suns, wreckage, and treasure now appear only as symbols on the tactical radar
- **UI layout fixes** — the THANATOS panel, sector details, and progress bar shift left when the sidebar is active to prevent overlap; old frequency monitor panel hides automatically when the sidebar is showing
- Fleet home sector click no longer accidentally triggers scan mode — normal unit selection restored
