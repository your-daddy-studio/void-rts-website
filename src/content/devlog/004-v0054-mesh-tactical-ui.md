---
title: "Mesh-Based Tactical UI Overhaul"
date: "2026-03-03"
version: "v0.054"
summary: "All tactical UI rebuilt with mesh geometry to fix WebGL line rendering. New concentric rings cursor, green color scheme, and diagonal base layout."
---

- Bases moved to opposite corners — friendly base at (-120, -120), enemy at (120, 120), with a safe zone radius of 30 around each; stations rotated to face the enemy diagonally
- All tactical UI converted from LineSegments to mesh-based rendering — WebGL ignores lineWidth on most GPUs, so selection rings, arcs, crosshair arms, and connector lines now use RingGeometry and PlaneGeometry quads for guaranteed visible thickness on all hardware
- New 3D tactical cursor — 3 concentric rings (inner bright, middle medium, outer faint) with a filled inner disc at 35% opacity; gentle size pulse animation, no rotation
- Connector lines between ships and their destinations rebuilt as mesh quad strips (PlaneGeometry reshaped each frame), replacing invisible 1px WebGL lines
- Color scheme switched from blue (0x44aaff) to green (0x00ff66) for all tactical UI; orange (0xff6622) for attack and enemy hover states
- Move-order splash simplified to 3 arc segments (removed cross arms), with reduced expansion for a subtler effect
- Multiple cursor design iterations (X-shape, chevrons, layered designs) before settling on the clean concentric rings
