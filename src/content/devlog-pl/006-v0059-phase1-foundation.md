---
title: "Faza 1 Fundamenty — Najwieksza Aktualizacja"
date: "2026-03-04"
version: "v0.059"
summary: "Masywna przebudowa strukturalna. Statki maja teraz 5 niszczalnych podsystemow, eksplozje oparte na fizyce z reakcjami lancuchowymi, trwale pola szczatkow, fale uderzeniowe 3D, pelny system czastek FX i nowa modularna architektura aktualizacji. Baza kodu urosla z 12 do 16 plikow JS. Faza 1 z 6 ukonczona."
---

To jest najwieksza pojedyncza aktualizacja od poczatku projektu — Faza 1 z 6 planowanych faz, przebudowujaca systemy walki i obrazen od podstaw. Cztery zupelnie nowe pliki JavaScript dodane do bazy kodu: `fx.js`, `damage-system.js`, `explosion-physics.js`, `debris.js`. Baza kodu urosla z 12 do 16 plikow JS.

- **System Obrazen Strukturalnych** — statki nie maja juz prostego HP. Kazdy statek posiada teraz 5 podsystemow (silniki, bron, sensory, kadlub, podtrzymywanie zycia) zmapowanych na typy voxeli. Zdrowie obliczane z przetrwalych voxeli. Obrazenia sa proporcjonalne: uszkodzone silniki = wolniejszy statek (minimum 20% predkosci), uszkodzona bron = wolniejsze tempo ognia, uszkodzone sensory = krotszy zasieg widzenia (minimum 50%), kadlub staje sie krytyczny ponizej 30%, podtrzymywanie zycia wplywa na zaloge
- **Eksplozje Oparte na Fizyce** — sily z kwadratowym zanikaniem, impuls wazony masa odpychajacy pobliske statki, asteroidy i szczatki. Reakcje lancuchowe: ginace statki maja 15% szans na wywolanie eksplozji wtornej, do 3 poziomow w glab
- **Trwale Pola Szczatkow** — zniszczone statki zostawiaja obracajace sie wraki utrzymujace sie przez 120 sekund. Wraki zbudowane z przetrwalych voxeli przy uzyciu InstancedMesh, podzielone na 2–4 podkawalki z indywidualnym obrotem i dryfem. Limit 200 aktywnych pol. Przygotowanie pod przyszle blokowanie radaru przez szczatki
- **Fale Uderzeniowe 3D** — plaskie pierscieniowe zastapione prawdziwymi falami uderzeniowymi: rozszerzajace sie powloki icosphere plus 3 pierscienie pod losowymi katami przecinajace przestrzen. Krzywa rozszerzania sqrt dla eksplozywnego efektu
- **Pula Czastek FX** — pula 500 czastek uzywajaca THREE.Points z AdditiveBlending. Sprite'y z gradientem radialnym. Pula swiatel punktowych (max 8). Nakladka blesku ekranu przy detonacji
- **Voxelowe + Metalowe Iskry przy Trafieniu** — trafienia pociskow generuja teraz voxelowe kostki szczatkow plus szybkie drobne biale iskry metalowe (wyglad pekniecia metal-na-metal) plus krotki blask swiatla
- **Mikro-Paski Podsystemow** — 5 pomaranczowych paskow pod HP na kartach jednostek pokazujacych zdrowie silnikow/broni/sensorow/kadluba/podtrzymywania zycia
- **Znacznik Celu** — karty wrogow pokazuja etykiete "TARGET" z delikatnym pomaranczowym pulsem glow gdy sa namierzone przez zaznaczone statki
- **Status Zaznaczenia** — teraz wyswietla procenty uszkodzonych podsystemow inline (ENG:65% WPN:40%)
- **AI Szarzy Wrogow** — wrogowie szarzuja w kierunku statkow gracza w trybie walki bez smyczy do bazy
- **System Rejestru Aktualizacji** — zupelnie nowa architektura `_gameUpdates` gdzie kazdy system sam sie rejestruje z priorytetem. Zapobiega konfliktom przy laczeniu i umozliwia modularna rozbudowe
