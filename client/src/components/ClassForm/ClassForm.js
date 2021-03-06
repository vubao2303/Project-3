import React, { useState, useEffect } from "react"
import API from "../../utils/API";


function ClassForm() {

  const [Class, setClass] = useState({});

  // // useEffect
  // // function getClass() {
  //   setClass(Class)

  // // }

  function createClass(Class) {
    API.saveClass(Class).then(res => {
      console.log("class created")
    })
  }

  function handleChange(event) {
    console.log(event)
    console.log(event.target.value)
    setClass({ ...Class, [event.target.name]: event.target.value })

  }

  return (
    <div className="container">
      <form>

        <div className="mb-3">
          <label htmlFor="grade" className="form-label">Grade/Class Level</label>
          <input onChange={handleChange} name="gradeLevel" type="text" className="form-control" id="grade" />
        </div>

        {/*  Title/Class Name  */}
        <div className="mb-3">
          <label htmlFor="class-name" className="form-label">Title/Class Name</label>
          <input onChange={handleChange} name="className" type="text" className="form-control" id="class-name" />
        </div>

        {/* Button here  */}
        {/* Save and add another class */}
        <button onClick={e => {
          e.preventDefault();
          createClass(Class);
        }
        } type="button" className="btn btn-primary">Save and add another class</button>

        {/* Save and go on to add student */}
        <button type="button" className="btn btn-primary"> Save and go on to add student</button>

      </form >
    </div >
  )
}

export default ClassForm;