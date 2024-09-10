create database biblioteca_app;
use biblioteca_app;

create table usuario(
    id int primary key auto_increment,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    email varchar(100) not null unique,
    pass varchar(100) not null
);

create table libro(
    id int primary key auto_increment,
    titulo varchar(100) not null,
    autor varchar(100) not null,
    cantidad int not null
);

create table prestamo(
    id int primary key auto_increment,
    id_usuario int not null,
    id_libro int not null,
    fecha_prestamo date not null,
    fecha_devolucion date not null,
    cantidad int not null,
    foreign key (id_usuario) references usuario(id),
    foreign key (id_libro) references libro(id)
);