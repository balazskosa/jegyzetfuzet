# jegyzetfuzet

## Projektötlet :
Egy jegyzetek készítésére szolgáló felület, ahol könnyedén nyomon tudjuk követni az aktuális feljegyzett dolgainkat.

## 1) feladat funkcionális követelményeit
Regisztráció.
Bejelentkezés.
Felhasználóknak különböző jegyzetek készítése, megfelelő tag-ekkel való megjelölési lehetőségek és emlékeztetők megadása. Ezeknek külön felület a könnyebb szűrés érdekében.
Adminoknak megfelelő felület a törölt elemek visszaállítására.
## 2) feladat nem funkcionális követelményei
Felhasználóbarát: egyszerű, letisztult felület jól olvasható és elrendezésű, könnyen böngészhető megvalósítása a felületnek
Biztonság: jelszavas azonosítás, jelszavak biztonságos tárolása és védelme (titkosítása)
Gyors működés: Adatbázisban gyorsan lefutattot keresések alapján gyors visszajelzés
## 3) szakterületi fogalomjegyzék (azon fogalmak definiálása, ami köré az alkalmazás épül)
-jegyzet: a felhasználó által fontosnak és 
-tag: olyan kulcsszavak, amelyekkel könnyedén rendezhetőek a jegyzetek és könnyebb nyomoskövetést tesz ezáltal lehetővé a felhasználónak  
-emlékeztető: olyan funkció, amellyel időzíthető egy jegyzet aktualitása, ha előre tudunk erről és szeretnénk kiaknázni ezt
## 4) szerepkörök:
Felhasználó: Regisztrált és bejelentkezett felhasználó, aki jegyzeteket készíthet.
Admin: Kitörölt jegyzeteknek való visszaállításának lehetősége

## Az adatbázis az alábbi adatokat tárolja:
- jegyzet (leírás, címkék, emlékeztető, jelölőnégyzet, kép);
- felhasználók(név, jelszó, szerep);
- címke(név);
- emélkeztető(dátum, ismétlődés);
