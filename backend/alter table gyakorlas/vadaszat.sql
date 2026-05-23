DROP DATABASE IF EXISTS vadaszat;
CREATE DATABASE vadaszat DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE vadaszat;

CREATE TABLE torpok (
  nev             VARCHAR(50)  NOT NULL,
  falu            VARCHAR(50)  NOT NULL,
  elso_megjelenes VARCHAR(20)  NOT NULL,
  szin            VARCHAR(20)  DEFAULT 'kek',
  megjegyzes      VARCHAR(255) NULL,
  titkos_kod      VARCHAR(20)  NULL
) ENGINE=InnoDB;

CREATE TABLE vadaszatok (
  id                INT          NOT NULL,
  torp_id           INT          NOT NULL,
  datum             VARCHAR(20)  NOT NULL,
  helyszin          VARCHAR(80)  NOT NULL,
  csapda_tipus      VARCHAR(30)  NOT NULL,
  felesleges_jegyzet TEXT        NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE torpporkolt (
  id              INT          NOT NULL,
  vadaszat_id     INT          NULL,
  kiserlet_datuma VARCHAR(20)  NOT NULL,
  elkeszult       TINYINT      NOT NULL DEFAULT 0,
  megjegyzes      VARCHAR(255) NULL
) ENGINE=InnoDB;

INSERT INTO torpok (nev, falu, elso_megjelenes, szin, megjegyzes, titkos_kod) VALUES
  ('Törpapa',    'Törpfalu', '1958-10-23', 'kék', 'A törpök vezetője.', 'TP-001'),
  ('Törpilla',   'Törpfalu', '1966-03-01', 'kék', 'Ritkán látott vendég a feljegyzésekben.', 'TI-002'),
  ('Okoska',     'Törpfalu', '1959-06-10', 'kék', 'Mindig van egy terve.', 'OK-003'),
  ('Dulifuli',   'Törpfalu', '1959-11-05', 'kék', 'Gyakran morcos.', 'DU-004'),
  ('Trombitás',  'Törpfalu', '1960-02-14', 'kék', 'Zene mindenek felett.', 'TR-005');

INSERT INTO vadaszatok (id, torp_id, datum, helyszin, csapda_tipus, felesleges_jegyzet) VALUES
  (1, 3, '1961-01-12', 'Sűrű erdő',          'Háló',       'A terv majdnem működött.'),
  (2, 4, '1961-05-03', 'Patakpart',          'Csapdaajtó', NULL),
  (3, 1, '1962-07-19', 'Gomba-lak környéke', 'Álca',       'Hókuszpók köhögött a füsttől.'),
  (4, 5, '1963-09-01', 'Tisztás',            'Háló',       'A csali túl hangos volt.'),
  (5, 3, '1964-10-23', 'Kőhíd',              'Zsák',       NULL),
  (6, 2, '1967-04-11', 'Öreg tölgy',         'Álca',       'Megtévesztő nyomok.');

INSERT INTO torpporkolt (id, vadaszat_id, kiserlet_datuma, elkeszult, megjegyzes) VALUES
  (1, 1, '1961-01-13', 0, 'Fűszerek elfogytak.'),
  (2, 3, '1962-07-20', 0, 'A kondér kilyukadt.'),
  (3, 5, '1964-10-24', 0, 'Az alapanyag megszökött.');
