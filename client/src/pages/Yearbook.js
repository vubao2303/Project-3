import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import FrontResult from '../components/FrontResult/FrontResult';
import StudentCard from "../components/SearchForm/SearchForm";
import API from "../utils/API";
function Yearbook() {
  let locationObject = useLocation();
  let location = locationObject.pathname[locationObject.pathname.length - 1];
  const [book, setBook] = useState();
  const [Class, setClass] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    setBook(location);
  }, [])

  useEffect(() => {
    if (book) {
      console.log(book);
      API.getClassByBook(book).then((classes) => {
        setClass([...classes.data]);
      });
    }
  }, [book])

  useEffect(() => {
    if (Class[0]) {
      for (let i = 0; i < Class.length; i++) {
        API.getStudentByClass(String(Class[i].id)).then((students) => {
          setStudent([...student, ...students.data]);
        })
      }
    }
  }, [Class])
  return (
    // <StudentCard />
    <div>
    </div>
  )
}
export default Yearbook