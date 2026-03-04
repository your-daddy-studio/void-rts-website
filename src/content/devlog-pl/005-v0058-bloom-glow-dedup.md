---
title: "Efekty Bloom/Glow i Deduplikacja Markerow Celu"
date: "2026-03-04"
version: "v0.058"
summary: "Kazdy element HUD teraz swieci dopasowanym kolorystycznie bloomem. Markery celu zdeduplikowane — zgrupowane statki pokazuja jeden marker zamiast stosu."
---

- Efekty bloom/glow dodane do wszystkich elementow HUD — ikony zasobow swieca dopasowanym text-shadow (fioletowy palladium, niebieski tytan, bursztynowy element-118), linie logu gry maja podwojny text-shadow bloom wedlug kategorii (walka czerwony, ostrzezenie zolty, zbior fioletowy, system zielony)
- Przyciski HUD otrzymaly text-shadow glow z wzmocnionym box-shadow na hover/active
- Narozniki kart statkow uzywa teraz filtra drop-shadow, jasniejsze przy hover/zaznaczeniu; paski HP maja rozszerzony box-shadow glow (6px + 12px zewnetrzny); segmenty integralnosci kadluba swieca przy pelnym/krytycznym stanie
- Tekst detali zaznaczenia ma text-shadow glow na nazwie statku, typie i statusie
- Narozniki minimapy uzywa filtra drop-shadow z glowem tekstu tytulu
- Nakladki selekcji 2D renderowane z canvas shadowBlur=6 dla miekkiego efektu glow
- Kolor elementow taktycznej nakladki 3D rozjasniony z #00ff66 na #22ff88 dla lepszej widocznosci
- Deduplikacja markerow celu — gdy wiele zaznaczonych statkow ma bliskie cele (w promieniu 10 jednostek), wyswietlany jest tylko jeden marker w usrednionej pozycji zamiast stosu markerow na sobie
