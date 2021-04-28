-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
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
  CONSTRAINT `fk_cadastros_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
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
  CONSTRAINT `fk_pedidos_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
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
  `imagem` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
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
  CONSTRAINT `fk_produtos_has_categorias_produtos1` FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos_categorias`
--

LOCK TABLES `produtos_categorias` WRITE;
/*!40000 ALTER TABLE `produtos_categorias` DISABLE KEYS */;
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
  CONSTRAINT `fk_produtos_has_pedidos_pedidos1` FOREIGN KEY (`pedidos_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `fk_produtos_has_pedidos_produtos1` FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`)
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
INSERT INTO `usuarios` VALUES ('4327db5b-4595-477b-846a-52655805e583','Teste 3','teste3@email.com','$2a$10$.Fp1xdg2EIAb1C5oczbpN.cAcephwxwSE04vdqYLERvCz7FxldnhG',1),('4955c387-897f-49be-a9be-ff4d60d620fd','Teste 3','teste3@email.com','$2a$10$m48Wt3yUacp7WlYFSfKFq.oxrB6MyP8o85eXX.Q.jszYWok/rmIcK',NULL),('f6d3bb5b-8e1f-425f-acd1-b334ef9d84a7','Teste 2','teste2@email.com','$2a$10$EwUU3UiVvv0i6PO0iS/pXuzcpmMsRbRhN1D9aBncLSmUMdJfXHRJa',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-27 11:59:42
