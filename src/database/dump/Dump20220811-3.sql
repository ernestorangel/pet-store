CREATE DATABASE  IF NOT EXISTS `pet_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `pet_store`;
-- MySQL dump 10.13  Distrib 5.7.39, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: pet_store
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adress`
--

DROP TABLE IF EXISTS `adress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adress` (
  `id_adress` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `neighborhood` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `street` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `street_number` decimal(6,2) NOT NULL,
  `updated_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `is_current` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_adress`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adress`
--

LOCK TABLES `adress` WRITE;
/*!40000 ALTER TABLE `adress` DISABLE KEYS */;
INSERT INTO `adress` VALUES (1,1,'Vila Real','Balneario Camboriu','Campo-Ere',156.00,'0000-00-00','0000-00-00',1),(2,2,'Centro','Guarapuava','Sempre Mais',164.00,'0000-00-00','0000-00-00',1),(3,3,'Jardim','Curitiba','rosas vermelhas',185.00,'0000-00-00','0000-00-00',1);
/*!40000 ALTER TABLE `adress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `best_sellers`
--

DROP TABLE IF EXISTS `best_sellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `best_sellers` (
  `id_best_sellers` int(11) NOT NULL AUTO_INCREMENT,
  `id_brand` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_best_sellers`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `best_sellers`
--

LOCK TABLES `best_sellers` WRITE;
/*!40000 ALTER TABLE `best_sellers` DISABLE KEYS */;
INSERT INTO `best_sellers` VALUES (1,1,1,'Ração Balance','Ração Balance 15kg Para seu Pet',120.00,'/images/products/img1.png'),(2,3,1,'Ração Premier','Ração Premier Raças Pequenas 2,5kg Para seu Pet',60.00,'/images/products/img8.jpg'),(3,4,2,'Casinha Luxo Preta','Casinha Para Seu Pet Ficar Confortavel',160.00,'/images/products/img2.png'),(4,8,10,'Alimentador Automatico','Fique Despreocupado Com esse Alimentador Automatico',110.00,'/images/products/img3.png'),(5,8,9,'Tapete Higienico','Tapete Higienico Pare seu Pet fazer suas necessidades',80.00,'/images/products/img6.png'),(6,7,1,'Petiscao','Alimente seu animalzinho com os nossos famosos Petiscao',10.00,'/images/products/img4.png'),(7,8,10,'Alimentador','Potes Para Agua e Ração do Seu pet Multicores',25.00,'/images/products/img5.png'),(8,7,1,'Bifinho','Bifinho Suprema Carne para Cães',16.00,'/images/products/img9.jpg'),(9,6,8,'Areia Para Gatos','Areia Sanitária Me.Au Pet Grãos Finos Perfume Floral para Gatos',14.00,'/images/products/img10.jpg'),(10,4,2,'Casinha Luxo Rosa','Casinha Para Seu Pet Ficar Confortavel',160.00,'/images/products/img7.png'),(11,5,1,'Golden Gatos Castrados','Ração Seca PremieR Pet Golden Gatos Adultos Castrados Frango',150.00,'/images/products/img11.jpg');
/*!40000 ALTER TABLE `best_sellers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id_brand` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_brand`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Balance'),(2,'Pedigree'),(3,'Premier'),(4,'Mecpet'),(5,'Golden'),(6,'Me.au'),(7,'Suprema'),(8,'Maxi ');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `qtd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (16,1,3),(16,3,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_b`
--

DROP TABLE IF EXISTS `cart_b`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_b` (
  `id_cart` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(150) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_cart`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_b`
--

LOCK TABLES `cart_b` WRITE;
/*!40000 ALTER TABLE `cart_b` DISABLE KEYS */;
INSERT INTO `cart_b` VALUES (15,'Ração Balance','Ração Balance 15kg Para seu Pet',120.00,'/images/products/Ração_Seca_Balance.png'),(16,'Ração Premier','Ração Premier Raças Pequenas 2,5kg Para seu Pet',60.00,NULL);
/*!40000 ALTER TABLE `cart_b` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_of_product`
--

DROP TABLE IF EXISTS `categories_of_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_of_product` (
  `id_product` int(11) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_of_product`
--

LOCK TABLES `categories_of_product` WRITE;
/*!40000 ALTER TABLE `categories_of_product` DISABLE KEYS */;
INSERT INTO `categories_of_product` VALUES (2,7),(2,7);
/*!40000 ALTER TABLE `categories_of_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Nutrição'),(2,'Cama'),(3,'Banho'),(4,'Beleza'),(5,'Estética'),(6,'Brinquedos'),(7,'Cachorro'),(8,'Gatos'),(9,'Medicamento'),(10,'Acessorios');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `continue_buy`
--

DROP TABLE IF EXISTS `continue_buy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `continue_buy` (
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `continue_buy`
--

LOCK TABLES `continue_buy` WRITE;
/*!40000 ALTER TABLE `continue_buy` DISABLE KEYS */;
/*!40000 ALTER TABLE `continue_buy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_of_product`
--

DROP TABLE IF EXISTS `images_of_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images_of_product` (
  `id_product` int(11) DEFAULT NULL,
  `id_image` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_of_product`
--

LOCK TABLES `images_of_product` WRITE;
/*!40000 ALTER TABLE `images_of_product` DISABLE KEYS */;
INSERT INTO `images_of_product` VALUES (1,1),(2,8),(3,2),(4,3),(5,6),(6,4),(7,5),(8,9),(11,11),(9,10),(10,7),(1,12),(1,13),(1,14),(1,15);
/*!40000 ALTER TABLE `images_of_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_adress` int(11) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `shipping` decimal(6,2) DEFAULT NULL,
  `qtd` int(11) NOT NULL,
  `total` decimal(6,2) NOT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,2,2,'0000-00-00','0000-00-00',NULL,0,110.00),(2,1,1,'0000-00-00','0000-00-00',NULL,0,120.00),(3,3,3,'0000-00-00','0000-00-00',NULL,0,60.00),(8,4,NULL,NULL,NULL,9.90,7,540.00),(9,16,NULL,NULL,NULL,9.90,4,520.00),(10,4,NULL,NULL,NULL,9.90,5,360.00),(11,4,NULL,NULL,NULL,9.90,5,360.00),(12,4,NULL,NULL,NULL,9.90,5,360.00),(13,4,NULL,NULL,NULL,9.90,5,480.00),(14,4,NULL,NULL,NULL,9.90,5,480.00);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_images` (
  `Id_image` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(150) NOT NULL,
  PRIMARY KEY (`Id_image`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,'/images/products/img1.png'),(2,'/images/products/img2.png'),(3,'/images/products/img3.png'),(4,'/images/products/img4.png'),(5,'/images/products/img5.png'),(6,'/images/products/img6.png'),(7,'/images/products/img7.png'),(8,'/images/products/img8.jpg'),(9,'/images/products/img9.jpg'),(10,'/images/products/img10.jpg'),(11,'/images/products/img11.jpg'),(12,'/images/products/img12.jpg'),(13,'/images/products/img13.jpg'),(14,'/images/products/img1.png'),(15,'/images/products/img1.png');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `id_brand` int(11) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(6,2) NOT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Ração Balance','Ração Balance 15kg Para seu Pet',120.00),(2,3,'Ração Premier','Ração Premier Raças Pequenas 2,5kg Para seu Pet',60.00),(3,4,'Casinha Luxo Preta','Casinha Para Seu Pet Ficar Confortavel',160.00),(4,8,'Alimentador Automatico','Fique Despreocupado Com esse Alimentador Automatico',110.00),(5,8,'Tapete Higienico','Tapete Higienico Pare seu Pet fazer suas necessidades',80.00),(6,7,'Petiscao','Alimente seu animalzinho com os nossos famosos Petiscao',10.00),(7,8,'Alimentador','Potes Para Agua e Ração do Seu pet Multicores',25.00),(8,7,'Bifinho','Bifinho Suprema Carne para Cães',16.00),(9,6,'Areia Para Gatos','Areia Sanitária Me.Au Pet Grãos Finos Perfume Floral para Gatos',14.00),(10,4,'Casinha Luxo Rosa','Casinha Para Seu Pet Ficar Confortavel',160.00),(11,5,'Golden Gatos Castrados','Ração Seca PremieR Pet Golden Gatos Adultos Castrados Frango',150.00);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_in_orders`
--

DROP TABLE IF EXISTS `products_in_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_in_orders` (
  `id_order` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `product_qtd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_in_orders`
--

LOCK TABLES `products_in_orders` WRITE;
/*!40000 ALTER TABLE `products_in_orders` DISABLE KEYS */;
INSERT INTO `products_in_orders` VALUES (1,4,0),(2,1,0),(3,2,0),(11,1,0),(11,2,0),(12,1,0),(12,2,0),(14,1,3),(14,2,2);
/*!40000 ALTER TABLE `products_in_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recommended`
--

DROP TABLE IF EXISTS `recommended`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recommended` (
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recommended`
--

LOCK TABLES `recommended` WRITE;
/*!40000 ALTER TABLE `recommended` DISABLE KEYS */;
/*!40000 ALTER TABLE `recommended` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Fernando','Stentzler','fernando@email.com','123456',NULL),(2,'Ernesto','Rangel','ernesto@email.com','123456',NULL),(3,'Renata','Rodrigues','renata@email.com','123456',NULL),(4,'teste 04','teste 004','teste@teste.com','$2b$10$XCoLhKQptr/iwxk./FSlZOp4Be0.VhVBqKFDsD70GyY28/WVAKfRu',NULL),(14,'Teste Novamente','Novamente Teste','teste2@teste.com','$2b$10$vzoxoKD4vzS8QjIl1dOdF.x5gL4PTyZF5sKkDkMtEeAAXy4MC6i2O',NULL),(15,'Ernesto','Rangel','novo@cadastro.com','$2b$10$BMkwYNczImZ31RC1NH6QI.wh.P1p1wS/bPr.5D7m..r4.J7ebmoAy',NULL),(16,'Ernesto','Rangel','ernestojrcjunior@gmail.com','$2b$10$Ximy2nI1PzuW.Mcm3Xvnse1mTcYco1kZUB04S02L/5ea3AA4lphWu',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-11 15:04:17
