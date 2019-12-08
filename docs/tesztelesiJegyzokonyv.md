# TRYHARD

# Tesztelési Jegyzőkönyv
2019.12.06, Debrecen

ID   | Elvárt teljesítmény leírása | Teszt sikeressége | Tesztelő neve
----|----------|-----------|---------|
T-01 | A menü gombok átirányítják a felhasználót a megfelelő táblázathoz melyben utánna dolgozhat. | Sikeres | Ákos
T-02 | A kölcsönzés menüpont alatt található könyvek és tagok mezők mellett található gomb felhozza a behúszó ablakot melyen ki lehet választani a kívánt könyvet/tagot. | Sikeres | Ákos
T-03 | A beúszó ablakokon található táblázatok-ban szereplő rekordokra kattintva az bekerül a kölcsönző tag mezőbe vagy pedig a könyv mezőbe. | Sikeres | Ákos
T-04 | Ugyan ezeken az ablakokon található léptető gombok megváltoztatják a táblázat tartalmát (mindig 10 rekordot cserélnek kivéve ha az utolsó 10-darabot nem lehet feltölteni teljesen, ekkor a maradék 10-zel nem osztható rekordokat mutatja a táblázat | Sikeres | Ákos
T-05 | A kiválasztás után a kölcsönzés menüpontban található "Kivesz" és "Visszahoz" gombok segítségével hozzárendelődik a kiválasztott könyv a taghoz illetve visszahozáskor bekerül a rendszerbe a visszahozás dátuma. | Sikeres | Ákos
T-06 | A navbaron belül a TRYHARD-ra kattintva előjön a "Csapat" illetve a "Dokumentáció" rész | Sikeres | Kristóf
T-07 | A https://notusedusername.github.io/projectcodetwo/-en belül elérhető az összes dokumentáció. | Sikeres | Kristóf
T-07 | A https://notusedusername.github.io/projectcodetwo/-en belül a "ITT KIPRÓBÁLHATOD A DEMÓNKAT!" link visszadob a projekt főoldalára  | Sikeres | Kristóf
T-08 | A Könyveink menüpont alatt ha kiválasztunk egy könyvet előjön a "Kölcsönzés", "Módositás", "Törlés" lehetőség | Sikeres | Kristóf
T-09 | A Tagjaink menüpont alatt ha kiválasztunk egy könyvet előjön a "Kölcsönzés", "Módositás", "Törlés" lehetőség | Sikeres | Kristóf
T-10 | Könyv törlése gomb kitörli a kiválasztott könyvet | Sikeres | Kristóf
T-11 | A könyv módosítása gombal lehet módosítani a könyv adatait | Sikeres | Kristóf
T-12 | A könyv hozzáadása gombbal hozzá lehet egy könyvet adni a könyveink listájához | Sikeres | Kristóf
T-13 | A tag "Összes kijelölése" gombbal kijelöli az összes tagot ami táblában szerepel. | Sikeres | Mátyás
T-14 | A tag "Összes kijelölése" gombbra katitva elöugrik a törlés ikon és a kijelölt tagokat egyszere lehet törölni.| Sikeres | Mátyás
T-15 | A tag lakcim mellet lévő iformációs gomb rákatitásra elöhöza a kölcsönzöt könyvek meű pontja alatt lévő Író ,Cím ,Elvitel ,Határidő és Visszahozás rekordokat .| Sikeres | Mátyás
T-16 | A sikeres kölcsönzés után a tag lakcim mellet lévő iformációs gomb rákatitásra visszahozásnál a "kölcsönzi" felirat áll ezzel szemléltetve ,hogy az adot kőnyv kikerült könyvtárból.| Sikeres | Mátyás
T-17 | A T-16 teszt elvégzése után a viszahozás menűpontban a visszahozási dátum szerepel ami azt mutatja ,hogy újra kivehető könyv mert vissza került.| Sikeres | Mátyás
T-18 | A könyveink cimű oldalon Könyv, azonosító, Szerző, Cím ,Kiadó, Kiadási év pontok allat sikeresen megjelenik az adatbázisban tárólt értékek.| Sikeres | Mátyás
T-19 | A tagjaink  cimű oldalon Olvasói szám, Vezetéknév, Keresztnév, Születési dátum, Lakcím pontok allat sikeresen megjelenik az adatbázisban tárólt értékek.| Sikeres | Mátyás
T-20 |  A tag lakcim mellet lévő iformációs gomb rákatitásra elöhöza a kölcsönzöt könyvek meű pontja alatt lévő Név, Cím, Elvitel, Határidő	, Visszahozás rekordokat .| Sikeres | Mátyás
T-21 | A Könyvek menüpont kiválasztásakor a táblázat feltöltődik az első 10 könyvvel| Sikeres | Norbert
T-22 | A Könyvek ablak "Oldal vissza" gombja nem csinál semmit ha az első oldalon vagyunk | Sikeres | Norbert
T-23 | A Könyvek ablak "Oldal előre" gombja nem csinál semmit ha az utolsó oldalon vagyunk | Sikeres | Norbert
T-24 | A Könyvek ablakon a táblázat egy sorára kattintva kijelölődik és megjelennek a rekordakciók (hozzáad módisít töröl) | Sikeres | Norbert
T-25 | A Könyvek ablakon a tablázat több sorára kattintva csak a hozzáadás, kölcsönzés és a törlés jelenik meg | Sikeres | Norbert
T-26 | A könyv módosítása gombra kattintva a megjelenő modal fel van töltve a választott rekord adataival | Sikeres | Norbert
T-27 | A módosítás modalban végzett változások érvénybe lépnek a rekordon is a Módosítás gombra kattintva | Sikeres | Norbert 
T-28 | A módosítás modalban végzett változások nem lépnek érvénybe a bezár gombra kattintva | Sikeres | Norbert
T-29 | A törlés modalon a Törlés gomb megnyomásakor a választott rekordok törlődnek az adatbázisból | Sikeres | Norbert
T-30 | A törlés modalon a Bezár gomb megnyomásakor a kiválasztott rekordok nem törlődnek | Sikeres | Norbert
T-31 | Az új hozzáadása modal Hozzáad gombjával a formnak megfelelő rekord beillesztésre kerül a táblába | Sikeres | Norbert
T-32 | Az új hozzáadása modal Bezár gombja bezárja a modalt és a tábla nem változik | Sikeres | Norbert
T-33 | Az információs gombra kattintva egy modal nyilik meg a kölcsönzési előzményekkel | Sikeres | Norbert 
T-34 | A kölcsönzési előzmények a kölcsönző tagok nevét, és a kölcsönzés adatait (elvitel, határidő, visszahozás) tartalmazzák, ha a könyvet már kölcsönözék| Sikeres | Norbert
T-35 | A kölcsönzési előzmény a --NINCSENEK KÖLCSÖNZÉSEK-- sort tartalmazza, ha a könyv még nem volt kölcsönözve
T-36 | A Kölcsönzési előzmények ablak "Oldal vissza" gombja nem csinál semmit ha az első oldalon vagyunk | Sikeres | Norbert
T-37 | A Kölcsönzési előzmények ablak "Oldal előre" gombja nem csinál semmit ha az utolsó oldalon vagyunk | Sikeres | Norbert
T-38 | A Kölcsönzési előzmények ablak Oldal előre ill. Oldal vissza gombja váltja az oldalt ha nem az utolsó ill. első oldalon vagyunk | Sikeres | Norbert
T-39 | Ha a könyv kölcsönzés alatt áll, a visszahozásnál a "Kölcsönzi" áll.
T-40 | Ha a könyvet visszahozta a kölcsönző, a visszahozásnál a visszahozás dátuma látható | Sikeres | Norbert
T-41 | A visszahozott könyveknek minden visszahozás dátuma megjelenik a táblázatban.
T-42 | A Tagok menüpont kiválasztásakor a táblázat feltöltődik az első 10 taggal| Sikeres | Norbert
T-43 | A Tagok ablak "Oldal vissza" gombja nem csinál semmit ha az első oldalon vagyunk | Sikeres | Norbert
T-44 | A Tagok ablak "Oldal előre" gombja nem csinál semmit ha az utolsó oldalon vagyunk | Sikeres | Norbert
T-45 | A Tagok ablakon a táblázat egy sorára kattintva kijelölődik és megjelennek a rekordakciók (hozzáad módisít töröl) | Sikeres | Norbert
T-46 | A Tagok ablakon a tablázat több sorára kattintva csak a hozzáadás, kölcsönzés és a törlés jelenik meg | Sikeres | Norbert
T-47 | A Tag módosítása gombra kattintva a megjelenő modal fel van töltve a választott rekord adataival | Sikeres | Norbert
T-48 | A módosítás modalban végzett változások érvénybe lépnek a rekordon is a Módosítás gombra kattintva | Sikeres | Norbert 
T-49 | A módosítás modalban végzett változások nem lépnek érvénybe a bezár gombra kattintva | Sikeres | Norbert
T-50 | A törlés modalon a Törlés gomb megnyomásakor a választott rekordok törlődnek az adatbázisból | Sikeres | Norbert
T-51 | A törlés modalon a Bezár gomb megnyomásakor a kiválasztott rekordok nem törlődnek | Sikeres | Norbert
T-52 | Az új hozzáadása modal Hozzáad gombjával a formnak megfelelő rekord beillesztésre kerül a táblába | Sikeres | Norbert
T-53 | Az új hozzáadása modal Bezár gombja bezárja a modalt és a tábla nem változik | Sikeres | Norbert
T-54 | Az információs gombra kattintva egy modal nyilik meg a kölcsönzési előzményekkel | Sikeres | Norbert 
T-55 | A kölcsönzési előzmények a kölcsönzött könyvek címét, és a kölcsönzés adatait (elvitel, határidő, visszahozás) tartalmazzák, ha a tag már kölcsönözött| Sikeres | Norbert
T-56 | A kölcsönzési előzmény a --NINCSENEK KÖLCSÖNZÉSEK-- sort tartalmazza, ha a Tag még nem kölcsönzött ki semmit | Sikeres | Norbert
T-57 | A Kölcsönzési előzmények ablak "Oldal vissza" gombja nem csinál semmit ha az első oldalon vagyunk | Sikeres | Norbert
T-58 | A Kölcsönzési előzmények ablak "Oldal előre" gombja nem csinál semmit ha az utolsó oldalon vagyunk | Sikeres | Norbert
T-59 | A Kölcsönzési előzmények ablak Oldal előre ill. Oldal vissza gombja váltja az oldalt ha nem az utolsó ill. első oldalon vagyunk | Sikeres | Norbert
T-60 | Ha a tag épp kölcsönöz, a visszahozásnál a "Kölcsönzi" áll.
T-61 | Ha a könyvet visszahozta a kölcsönző, a visszahozásnál a visszahozás dátuma látható | Sikeres | Norbert
T-62 | A visszahozott könyveknek minden visszahozás dátuma megjelenik a táblázatban.
T-63 | Egy könyvet nem lehet többször kikölcsönözni, ha nem hozták még vissza | Sikeres | Norbert
T-64 | Egy könyvet nem lehet többször visszahozni, ha a visszahozás óta még nincs újra kikölcsönözve | Sikeres | Norbert