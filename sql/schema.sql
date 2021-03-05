-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS yearbook_db;
-- Creates the "blogger" database --
CREATE DATABASE yearbook_db;
USE yearbook_db;

-- create new table define the characters values and rules
CREATE TABLE yearbook (
    -- auto increment id with 25 charater names
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25),
    year INT NOT NULL,
    name VARCHAR(25),
    PRIMARY KEY (id)
)

CREATE TABLE class (
    -- AUTO INCREMENT & grade number
    id INT NOT NULL AUTO_INCREMENT,
    grade INT NOT NULL,
    name VARCHAR(25),
    PRIMARY KEY(id)
)

CREATE TABLE students
    id INT NOT NULL AUTO_INCREMENT
