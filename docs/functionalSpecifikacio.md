# TRYHARD
# Funkcionális specifikáció



## 1. Bevezetés

Egy kisvárosi könyvkölcsönző viszonylag nagy forgalommal jár, a helyiek
inkább kölcsönzik a könyveiket vásárlás helyett. A hely kifejezetten
könyvtár hangulatú, a könyveket is könyvekben tartják nyilván. Napjainkban
azonban a jól bevált módszerek új kihívásokkal és vetélytársakkal néznek
szembe a számítógépek személyében. Éppen ezért a kölcsönző vezetése is
úgy döntött, hogy alkalmazkodik az új követelményekhez, és egy gyors és
hatékony számítógépes rendszert vezet be. Erre az igényre alapozva
terveztük meg a programot, hogy a felvetett problémákra gyors és praktikus
megoldást nyújthasson, és hasznos eszköz legyen a kölcsönző mindennapjaiban.
A könyvtári tagok most már képesek legyenek online webes kereten belül is elintézni
a kölcsönzésüket vagy regisztrációjukat is akár.

## 2. Használati esetek


A Követelmény specifikáció 'Követelménylista' című bekezdése alapján az
egyes pontok kifejtésére kerül sor ebben a fejezetben.



* A programmal lehetőséget szeretnénk nyújtani a felhasználók
   kölcsönzéseinek nyilvántartására. Továbbá a kölcsönzőben dolgozó
   személyzet számára szeretnénk átláthatóbbá tenni az adminisztrációt.
   Mivel weben elérhető a könyvtár így  a tagoknak nem szükséges a személyesen
    megjelelniük ,hogy beregisztrálhassanak a könyvtárba vagy meglévő tagságukat
     módosíthassák .Hanem most már könnyen és egyszerűen képesek lesznek rá .

* Az egyes tételekről (melyek a mi esetünkben a kölcsönözhető könyvek)
   szeretnénk a lehető legtöbb információt eltárolni. A könyvek címét,
   szerzőjet, megjelenésének dátumát, kölcsönzési státuszát (ki van-e
   kölcsönözve vagy sem), a kivétel időpontját és a kölcsön lejáratának
   dátumát.A tagok regisztrációjának dátumát ,születési dátumát, nevét, 
   lakcimét tagsági ID számát.
   
* A dinamikusan változó nyilvántartás lehetőséget kínál ,hogy ez által új 
     tagokat vehessen fel a könyvtár vagy az esetlegesen megszűnő tagságokat könnyen
     és egyszerűen képes legyen kitörölni, vagy ha egy felhasználónak megváltoznak
     az adatai akkor azt a lehető legegyszerűbben képes legyen a dolgozó módosítani.
     A könyvek listáját is könnyedséggel lehet változtatni, hogy éppen bent van-e a
     könyvtárban a könyv vagy sem. Illetve ,hogy melyik tagnál helyezkedik el. Az új
     könyvek felvételét is lelehet bonyolítani vagy a megrongált sérült könyveket
     is könnyedén ki lehet vonni az adatbázisból.Ezenbelül kölcsönzés dátumának esetleges
     meghosszabbítását vagy tagok esetben felmerülő adatmódosítási funkció is
     implementálva lehessen a programban.
  
  
  * A program segítséget nyújt ,hogy a felhasználó különböző szempontok alapján
     mint pl: kölcsönzés dátuma szerint tudja csökkenő vagy növekvő sorendbe 
     listázni a kivett könyveket. Így könnyedén látható ,hogy ki az akinek esedékes
     a könyv visszahozása a könyvtárba. De ide tartozik ,hogy leellenőrizhesse
     akár a könyvtárban dolgozó, hogy adott szerzőhöz milyen művek kapcsolódnak
     és éppen kint vannak egy tagnál vagy kivehetők-e. 
  
 * A programban van egy olyan funkció is ami alapján a tagok is képesek lehetnek 
  egyszerűbbnek titulált lekérdezéseket is végre hajtani így ez által az ők könyvek
  közötti keresésüket könyöti meg és időt spórolhatnak ,hogy a kedvenc írója milyen könyveket
  írt és amik megtalálhatók a könyvtárban éppen vagy várni a kell míg valaki vissza viszi.
  De ugyan így adót témában vagy kiadó alapján is képes lehet keresni. 
  
  * A szoftverben az egyik legfontosabb „funkció” az nem más mint ,hogy egyszerű 
     könnyen kezelhető és átlátható legyen a felhasználók számára.
## 3. Jelenlegi helyzet

A mostani analóg, vagyis papír és ceruzán alapuló könyvtár megérett arra a szintre,
hogy modernizálja magát és belépjen a huszadik századba. Ez által meggyorsítva
a mostani rendszert. Így a későbbiekben képes lehet tartani a versenyt és kiszolgálni a 
könyvtárba járó közönséget. Mert így képesek lesznek a könyvtárban dolgozók villám
gyorsan lekérdezni az adatbázisból, hogy az adott könny része-e a könyvtárnak. Bent 
van-e a könyv, illetve ha kint van egy tagnál akkor az illetőnek mikor esedékes a könyv 
vissza hozatala. Ezek a folyamatok eddig hosszú perceket vettek el mind a könyvtáros
és mind a tag idejéből. Ami a mostani világban már tarthatatlan. Így kényszerből is
muszáj megváltozni a könyvtárnak a jelenlegi rendszert.

