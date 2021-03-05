-- create and use database in mysql
DROP DATABASE IF EXISTS yearbook_db;
CREATE DATABASE yearbook_db;
USE yearbook_db;
-- create 3 tables for yearbook
-- add yearbook table datatypes
CREATE TABLE yearbook (
    id INT NOT NULL AUTO_INCREMENT,
    schoolname VARCHAR NOT NULL (25),
    year INT NOT NULL,
    name VARCHAR(25),
    PRIMARY KEY (id)
);
-- add class table datatypes
CREATE TABLE class (
    id INT NOT NULL AUTO_INCREMENT,
    grade INT,
    name VARCHAR(25),
    PRIMARY KEY(id)
);
-- add students table datatypes
CREATE TABLE students (
       id INT NOT NULL AUTO_INCREMENT,
       name VARCHAR(25),
       hobbies VARCHAR NOT NULL(50),
       quote VARCHAR NOT NULL(50),
       linkedIn VARCHAR(50),
       title VARCHAR NOT NULL(25),
       PRIMARY KEY (id)
);
