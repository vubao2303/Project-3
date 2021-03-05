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
("Muhammad A Khalid", "M", "Games", "Life before dealth, strength before weakness, journey before destinationn", "https://www.linkedin.com/in/the-real-jordan-kelly/", "student"),
("Ryan Kirkland", "kirl", "Games", "If you can't love yourself ho the hell are you gonna love yourself", "https://www.linkedin.com/in/b-tram-vu/", "student"),
("Vincent Nquyen", "vin", "Games", "If you cant dazzle them with brilliance, baffle them with bullshit.", "https://www.linkedin.com/in/vincent-nguyen-74226a107/", "student"),
("Vincent Nquyen", "vin", "Games", "If you cant dazzle them with brilliance, baffle them with bullshit.", "https://www.linkedin.com/in/vincent-nguyen-74226a107/", "student")