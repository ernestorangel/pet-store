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
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_best_sellers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `best_sellers`
--

LOCK TABLES `best_sellers` WRITE;
/*!40000 ALTER TABLE `best_sellers` DISABLE KEYS */;
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
INSERT INTO `brand` VALUES (1,'Nutrição'),(2,'Cama'),(3,'Banho'),(4,'Beleza'),(5,'Estética'),(6,'Brinquedos'),(7,'Cachorro'),(8,'Gatos'),(9,'Medicamento'),(10,'Acessorios');
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
  `id_product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
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
INSERT INTO `cart_b` VALUES (15,'Ração Balance','Ração Balance 15kg Para seu Pet',120.00,'/images/products/Ração_Seca_Balance.png'),(16,'Ração Premier','Ração Premier Raças Pequenas 2,5kg Para seu Pet',60.00,NULL),(17,'Alimentador Automatico','Fique Despreocupado Com esse Alimentador Automatico',110.00,NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
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
  `id_adress` int(11) NOT NULL,
  `updated_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `shipping` decimal(6,2) DEFAULT NULL,
  `total` decimal(6,2) NOT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,2,2,'0000-00-00','0000-00-00',NULL,110.00),(2,1,1,'0000-00-00','0000-00-00',NULL,120.00),(3,3,3,'0000-00-00','0000-00-00',NULL,60.00);
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
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(150) NOT NULL,
  PRIMARY KEY (`Id_image`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,'Ração Balance','/images/products/prod1-img1.png'),(2,'Ração Premier','/images/products/prod9-img1.jpg'),(3,'Casinha Luxo Preta','/images/products/prod3-img1.png'),(4,'Alimentador Automatico','/images/products/prod4-img1.png'),(5,'Tapete Higienico','/images/products/prod8-img1.png'),(6,'Petiscao','/images/products/prod5-img1.png'),(7,'Alimentador','/images/products/prod7-img1.png'),(8,'Bifinho','/images/products/prod10-img1.jpg'),(9,'Areia Para Gatos','/images/products/prod11-img1.jpg'),(10,'Casinha Luxo Rosa','/images/products/prod2-img1.png'),(11,'Golden Gatos Castrados','/images/products/prod12-img1.jpg');
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
  `img` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,NULL,'Ração Balance','Ração Balance 15kg Para seu Pet',120.00,'/images/products/prod1-img1.png'),(2,NULL,'Ração Premier','Ração Premier Raças Pequenas 2,5kg Para seu Pet',60.00,'/images/products/prod9-img1.jpg'),(3,NULL,'Casinha Luxo Preta','Casinha Para Seu Pet Ficar Confortavel',160.00,'/images/products/prod3-img1.png'),(4,NULL,'Alimentador Automatico','Fique Despreocupado Com esse Alimentador Automatico',110.00,'/images/products/prod4-img1.png'),(5,NULL,'Tapete Higienico','Tapete Higienico Pare seu Pet fazer suas necessidades',80.00,'/images/products/prod8-img1.png'),(6,NULL,'Petiscao','Alimente seu animalzinho com os nossos famosos Petiscao',10.00,'/images/products/prod5-img1.png'),(7,NULL,'Alimentador','Potes Para Agua e Ração do Seu pet Multicores',25.00,'/images/products/prod7-img1.png'),(8,NULL,'Bifinho','Bifinho Suprema Carne para Cães',16.00,'/images/products/prod10-img1.jpg'),(9,NULL,'Areia Para Gatos','Areia Sanitária Me.Au Pet Grãos Finos Perfume Floral para Gatos',14.00,'/images/products/prod11-img1.jpg'),(10,NULL,'Casinha Luxo Rosa','Casinha Para Seu Pet Ficar Confortavel',160.00,'/images/products/prod2-img1.png'),(11,NULL,'Golden Gatos Castrados','Ração Seca PremieR Pet Golden Gatos Adultos Castrados Frango',150.00,'/images/products/prod12-img1.jpg');
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
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_in_orders`
--

LOCK TABLES `products_in_orders` WRITE;
/*!40000 ALTER TABLE `products_in_orders` DISABLE KEYS */;
INSERT INTO `products_in_orders` VALUES (1,4),(2,1),(3,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Fernando','Stentzler','fernando@email.com','123456',NULL),(2,'Ernesto','Rangel','ernesto@email.com','123456',NULL),(3,'Renata','Rodrigues','renata@email.com','123456',NULL),(4,'teste 04','teste 004','teste@teste.com','$2b$10$XCoLhKQptr/iwxk./FSlZOp4Be0.VhVBqKFDsD70GyY28/WVAKfRu',NULL),(14,'Teste Novamente','Novamente Teste','teste2@teste.com','$2b$10$vzoxoKD4vzS8QjIl1dOdF.x5gL4PTyZF5sKkDkMtEeAAXy4MC6i2O',NULL);
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

-- Dump completed on 2022-08-07 23:34:38
