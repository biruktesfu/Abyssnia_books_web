CREATE DATABASE jwt_tutorial;
CREATE EXTENSION "uuid-ossp";
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR (255) NOT NULL,
    user_email VARCHAR (255) NOT NULL,
    user_password VARCHAR (255) NOT NULL
);
CREATE TABLE books(
    book_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_name VARCHAR (255) NOT NULL,
    book_author VARCHAR (255) NOT NULL,
    book_desc VARCHAR (255) NOT NULL,
    book_genre VARCHAR (255) NOT NULL,
    book_ISNB_13 VARCHAR (255) NOT NULL,
    book_price VARCHAR (255) NOT NULL,
    book_img bytea ,
    book_file bytea
);
INSERT INTO users (user_name, user_email, user_password)
VALUES ('henry', 'henrey@gmail.com', '12345678');
==========================================================================

INSERT INTO books (
    book_name ,
    book_author ,
    book_desc ,
    book_genre ,
    book_ISNB_13 ,
    book_price ,
    book_img  ,
    book_file 
)
values (
'book_name', 
'book_author', 
'book_desc',
'book_genre', 
'book_ISNB_13', 
'book_price',
pg_read_file ('C:\Users\Public\Pictures\1.jpg')::bytea, 
pg_read_file('C:\Users\Public\Pictures\1.jpg')::bytea );



POSTGRES COMMANDS
================================
psql -U postgres
\c jwt_tutorial


\d   List 
\l   list of database
\c jwt_tutorial  connect to jwt-tutorial database as user POSTGRES
SELECT * From users;
SELECT * From books;


