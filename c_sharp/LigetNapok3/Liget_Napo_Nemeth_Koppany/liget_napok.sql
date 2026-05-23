CREATE DATABASE IF NOT EXISTS liget_napok CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE liget_napok;

DROP TABLE IF EXISTS programok;
DROP TABLE IF EXISTS kategoriak;
DROP TABLE IF EXISTS helyszinek;

CREATE TABLE helyszinek (
    helyszin_id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE kategoriak (
    kategoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE programok (
    program_id INT AUTO_INCREMENT PRIMARY KEY,
    cim VARCHAR(120) NOT NULL,
    datum DATE NOT NULL,
    helyszin_id INT NOT NULL,
    kategoria_id INT NOT NULL,
    resztvevok INT NOT NULL,
    CONSTRAINT fk_programok_helyszinek FOREIGN KEY (helyszin_id) REFERENCES helyszinek(helyszin_id),
    CONSTRAINT fk_programok_kategoriak FOREIGN KEY (kategoria_id) REFERENCES kategoriak(kategoria_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO helyszinek (nev) VALUES
('Liget Színpad'),
('Művelődési Ház'),
('Fő tér'),
('Városi Galéria'),
('Kertudvar');

INSERT INTO kategoriak (nev) VALUES
('koncert'),
('workshop'),
('családi'),
('kiállítás');

INSERT INTO programok (cim, datum, helyszin_id, kategoria_id, resztvevok) VALUES
('Tavaszi nyitókoncert', STR_TO_DATE('2026.03.12', '%Y.%m.%d'), 1, 1, 88),
('Kézműves kosárfonás', STR_TO_DATE('2026.03.13', '%Y.%m.%d'), 2, 2, 16),
('Családi társasjáték délután', STR_TO_DATE('2026.03.14', '%Y.%m.%d'), 3, 3, 42),
('Festmény- és plakátkiállítás', STR_TO_DATE('2026.03.15', '%Y.%m.%d'), 4, 4, 61),
('Akusztikus est', STR_TO_DATE('2026.03.16', '%Y.%m.%d'), 1, 1, 92),
('Vetőmag- és palántabörze', STR_TO_DATE('2026.03.17', '%Y.%m.%d'), 5, 3, 55),
('Illusztrációs workshop', STR_TO_DATE('2026.03.18', '%Y.%m.%d'), 2, 2, 24),
('Kortárs fotókiállítás', STR_TO_DATE('2026.03.19', '%Y.%m.%d'), 4, 4, 73),
('Ifjúsági kórusműsor', STR_TO_DATE('2026.03.20', '%Y.%m.%d'), 1, 1, 79),
('Papírhajtogató műhely', STR_TO_DATE('2026.03.21', '%Y.%m.%d'), 2, 2, 19),
('Tavaszi mesedélután', STR_TO_DATE('2026.03.22', '%Y.%m.%d'), 5, 3, 48),
('Helytörténeti tárlat', STR_TO_DATE('2026.03.23', '%Y.%m.%d'), 4, 4, 58),
('Szabadtéri DJ-est', STR_TO_DATE('2026.03.24', '%Y.%m.%d'), 1, 1, 84),
('Virágkötő bemutató', STR_TO_DATE('2026.03.25', '%Y.%m.%d'), 2, 2, 22),
('Bábos családi program', STR_TO_DATE('2026.03.26', '%Y.%m.%d'), 3, 3, 37),
('Kertészeti fotótárlat', STR_TO_DATE('2026.03.27', '%Y.%m.%d'), 4, 4, 66),
('Táncos est', STR_TO_DATE('2026.03.28', '%Y.%m.%d'), 1, 1, 90),
('Mini terrárium készítés', STR_TO_DATE('2026.03.29', '%Y.%m.%d'), 5, 2, 18),
('Tavaszi bábelőadás', STR_TO_DATE('2026.03.30', '%Y.%m.%d'), 3, 3, 41),
('Közösségi grafikai kiállítás', STR_TO_DATE('2026.03.31', '%Y.%m.%d'), 4, 4, 52),
('Gitárduó', STR_TO_DATE('2026.04.01', '%Y.%m.%d'), 1, 1, 85),
('Illatos szappankészítés', STR_TO_DATE('2026.04.02', '%Y.%m.%d'), 2, 2, 21),
('Zsongó játszóház', STR_TO_DATE('2026.04.03', '%Y.%m.%d'), 5, 3, 46),
('Tavaszi kézműves vásár', STR_TO_DATE('2026.04.04', '%Y.%m.%d'), 4, 4, 69),
('Fényfestett koncert', STR_TO_DATE('2026.04.05', '%Y.%m.%d'), 1, 1, 89),
('Fenntartható cserebere workshop', STR_TO_DATE('2026.04.06', '%Y.%m.%d'), 2, 2, 25),
('Nagyszülők délutánja', STR_TO_DATE('2026.04.07', '%Y.%m.%d'), 3, 3, 53),
('Plakátdesign tárlat', STR_TO_DATE('2026.04.08', '%Y.%m.%d'), 4, 4, 63);
