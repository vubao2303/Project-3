-- use sanfrancisco database
USE yearbook_db

-- Import seeds for sql data base
-- add parameters to add into yearbook 
-- the order will insert into database

INSERT INTO yearbook (schoolname, year, name)
-- insert values
VALUES ("UC Berkeley", 2021, "null")




SELECT * FROM yearbook_db.Classes;
USE yearbook_db;
INSERT INTO classes (gradeLevel, className,createdAt, updatedAt)
-- insert class values
VALUES ("null", "consoleloggers", "2021-03-05 05:20:15", "2021-03-05 05:20:15")


INSERT INTO classes (grade, name)
-- insert class values
VALUES ("null", "consoleloggers")

INSERT INTO students (name, hobbies, quote, linkedIn, title)
-- insert studnets values
VALUES ("B tram Vu", "yoga", "fake it till you make it", "https://www.linkedin.com/in/b-tram-vu/", "student"),
("Jasmine Franklin", "painting", "life is a movie and your the star, so give yourself a happy ending", "https://www.linkedin.com/in/jasmine-franklin-8b08ba121/dd", "studnet");
