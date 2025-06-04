-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE bynforcejeans;
USE bynforcejeans;

CREATE TABLE produto (
  idProduto INT PRIMARY KEY AUTO_INCREMENT,
  categoria VARCHAR(10) NOT NULL,
  tom VARCHAR(6) NOT NULL,
  estilo VARCHAR(10) NOT NULL
  );

CREATE TABLE cliente (
  idCliente INT PRIMARY KEY AUTO_INCREMENT,
  nomeCompleto VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  senha VARCHAR(45) NULL,
  dtCadastro DATETIME default current_timestamp
  );

CREATE TABLE preferencia (
  fkProduto INT,
  fkCliente INT,
  idPreferencia INT,
  dtEscolha DATETIME NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fkComposta PRIMARY KEY (idPreferencia, fkCliente, fkProduto),
  CONSTRAINT fkPreferenciaCliente FOREIGN KEY (fkCliente) REFERENCES cliente(idCliente),
  CONSTRAINT fkPreferenciaProduto FOREIGN KEY (fkProduto) REFERENCES produto(idProduto));


