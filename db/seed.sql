create table if not exists realtors (
    realtor_id serial primary key,
    email varchar(150),
    password varchar(250)
);

create table if not exists houses (
    house_id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);