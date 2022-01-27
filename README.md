## Projektötlet :
Egy jegyzetek készítésére szolgáló felület, ahol könnyedén nyomon tudjuk követni az aktuális feljegyzett dolgainkat.

## 1) feladat funkcionális követelményeit
Meg szeretném nézni az eltárolt jegyzeteket. -> Jegyzetek listázása
Vendégként szeretnék bejelentkezni az oldalra több funkció elérése érdekében. ->Bejelentkezés
Felhasználóknak különböző jegyzetek készítése, megfelelő tag-ekkel való megjelölési lehetőségek és emlékeztetők megadása. -> Jegyzet készítése
Ezeknek külön felület a könnyebb szűrés érdekében. -> Jegyzetek szűrése
Adminoknak megfelelő felület a törölt elemek visszaállítására. -> Jegyzetek visszaállítása
## 2) feladat nem funkcionális követelményei
Felhasználóbarát: egyszerű, letisztult felület jól olvasható és elrendezésű, könnyen böngészhető megvalósítása a felületnek
Biztonság: jelszavas azonosítás, jelszavak biztonságos tárolása és védelme (titkosítása)
Gyors működés: Adatbázisban gyorsan lefutattot keresések alapján gyors visszajelzés
## 3) szakterületi fogalomjegyzék (azon fogalmak definiálása, ami köré az alkalmazás épül)
-jegyzet: a felhasználó által fontosnak és 
-tag: olyan kulcsszavak, amelyekkel könnyedén rendezhetőek a jegyzetek és könnyebb nyomoskövetést tesz ezáltal lehetővé a felhasználónak  
-emlékeztető: olyan funkció, amellyel időzíthető egy jegyzet aktualitása, ha előre tudunk erről és szeretnénk kiaknázni ezt
## 4) szerepkörök:
Vendég: Képes jegyzeteket készíteni az alapvető funkciók kipróbálásához, de ezek törlésre kerülnek.

Felhasználó: Bejelentkezett felhasználó, aki képes jegyzeteket készíteni és ezekre szűrni.
Admin: Kitörölt jegyzeteknek való visszaállításának lehetősége.

## Az adatbázis az alábbi adatokat tárolja:
- jegyzet (cím, leírás, fontosság, emlékeztető, id, userId);
- felhasználók(név, jelszó, szerep, userId);
- címkék(noteId, userId, title);
```
Note:
{
	noteId: 1,
	title: "title",
	description: "description",
	importance: "LOW",
	date: "TODAY",
	userId: 1,
}



GET /notes - összes jegyzet lekérdezése
	params:
		importance: string - Ilyen típusú jegyzeteket kapjak csak
		date: string - Ilyen típusú jegyzeteket kapjak csak
	returns:
		200: Note[] - A felhasználó által elérhető jegyzetek

GET /notes/:noteId - egy konkrét jegyzet lekérdezése
	params:
		noteId: number - Konkrét jegyzet lekérdezése
	return:
		200: Note - A kér jegyzet
		404: Nem létezik ez a jegyzet

POST /notes - új jegyzet létrehózása
	params:
		note: Note - A létrehozandó jegyzet adatai
	returns:
		200: Note - A létrehozott jegyzet

PATCH /notes/:noteId - jegyzet módosítása megadott adatokkal
	params:
		noteId: number - A módosítandó note id-ja
		note: Note - A módosítandó mezők és értékeik
	returns:
		200: Note - A módosított jegyzet
		404: Note - Nem létezik a módosítandó jegyzet
		403: Ezt a jegyzetet nem módosíthatja nem bejelentkezett felhasználó

PUT /notes/:noteId - jegyzet lecserélése
	params:
		noteId: number - A módosítandó note id-ja
		note: Note - Az jegyzet új adatai
	returns:
		200: Note - A módosított jegyzet
		404: Note - Nem létezik a módosítandó jegyzet
		403: Ezt a jegyzetet nem módosíthatja nem bejelentkezett felhasználó

DELETE /notes/:noteId - jegyzet törlése
	params:
		noteId: number - A törlendő jegyzet id-ja
	returns:
		200: Note - A jegyzet sikeres törlése
		404: Note - Nem létezik a törlendő jegyzet
		

Label
{
	labelId: 1,
	userId: 1,
	title: "newLabel"
}

GET /notes/:noteId/labels - Jegyzethez tartozó címkék lekérdezése
	params:
		noteId: number - A lekérdezendő címkék jegyzete
	returns:
		200: Label[] - A jegyzethez tartozó címkék

POST /notes/:noteId/labels - Jegyzethez tartozó címkék létrehozása
	params:
		noteId: number - A jegyzet id-ja, amihez létre lesz hozva
	returns:
		200: Label - A létrehozott címke

DELETE /notes/:labelId
	params:
		labelId: A törlendő címke id-ja
	returns:
		200: Note - A címke sikeres törlése
		404: Note - Nem létezik a törlendő címke
User
{
	name: "Name",
	password: "password",
	id: 1,
	role: "User",
}

GET /users/:id () : User
GET /users/logoff (User) : User
POST /users/login (User) : User


Entitás kapcsolatok
User - Note: 1 - N
Note - Importance 1 - 1
Note - Date 1 - 1
Note - Label N - N
```
![screenshot 478](https://user-images.githubusercontent.com/71549252/151361922-cbfe7d1c-33d9-4b4a-ac78-18e862a9d40d.jpg)

![screenshot 479](https://user-images.githubusercontent.com/71549252/151375461-73845ff2-5f73-4e29-b7ad-70ec506ea4ef.jpg)

