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
-- Table `mydb`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`login` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `statusLogin` TINYINT NULL,
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
  `statusPedido` TINYINT NOT NULL,
  `codigoBoleto` VARCHAR(45) NULL DEFAULT NULL,
  `statusBoleto` TINYINT NULL DEFAULT NULL,
  `dataVencimento` DATETIME NULL DEFAULT NULL,
  `login_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_login1_idx` (`login_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_login1`
    FOREIGN KEY (`login_id`)
    REFERENCES `mydb`.`login` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  `imagem` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`itens_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`itens_pedidos` (
  `qtdRequisitado` INT NOT NULL,
  `pedidos_id` INT NOT NULL,
  `produtos_id` INT NOT NULL,
  INDEX `fk_itens_pedidos_pedidos1_idx` (`pedidos_id` ASC) VISIBLE,
  INDEX `fk_itens_pedidos_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_itens_pedidos_pedidos1`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `mydb`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_itens_pedidos_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`cadastro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cadastro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(15) NOT NULL,
  `cep` VARCHAR(15) NOT NULL,
  `uf` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `login_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cadastro_login1_idx` (`login_id` ASC) VISIBLE,
  CONSTRAINT `fk_cadastro_login1`
    FOREIGN KEY (`login_id`)
    REFERENCES `mydb`.`login` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categorias` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `produtos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_categorias_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_categorias_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
