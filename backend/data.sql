CREATE DATABASE todoapp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;ABASE todoapp;

CREATE TABLE todo(
id SERIAL PRIMARY KEY,
description TEXT
);
