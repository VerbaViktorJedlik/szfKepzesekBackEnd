# Szoftverfejlesztő képzések Backend API Specifikáció

Hozzunk létre backend programot szoftverfejlesztő képzések lekérdezésére. A frontendet/UI-t egy másik csapat hozza létre (ezzel nem foglalkozunk). A html/css sablon elkészült, és referenciaként használható a funkciókhoz. Az alábbi funkciókat kell megvalósítani ebben a projektben.

### Képzés
- Összes képzés listázása
   * Lapozás
   * Adott mezők kiválasztása az eredményben (select)
   * Adott számú találat megjelenítése (limit)
   * Szűrés adott mezőkre, adott feltételekkel
- Képzések keresése egy adott irányítószámtól adott sugarú körben
  * A geocoder API-t használjuk, hogy megkapjuk a pontos helyet és a koordinátákat a címből
- Egy konkrét azonosítójú képzés lekérése
- Új képzés felvitele
  * Csak az authentikált felhasználók részére
  * Legalább "publisher" vagy "admin" szerep szükséges
  * A publisher csak egy képzés felvitelére jogosult (az admin többet is felvihet)
  * Mezők validálása a Mongoose segítségével
- Fotó feltöltése a képzésekhez
  * Csak a képzés tulajdonosának számára
  * A fotó a helyi fájlrendszerbe lesz feltöltve
- Képzések frissítése
  * Csak a képzés tulajdonosának számára
  * A frissítés validálása
- Képzések törlése
  * Csak a képzés tulajdonosának számára
- Egy adott képzés összes költségének meghatározása
- Képzések átlagos értékelésének meghatározása

### Kurzusok
- Egy képzés összes kurzusának listázása
- Az összes kurzus listázása 
  * Lapozás, szűrés, stb.
- Egy adott azonosítójú kurzus listázása
- Új kurzus létrehozása
  * Csak authentikált felhasználó számára
  * "publisher" vagy "admin" szerep szükséges
  * Csak a képzés tulajdonosa vagy admin számára lehetséges
  * "publisher"-ek több kurzust is létrehozhatnak a saját képzésükön belül
- Kurzus frissítése
  * Csak a tulajdonosnak
- Kurzus törlése
  * Csak a tulajdonosnak
  
### Képzés értékelése (review)
- Adott képzés összes értékelésének listázása
- Összes értékelés listázása általában
  * Lapozás, szűrés, stb.
- Adott azanosítójú értékelés lekérdezése
- Új értékelés létrehozása
  * Csak authentikált felhasználó számára
  * "user" vagy "admin" szerep szükséges (publishereknek nem engedélyezett)
- Értékelés frissítése
  * Csak a tulajdonosnak
- Delete review
  * Csak a tulajdonosnak

### Felhasználók & Authentikálás
- Authentikálás JWT/cookies használatával
  * JWT és cookie lejárati ideje 30 nap lesz
- Felhasználó regisztrálása
  * Regisztrálás "user" vagy "publisher" szerepben lehetséges
    * Regisztráció után egy token is elküldésre kerül egy sütivel együtt (token = xxx)
  * A jelszavakat titkosítani kell
- Felhasználó bejelentkezés
  * A felhasználó email és jelszó segítségével tud regisztrálni
  * Az egyszerű szöveges jelszó lesz összehasonlítva a tárolt titkosított jelszóval
  * Regisztráció után egy token is elküldésre kerül egy sütivel együtt (token = xxx)
- Felhasználó kijelentkezés
  * Cookie-ban lesz kiküldve a token = none beállítás
- Felhasználó lekérdezése
  * Útvonal az aktuálisan bejelentkezett felhasználó lekéréséhez (tokenen keresztül)
- Password reset (elfelejtett jelszó)
  * A felhasználók kérhetik a jelszó újra beállítását
  * Egy titkosított token lesz kiküldve a felhasználó email címére
  * Egy put kérést tud küldeni a generált url-re a jelszó újra beállításához
  * A token 10 perc után lejár
- Felhasználói adatok frissítése
  * csak authentikált felhasználóknak
  * Külön útvonal a jelszó frissítéséhez
- Felhasználó CRUD
  * Csak admin szerepű felhasználónak
- A felhasználókat csak az adatbázismező manuális frissítésével lehet rendszergazdává tenni

## Biztonság
- A jelszavak titkosítása és a tokenek visszaállítása
- Webhelyek közötti szkriptelés megakadályozása – XSS
- A NoSQL injekciók megelőzése
- 10 percenkénti 100 kérés gyakorisági korlát hozzáadása
- http param szennyezés elleni védelem
- Fejlécek hozzáadása a biztonság kedvéért (helmet)
- A cors használata az API nyilvánossá tételéhez (egyelőre)

## Documentáció
- Dokumentáció létrehozásához a Postmant/ThunderClient programot használjuk
- A docgen segítségével HTML-fájlokat hozhatunk létre a Postmanből
- html fájlok hozzáadása az api / útvonalaként

## Publikálás (Digital Ocean)
- Feltöltés a Github-ra
- Droplet létrehozása - https://m.do.co/c/5424d440c63a
- Repo klónozása a szerverre
- PM2 folyamatkezelő használata
- Tűzfal engedélyezése (ufw) és a szükséges portok megnyitása
- NGINX fordított proxy létrehozása a 80-as porthoz
- Domain névhez csatlakozás
- SSL telepítése a Let's Encrypt segítségével

## Kóddal kapcsolatos javaslatok
- NPM-szkriptek fejlesztői és éles környezethez
- Config fájl a fontos kontansokhoz
- Controllerek dokumentált leírásokkal/útvonalakkal
- Hiba kezelő middleware-ek
- Hitelesítési köztes szoftver az útvonalak védelméhez és a felhasználói szerepek beállításához
- Érvényesítés Mongoose használatával, külső könyvtárak nélkül
- async/await használata
