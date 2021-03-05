-- create and use database in mysql
DROP DATABASE IF EXISTS yearbook_db;
CREATE DATABASE yearbook_db;
USE yearbook_db;
-- create 3 tables for yearbook
-- add yearbook table datatypes
CREATE TABLE yearbook (
    id INT NOT NULL AUTO_INCREMENT,
    schoolname VARCHAR (25),
    year INT NOT NULL,
    name VARCHAR(25),
    PRIMARY KEY (id)
);
-- add class table datatypes
CREATE TABLE class (
    id INT NOT NULL AUTO_INCREMENT,
    grade INT NOT NULL,
    name VARCHAR(25),
    PRIMARY KEY(id)
);
-- add students table datatypes
CREATE TABLE students (
       id INT NOT NULL AUTO_INCREMENT,
       name VARCHAR(25),
       hobbies VARCHAR(25),
       quote VARCHAR(50),
       linkedIn VARCHAR(25),
       title VARCHAR(25),
       PRIMARY KEY (id)
);
