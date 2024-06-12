// PARA EXECUTAR O BANCO DE DADOS, RODE O SCRIPT ABAIXO

docker run -d -p 3306:3306 --name aplication-cloud2 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=admin1234 -e MYSQL_DATABASE=aplication-cloud mysql/mysql-server:latest

// PARA CRIAR O BANCO DE DADOS E TABELAS

CREATE DATABASE IF NOT EXISTS aplication-cloud;

CREATE TABLE `pessoa` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `endereco` varchar(60) NOT NULL,
  `bairro` varchar(60) NOT NULL,
  `cidade` varchar(60) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `uf` varchar(2) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3;

INSERT INTO `pessoa` VALUES (1,'Joana','18996969696','jo@gmail.com','Rua y','bairro ','P Prudente','19999-000','sp'),(2,'Bianca','18998989898','bianca@gmail.com','Rua Z','Jardim Z','P Prudente','19999-000','sp'),(3,'Lucas','11996969898','lucas@hotmail.com','Rua Fresno','Jardim Rock','P Prudente','19888-000','sp'),(36,'Gustavo Guanabara','18999999999','teste@teste.com','Rua x','x','Prudente','99999-000','SC'),(37,'jose','(99) 99999-9999','jose@gmail.com','teste','bairro teste','regente feijo','19570-000','SP'),(39,'Marina Borges','(99) 99898-9898','mari_borges@outlook.com','Rua Flores 123','Jardim Norte','Regente Feijo','19570-000','SP');

CREATE TABLE `aluno` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `rg` varchar(20) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `nome_mae` varchar(60) NOT NULL,
  `dt_nasc` date NOT NULL,
  `escola` varchar(60) DEFAULT NULL,
  `serie` varchar(10) DEFAULT NULL,
  `periodo` varchar(10) DEFAULT NULL,
  `Pessoa_codigo` int NOT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`),
  UNIQUE KEY `rg_UNIQUE` (`rg`),
  KEY `fk_Aluno_Pessoa1_idx` (`Pessoa_codigo`),
  CONSTRAINT `fk_Aluno_Pessoa1` FOREIGN KEY (`Pessoa_codigo`) REFERENCES `pessoa` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

INSERT INTO `aluno` VALUES (1,'1212344567','44433344455','maria','2007-09-20','teste','2','vespertino',1),(2,'123456789','99988877766','Josiane','2007-08-04','teste','2','vespertino',2),(3,'482265557','44455522207','Rosiane','2006-12-01','teste','3','manha',3);

// PARA EXECUTAR A APLICAÇÃO

docker run -p 3000:3000 --name aplication-cloud2 -d amandavergilio/ativ4:latest

// Abra a URL http://localhost:3000

// DOCKER HUB LINK:
https://hub.docker.com/u/amandavergilio

// GIT HUB LINK:

https://github.com/Amanda-Arya/aplicacao-cloud
