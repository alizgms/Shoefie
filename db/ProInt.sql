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
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `loginStatus` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL(9,2) NULL,
  `statusPedido` VARCHAR(45) NULL,
  `codigoBoleto` INT NULL,
  `statusBoleto` VARCHAR(45) NULL,
  `dataVencimento` DATETIME NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `preco` DECIMAL(9,2) NULL,
  `qtdEstoque` INT NULL,
  `imagem` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cadastros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cadastros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `cpf` DECIMAL(11) NULL,
  `cep` DECIMAL(8) NULL,
  `uf` VARCHAR(2) NULL,
  `cidade` VARCHAR(45) NULL,
  `endereco` VARCHAR(45) NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cadastros_usuarios_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_cadastros_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produtos_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtos_pedidos` (
  `produtos_id` INT NOT NULL,
  `pedidos_id` INT NOT NULL,
  `qtdProduto` INT NULL,
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
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produtos_categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtos_categorias` (
  `produtos_id` INT NOT NULL,
  `categorias_id` INT NOT NULL,
  PRIMARY KEY (`produtos_id`, `categorias_id`),
  INDEX `fk_produtos_has_categorias_categorias1_idx` (`categorias_id` ASC) VISIBLE,
  INDEX `fk_produtos_has_categorias_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_has_categorias_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produtos_has_categorias_categorias1`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `mydb`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;