# TRYHARD
# Követelményspecifikáció

## Bevezetés

Egy kisvárosi könyvkölcsönző viszonylag nagy forgalommal jár, a helyiek inkább 
kölcsönzik a könyveiket vásárlás helyett. A hely kifejezetten könyvtár hangulatú,
 a könyveket is könyvekben tartják nyilván. Napjainkban azonban a jól bevált módszerek új 
 kihívásokkal és vetélytársakkal néznek szembe a számítógépek személyében. Éppen ezért a 
 kölcsönző vezetése is úgy döntött, hogy alkalmazkodik az új követelményekhez, és egy gyors és hatékony számítógépes rendszert vezet be
A kölcsönző részére szükség lenne egy rendszerre, mely akár több munkaállomáson is futhat, 
mégis egy adattömeget használ. Ehhez tudnak biztosítani egy központi gépet, amelyhez a munkaállomásoknak 
hozzáférése van. Így növelhetik a hatékonyságot, mivel a egyszerre akár több könyvtáros is kiszolgálhatja
a tagokat, valamint a rendszer továbbfejlesztetősége szinte korlátlan, többfelhasználós, változatos jogokkal
rendelkező felhasználók, saját domain és tagregisztráció, kölcsönzések online nyomonkövetése, naprakész könyvnyilvántartás
akár otthonról is elérve és még sok más hasznos funkció, a kliensek megrendelései alapján. Mivel a projekt kezdeti stádiumban van
elsőnek a legfontosabb funkciók fejlesztése fog megtörténni, majd a visszajelzések alapján 
priorizáljuk a további featureöket a felhasználói igények alapján.

## Jelenlegi helyzet

A könyvtárunk több száz taggal rendelkezik és a látszám folyamatosan növekszik. Emellett
a kikölcsönözhető könyveink száma is hétről-hétre gyarapodik. A gyors növekedésnek viszont
az a nagy hátulütője ,hogy az adminiszráció mértéke is jelentősen megugrik, mivel számos feladatot
papír alapon kell megoldani. Ilyen feladatok például: 
* Egy újonnan a könytárunkba érkező és tagsággal nem rendelkező ember felvétele a könyvtári rendszerünkbe.
* Egy a könyvtári könyvek listájában még nem szereplő könyv felvétele a rendszerünkbe.
* Egy a könytárunkban tagsággal rendelkező ember adatainak módosítása a könyvtári rendszerünkben.
* Egy a könytárunkban már szereplő könyv adatainak módosítása a könyvtári rendszerünkben.
* Egy a könytárunkban tagsággal rendelkező ember törlése a rendszerből.
* Egy a könytárunkban már szereplő könyv törlése a rendszerből.
* Egy könyvtári tag álatal kért és a könyvtári dolgozó által kivitelezett 
könyv kikölcsönzés.

Ezek a feladatok a klasszikus papír ceruza módszerrel kivitelezhetőek kis
létszám esetén, viszont nagy létszám esetén nem.

## Vágyálom rendszer

Amikor rájöttünk arra ,hogy az elavult papír, ceruza alapú adminisztráció nem a
legjobb megoldás a könyvtárunk részére elkezdtünk gondolkodni ,hogy mi lehetne a
legmegfelelőbb alternetíva. Hosszas gondolkozás után egy webes alkalmazás mellett
döntöttünk. Szeretnénk egy olyan webes alkalmazást amellyel el tudjuk látni ugyanazokat
a feladatokat amiket a Jelenlegi helyzet bekezdés alatt felsoroltunk és szeretnénk
ha ezeknek a feladatoknak a végrehajtásának az ideje jelentősen csökkenne. 

## Jelenlegi üzleti folyamatok

A könyvtárunkban jelenleg minden üzleti folyamatot papír segítségével adminisztrálunk.
A könyvtárban tagsággal rendelkező ügyfeleink könyvtári tag kártya segítségével tudja
igénybe venni a könyvtárunk szolgáltatásait. Ha egy új személy tag szeretne lenni a 
könyvtárunkban akkor a könyvtári tagjaink kézzel írott listájának a végére vesszük fel
az adatait, illetve ha később az adat felvételkor elkövetett hiba miatt egy vagy több
adatot meg kell változtatni akkor a módosítást szintén ebben a hosszú listában hajtjuk
végre. Be kell látni ,hogy ez a módszer a tagok nagy létszáma mellett nem hatékony és
egy esetleges hiba esetén pedig a módosítás sok keresésbe és időbe telik.
A könyvek esetében a helyzet nagyon hasonló. Ha egy új könyv érkezik a könyvtárba
akkor a könyv felvétele a rendszerbe ugyanúgy működik mint a tagok felvétele esetében,
illetve a módosítás folyamata is ugyanaz, vagyis mindent papír segítségvel kell
adminisztrálni a könyvek esetén is.
Ha egy könyvtári tag azzal az igénnyel érkezik a könyvtárba ,hogy könyvet szeretni
kikölcsönözni akkor az üzelti folyamat azzal kezdődik ,hogy a könyvtáros megnézni, hogy
a könyv megtalálható-e a könyvtári könyvek listájában és ha igen akkor megnézni a
könyvespolcon ,hogy jelenleg van-e a választott könyvből kikölcsönzésre alkalmas. Ha
van akkor egy füzetbe feljegyzi a könyvtáros ,hogy ki és milyen könyvet, valamint mennyi
időre kölcsönzött ki és ad egy lapot a könyvtári tagnak is amelyen a visszahozás határideje
szerepel. Amikor a könyvtári tag visszahozza a könyvet, a könyvtáros feljegyzi ,hogy a
könyvet határidő előtt visszahozta az a ki kikölcsönözte majd visszarakja a könyvespolcra.

## Igényelt üzleti folyamatok modellje

Könyvtár szeretné kiküszöbölni a jelenlegi analóg rendszer általi nehézségeket
így, mint minden kisebb-nagyobb cég ők is követik digitalizációt.Igényeik szerint
több funkciós platform lenne, mely teljes mértékben felváltaná a mostani rendszert.
A program funkciói között szerepel a legtöbb jelenlegi folyamat digitális változata.
Nem ragaszkodnak az online adatbázishoz továbbá a lokális hálózaton való adat eléréshez.
Megelégednek egy önálló gépen működő programmal. A rendszer képes kell, hogy legyen 
egy adott könyvről több adat tárolására is, hogy éppen kinél van, meddig van nála és, 
hogy mikor esedékes a könyvtárba való vissza hozatala. Emellett igen fontos lenne a 
könnyű kezelhetőség és egyben átláthatóság a felhasználók számára.

## Követelménylista

* Egy rendszer mely nyílvántartja a forgalomban lévő könyveket.
* A rendszer képes legyen egy adott elemről több adatot is tárolni.
* A nyilvántartásba lehtővé kell tenni a meglévő elemek módosítását, törlését
   és új elem létrehozását.
* A rendszer képes legyen kiválogatni a tételeket különböző szempontok alapján.
* Legyen lehetősége az alap felhasználónak is lekérdezést végrehajtani.
* A program egyszerűen kezelhető és letisztult képi világgal rendelkezzen.

* A rendszer fontos eleme, hogy többfelhasználós szolgáltatást biztosít,
  a fejlesztés későbbi szakaszaiban akár internetes eléréssel is.
   