### 3.1. A rendszernek NEM célja

 * A tagok számára felületet biztosítani a kölcsönzéseik listázására, vagy
    bármilyen kölcsönzőbeli adatuk elérésére.
    
 * Figyelmeztetést küldeni annak a tagnak akinek lejárt a kölcsönzési ideje vagy
   közelít a határidő végéhez.
   
 * A legmodernebb biztonsági előírásoknak megfelelni.
 
 * A GDPR előírásainak megfelelni.

## 4. Jelenlegi üzleti folyamatok modellje

A tagok és a könyvek listáját egy relációs adatbázis váltja ki, amelyben ezek az
adatok tökéletesen tárolhatóak, és különböző szűrőkkel gyorsan lekérdezhetőek.
 A menüből választhatóak ki az alapvető tevékenységek.

 - A Könyvtáros felhasználó menüje:
    * Kölcsönzés
    * Új tag
    * Új könyv
    * Tag adatainak szerkesztése
    * Könyv adatainak szerkesztése
    * Tag törlése
    * Könyv törlése
    * Kilépés
    
 A kölcsönzési folyamat megkezdésekor a 'Kölcsönzés' menüponot választva a könyvtáros megadja
a kölcsönző nevét és a könyv azonosítóját, ezt a rendszer eltárolja, majd megjeleníti a
 kölcsönzési határidőt, amit a könyvtáros így megadhat a tagnak. Ugyan ez a menüpont 
 használható a vissza hozott könyvek adminisztrálására is. Az 'Új tag' és az 'Új könyv' menüpontokon
 keresztül tud a felhasználó új "elemeket" felvenni az adatbázisba. A 'Tag adatainak szerkesztése'
 és a 'Könyv adatainak szerkesztése' menüpontok használhatóak az "elemek" adatinak módosítására az
 adatbázisban. A 'Tag törlése' és a 'Könyv törlése' menüpontok használhatók tételek törlésére az
 adatbázisból. A 'Kilépés' menüponttal zárható be a program.

## 5. Igényelt üzleti folyamatok

A program alapvetően egy főmenűből, és a menüből nyitható funkció képernyőkből
áll. A főmenüből elérhető az összes funkció, valamint a kilépési lehetőség.
A program célja, hogy gyakorlatilag egy adatbázis előnyeit SQL utasítások
használata nélkül élvezhessük. Így a fontosabb funkciók használatára kell lehetőséget
biztosítanunk a userek számára.

A következő funkciók a fontosabbak:
   - lekérdezés
   - létrehozás
   - módosítás
   - törlés

Ezen funkciókat kivezetjük a grafikus felhasználói interfacere, így
egyszerűen a használat a felhasználók számára.
 Mivel az adott folyamat megszabja melyik táblának az elemeit használjuk,
így csak a szűréssel kell törődnünk.
A lekérdezés esetén gyakorlatilag a könyv kölcsönzés funkciót értjük, ekkor
a kapcsoló táblába helyezünk el érték párokat.
A létrehozás az új könyv/új tag regisztrálásának felel meg, ekkor a megfelelő
táblába illesztünk be új rekordokat, tehát a mezők kitöltésére biztosítunk lehetőséget.
A módosítás papíron sokkal körülményesebb, de a rendszerben csak ki kell választani a
módosítandó rekordot, és átírni a módosítani kívánt értéket.
A törlés nagyon hasonló folyamat a módosításhoz, viszont itt a kijelölt rekord minden
értékét nullra állítjuk, az azonosítóján kívül.
## 6. Képernyőtervek

A prototípus alapján a kliens számára is megfelelő designt próbáltunk
megalkotni, amely megkönnyíti a használatot, de a megjelenése igényes,
modern hatást kelt, mégis egyszerű. Ehhez a Bootstrap 4 eszközeit
használtuk fel, mely letisztult designt biztosít, de rengeteg fontos és 
hasznos felhasználói eszköz megvalósítását egyszerűsíti. Az oldal alapját
egy főmenü alkotja, illetve a menü mellett helyezkedik el a fő tartalom, 
a választott menüpontnak megfelelően. Jelenleg 4 fő képernyő és menüpont
van a közvetlen tervbe véve, ezek:
- Főoldal:
Ide egyénileg testreszabható tartalmat helyezhet el a kliens.

- Kölcsönzés:
Választható könyv(ek) adott felhasználóhoz, a felhasználó és a könyv is kiválasztható,
de kölcsönzés indítható a további (lásd lentebb) screenekről is.

- Könyvek:
A könyvek listája, és a könyveken végezhető műveletek végezhetőek innen, 
a táblából választott rekordok száma alapján kínálja fel a módosítást (1) , törlést (több),
hozzáadást. 1 vagy több kiválasztott könyvvel is indíthatunk kölcsönzési folyamatot.

- Tagok:
A tagok listája, adatokkal együtt, választható rekordok, többféle felajánlott művelettel, 
hozzáadás, módosítás, törlés. Egy kiválasztott tag esetén indíthatunk kölcsönzési folyamatot.

A képernyők háttere véletlen kép az unsplash.com oldalról. Az oldal reszponzív megjelenésű
kis képernyő esetén a menü a képernyő tetején helyezkedik el, a táblák pedig oldalirányban 
is scrollozhatóak. Az adatmódosításhoz felugró modal ablakokat használunk, így a felhasználó
szeme előtt mindig csak a fontos információ található, mégis gyorsan visszatérhet az eredeti oldalra, 
nincsenek meglepetésszerű redirektálgatások.