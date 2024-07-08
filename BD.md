CREATE DATABASE codoacodo

USE codoacodo

CREATE TABLE personas (
id int not null auto_increment,
nombre varchar (50),
apellido varchar (50),
edad int,
provincia varchar (50),
domicilio varchar (100),
createdAt datetime,
updatedAt datetime,
primary key (id))