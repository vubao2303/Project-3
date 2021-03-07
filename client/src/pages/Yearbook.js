import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
// import FrontResult from '../components/FrontResult/FrontResult';
import StudentCard from "../components/StudentCard/StudentCard";
import API from "../utils/API";
function Yearbook() {
  let locationObject = useLocation();
  let location = locationObject.pathname.slice(10);
  console.log(location);
  // const [book, setBook] = useState();
  const [Class, setClass] = useState();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    setClass(location);
  }, [])

  // use effect changes when book changes running the function sets the new state of book 
  // class changes with book changes
  
  useEffect(() => {

      API.getStudentByClass(Class).then((students) => {
        setStudent([...students.data]);
      });
  }, [Class])
 
  // student changes when class
  // useEffect(() => {
  //   if (Class[0]) {
  //     Class.map((miniClass) => {
  //       API.getStudentByClass(String(miniClass.id)).then((students) => {
  //         setStudent(student => student.concat(students.data));
  //       })
  //     }
  //     )
  //   }
  // }, [Class])

  return (
    <div>
      {student.map((studentGuy) => {
        return (
          <StudentCard
            key={studentGuy.id}
            name={studentGuy.name}
            nickname={studentGuy.nickname}
            quote={studentGuy.quote}
            linkedIn={studentGuy.linkedIn}
            hobbies={studentGuy.hobbies}
          />
        )
      }
      )}
    </div>
  )
}
export default Yearbook