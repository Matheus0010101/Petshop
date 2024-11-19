create database pets_api;
use pets_api;

CREATE TABLE users(
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone INT NOT NULL,
    adress VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE pets (
    id_pet INT AUTO_INCREMENT PRIMARY KEY,
    name_pet VARCHAR(255) NOT NULL,
	type VARCHAR(255) NOT NULL,
    age DECIMAL(10, 2) NOT NULL,
    owner VARCHAR(255) not NULL,
    foreign key (owner) references users(name)
);

SELECT * FROM users;