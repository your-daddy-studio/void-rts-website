---
title: "Modularna Stacja, Dogfight Scoutow & 4x Mapa"
date: "2026-03-03"
version: "v0.047"
summary: "Modularna stacja kosmiczna z pierścieniem habitatu, banking i circle-strafing scoutow, standoff range dla ciezkich statkow i 4x wieksza mapa."
---

- Nowa modularna architektura stacji — 6 modulow kadluba (bridge, docking, hangar, collector pads, habitat support, engine) sledzonych przez moduleIndex i mape modulow pod przyszle uszkodzenia i budowanie
- Pierscien habitatu to teraz solidne pionowe kolo (plaszczyzna XY, wypelnione liniami Bresenhama, calkowicie szczelne bez luk)
- Pylony strukturalne obracaja sie razem z pierścieniem jako jeden zespol
- Orientacja stacji odwrocona — bridge teraz jest skierowany w strone wroga (tak jak flota)
- Banking scoutow do ~70 stopni na zakretach; ciezkie statki przechylaja sie subtelnie (~20 stopni)
- Pitch scoutow reaguje na przyspieszenie
- Circle-strafing scoutow: scouty krazą wokol celow ataku podczas strzelania, jak w dogfightach
- Ciezkie/kapitalne statki utrzymuja zasieg broni zamiast zbliżac sie na wrecz — destroyery trzymaja 80%, carriery 85% zasiegu ataku
- Scouty zbliżaja sie do 35% zasiegu ataku — wchodza blisko
- Duze statki aktywnie hamuja jesli wjada za blisko (opor proporcjonalny do masy)
- MAP_SIZE zwiekszone z 44 do 176 (4x wieksze pole bitwy)
- Stacje przesuniete na krance mapy (BASE_Z z 36 do 144)
- Asteroidy, krysztaly i slonca rozmieszczone pod wieksza mape
- System kamery dostosowany — wyzszy sufit zoom-out i szybsze przesuwanie
- Wiecej pol asteroidow i zloz krysztalow rozrzuconych po wiekszej przestrzeni
