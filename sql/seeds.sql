-- use sanfrancisco database
USE yearbook_db

-- Import seeds for sql data base
-- add parameters to add into yearbook 
-- the order will insert into database
INSERT INTO yearbook (schoolname, year, name)
-- insert values
VALUES ("UC Berkeley", 2021, "Bootcamp")

INSERT INTO class (grade, name)
-- insert class values
VALUES ("13", "consoleloggers")

INSERT INTO students (name, hobbies, quote, linkedIn, title)
-- insert studnets values
VALUES ("B tram Vu", "yoga", "fake it till you make it", "https://www.linkedin.com/in/b-tram-vu/", "student")
