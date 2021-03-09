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
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setClass(location);
    console.log(location)
  }, [])

  // use effect changes when book changes running the function sets the new state of book 
  // class changes with book changes

  useEffect(() => {

    API.getStudentByClass(Class).then((studentsArr) => {
      setStudents([...studentsArr.data]);
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

      <StudentCard height="500px" width="auto"
        // passing student into student card
        students={students}

      // name={studentsGuy.name}
      // nickname={studentsGuy.nickname}
      // quote={studentsGuy.quote}
      // linkedIn={studentsGuy.linkedIn}
      // hobbies={studentsGuy.hobbies}
      // image={studentsGuy.image}
      />
       )
    </div>
  )
}
export default Yearbook