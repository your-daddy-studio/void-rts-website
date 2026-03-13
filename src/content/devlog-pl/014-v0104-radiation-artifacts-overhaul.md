---
title: "Promieniowanie, Badanie Artefaktów i Rozpadające się Szczątki — VOID RTS Przebudowane od Podstaw (Znowu)"
date: "2026-03-13"
version: "v0.104"
summary: "Radioaktywne artefakty zabijające zwiady, 31 artefaktów w 5 stopniach rzadkości, system czasowych badań, 14 modułów ulepszeń nośnika, rozpadające się szczątki z fizyką fragmentacji, wizualnie różne asteroidy zasobów i świecący promień trakcyjny 3D. Kolejny ogromny update."
---

v0.104 to głęboka przebudowa systemów. Pola promieniowania, całkowicie przepisana ekonomia artefaktów, 14 modułów ulepszeń nośnika, rozpadające się szczątki, wizualnie różniące się asteroidy zasobów i nowy promień trakcyjny 3D — wszystko zbudowane od podstaw i wplecione w istniejącą pętlę roguelika. Oto co się zmieniło.

- **System zagrożenia promieniowaniem** — artefakty wyższych poziomów rzadkości (veryRare, extremelyRare) emitują niebezpieczne pola promieniowania. Zwiadowcy i inne osłonięte jednostki otrzymują obrażenia voxelowe przy zbliżaniu się do radioaktywnych artefaktów. Podejście bez ochrony to wyrok śmierci dla lekkich statków
- **Tarcza RAD kolektora** — kolektory mają zupełnie nowy moduł Tarczy RAD (4 poziomy), który pochłania promieniowanie. Częściowa osłona proporcjonalnie redukuje obrażenia — czy ryzykujesz z pół-ulepszonym modułem, czy się cofasz? Prawdziwe decyzje taktyczne teraz krążą wokół zbierania artefaktów
- **31 artefaktów w 5 stopniach rzadkości** — common, uncommon, rare, veryRare, extremelyRare. Bonusy zwykłych artefaktów są celowo ograniczone do 10% — pierwsze znaleziska są skromne. Rzadkość skaluje się dramatycznie. Znalezienie extremelyRare w sektorze Pierścienia 3 to wydarzenie
- **System czasowych badań** — artefakty i obca technologia muszą być aktywnie badane przed użyciem. Płynny animowany pasek postępu z nieregularną animacją. Czas badania skaluje się od 30s (common) do 220s (extremely rare). Poziom floty przyspiesza badania
- **Hangar ładunkowy powiązany z miejscami na artefakty** — miejsca na artefakty i technologię obcych są teraz kontrolowane przez ulepszenie Hangaru. Zaczynasz z 2 miejscami na artefakty i 1 na technologię. Ulepszenie hangaru pozwala osiągnąć 6 miejsc na artefakty / 3 na technologię. Każde ulepszenie ma znaczenie
- **14 modułów ulepszeń nośnika** w 5 grupach: NAPĘD (4 moduły), WALKA (2), OBRONA (3), SYSTEMY (2), LOGISTYKA (3). Nowy moduł Tarczy RAD jest w Logistyce. Koszty Element-118 usunięte z ulepszeń poziomów 1–2 — E-118 jest teraz zasobem wyłącznie środkowej i późnej gry
- **Niszczalne szczątki kosmiczne** — fragmenty mają teraz HP i mogą być rozbite ogniem broni. Większe kawałki rozpadają się na 2–3 mniejsze fragmenty z pełną fizyką dryftu i obrotu. Mniejsze odłamki wybuchają w efekty cząsteczkowe. Fizyka oparta na masie sprawia, że duże kawałki mają prawdziwą bezwładność — otwórzcie ogień i patrzcie jak się rozpadają
- **Wizualnie różniące się asteroidy zasobów** — możesz teraz nauczyć się rozpoznawać zasoby wzrokiem przed skanowaniem:
  - Tytan: chłodne szaro-niebieskie odcienie stali
  - Pallad: ciepłe złotobrązowe odcienie
  - Element-118: głęboka fioletowo-czarna barwa ze świecącymi zielono-cyjanowymi żyłami emitującymi i miękkimi sprite'ami radioaktywnej poświaty z krążącymi jasnymi cząsteczkami
- **Efekt promienia trakcyjnego** — zupełnie nowy miękki, świecący bursztynowy promień 3D podczas wydobycia zasobów. Zewnętrzny cylinder z radialnym gradientem, jasne wewnętrzne jądro, sprite poświaty na pozycji kolektora, pulsujący z warstwowymi nieregularnymi animacjami sinusoidalnymi. Wydobycie wygląda teraz jak część gry
- **Ujednolicony bursztynowy schemat kolorystyczny** — wszystkie znaczniki zbiorów i kolekcji, nawiasy i promienie trakcyjne są teraz bursztynowe. Znaczniki artefaktów na mapie są bursztynowe. Nawiasy wydobycia i kolekcji ujednolicone w stylu i grubości linii
- **Dostrojenie ruchu zwiadowcy i kolektora** — hamowanie zwiadowcy jest teraz płynne: szeroka strefa deceleracji, stopniowe wyhamowanie, koniec nagłego zatrzymania. Skręcanie kolektora wygładzone z ease-in/ease-out (angAccelMul 2.2). Dodana tabela dostrojenia kątowego przyspieszenia dla każdego typu statku
- **Margines bezpieczeństwa granicy sektora** — 5-jednostkowa strefa buforowa poza krawędziami sektora zapobiega utykaniu jednostek między asteroidami a granicą. Ruch przy krawędziach jest teraz płynny
- **Command View pamięta ostatnią zakładkę** — otwórz panel C i jesteś dokładnie tam gdzie skończyłeś
- **System wskazówek gry przebudowany** — tylko 3 kolory (niebieski / bursztynowy / czerwony), wsparcie dwóch linii, nowoczesny design sci-fi. Początkowa wskazówka brzmi teraz "WYKRYTO ANOMALNE SYGNATURY" zachęcając do eksploracji
- **Ekonomia Element-118 zbalansowana** — Pierścień 0–1: brak E-118 na mapie. Pierścień 2: bardzo rzadkie złoża. Pierścień 3: obfite, ale krytyczne dla końcowej gry. Przyszły update wymagać będzie specjalistycznego kolektora do wydobycia
- **Automatyczne odświeżanie badań naprawione** — było zepsute przez architekturę pętli gry trybu command; teraz aktualizuje się niezawodnie przy otwartym panelu zarządzania nośnikiem
- **Znaczniki ruchu ukryte podczas zbierania** — znacznik celu ruchu kolektora chowa się gdy ma aktywny cel zbiorów lub kolekcji
