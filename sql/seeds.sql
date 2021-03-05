-- use sanfrancisco database
USE yearbook_db

-- Import seeds for sql data base
-- add parameters to add into yearbook 
-- the order will insert into database
INSERT INTO yearbook (schoolname, year, name)
-- insert values
VALUES ("UC Berkeley", 2021, "null")


INSERT INTO classes (grade, name)
-- insert class values
VALUES ("null", "consoleloggers")

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, title)
-- insert studnets values
VALUES ("B tram Vu", "Wasabli", "yoga", "fake it till you make it", "https://www.linkedin.com/in/b-tram-vu/", "student"),
