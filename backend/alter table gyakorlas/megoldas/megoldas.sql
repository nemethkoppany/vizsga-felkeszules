--1
ALTER TABLE torpok MODIFY elso_megjelenes DATE;

--2
ALTER TABLE vadaszatok MODIFY vadaszatok.datum DATE

--3
ALTER TABLE torpok ADD id INT PRIMARY KEY AUTO_INCREMENT FIRST;
--A FIRST csak azért kell, hogy a tábla elejére kerüljön, nem kötelező

--4
ALTER TABLE vadaszatok ADD FOREIGN KEY (torp_id) REFERENCES torpok(id);

--5
ALTER TABLE vadaszatok DROP COLUMN felesleges_jegyzet;

--6
--id módosítás
ALTER TABLE torpporkolt MODIFY id INT PRIMARY KEY AUTO_INCREMENT

--kiserlet módosítása
ALTER TABLE torpporkolt MODIFY kiserlet_datuma DATE

--kapcsolat a vadaszok tablaval
ALTER TABLE torpporkolt MODIFY vadaszat_id INT NOT NULL

--foreign key
ALTER TABLE torpporkolt ADD FOREIGN KEY (vadaszat_id) REFERENCES vadaszatok(id)


-- Ellenőrző lekérdezések (a végén készítsd el őket)
-- 1.	Listázd a vadászatokat a törp nevével együtt (JOIN: vadaszatok ↔ torpok).
SELECT vadaszatok.helyszin, torpok.nev
FROM vadaszatok 
INNER JOIN torpok ON torpok.id = vadaszatok.torp_id;

-- 2.	Listázd a törppörköltkísérleteket úgy, hogy látszódjon a hozzá tartozó vadászat helyszíne is (JOIN: torpporkolt ↔ vadaszatok).
SELECT torpporkolt.id, vadaszatok.helyszin
FROM torpporkolt
INNER JOIN vadaszatok ON vadaszatok.id = torpporkolt.vadaszat_id;

-- 3.	Ellenőrizd, hogy nincs olyan torpporkolt rekord, ahol elkeszult = 1.
--Fancy megolás
SELECT DISTINCT IF(torpporkolt.elkeszult = 1, "Van elkészült törpörkölt", "Nincs elkészült törpörkölt") AS "Van-e törpörkölt"
FROM torpporkolt;

--Egyszeű megoldás
SELECT * FROM torpporkolt WHERE elkeszult = 1;