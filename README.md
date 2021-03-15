# Mnemosyne

Create a react application that allows the user to create a yearbook for multiple classes. The user can login and create an account within the application create a yearbook with multiple classes. Search for previously created yearbooks they created by year and name. View students within a class. Edit yearbook data within the app.

Demo Video:
![Image](yearbookgif.gif)


## Table of Contents

|                                         |                                                               |                                                  |
| :-------------------------------------: | :-----------------------------------------------------------: | :----------------------------------------------: |
|   [Project Introduction](#Mnemosyne)    |            [Table of Contents](#table-of-contents)            | [Development Highlights](development-highlights) |
|       [Heroku](#heroku-deployed)        | [Description of Page Building](#Description-of-Page-Building) |               [Authors](#authors)                |
| [Technologies Used](#Technologies-Used) |                     [LinkedIn](#LinkedIn)                     |               [License](#License)                |

---

## Development Highlights

- Project learning goals
- Development process (user stories -> github cards -> git branches -> commits)
- MVC architecture
- Full stack application deployed to Heroku
- Team build requiring constant communication
- Git tracked project in rapid development process

## Heroku-Deployed

[Deployed Link](https://mnemosyne-3.herokuapp.com/)

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
    <li> class model create class relationship sequelize define class name and grade level
   <li> index model connecting database and exporting
   <li> student sequelize define student attributes
    <li> user sequelize define user login data
    <li> yearbook sequelize define yearbook name and year 
    </li> 
    </ul>

  - In controllers folder
    <ul> 
    <li> classController - manipulate class model by create find & update
    <li> student Controller - manipulate student model by create find & update
    <li> user controller - manipulate student model to create  login, signup, login
    <li> yearbook controller - manipulate student model to create find by and create
    </li>
    </ul>

  - Backend routes/In routes folder to handle when the user "visit" the page, creates route to connect with the client side server and the backend controller
    <ul> 
    <li> class route create routes for class controller and client side class api. Matches with "/api/classes",  "/api/classes/:id", "/api/classes/book/:book".
    <li>    yearbook routes create routes for yearbook controller and client side class api. Matches with "yearbook routes",  "class routes", "student routes", "student routes", "user routes".
    <li>  student route create routes for student controller and client side class api. Matches with "/api/student",  "/api/classes/:id", "/api/classes/:id".
    <li>  user route create routes for user controller and client side class api. Matches with "/api/users/login",  "/api/users/signup", "/api/users/logout", "/api/users/user_data".
    <li>  yearbook route create routes for yearbook controller and client side yearbook api. Matches with "/api/books",  "/api/books/:id", "/api/books/year/:year", "/api/books/user/:user".
     <li>  index route create routes for index controller and client side class api. 
    </ul>

  - Api Routes/Front end routes
    <ul>
    <li> combine routes into variable named API, sign up function create post route to send to back end to create user data. login function to create put method for users login. get user data function to create get method for users/users_data. create yearbook post method for books. 
    </li>
    </ul>

  - In public folder
    <ul> 
    <li> css for the application
    <li> html to render the page display app
    </li> 
     </ul>

  - components
    <ul>
    <li> classform, class results, createform, footer, front result, loginform, mainpage, nav, search form, student card, student form, userpage renders bootstrap components and data on page
    </li>
    </ul>

    - pages 
    <ul>
    <li> class, create, display, login, main, search, student page, yearbook displays components on page
    </li>
    </ul>

    - utils
    <ul>
    <li> hold api routes </li>
    </ul>

    - sql
    <ul>
    <li> schema define and create tables for yearbook
    <li> seeds insert values of tables
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

Required dependencies 
``` Javascript
var express = require("express");
var path = require("path");
var routes = require("./routes");
```

import React components 
``` Javascript
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
```

Using Route to access react pages and react components 
``` Javascript
function App() {
  return (
    <Router >
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/display" component={Display} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/class" component={Class} />
        <Route path="/yearbook" component={Yearbook} />
        <Route path="/display" component={Display} />
      </Switch>
    </Router>);}
export default App;
```

Backend routes/In routes folder to handle when the user "visit" the page, creates route to connect with the client side server and the backend controller

```Javascript
const router = require("express").Router();
const studentController = require("../../controllers/studentController.js");
router
    .route("/")
    .post(studentController.create);
router
    .route("/:id")
    .get(studentController.findById)
    .put(studentController.update);
router
    .route("/class/:class")
    .get(studentController.findByClass);
module.exports = router;
```

Model uses sequelize to define table and data

```Javascript
module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        name: { type: DataTypes.STRING },
        nickname: { type: DataTypes.STRING },
        hobbies: { type: DataTypes.STRING },
        quote: { type: DataTypes.STRING },
        linkedIn: { type: DataTypes.STRING },
        title: { type: DataTypes.STRING },
        image: {type: DataTypes.STRING(512)}
    });
    //add student association 
    Student.associate = function (models) {
        Student.belongsTo(models.Class, {
        });
    }
    return Student;
}
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

|                      |                                                                                                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **B Tram Vu**        | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/b-tram-vu-866250121/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/vubao2303)      |
| **Raffi Lepejian**   | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/raffi-lepejian-071876153/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/jbrown827) |
| **Jasmine Franklin** | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/Jas-F)   |


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)