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

CREATE TABLE vendas (
  fkProduto INT,
  fkCliente INT,
  idVenda INT,
  qtdVendas INT NOT NULL,
  dtVenda DATETIME NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fkComposta PRIMARY KEY (idVenda, fkCliente, fkProduto),
  CONSTRAINT fkVendasCliente FOREIGN KEY (fkCliente) REFERENCES cliente(idCliente),
  CONSTRAINT fkVendasProduto FOREIGN KEY (fkProduto) REFERENCES produto(idProduto));
  
SELECT * FROM produto;
SELECT * FROM cliente;	
SELECT * FROM vendas;
