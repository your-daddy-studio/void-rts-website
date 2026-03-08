---
title: "Unified Command Panel i ATLAS — Rebuilt od Podstaw"
date: "2026-03-09"
version: "v0.089"
summary: "Największy redesign interfejsu w historii projektu. Dwa osobne panele połączone w jeden. Radar taktyczny ATLAS zbudowany od zera z siatką sektorów, rosterem floty i odczytem pozycji pod kursorem."
---

v0.089 to największy redesign UI w historii projektu. Dwa osobne panele sterowania złączone w jeden. Radar taktyczny przebudowany od zera. Nowy okręt wsparcia. I krytyczny crash co klatkę korumpujący canvas — naprawiony.

- **Unified Command Panel** — BASE MODULES i SHIPS to teraz jeden panel (klawisze B/V) z zakładkami i podkategoriami okrętów: LIGHT, MEDIUM, HEAVY, UTILITY, MINING, ATLAS
- **Corvette przemianowany na Bomber** w całej bazie kodu; Frigate przeniesiony do kategorii MEDIUM
- **Nowy Repair Vessel** — okręt wsparcia z podwójnymi ramieniami emiterów naprawczych, automatycznie leczy pobliskich sojuszników 0.08/s w zasięgu 8, odblokowany po habitat_t2; ~250 vokseli
- **Radar ATLAS zbudowany od zera** — pełnoekranowe linie celownika, odczyt sektora + komórki pod kursorem (np. "D4.7"), podświetlenie sektora (48j) i komórki (12j), etykiety siatki 12j na całej mapie (A1.1 do H8.16)
- **Panel Fleet Roster** dodany do widoku ATLAS (lewy górny róg): wszystkie typy jednostek przyjaznych z symbolami i aktualnymi liczebnościami
- **Game log przesunięty** na lewy środek w trybie ATLAS, żeby nie zasłaniał rostera
- **Wrogие okręty, cząsteczki spalin i smugi silników** poprawnie ukryte w widoku ATLAS
- **Naprawiony krytyczny crash overlay** — kod fleet roster był przypadkowo zagnieżdżony w `_trDrawThanatos()` zamiast `drawTacticalOverlay()`, powodując każdą klatkę ReferenceError dla `e`/`uiFade` w trybie ATLAS; wyciek stanu canvas (korupcja `globalAlpha`) sprawiał, że wskaźniki kursora i ramki zaznaczenia były niewidoczne nawet po powrocie do normalnego widoku
- **Odstępy bojowe przeprojektowane** — strefy unikania poszerzone do 4x promienia kolizji w walce, siła odpychania zwiększona 1.5x, boczne rozproszenie dla okrętów atakujących ten sam cel; mnożniki standoff zwiększone dla wszystkich typów
- **Nazwy sektorów w rozkazach** — wszystkie komunikaty o ruchu/ataku/patrolu/formacji zawierają teraz sektor + komórkę (np. "NAVIGATION ORDER — D4.7")
- **Gra startuje w normalnym widoku 3D** — nie wchodzi już od razu do ATLAS
- W trybie deweloperskim na starcie pojawiają się 2 wieże radaru + 1 plac startowy
