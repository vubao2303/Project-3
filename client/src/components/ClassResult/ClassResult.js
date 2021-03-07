// create page that displays classes within the selected year book
// When clicked navigates to students within the selected class

import React, { useState } from "react";
import API from "../../utils/API";
// import "./style.css";

function DisplayClass() {

  const [Class, setClass] = useState([]);
  const [books, setBook] = useState([]);
// add search by name

  React.useEffect(() => {
    if (books === "") {
      setBook();
    }
  }, [books])

  function loadClasses(searchBooks) {
    console.log("loadClasses")

    API.getClassByBook(searchBooks).then((Class) => {
      setClass(Class.data);
      console.log(Class.data);
    })
      .catch(err => console.log(err));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-4">

        </div>
        <div className="searchResult">
          {Class.map((Class, id) => {
            var href = "/yearbook/" + Class.id;
            return (
              <ul><li><a key={id} href={href}>{Class.className}, {Class.gradeLevel}</a></li></ul>
            )
          })}
        </div>
      </div></div>
  )

}

export default DisplayClass;