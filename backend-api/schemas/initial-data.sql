create table pins
(
    id              int auto_increment                  not null
        primary key,
    name            varchar(255)                        not null,
    description     varchar(255)                        null,
    img_url         varchar(255)                        null,
    created_at      timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    updated_at      timestamp                           null
);
