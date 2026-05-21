CREATE DATABASE pet;
USE pet;

CREATE Table users(
    uid int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(80) NOT NULL UNIQUE,
    password varchar(256),
    address varchar(80) NOT NULL
)

CREATE Table products(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL UNIQUE,
    description varchar(100) NOT NULL,
    price int NOT NULL,
    stock int NOT NULL,
    pictureurl varchar(200) 
);

CREATE Trigger insertBeforeUser BEFORE INSERT ON users
FOR EACH ROW SET new.PASSWORD = pwd_encrypt(new.PASSWORD);

CREATE Function pwd_encrypt(pwd varchar(255))
RETURNS varchar(256) DETERMINISTIC
RETURN sha2(concat(pwd,"sozva"),256);

DROP FUNCTION login;
CREATE Function login(p_pwd VARCHAR(255), p_email VARCHAR(255))
RETURNS INT DETERMINISTIC
RETURN(SELECT uid FROM users WHERE users.email = p_email AND users.PASSWORD = pwd_encrypt(p_pwd));

INSERT INTO users VALUES(NULL,"Mekk Elek","mekk.elek@bolyai.hu","Titok123","1112 Budapest Varjú u. 12");

INSERT INTO users VALUES(NULL,"Gipsz Jakab","gipsz.jakab@bolyai.hu","Titok123","1024 Budapest Gipsz u. 23");

INSERT INTO products (name, description, price, stock, pictureurl) VALUES
('Bosch féktárcsa', 'Első tengely féktárcsa, 280mm átmérő', 12999, 25, 'https://example.com/fektarcsa.jpg'),
('NGK gyújtógyertya', '4 db-os készlet, benzinmotorokhoz', 3499, 80, 'https://example.com/gyujtogyertya.jpg'),
('Mann olajszűrő', 'Univerzális olajszűrő, 3/4 colos menet', 1999, 150, 'https://example.com/olajszuro.jpg'),
('Valeo első lámpa', 'Bal oldali fényszóró, H7 foglalattal', 24999, 10, 'https://example.com/fenyszoro.jpg'),
('Gates szíjkészlet', 'Vezérműszíj készlet, 4 hengeres motorhoz', 18500, 30, NULL);