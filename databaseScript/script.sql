CREATE DATABASE bynforcejeans;
USE bynforcejeans;

CREATE TABLE produto (
  idProduto INT PRIMARY KEY AUTO_INCREMENT,
  descricao VARCHAR(45)  NOT NULL,
  referencia CHAR(3) NOT NULL,
  valor FLOAT NOT NULL,
  categoria VARCHAR(15) NOT NULL,
  genero CHAR(1) NOT NULL,
  estoque INT NOT NULL,
  statusProduto VARCHAR(10) CHECK (statusProduto in ('Ativado' , 'Desativado'))
  );

CREATE TABLE cliente (
  idCliente INT PRIMARY KEY AUTO_INCREMENT,
  nomeCompleto VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  senha VARCHAR(45) NULL,
  dtCadastro DATETIME NULL
  );

CREATE TABLE vendas (
  fkProduto INT,
  fkCliente INT,
  idVenda INT,
  qtdVendas INT NOT NULL,
  dtVenda DATETIME NOT NULL,
  CONSTRAINT fkComposta PRIMARY KEY (idVenda, fkCliente, fkProduto),
  CONSTRAINT fkVendasCliente FOREIGN KEY (fkCliente) REFERENCES cliente(idCliente),
  CONSTRAINT fkVendasProduto FOREIGN KEY (fkProduto) REFERENCES produto(idProduto));

