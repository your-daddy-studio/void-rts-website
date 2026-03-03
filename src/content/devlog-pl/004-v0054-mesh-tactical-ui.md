---
title: "Przebudowa Taktycznego UI na Meshe"
date: "2026-03-03"
version: "v0.054"
summary: "Caly taktyczny UI przebudowany na geometrie mesh, zeby naprawic renderowanie linii w WebGL. Nowy kursor z koncentrycznymi ringami, zielona kolorystyka i diagonalny uklad baz."
---

- Bazy przeniesione do przeciwleglych rogow mapy — baza gracza na (-120, -120), wroga na (120, 120), z bezpieczna strefa o promieniu 30 wokol kazdej; stacje obrocone twarzami do wroga po przekatnej
- Caly taktyczny UI przebudowany z LineSegments na renderowanie mesh — WebGL ignoruje lineWidth na wiekszosci GPU, wiec pierscienie selekcji, luki, ramiona celownika i linie lacznikow uzywa teraz RingGeometry i PlaneGeometry quads, co gwarantuje widoczna grubosc na kazdym urzadzeniu
- Nowy taktyczny kursor 3D — 3 koncentryczne pierscienie (wewnetrzny jasny, srodkowy sredni, zewnetrzny przygaszony) z wypelnionym wewnetrznym dyskiem na 35% przezroczystosci; delikatna animacja pulsowania rozmiaru, bez rotacji
- Linie laczace statki z ich celami przebudowane jako mesh quad strips (PlaneGeometry przeksztalcane co klatke), zastepujace niewidoczne 1px linie WebGL
- Schemat kolorow zmieniony z niebieskiego (0x44aaff) na zielony (0x00ff66) dla calego taktycznego UI; pomaranczowy (0xff6622) dla stanow ataku i najechania na wroga
- Splash rozkazu ruchu uproszczony do 3 segmentow lukow (usunieto ramiona krzyzowe), z mniejsza ekspansja dla subtelniejszego efektu
- Wiele iteracji projektu kursora (ksztalt X, chevrony, wielowarstwowe projekty) zanim zdecydowano sie na czyste koncentryczne pierscienie
