---
title: "Gwarantowane Slonce na Kazdej Mapie + Wydobycie Planetarne"
date: "2026-03-07"
version: "v0.083"
summary: "Kazda mapa gwarantuje teraz co najmniej jedno slonce dzieki proceduralnemu rozmieszczeniu. Platformy wydobywcze na planetach potwierdzone — wyslij Kolektor na planete i generuj pallad oraz tytan pasywnie. 29 plikow JS, ~17 505 linii."
---

W wersji v0.083 wladowaly dwa osobne systemy: gwarancja proceduralniego rozmieszczenia slonca i potwierdzone wdrazanie platform wydobywczych na planetach.

- **Gwarantowane Pojawianie sie Slonca** — nowa funkcja `spawnMapSun()` w `environment.js` wykonuje 40 losowych prob rozmieszczenia i wybiera najlepsza pozycje odlegla co najmniej 60 jednostek od obu baz i 35 jednostek od kazdej planety. Jesli nie znajdzie poprawnej pozycji, odpada do centrum mapy. Kazda mapa ma teraz co najmniej jedno slonce
- **3 Palety Kolorow Slonca** — slonca pojawia sie w kolorze pomaranczowym, czerwonym lub niebieskim, z promieniem losowym od 5 do 7 voxeli
- **Naprawa Kolejnosci Spawnowania** — rozmieszczanie slonc odbywa sie po pozycjonowaniu planet, wiec slonca nigdy nie nachodza na lokalizacje planet
- **Czyszczenie Resetu Gry** — `createUnits()` teraz poprawnie usuwa i ponownie tworzy zarwono planety jak i slonca przy resecie, bez pozostalosci obiektow z poprzedniej sesji
- **Platformy Wydobywcze na Planetach** — Q + Prawy Przycisk na planecie z zaznaczonym Kolektorem wdraza Platforme Wydobywcza (wymaga technologii Mining Corps T2). Kazda platforma generuje 8 palladu + 12 tytanu co 10 sekund
- **Baza kodu**: 29 plikow JS, ~17 505 linii lacznie
