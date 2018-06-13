DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS authorities;


create table users (
    id bigserial not null primary key,
    username varchar(50) not null,
    password varchar(120) not null,
    enabled boolean not null
);

create table authorities (
    username varchar(50) not null,
    authority varchar(50) not null,
    foreign key (username) references users (username)
);