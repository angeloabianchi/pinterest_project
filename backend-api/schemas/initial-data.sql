create table pins
(
    id int auto_increment not null primary key,
    title varchar(255) not null,
    description varchar(255),
    imgUrl varchar(255),
    userId int null,
    constraint foreign key (userId) references users(id) on delete cascade,
    boardId int null,
    constraint foreign key (boardId) references boards(id) on delete cascade, /* on delete cascade -> quando deletado, apagar o id do board deletado */
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at timestamp null
);

create table boards
(
    id int auto_increment not null primary key,
    title varchar(255) not null,
    description varchar(255),
    category varchar(255) null,
    userId int null,
    constraint foreign key (userId) references users(id) on delete cascade,
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at timestamp null
);

create table users
(
    id int auto_increment not null primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    created_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at timestamp null
)
