CREATE DATABASE testdb;

CREATE TABLE users(user_id SERIAL PRIMARY KEY,
username VARCHAR (255), password VARCHAR (255));



CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR (255),
    author VARCHAR (255)
);