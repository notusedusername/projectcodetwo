# TRYHARD  
## Rendszerterv  

### Bevezetés 

### A rendszer célja 

### A projekt tervezete 

### A rendszer felépítése 

Az adatbázis kapcsolathoz szükséges egy adatbázis connection osztály,  
amely létrehozza, fenntartja, és zárja az adatbáziskapcsolatot.  
A felszedett adatokat webserver segítségével megfelelően repzezentálva szolgáltatjuk
a klienseknek, továbbá a felületen lehetőségük nyílik új adatok létrehozására,
módosítására, törlésére is. A megjelenítést html segítségével kívánjunk megvalósítani,
a designban nagy szerepet szánunk a Bootstap 4-nek is. A grafikus felület dinamikáját
a JavaScript biztosítja. A rendszer fő pontja így a központi gép, amelyiken a Tomcat fut, 
illetve ettől elkülönített, de akár egy gépen is futtatható SQL szerver is amely az adatokat
biztosítja. Javasoljuk a szerverek külön gépen futtatását, hogy egy esetleges hardverhiba
esetén csak az egyik része károsodjon a rendszernek.
A program controller részének megvalósítását Java programozási nyelven terveztük el.
A projekthez továbbá felhasználtuk a Maven nevű projekt menedzsment eszköztárat is.

###  Projektmunkások és felelősségeik 
A projektet készítő négy személy teljesen egyenjogú szerepkörökkel rendelkezik.
Mind négyük kiveszi a részét a munka minden egyes fázisából és részéből. Mindnyájan
egyenrangú fejlesztői a programnak.

Név |   Szerepkör
-----------|---------
Keserű Kristóf  | szoftverfejlesztő
Szabó Ákos  | szoftverfejlesztő
Tóth Norbert    | szoftverfejlesztő
Varga Mátyás    | szoftverfejlesztő

### Ütemterv   

### Mérföldkövek

A program elkészítésének fő mérföldkövei:  

#### Sprint I.

- A Trelloban való regisztráció illetve a használatának elkezdése  
- A git repository elkészítése  
- A tagok git-re való regisztrációja illetve a projekthez felvétele  
- A követelményspecifikáció elkészítése  
- A funckionális specifikáció elkészítése  
- A rendszerterv elkészítése
- A program prototípus UI-jának elkészítése

#### Sprint II.
  
- A rendszer tesztjeinek felállítása  
- A program adatbázisának elkészítése  
- A program controllerének elkészítése  
- A program tesztelése a minimális funkciókkal

#### További sprintek

- A program biztonságának növelése, felkészítés az internetes használatra
- A felhasználó visszajelzések beletervezése a projektbe
- A kisebb üzleti értékkel rendelkező kényelmi feature-ök fejlesztése
   

###  Üzleti szereplők  

###  Üzleti entitások  

### Követelmények

### Funkcionális követelmények 

- Könnyen és egyszerűen kezelhető rendszer.
- Jól átlátható adatbázis kezelés.
- Egyszerű adatbázis lekérdezések lebonyolítása.
- Könnyed adatfelvétel és módosítás.

###  Nem funkcionális követelmények

- Esztétikus felhasználói felület.
- Látás károsultak számára is megfelelő színvilág és betűméretek használata.

### Funkcionális terv   

### Rendszerszereplők  

### Rendszerhasználati esetek és lefutásai

### Menü-hierarchiák 

### Fizikai környezet  
  
#### Hardver és hálózati topológia

A felhasználói gépeknek el kell érniük a szerverként üzemelő központi gépet,
amely kiszolgálja a kéréseket, így a szoftver telepítése csak itt szükséges.
A rendszer internethez való csatolását nem javasoljuk 

#### Fizikai alrendszerek 

#### Fizikai alrendszerek  

### Fejlesztő eszközök  

A projekt során használt fejlszetői eszközök:  
- Java 11
- Maven 3 
- SQL  
- JavaScript

### Keretrendszer   

- JQuery
- Bootstrap 4
- Spring Boot

### Architekturális terv   

 rendszert felépítő alrendszerek
(szoftver komponensek) lényegében a Java ,Sql ,Mavan használata Java FX keretén belüli
használata.Az alrendszerek meghatározása után a tulajdonságaikat kiaknázva vezérlési,
valamint kommunikációs kapcsolatokat lehet létrehozni ez által. Ennek a megfelelő
komponensek és összekötök ismeretében magas szintű tervezetet jön létre. A rendszer
szerepe az érdekelt szereplő kommunikációjának lehetővé tétele ,a korai fejlesztési
fázisok döntéseinek támogatása a követelmények tükrében és emelet igen fontos a Nagy lépték"
újrafelhasználhatóság elősegítése. Ehez persze szükség van különféle forrásokra mint Üzleti és technológiai döntések
eredménye ,meghatározó a környezet szerepe , fejlesztők céljai és stratégiája által
befolyásolt követelmények vezetnek különféle szoftver architektúrákhoz. 
Mint minden folyamat ez is egy ciklus körül forog mint az :
- architektúrát meghatározó fejlesztő szervezet szerkezetéből
- szereplők
- Követelmények
- Technológiai környezet
- A tervező tapasztalata
 
Architektúra elemek:
- Architektúrális minta
  - típus elemek és kapcsolatok, kényszerek
  - pl. kliens-szerver minta
-  Referencia modell
   - standard funkcionális felosztás és
    adatfolyam megoldások
   - pl. adatbázis kezelő rendszer
- Referencia architektúra
  -   referencia modell leképezése szoftver
      elemekre
   - pl. ISO OSI architektúra  
   
### Az alkalmazás rétegei, fő komponensei, ezek kapcsolatai

### Rendszer bővíthetősége  

### Biztonsági funkciók 

### Adatbázis terv  
#### Logikai adatmodell  
### Implementációs terv
### Perzisztencia-osztályok 

A perzisztencia megvalósításáért a Hibernate objektum-relációs leképezést
megvalósító programkönyvtár felel.
Perzisztencia osztályok:
   -DBUtils
   -HibernateUtils
   
### Üzleti logika osztályai  
Az üzleti logika a háromrétegű adatkezelő alkalmazások középső rétege, amely meghatározza 
az alkalmazás működésének logikáját.
A háromrétegű architektúra az alkalmazást három különálló rétegre osztja fel. E rétegek 
komponensei önállóan léteznek, és együttműködésük során egyidejűleg több különböző 
alkalmazásnak is a részei lehetnek.
Az adatbázislogika az adatok nyers tárolását végzi. Semmilyen információval nem rendelkezik 
az adatok feldolgozásával vagy megjelenítésével kapcsolatban.
Az ügyviteli (üzleti) logika az alkalmazás logikáját, működési szabályait határozza meg. 
Semmilyen információval nem rendelkezik az adatok tárolásával vagy megjelenítésével kapcsolatban.
A felhasználói interfész feladata az ügyviteli logika által küldött adatok formázása és
megjelenítése. Biztosítja a felhasználó hozzáférését az ügyviteli logika szolgáltatásaihoz. 
Sohasem kerül közvetlen kapcsolatba az adatbázissal, és nem végez semmilyen műveletet az 
adatokon.
### Tesztterv  