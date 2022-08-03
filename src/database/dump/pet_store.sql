DROP DATABASE IF EXISTS pet_store;
CREATE DATABASE pet_store;
USE pet_store;

CREATE TABLE users (
	id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	senha INT NOT NULLproducts_in_ordersproducts_in_orders
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE orders(
	id_order INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL,
    id_adress INT NOT NULL,
    updated_at DATE,
	created_at DATE,
    total DECIMAL NOT NULL
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE adress (
id_adress INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
id_user INT NOT NULL,
neighborhood VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL,
street VARCHAR(100) NOT NULL,
street_number FLOAT NOT NULL,
updated_at DATE,
created_at DATE,
is_current BOOLEAN NOT NULL
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE products (
id_product INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(100) NOT NULL,
descricao VARCHAR(150) NOT NULL,
price DECIMAL NOT NULL
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE products_in_orders(
id_order INT NOT NULL,
id_product INT NOT NULL
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO users (
	id_user,
	nome,
    sobrenome,
	email,
	senha
)VALUES(
	1,
    'Fernando',
    'Stentzler',
    'fernando@email.com',
    '123456'
    );
INSERT INTO users (
	id_user,
	nome,
    sobrenome,
	email,
	senha
)VALUES(
	2,
    'Ernesto',
    'Rangel',
    'ernesto@email.com',
    '123456'
);
INSERT INTO users (
	id_user,
	nome,
    sobrenome,
	email,
	senha
)VALUES(
	3,
    'Renata',
    'Rodrigues',
    'renata@email.com',
    '123456'
);
INSERT INTO adress (
	id_adress,
	id_user,
	neighborhood,
	city,
	street,
	street_number,
	updated_at,
	created_at,
	is_current
)VALUES(
	1,
    1,
    'Vila Real',
    'Balneario Camboriu',
    'Campo-Ere',
    156,
    2022-06-26,
    2022-06-26,
    1    
);
INSERT INTO adress (
	id_adress,
	id_user,
	neighborhood,
	city,
	street,
	street_number,
	updated_at,
	created_at,
	is_current
)VALUES(
	2,
    2,
    'Centro',
    'Guarapuava',
    'Sempre Mais',
    164,
    2022-06-26,
    2022-06-26,
    1   
);
INSERT INTO adress (
	id_adress,
	id_user,
	neighborhood,
	city,
	street,
	street_number,
	updated_at,
	created_at,
	is_current
)VALUES(
	3,
    3,
    'Jardim',
    'Curitiba',
    'rosas vermelhas',
    185,
    2022-06-26,
    2022-06-26,
    1    
);
INSERT INTO products (
	id_product,
	nome,
	descricao,
	price
)VALUES(
	1,
    'Ração Balance',
    'Ração Balance 15kg Para seu Pet',   
    120    
);
INSERT INTO products (
	id_product,
	nome,
	descricao,
	price
)VALUES(
	2,
    'Ração Premier',
    'Ração Premier Raças Pequenas 2,5kg Para seu Pet',
    60    
);
INSERT INTO products (
	id_product,
	nome,
	descricao,
	price
)VALUES(
	3,
    'Casinha Luxo Preta',
    'Casinha Para Seu Pet Ficar Confortavel',
    160    
);
INSERT INTO products (
	id_product,
	nome,
	descricao,
	price
)VALUES(
	4,
    'Alimentador Automatico',
    'Fique Despreocupado Com esse Alimentador Automatico',   
    110    
);
INSERT INTO orders (
	id_order,
    id_user,
    id_adress,
    updated_at,
	created_at,
    total
)VALUES(
	1,
    2,
    2,
    2022-06-26,
    2022-06-26,
    110      
);
INSERT INTO orders (
	id_order,
    id_user,
    id_adress,
    updated_at,
	created_at,
    total
)VALUES(
	2,
    1,
    1,
    2022-06-26,
    2022-06-26,
    120      
);
INSERT INTO orders (
	id_order,
    id_user,
    id_adress,
    updated_at,
	created_at,
    total
)VALUES(
	3,
    3,
    3,
    2022-06-26,
    2022-06-26,
    60      
);
INSERT INTO products_in_orders(
	id_order,
	id_product
)VALUES(
	1,
	4
);
INSERT INTO products_in_orders(
	id_order,
	id_product
)VALUES(
	2,
	1
);
INSERT INTO products_in_orders(
	id_order,
	id_product
)VALUES(
	3,
	2
);

CREATE TABLE `pet_store`.`cart` (
  `id_cart` INT(11) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  `img` VARCHAR(45) NULL,
  PRIMARY KEY (`id_cart`));

ALTER TABLE `pet_store`.`users` 
CHANGE COLUMN `nome` `first_name` VARCHAR(50) NOT NULL ,
CHANGE COLUMN `sobrenome` `last_name` VARCHAR(100) NOT NULL ,
CHANGE COLUMN `senha` `password` INT(11) NOT NULL ;
ALTER TABLE `pet_store`.`products` 
CHANGE COLUMN `nome` `name` VARCHAR(100) NOT NULL ,
CHANGE COLUMN `descricao` `description` VARCHAR(150) NOT NULL ;
ALTER TABLE `pet_store`.`products` 
ADD COLUMN `img` VARCHAR(45) NULL AFTER `price`;
UPDATE `pet_store`.`products` SET `img` = '/images/products/Ração_Seca_Balance.png' WHERE (`id_product` = '1');