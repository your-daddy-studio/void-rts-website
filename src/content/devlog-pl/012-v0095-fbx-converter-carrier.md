---
title: "Konwerter FBX do Voxeli i Nowy Carrier — Zbudowane Od Zera"
date: "2026-03-12"
version: "v0.095"
summary: "Zbudowano kompletny pipeline FBX-to-voxel od podstaw, a statek carrier został przebudowany przy jego użyciu — z modelu ręcznie stawianego klocek po klocku do szczegółowego modelu z ~7000 voxeli."
---

v0.095 to była sesja z dużym naciskiem na narzędzia. Najważniejsza zmiana to zupełnie nowy, samodzielny konwerter (`fbx-to-voxel.html`), który zamienia modele FBX w gotowe do gry statki voxelowe — zbudowany od zera w tej sesji. Następnie carrier został przebudowany przy jego użyciu, zastępując stary, ręcznie wykonany model znacznie bardziej szczegółowym efektem.

- **Konwerter FBX do Voxeli** (`fbx-to-voxel.html`) — całkowicie nowe narzędzie, zbudowane w tej sesji:
  - Wczytywanie plików FBX i tekstur metodą drag-and-drop
  - Rasteryzacja trójkątów przemierzająca rzeczywiste powierzchnie (nie tylko środki ścian) dla dokładnego wypełniania voxelami
  - Automatyczne przeskalowanie do docelowej liczby voxeli
  - Kwantyzacja kolorów z interfejsem malowania kliknięciem — przypisywanie typów voxeli w 3D (klawisz P przełącza tryb malowania, regulowany rozmiar pędzla)
  - Eksport do pliku bezpośrednio do integracji z grą
- **Nowy model carrieru** — carrier przebudowany od podstaw przy użyciu nowego konwertera:
  - Źródło: model FBX "Star 10" zwoxelizowany do ~7000 voxeli — zdecydowanie największy statek we flocie
  - Zachowanie kolorów tekstur per-voxel było testowane, ale porzucone z powodu z-fightingu między sąsiadującymi voxelami o różnych kolorach
  - Ostateczne podejście: standardowe kolory teamów oparte na typach, ten sam pipeline renderowania co wszystkie inne statki — czysty, spójny, bez artefaktów
- **Overhaul efektów silnikowych** — wszystkie statki dostały większe, bardziej efektowne silniki:
  - Większe sprite'y blasku na dyszach silnikowych
  - Szersze smugi ribbon
  - Carrier w szczególności: gruby, potężny ciąg silnikowy odpowiedni do jego nowej skali
- **Dodana funkcja `buildTexturedShip()`** — nowe narzędzie na przyszłość: grupowanie InstancedMesh per-kolor, wypełnianie wnętrza scan-line dla pustych w środku powłok FBX, automatyczne przypisywanie silników dla tylnych 12% geometrii statku
- **7 nowych modułów JS**: `cell-spawner.js`, `encounters.js`, `frequency-analyzer.js`, `mining.js`, `run-state.js`, `scan-hud.js`, `scan-sidebar.js` — baza kodu to teraz 37 plików, ~28 500 linii
