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
  idPreferencia INT NOT NULL AUTO_INCREMENT,
  dtEscolha DATETIME NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fkComposta PRIMARY KEY (idPreferencia, fkCliente, fkProduto),
  CONSTRAINT fkPreferenciaCliente FOREIGN KEY (fkCliente) REFERENCES cliente(idCliente),
  CONSTRAINT fkPreferenciaProduto FOREIGN KEY (fkProduto) REFERENCES produto(idProduto));
  
