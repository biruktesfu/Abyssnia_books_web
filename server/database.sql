CREATE DATABASE testdb;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);
CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL (255),
    author VARCHAR NOT NULL (255),
    genre VARCHAR NOT NULL (255),
    descr VARCHAR NOT NULL (255),
    img VARCHAR NOT NULL (255), 
    ISBN -13 VARCHAR NOT NULL (255),
    price VARCHAR NOT NULL (255)
);