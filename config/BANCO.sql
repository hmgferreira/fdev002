CREATE DATABASE ads;


CREATE TABLE usuarios(
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    login varchar(100),
    senha varchar(100)
);


INSERT INTO usuarios(nome, login, senha) VALUES('admin', 'admin', '123');
INSERT INTO usuarios(nome, login, senha) VALUES('teste', 'teste', '123');
INSERT INTO usuarios(nome, login, senha) VALUES('test2e', 'test2e', '123');