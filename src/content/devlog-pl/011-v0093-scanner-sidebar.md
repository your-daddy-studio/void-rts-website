---
title: "Pasek Skanera i HUD Namierzania — Zbudowane Od Podstaw"
date: "2026-03-11"
version: "v0.093"
summary: "Interfejs skanera został całkowicie przepisany od zera — nowy pasek boczny oparty na SVG, monitor częstotliwości z efektem CRT, terminal z animacją maszyny do pisania i kompletnie przeprojektowany HUD namierzania."
---

v0.093 to jeden z największych jednorazowych przełomów w historii projektu. Cały interfejs skanera został wyrzucony i zbudowany od nowa jako profesjonalny, wielokomponentowy system z własnym panelem bocznym, wizualizatorem częstotliwości i wyświetlaczem terminalowym.

- **Nowy pasek boczny skanera** (`scan-sidebar.js`) — całkowicie nowy panel oparty na SVG, wysuwający się z prawej strony po aktywacji trybu skanowania; blokuje zdarzenia myszy przed przeniknięciem do płótna gry
- **Readout terminalowy** — dynamiczny terminal pokazujący zawartość zeskanowanych komórek z animacją znak po znaku, efektem zakłóceń na ostatnim znaku oraz klikalnymi wierszami nawigującymi HUD skanera bezpośrednio do danej komórki
- **6 przycisków sterowania** — pełny system 3 stanów (normalny / hover / kliknięty) dopasowany do stylu zasobu SVG, z płynnymi przejściami CSS i efektami poświaty
- **Monitor częstotliwości** — nakładka Canvas renderująca dokładną formę fali, bloom, trwałość fosforową, winietę CRT, linie skanowania, wypełniony obszar gradientu, ślady duchów, wieloprzebiegowy bloom i 16-segmentową kolorową linię sygnału z analizatora częstotliwości — wszystko wewnątrz panelu bocznego
- **Przyciemnione tło** — nakładka gradientowa za panelem bocznym dla czytelności
- **Ulepszenia HUD namierzania skanera** — tekst podpowiedzi nad wewnętrznym pierścieniem z komunikatami kontekstowymi ("ENTER TO SCAN", "LOCKING ON...", "SCANNED" itd.); już zeskanowane sektory pomijają animację blokowania namierzania
- **Skaner nie wraca już do ATLASU** po skanie sektora fazy 1 — pozostaje w trybie skanowania zgodnie z zamierzeniem
- **Przebudowa generatora komórek** — tylko jednostki wroga i piratów są generowane jako modele 3D; asteroidy, planety, słońca, wraki i skarby wyświetlane są teraz wyłącznie jako symbole na radarze taktycznym
- **Poprawki układu UI** — panel THANATOSA, szczegóły sektora i pasek postępu przesuwają się w lewo gdy pasek boczny jest aktywny, zapobiegając nakładaniu; stary panel monitora częstotliwości automatycznie się ukrywa gdy pasek boczny jest widoczny
- Kliknięcie sektora domowego floty nie wyzwala już przypadkowo trybu skanowania — przywrócono normalne zaznaczanie jednostek
