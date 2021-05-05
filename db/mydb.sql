-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cadastros`
--

DROP TABLE IF EXISTS `cadastros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `cep` varchar(9) DEFAULT NULL,
  `uf` varchar(2) DEFAULT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `usuarios_id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cadastros_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_cadastros_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastros`
--

LOCK TABLES `cadastros` WRITE;
/*!40000 ALTER TABLE `cadastros` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadastros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Feminino'),(2,'Masculino'),(3,'Infantil');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `valor` decimal(9,2) DEFAULT NULL,
  `statusPedido` varchar(45) DEFAULT NULL,
  `codigoBoleto` int DEFAULT NULL,
  `statusBoleto` varchar(45) DEFAULT NULL,
  `dataVencimento` datetime DEFAULT NULL,
  `usuarios_id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pedidos_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_pedidos_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (9,NULL,'1',15164732,NULL,'2021-05-03 14:25:38','7ffe8645-ac26-4647-92e4-dd5062d27159');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `preco` decimal(9,2) DEFAULT NULL,
  `qtdEstoque` int DEFAULT NULL,
  `imagem` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (6,'Sapato Amina',200.00,10,'https://i.ibb.co/XXcpR7Y/6-Amina.jpg'),(7,'Sapato Alice',200.00,10,'https://i.ibb.co/1ss8w60/2-Alice.jpg'),(8,'Sapato Budgeron',200.00,10,'https://i.ibb.co/4dQnj1r/8-Budgeron.jpg'),(9,'Sapato Mikail',200.00,10,'https://i.ibb.co/nft37fH/7-Mikail.jpg'),(10,'Sapato Camy',150.00,8,'https://i.ibb.co/NmygkqC/20-Camy.jpg'),(11,'Sapato Fúria',280.00,12,'https://i.ibb.co/qknMM03/19-Furia.jpg'),(12,'Sapato Nadezhda',330.00,5,'https://i.ibb.co/8DSZw5y/18-Nadezhda.jpg'),(13,'Sapato Ogo',120.00,10,'https://i.ibb.co/T0BkbwW/17-Ogo.jpg'),(14,'Sapato Liso',300.00,10,'https://i.ibb.co/DWGbpRX/16-Liso.jpg'),(15,'Sapato Kristine',200.00,10,'https://i.ibb.co/mXTqcPz/15-Kristine.jpg'),(16,'Sapato Polianskaia',200.00,5,'https://i.ibb.co/jZzgXX4/14-Polianskaia.jpg'),(17,'Sapato Pazanni',250.00,10,'https://i.ibb.co/xzspLzC/13-Pazanni.jpg'),(18,'Sapato Marina',200.00,5,'https://i.ibb.co/Ltcprph/12-Marina.jpg'),(19,'Sapato Io',120.00,10,'https://i.ibb.co/xf3P95g/11-Io.jpg'),(20,'Sapato Godess',200.00,10,'https://i.ibb.co/St5K9qd/10-Godess.jpg'),(21,'Sapato Jack',280.00,15,'https://i.ibb.co/wdqtzXs/09-Jack.jpg'),(22,'Tênis Miss',180.00,10,'https://i.ibb.co/bHWh88s/08-Miss.jpg'),(23,'Sapato Jacobina',350.00,5,'https://i.ibb.co/p3JBPqC/07-Jacobina.jpg'),(24,'Sapato Fernandes',200.00,5,'https://i.ibb.co/RPpg8Wh/06-Fernandes.jpg'),(25,'Bota Mel',400.00,10,'https://i.ibb.co/Ldrfk9X/05-Mel.jpg'),(26,'Tênis Anubhaw',300.00,5,'https://i.ibb.co/wWRgB6x/04-Anubhaw.jpg'),(27,'Sapato Vamvouras',200.00,10,'https://i.ibb.co/tbpMNNf/03-Vamvouras.jpg'),(28,'Sapato Nairobi',180.00,10,'https://i.ibb.co/jJxLcrT/1-Nairobi.jpg'),(29,'Tênis Hiral',350.00,5,'https://i.ibb.co/10F2bH8/2-Hiral.jpg'),(30,'Tênis Grl-Pwr',180.00,10,'https://i.ibb.co/rsDmDrw/10-Grl-Pwr.jpg'),(31,'Sandália Tuan',150.00,15,'https://i.ibb.co/GPjqtBB/9-Tuan.jpg'),(32,'Sapatilha Budgeron',200.00,5,'https://i.ibb.co/tXdTbLr/8-Budgeron.jpg'),(33,'Tênis Mikail',400.00,10,'https://i.ibb.co/nft37fH/7-Mikail.jpg'),(34,'Tênis Amina',200.00,10,'https://i.ibb.co/jhnGXyJ/6-Amina.jpg'),(35,'Tênis Dominik',250.00,10,'https://i.ibb.co/mRdqtJm/5-Dominik.jpg'),(36,'Tênis Alicia',150.00,10,'https://i.ibb.co/H4Z8bdb/4-Alicia.jpg'),(37,'Tênis Slip',150.00,15,'https://i.ibb.co/ZB7qwc1/3-Slip.png'),(38,'Tênis Amina Masc',200.00,5,'https://i.ibb.co/c2kw7bK/1-Amina.jpg'),(39,'Tênis Alice',200.00,10,'https://i.ibb.co/1ss8w60/2-Alice.jpg'),(40,'Tênis Ragnar',250.00,10,'https://i.ibb.co/xgKdRQD/20-Ragnar.jpg'),(41,'Tênis Guilherme',350.00,10,'https://i.ibb.co/80bQTFw/19-Guilherme.jpg'),(42,'Sapato Prayoon',220.00,10,'https://i.ibb.co/47tbWqH/18-Prayoon.jpg'),(43,'Tênis Jeremyhann',280.00,10,'https://i.ibb.co/vdVPyZN/17-Jeremyhann.jpg'),(44,'Tênis Matt',100.00,10,'https://i.ibb.co/2tH1p18/16-Matt.jpg'),(45,'Tênis Herbert',550.00,10,'https://i.ibb.co/6J4SqrB/15-Herbert.jpg'),(46,'Tênis Gustav',250.00,10,'https://i.ibb.co/Pr61dqz/14-Gustav.jpg'),(47,'Tênis Muse',350.00,10,'https://i.ibb.co/yVxcK18/13-Muse.jpg'),(48,'Tênis Tyler',320.00,10,'https://i.ibb.co/hsgkqpG/12-Tyler.jpg'),(49,'Tênis Sahi',280.00,10,'https://i.ibb.co/BcVpn9j/11-Sahi.jpg'),(50,'Tênis Oliver',300.00,10,'https://i.ibb.co/9twMbQW/10-Oliver.jpg'),(51,'Tênis Nasx',150.00,10,'https://i.ibb.co/9svyHQ0/09-Nasx.jpg'),(52,'Tênis Luiz',250.00,10,'https://i.ibb.co/02xHvQ7/08-Luiz.jpg'),(53,'Tênis Loki',350.00,10,'https://i.ibb.co/T0pPrH6/07-Loki.jpg'),(54,'Tênis Edson',320.00,10,'https://i.ibb.co/pKKV1cz/06-Edson.jpg'),(55,'Tênis Aman',280.00,10,'https://i.ibb.co/hmp37t0/05-Aman.jpg'),(56,'Tênis Neue',300.00,10,'https://i.ibb.co/YdsNRMb/04-Neue.jpg'),(57,'Tênis Anderson',150.00,10,'https://i.ibb.co/tQKpfGT/03-Anderson.jpg'),(58,'Tênis Hassan',250.00,10,'https://i.ibb.co/BnLRn3H/02-Hassan.jpg'),(59,'Tênis Cottonbro',350.00,10,'https://i.ibb.co/Mf4Gd3w/01-Cottonbro.jpg');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos_categorias`
--

DROP TABLE IF EXISTS `produtos_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos_categorias` (
  `produtos_id` int NOT NULL,
  `categorias_id` int NOT NULL,
  PRIMARY KEY (`produtos_id`,`categorias_id`),
  KEY `fk_produtos_has_categorias_categorias1_idx` (`categorias_id`),
  KEY `fk_produtos_has_categorias_produtos1_idx` (`produtos_id`),
  CONSTRAINT `fk_produtos_has_categorias_categorias1` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `fk_produtos_has_categorias_produtos1` FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos_categorias`
--

LOCK TABLES `produtos_categorias` WRITE;
/*!40000 ALTER TABLE `produtos_categorias` DISABLE KEYS */;
INSERT INTO `produtos_categorias` VALUES (10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(40,2),(41,2),(42,2),(43,2),(44,2),(45,2),(46,2),(47,2),(48,2),(49,2),(50,2),(51,2),(52,2),(53,2),(54,2),(55,2),(56,2),(57,2),(58,2),(59,2),(6,3),(7,3),(8,3),(9,3),(30,3),(31,3),(32,3),(33,3),(34,3),(35,3),(36,3),(37,3),(38,3),(39,3);
/*!40000 ALTER TABLE `produtos_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos_pedidos`
--

DROP TABLE IF EXISTS `produtos_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos_pedidos` (
  `produtos_id` int NOT NULL,
  `pedidos_id` int NOT NULL,
  `qtdProduto` int DEFAULT NULL,
  PRIMARY KEY (`produtos_id`,`pedidos_id`),
  KEY `fk_produtos_has_pedidos_pedidos1_idx` (`pedidos_id`),
  KEY `fk_produtos_has_pedidos_produtos1_idx` (`produtos_id`),
  CONSTRAINT `fk_produtos_has_pedidos_pedidos1` FOREIGN KEY (`pedidos_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_produtos_has_pedidos_produtos1` FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos_pedidos`
--

LOCK TABLES `produtos_pedidos` WRITE;
/*!40000 ALTER TABLE `produtos_pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` varchar(36) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `loginStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('4f791b6f-ddff-4a58-a6a5-bc260198e54d','teste3','teste3@email.com','$2a$10$RKgyVLWuA2NWY910JpLIwuogIA2m5Ic7boJ6my.avQbMUpXiMJEai',1),('7ffe8645-ac26-4647-92e4-dd5062d27159','teste1','teste1@email.com','$2a$10$8xlE/4AhktE.NVLYFf7Rm.hnJTLNnb3HegH5kfncwd9OTxof8kN2a',1),('fbc8c577-50bc-471c-8e4b-897339b0687a','teste2','teste2@email.com','$2a$10$RVtkG1sFpqZAsvNW1bvgQOmYhEFHIChcN6uPkOiT60jGkjuK598pK',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-04 15:01:36
