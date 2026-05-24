DROP DATABASE IF EXISTS pet;
CREATE DATABASE pet;
USE pet;

CREATE TABLE users(
    uid INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL, 
	email varchar(80) not null UNIQUE,
    password varchar(255),
    address varchar(80) not null,
    avatar varchar(200)
);

CREATE TABLE pet(
	id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) not null UNIQUE,
    description varchar(100) not null,
    price int not null,
    stock int not null,
    picture varchar(100)
);

CREATE TABLE orders(
	orderid int AUTO_INCREMENT PRIMARY KEY,
    userid int not null,
    dates date not null DEFAULT(CURRENT_DATE),
    FOREIGN KEY (userid) REFERENCES users(uid)
);

CREATE TRIGGER Insert_User BEFORE INSERT ON users
FOR EACH ROW SET new.password = pwd_encrypt(new.password);

CREATE FUNCTION pwd_encrypt(pwd varchar(255))
RETURNS varchar(256) DETERMINISTIC
RETURN sha2(concat(pwd,"sozva"),256);

CREATE FUNCTION login(p_email varchar(255), p_pwd varchar(255))
RETURNS int DETERMINISTIC
RETURN (SELECT uid FROM users WHERE users.email = p_email AND users.password = pwd_encrypt(p_pwd));

INSERT INTO users VALUES(NULL, "Madár János", "madár@bolyai.hu", "Titok123", "1112 Budapest Madár u. 12", NULL);
INSERT INTO users VALUES(NULL, "Pepe Berci", "pepe@bolyai.hu", "Titok123", "1111024 Budapest Gipsz u. 23", NULL);

INSERT INTO pet VALUES(NULL, "Hörcsög", "Ez meg rágcsál",10500,5,"./pictures/horcsog.jpg");
INSERT INTO pet VALUES(NULL, "Tengeri malac", "Tengeri röfi",6300,8,"./pictures/tmalac.jpg");
INSERT INTO pet VALUES(NULL, "Madárpók", "Veszélyes madárpók",80000,3,"./pictures/madarpok.jpg");
INSERT INTO pet VALUES(NULL, "Aranyhal", "Szép aranyhal",3500,1,"./pictures/aranyhal.jpg");