// create page that displays classes within the selected year book
// When clicked navigates to students within the selected class
import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
// import FrontResult from '../components/FrontResult/FrontResult';
// import StudentCard from "../StudentCard/StudentCard";
import API from "../../utils/API";
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./style.css";

function DisplayClass() {
  let locationObject = useLocation();
  let location = locationObject.pathname.slice(9);
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

  return (
    <div id="everything">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">

          {Class.map((Class, id) => {
            var href = "/yearbook/" + Class.id;
            return (
              <Card>

                <CardBody>
                  <CardTitle tag="h5"> Class: {Class.className} </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted"> Grade Level: {Class.gradeLevel} </CardSubtitle>

                  <Button onClick={() => { window.location.replace(href) }}>View </Button>

                </CardBody>
              </Card>
            )
          })}

        </div>
      </div>
    </div>
  )

}

export default DisplayClass;


