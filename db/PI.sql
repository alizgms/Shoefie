-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema instagram
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema instagram
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `instagram` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(45) NULL,
  `uf` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `endereco` VARCHAR(45) NULL,
  `cep` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL(6,2) NOT NULL,
  `statusPedido` INT NOT NULL,
  `clientes_id` INT NOT NULL,
  `codigoBoleto` VARCHAR(45) NULL,
  `statusBoleto` TINYINT NULL,
  `dataVencimento` DATETIME NULL,
  PRIMARY KEY (`id`, `clientes_id`),
  INDEX `fk_pedidos_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `mydb`.`clientes` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `preco` DECIMAL(5,2) NOT NULL,
  `qtdEstoque` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`carrinhos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carrinhos` (
  `produtos_id` INT NOT NULL,
  `pedidos_id` INT NOT NULL,
  `qtdRequisitado` INT NOT NULL,
  PRIMARY KEY (`produtos_id`, `pedidos_id`),
  INDEX `fk_produtos_has_pedidos_pedidos1_idx` (`pedidos_id` ASC) VISIBLE,
  INDEX `fk_produtos_has_pedidos_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_has_pedidos_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produtos_has_pedidos_pedidos1`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `mydb`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

USE `instagram` ;

-- -----------------------------------------------------
-- Table `instagram`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 22
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `instagram`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `texto` VARCHAR(100) NOT NULL,
  `img` VARCHAR(100) NULL DEFAULT NULL,
  `usuarios_id` INT NULL DEFAULT NULL,
  `n_likes` INT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  INDEX `usuarios_id` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `posts_ibfk_1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `instagram`.`usuarios` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `instagram`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`comentarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `texto` TEXT NOT NULL,
  `usuarios_id` INT NULL DEFAULT NULL,
  `posts_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `usuarios_id` (`usuarios_id` ASC) VISIBLE,
  INDEX `posts_id` (`posts_id` ASC) VISIBLE,
  CONSTRAINT `comentarios_ibfk_1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `instagram`.`usuarios` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `comentarios_ibfk_2`
    FOREIGN KEY (`posts_id`)
    REFERENCES `instagram`.`posts` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `instagram`.`curtidas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`curtidas` (
  `usuarios_id` INT NOT NULL,
  `posts_id` INT NOT NULL,
  INDEX `posts_id_idx` (`posts_id` ASC) VISIBLE,
  INDEX `usuarios_id_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `posts_id`
    FOREIGN KEY (`posts_id`)
    REFERENCES `instagram`.`posts` (`id`),
  CONSTRAINT `usuarios_id`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `instagram`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
