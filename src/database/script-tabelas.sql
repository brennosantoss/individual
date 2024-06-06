create database individual;

use individual;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    dtcadastro datetime
);

insert into usuario (nome,email,senha,dtcadastro) values
('robson','robson@gmail','123',now());

create table jogo(
idjogo int primary key auto_increment,
nome varchar(20),
tipo varchar(20));

insert into jogo (nome,tipo) values 
('League of Legends','MOBA'),
('Counter Strike','FPS'),
('Valorant','FPS');



create table jogo_interesse(
idinteresse int auto_increment,
fkusuario int,
fkjogo int,
nivel int,
primary key(idinteresse,fkusuario,fkjogo),
foreign key(fkusuario) references usuario (id),
foreign key (fkjogo) references jogo (idjogo));




select * from usuario;

select * from jogo;

select * from jogo_interesse;

select * from grupo;




