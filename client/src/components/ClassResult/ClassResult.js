// create page that displays classes within the selected year book
// When clicked navigates to students within the selected class
import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
// import FrontResult from '../components/FrontResult/FrontResult';
// import StudentCard from "../StudentCard/StudentCard";
import API from "../../utils/API";
// import "./style.css";

function DisplayClass() {
  let locationObject = useLocation();
  let location = locationObject.pathname.slice(10);
  const [student, setStudent] = useState([]);
  const [Class, setClass] = useState([]);
  const [book, setBook] = useState([]);
  // add search by name

  useEffect(() => {
    setBook(location);
  }, [])

  // use effect changes when book changes running the function sets the new state of book 
  // class changes with book changes
  // 
  useEffect(() => {
    if (book) {
      API.getClassByBook(book).then((classes) => {
        if (classes.data) { setClass([...classes.data]); }
      });
    }
  }, [book])

  // student changes when class
  useEffect(() => {
    if (Class[0]) {
      Class.map((miniClass) => {
        API.getStudentByClass(String(miniClass.id)).then((students) => {
          setStudent(student => student.concat(students.data));
        })
      }
      )
    }
  }, [Class])


  // function loadClasses(searchBooks) {
  //   console.log("loadClasses")

  //   API.getClassByBook(searchBooks).then((Class) => {
  //     setClass(Class.data);
  //     console.log(Class.data);
  //   })
  //     .catch(err => console.log(err));
  // }
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