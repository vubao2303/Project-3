git# Project-3
# Project 3


- Full stack application deployed to Heroku
- Team build requiring constant communication
- Git tracked project in rapid development process


Demo Video:


## Table of Contents

|                                         |                                                               |                                                  |
| :-------------------------------------: | :-----------------------------------------------------------: | :----------------------------------------------: |
|    [Project Introduction](#Yearbok)     |            [Table of Contents](#table-of-contents)            | [Development Highlights](development-highlights) |
|       [Heroku](#heroku-deployed)        | [Description of Page Building](#Description-of-Page-Building) |               [Authors](#authors)                |
| [Technologies Used](#Technologies-Used) |                     [LinkedIn](#LinkedIn)                     |               [License](#License)                |

---

## Development Highlights

- Project learning goals
- Development process (user stories -> githib cards -> git branches -> commits)
- MVC architecture

## Heroku-Deployed

[Deployed Link]()

## Description of Page Building

- In config file
   <ul> 
  <li> A middleware file that contains authenticated file
  <li> Config.json file
  <li> passport.js file to authenticate using local strategy 
  </li>
  </ul>
- In models folder
  <ul> 
 <li>
  </li> 
  </ul>

- In routes folder to handle when the user "visit" the page
  <ul> 
  <li> 
  <li> API routes to serve up JSON object use to populate the page 
  </li>
  </ul>

- In public folder
  <ul> 
  <li>
  </li>
   </ul>

- In server.js file
   <ul> 
  <li> Requiring necessary npm packages
  <li> Setting up port and requiring models for syncing
  <li> Creating express app and configuring middleware needed for authentication
  <li> Requiring our routes
  <li> Listen to port to activate the server 
  </li>
  </ul>

## Code Snippet

Snippet of the use of sequelize operators. [Op.not] was used to set a condition that finds all Parties where the hostId is not equivalent to the userId in order to prevent duplicate events being created.

```javascript
app.get("/api/availableparty", (req, res) => {
  db.Party.findAll({
    where: {
      hostId: {
        [Op.not]: req.user.id,
      },
    },
    include: [
      {
        model: db.User,
        as: "host",
        attributes: ["name"],
      },
    ],
  })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
});
```

This snippet of code is used to give functionality to the buttons that delete the specific list item's selected by the user. Which in turn calls an ajax request to the server via a specified route, and deletes the data from the appropriate table in the database.

```Javascript
    $(".attendEvents").append(html);

    $(document).on("click", ".unAttend-btn", (e) => {
      console.log(e.target.id);
      console.log($(this));
      var id = e.target.id;
      console.log(id);
      $.ajax({
        url: "/api/unattend/" + id,
        method: "DELETE",
      }).then(() => {
        console.log("Deleted");
        window.location.reload();
      });
    });
  }
```

Use Passport to authenticate file. If there's no user with the given email or passwords, an error message will show.

```Javascript
passport.use(new LocalStrategy(
  {usernameField: "email"},
  function(email, password, done) {db.User.findOne({
      where: {email: email}
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));
```

In order to help keep authentication state across HTTP requests, Sequelize needs to serialize and deserialize the user

```Javascript
passport.serializeUser(function(user, cb) {
  cb(null, user);});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);});
```

## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [react](https://reactjs.org/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [axios](https://www.npmjs.com/package/axios)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Express](https://www.npmjs.com/package/express)
* [heroku](https://dashboard.heroku.com/)        

<br>

## Authors

|               |                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **B Tram Vu** | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/b-tram-vu-866250121/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/vubao2303)          |
| **Raffi**     | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/jaja-brown-a42261201/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/jbrown827)         |
| **Jasmine**   | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/ArjayCaluag) |


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)