import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import StudentCard from "../components/StudentCard/StudentCard";
import API from "../utils/API";
function Yearbook() {
  let locationObject = useLocation();
  let location = locationObject.pathname.slice(10);
  const [Class, setClass] = useState();
  const [students, setStudents] = useState([]);
  const [classObject, setClassObject] = useState({ id: 0, schoolName: "loading" });

  useEffect(() => {
    setClass(location);
    console.log(location)
  }, [])

  // use effect changes when book changes running the function sets the new state of book 
  // class changes with book changes

  useEffect(() => {
    if (Class) {
      API.getStudentByClass(Class).then((studentsArr) => {
        setStudents([...studentsArr.data]);
      });
      API.getClassById(Class).then((littleClass) => {
        if (littleClass.data) {
          setClassObject(littleClass.data);
        }
      });
    }
  }, [Class])

  return (
    <div>
      <div className="yearbookTitle">
        <h1 className="class-name">{classObject.className}</h1>
        {/* <h2>{classObject.gradeLevel} </h2> */}
        <ul><a href={"/display/" + classObject.YearbookId}>View All Classes</a></ul>
      </div>
      <StudentCard
        // passing student into student card
        students={students}
      />

    </div>
  )
}
export default Yearbook