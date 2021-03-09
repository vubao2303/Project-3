USE yearbook_db;
INSERT INTO yearbooks (schoolName, year, createdAt, updatedAt)
VALUES ("The Saint Thomas School for Dogs", 2013, "2021-03-08 00:27:37", "2021-03-08 00:27:37");

INSERT INTO classes (className, gradeLevel, YearbookId, createdAt, updatedAt)
VALUES ("Mister Schnitzels Good and mostly Good Boys and Girls", 1, 29, "2021-03-08 00:27:37", "2021-03-08 00:27:37");

INSERT INTO classes (className, gradeLevel, YearbookId, createdAt, updatedAt)
VALUES ("Miss Perrys Ruffneck Ribscratchers", 1, 29, "021-03-08 00:27:37", "2021-03-08 00:27:37");

INSERT INTO classes (className, gradeLevel, YearbookId, createdAt, updatedAt)
VALUES ("Vasilievs Venal Villains", 1, 29, "2021-03-08 00:27:37", "2021-03-08 00:27:37");

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Chester", "Cha-cha","biting, chewing, fighting evil", "BARK, BARK. GRRROWWWWWWL!", "https://en.wikipedia.org/wiki/Pit_bull",  "https://geniusvets.s3.amazonaws.com/gv-dog-breeds/american-pitbull-1.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 12);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Phillip", "Fefe","sleeping", "High pitched bark", "https://en.wikipedia.org/wiki/Chihuahua_(dog)",  "https://vetstreet-brightspot.s3.amazonaws.com/26/0d/6443c92b4c67ae315a8bb8be16e1/Chihuahua-AP-KIDP62-645lc061113.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 12);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Selene", "CC","chasing squirrels", "Concerned whine", "https://en.wikipedia.org/wiki/West_Highland_White_Terrier",  "https://cdn.britannica.com/s:300x169,c:crop/02/198002-050-452BDBD2/West-Highland-White-Terrier.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 12);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Fringus", "Fringus","destroying shoes, digging holes", "confused headtilt", "https://en.wikipedia.org/wiki/Rottweiler",  "https://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-2.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 12);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Leo", "Leonidas","racing", "prolonged stare, quiet boof", "https://en.wikipedia.org/wiki/Whippet",  "https://thehappypuppysite.com/wp-content/uploads/2018/06/whippet-lifespan-header.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 13);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Karma", "B","camping, ball retreival", "pant pant pant", "https://en.wikipedia.org/wiki/Labrador_Retriever",  "https://www.outdoorlife.com/resizer/rSewLKFY4v-Gg3QCBa6is6-c1Ak=/760x570/cloudfront-us-east-1.images.arcpublishing.com/bonnier/5N4O2NV4DVERZJRX7EFCOWFES4.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 2);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Bruce", "Brachi","petty theft", "-", "https://en.wikipedia.org/wiki/Great_Dane",  "https://cdn.orvis.com/images/DBS_GreatDane_1280.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 2);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Bethany", "Beth","petty theft", "-", "https://en.wikipedia.org/wiki/Golden_Retriever",  "https://www.hainesroadanimalhospital.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=-kzTcc9h", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 2);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Cashew", "Chashu","shepherding", "disinterested grunt", "https://en.wikipedia.org/wiki/Australian_Shepherd",  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7kD30hk96ct0Lfgx8RPjSj3TnOV6kI3xMQ&usqp=CAU", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 3);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Sif", "Shniff","sledding, snow rescue", "prolonged howl", "https://en.wikipedia.org/wiki/Husky",  "https://cdn.shopify.com/s/files/1/0994/0236/articles/siberian-husky.jpg?v=1502391918", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 3);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Principie", "Princy","sleeping", "sigh", "https://en.wikipedia.org/wiki/Rhodesian_Ridgeback",  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/30133241/Rhodesian-Ridgeback-standing-in-profile-outdoors.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 3);

INSERT INTO students (name, nickname, hobbies, quote, linkedIn, image, createdAt, updatedAt, ClassId)
VALUES ("Mr. Dog", "Mister","tax filing", "-", "https://en.wikipedia.org/wiki/Poodle",  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/220px-Full_attention_%288067543690%29.jpg", "2021-03-08 00:27:37", "2021-03-08 00:27:37", 3);


