---
title: "Nie Mam Pojęcia Co Robię (I Właśnie O To Chodzi)"
date: "2026-03-02"
summary: "Nigdy wcześniej nie budowałem gry. Nie mam pojęcia co robię. Ale buduję kosmiczny RTS w jednym pliku HTML, a Claude AI pomaga mi ogarnąć jak — to jest dzień pierwszy."
published: true
heroImage: "articles/gameplay-1-demo.png"
---

Powiem wam szczerze: nie jestem deweloperem gier.

Nigdy nie wydałem gry. Nie ukończyłem żadnego kursu gamedevu, nie używałem Unity ani Unreal Engine, nigdy nie spędziłem weekendu na game jamie. Moje tło to web development. Najbliżej tworzenia gier byłem, gdy kiedyś zrobiłem animację odbijającej się piłki w JavaScript i byłem z siebie bardzo dumny.

Dlaczego więc VOID RTS w ogóle istnieje?

Szczerze mówiąc — zaciekawiłem się. Chciałem sprawdzić, czy potrafię zbudować grę strategiczną czasu rzeczywistego — statki kosmiczne, mgłę wojny, pozyskiwanie surowców, cały ten zestaw — jako jeden plik HTML, który po prostu otwierasz w przeglądarce. Bez instalacji, bez backendu, bez serwera. Tylko plik. I postanowiłem użyć Claude'a (AI od Anthropic), żeby mi pomógł to ogarnąć — bo nie miałem żadnej wiedzy z gamedevu, na której mógłbym się oprzeć.

Myślałem, że dość szybko trafię na ścianę. Nie trafiłem.

## Co Tak Naprawdę Zbudowałem (Nie Wiedząc Co Robię)

To jest kosmiczny RTS. Dowodzisz flotą woksylowych statków — małych, blokowych stworów zbudowanych z kostek — przeciwko wrogiej flocie na polu bitwy skrytym mgłą. Pozyskujesz pallad z asteroid, żeby... coś z nim zrobić kiedyś. Zwiadujesz, atakujesz, oglądasz satysfakcjonujące eksplozje kostek.

Od wersji v0.040 prototyp ma pięć typów statków z różnymi rolami, działającą mgłę wojny, trzy tryby rozkazów (ruch i atak, patrol, atak gruntu), minimapę, animowane HUD-y celowania i zniszczalne asteroidy. Cała gra to jakieś 3 350 linii kodu upchniętych w jednym pliku.

Tak wygląda ten development w praktyce: opisuję co chcę, Claude pisze kod albo tłumaczy jak do tego podejść, ja to przeglądam, testuję i daję feedback co się popsuło albo wymaga korekty. To nie jest klikanie przycisku i patrzenie jak gra się pojawia — jest sporo tam i z powrotem, debugowania i decyzji które muszę podjąć sam. Ale rzeczywistość jest taka, że bez pomocy AI ten projekt by nie istniał. Nie mam gamedevowego backgroundu, żeby zbudować RTS w Three.js od zera samodzielnie.

![Asteroidy rozpadające się na woksylowe kawałki przy uderzeniu](/images/articles/asteroids-destruction-demo.png)

Żenująco długo zajęło mi zorientowanie się, dlaczego trasy patrolu zachowywały się dziwnie. Okazuje się, że szukanie ścieżek to głęboka królicza nora. Wciąż jestem w tej norze — nawet z pomocą AI niektóre problemy po prostu wymagają czasu.

![Statki podążające trasą patrolu między dwoma punktami](/images/articles/patrol-way-points-demo.png)

## Szczera Prawda O Tym, Dokąd To Zmierza

Nie mam mapy drogowej. Mam listę rzeczy, które wydają mi się fajne, i mglisty pomysł na to, czego potrzebuje prawdziwy RTS, żeby poczuć się kompletnie. Wróg AI, który naprawdę wywiera presję. Produkcja jednostek. Warunek zwycięstwa. Może kiedyś multiplayer, choć jeszcze tak daleko nie myślałem i może nie powinienem.

Mogę obiecać jedno — będę budował to dalej, bo naprawdę mi to sprawia przyjemność. I to więcej niż mogę powiedzieć o wielu projektach, które zaczynałem. Jest w tym coś dziwnie satysfakcjonującego, gdy mechanika gry w końcu zaczyna działać, mimo że nie masz pojęcia, czy robisz to "poprawnie" — i gdy właśnie AI-wspomagany workflow jest tym, co tam cię zawiódł.

## Tutaj Wchodzicie Wy

Tu jest haczyk — wymyślam to w biegu, z AI jako głównym narzędziem do wszystkiego czego nie wiem. Co oznacza, że pewnie wciąż brakuje mi oczywistych rzeczy. Pomysły, które uczyniłyby grę lepszą, funkcje których gracze RTS by oczekiwali, spostrzeżenia których jeszcze nie miałem, bo to wszystko jest dla mnie nowe.

Jeśli macie pomysły — chcę je usłyszeć. Jeśli wiecie, jak coś zrobić, z czym wyraźnie się zmagam, i chcecie się przyczynić — porozmawiajmy. Nie mam żadnego przywiązania do bycia projektem solowym. Celem jest dobra gra, nie osobisty pomnik.

Na razie śledźcie devlog. To tam żyją wszystkie prawdziwe notatki z developmentu — co się zmieniło, co się popsuło, czego się nauczyłem. Bez hype'u, tylko uczciwe aktualizacje o grze, która jest za wcześnie, żeby grać, ale zbyt fajna, żeby przestać budować.

Zobaczymy, dokąd to zaprowadzi.

---
