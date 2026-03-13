---
title: "Faza 2: Zawartość Sektorów, Progresja Floty i Żyjąca Galaktyka — Największa Aktualizacja w Historii VOID RTS"
date: "2026-03-13"
version: "v0.102"
summary: "Galaktyka ożywa. Statystyki floty, system poziomowania, tarcze energetyczne, 20 nowych broni, obcy, rozgałęziające się wydarzenia narracyjne, czarne dziury, odkrycia i pełny system fabularny — 4 nowe pliki JS, 32 zmienione pliki, 7617 dodanych linii w jednej aktualizacji."
---

v0.102 to największa pojedyncza aktualizacja w historii gry. To była Faza 2: Zawartość Sektorów, Progresja Floty i Żyjąca Galaktyka — zupełnie nowa warstwa systemów zbudowana na fundamencie istniejącego systemu walki i eksploracji. Cztery nowe pliki JS. Trzydzieści dwa zmienione pliki. Siedem tysięcy sześćset siedemnaście dodanych linii. Gra przeszła od prototypu walki z eksploracją do głębokiego kosmicznego RPG w stylu roguelike.

- **System statystyk floty** — 18 statystyk z mnożnikowymi bonusami, w pełni zintegrowanych z walką i ruchem. Ulepszenia carrieru korzystają teraz z 5 modułów tierowych do kupienia z nowego panelu (klawisz C): hangar naprawczy, projektor tarcz, sensor array, luk cargo, pokład lotniczy
- **System XP i poziomowania** — statki zdobywają doświadczenie, poziomy są śledzone na run. 10 kategoriach statystyk do rozdzielenia, 3 punkty na poziom, maksymalnie poziom 30. Pełny panel pod klawiszem TAB — zupełnie nowa warstwa progresji, której wcześniej nie było
- **Tarcze energetyczne** — całkowicie nowy system obronny zbudowany od podstaw. Tarcze pochłaniają trafienia przed uszkodzeniami kadłuba, mają opóźnienie regeneracji, renderują się jako półprzezroczyste sfery wokół statków i mogą być wzmacniane przez pickupy tarcz znajdowane w sektorach
- **System odkryć** — 20 unikalnych artefaktów z trwałymi bonusami do statystyk, 12 przedmiotów obcej technologii z aktywnymi i pasywnymi zdolnościami, 5 typów wraków i pełny system ekwipunku. Znalezienie legendarnego artefaktu w głębokim sektorze realnie zmienia sposób walki floty
- **Aktywne zdolności obcej technologii** (klawisze F1–F3): kamuflarz fazowy, impuls EMP, drony roju, skok przez warp, pulsacyjny beacon, miny próżni — każda pochodzi z niesionych przedmiotów obcej technologii
- **System fabularny Echo Protocol** — 10 fragmentów narracyjnych rozłożonych na 3 akty. Pełnoekranowa nakładka w stylu maszyny do pisania z komunikatami rozruchu systemu, strumieniami danych hex i efektami glitch. Panel Dziennika Okrętowego (klawisz L) śledzi zebrane fragmenty. Historia odkrywa się wraz z eksploracją
- **3 Obce Frakcje** — zupełnie nowa warstwa dyplomatyczna, zaprojektowana od zera:
  - Kryształowy Kolektyw (specjalizacja: skanowanie / wiedza)
  - Enklawy Mechani (specjalizacja: broń / inżynieria)
  - Nomadzi z Próżni (specjalizacja: nawigacja / tarcze)
  - Każda frakcja ma reputację od -100 do +100 zmieniającą się w zależności od działań gracza
- **14 Wydarzeń Narracyjnych z rozgałęziającymi się wyborami** — opcje A/B/C, każda z kosztami, wymaganiami i efektami reputacji frakcji. Żadne dwa runy nie będą przebiegać tak samo
- **20 Nowych Broni w 4 tierach** — od odpowiedników z tieru 1 po legendy z tieru 4. Zupełnie nowe zachowania broni: AoE splash, ogień seryjny, rozpadanie się odłamków, łańcuchowe błyskawice, faza (omija tarcze), obrażenia w czasie, przebijanie, drain, drony roju, studnie grawitacyjne, debuffs obszarowe. Nazwane bronie to m.in. scatter shot, działo plazmowe, railgun, wyrzutnia torped, działo osobliwości, nova lance, wyrzutnia roju, kwantowa torpeda i echo resonator
- **Czarne dziury** — nowe zagrożenie sektorowe z pełną wizualizacją dysku akrecyjnego i prawdziwym przyciąganiem grawitacyjnym wpływającym na statki i pociski w locie. W pobliżu pojawiają się skupiska kryształów E-118
- **Anomalie grawitacyjne** — 3 typy: strefy spowolnienia, pola odpychające, siły orbitalne — każda zmienia przebieg walki w sektorze
- **7 Nowych Sygnałów Skanowania** w analizatorze częstotliwości: wrak, post handlowy, anomalia grawitacyjna, placówka frakcji, artefakt, czarna dziura, pickup tarczy
- **Interfejs bliskości postu handlowego** — podpłynięcie blisko postu handlowego otwiera interfejs kupna i sprzedaży
- **Animacja spawnu statków** — statki teraz wylatują z carrieru i ustawiają się w formacji, zamiast pojawiać się natychmiast
- **Tempo skanowania** — celowo wolne na początku (14s sektor / 8s komórka). Ulepszenia skracają te czasy, sprawiając że progresja czuć się zasłużoną
- **Rozszerzona mgła wojny** — planety i gwiazdy w niezbadanych sektorach są teraz ukryte do momentu odkrycia
- **4 nowe pliki JS**: `fleet-stats.js`, `shields.js`, `discoveries.js`, `events.js`
