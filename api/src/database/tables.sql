CREATE TABLE users (
	user_id int not null auto_increment primary key,
    fullname varchar(250) not null,
    email varchar(250) not null,
    dni int not null,
    store varchar(250) not null, 
    password varchar(250) not null
);

CREATE TABLE categories (
	category_id int not null auto_increment primary key,
    name varchar(250) not null,
    user_id int not null,
    foreign key (user_id) references users(user_id)
);

CREATE TABLE products (
	product_id int auto_increment not null primary key,
    name varchar(50) not null,
    price int not null,
    description varchar(250) not null,
    stock int not null,
    category_id int not null,
    user_id int not null,
    foreign key (category_id) REFERENCES categories(category_id),
    foreign key (user_id) REFERENCES users(user_id)
);
