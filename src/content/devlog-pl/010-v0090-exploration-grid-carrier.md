---
title: "Siatka Eksploracji, Redesign Niszczyciela i Narodziny Prawdziwego RTS"
date: "2026-03-10"
version: "v0.090"
summary: "Siatka 3D zbudowana od zera z obsługą eksploracji sektory po sektorze. Carrier całkowicie przeprojektowany na 3000-vokselowego kolosa. Zasoby płyną przez carrier. Gra w końcu działa jak prawdziwy RTS."
---

v0.090 to wersja, w której VOID RTS przestało być tech demo, a zaczęło być grą. System eksploracji, ekonomia oparta na carrierze i startowa flota zostały przebudowane od zera — po to, żeby stworzyć prawdziwą pętlę strategiczną: ekspanduj, eksploruj, eksploatuj.

- **Siatka 3D terenu zbudowana od zera** — wcześniej jeden mesh z problemem overdraw, teraz trzy osobne warstwy mesh (wewnętrzne linie sektorów, unikalne segmenty granic, unikalne znaczniki krzyżowe), które eliminują wszystkie artefakty overdraw i pozwalają sterować widocznością per element
- **System eksploracji sektorów** — siatka nie jest już widoczna od startu; sektory trzeba odkryć, żeby je ujawnić; linie siatki pojawiają się tylko w odkrytych sektorach; granice widoczne jeśli którykolwiek sąsiedni sektor jest odkryty; krzyże widoczne jeśli którykolwiek sąsiedni sektor jest odkryty — dokładnie jak klasyczna mgła wojny, ale w pełnym 3D
- **Wszystko ukrywa się w nieodkrytych sektorach** — asteroidy, planety, słońca, wrogie stacje, wrogie okręty — nic się nie renderuje dopóki skauci nie przesuną granicy
- **Eksploracja diagonalna** — sąsiedztwo Czebyszewa (8-kierunkowe), więc skauci eksplorujący po przekątnej naturalnie odkrywają narożniki
- **Carrier całkowicie przeprojektowany** — z skromnego kadłuba do 3000-vokselowego tytana: 40j szerokości × 93j długości, otwarty hangar wzdłuż całego spodu, stopniowana wieża dowodzenia, 10 gondol silnikowych z tyłu; zdecydowanie największy okręt w grze
- **Ekonomia oparta na carrierze** — kolektory teraz dostarczają zasoby do najbliższego przyjaznego carriera zamiast do punktu startowego mapy; carrier jest sercem ekonomii floty
- **Startowa flota przeprojektowana** — gracze zaczynają z 1 carrierem + 1 bomberem + 2 skautami + 1 kolektorem, wszystkie pojawiają się w centrum mapy (sektor D4); carrier jest natychmiast operacyjny
- **Widok ATLAS przeprojektowany** — krzyże 3D zastąpione subtelnymi kropkami w wewnętrznych skrzyżowaniach; jasność siatki dynamicznie reaguje na poziom zoomu, żeby overlay nie przytłaczał widoku z dystansu; usunięte martwe funkcje renderujące `_trDrawSweep` i `_trDrawRangeRings`
- **Granica mapy usunięta** — twarda krawędź zniknęła; obszar gry rozmywa się w nieskończoną przestrzeń, wzmacniając estetykę "void"
