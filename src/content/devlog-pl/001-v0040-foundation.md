---
title: "Fundament: Od Prototypu do v0.040"
date: "2026-03-02"
version: "v0.040"
summary: "Prototyp kosmicznego RTS w jednym pliku HTML — pięć typów statków, mgła wojny, trasy patrolu, HUD blokady celu, zniszczalne voxelowe asteroidy."
---

- Prototyp w jednym pliku HTML, ~3 350 linii, Three.js r128
- 5 typów statków: myśliwiec, krążownik, zbieracz, bombowiec (obrażenia obszarowe), zwiadowca (szybki, duży zasięg widzenia)
- Mgła wojny: siatka 88x88, 3 stany (nieznany/odkryty/widoczny), nakładka na minimapę
- Ruch i atak (F+PRAWY KLIK), patrol z maksymalnie 8 punktami trasy (P+PRAWY KLIK), atak gruntu (G+PRAWY KLIK)
- 6-warstwowy animowany HUD blokady celu ze zmianą koloru zależną od HP celu
- Zniszczalne voxelowe asteroidy, kryształowe asteroidy do pozyskiwania palladu
- Pętla zbioru zbieracza: lot do kryształu, wydobycie, powrót do bazy
- 3 dekoracyjne voxelowe słońca przy krawędziach mapy ze świeceniem i rotacją
- 2 bazy na każdą stronę, kamera ustawiona bazą gracza na dole
- Minimapa z kliknięciem do panoramowania i nakładką mgły
