import React from "react"
import StudentForm from '../components/StudentForm/StudentForm';
import StudentEdit from '../components/StudentEdit/StudentEdit';

function SForm() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8"></div>

        <StudentForm />
        <StudentEdit />
      </div>
    </div>
  )
}
export default SForm