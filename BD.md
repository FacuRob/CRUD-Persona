CREATE DATABASE codoacodo

<<<<<<< HEAD
=======
USE codoacodo
>>>>>>> 1196d5806088dde3ace1e5508d31b5d03d7f4b9e

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