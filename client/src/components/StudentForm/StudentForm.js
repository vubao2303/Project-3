// import React from "react"
import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function StudentForm() {

  // ok this is redundant but I don't know a better way 

  const [StName, setStName] = useState("");
  const [Hobbies, setHobbies] = useState("");
  const [LinkedIn, setLinked] = useState("");
  const [Quote, setQuote] = useState("");
  const [Title, setTittle] = useState("")

  // This will show all the students in the database 
  function loadStudent() {
  }



  function addStudent(stName, hobbies, linked, Quote) {
    var studentData = {
      stName: stName,
      hobbies: hobbies,
      LinkedIn: linked,
      Quote: Quote
    };
    API.saveStudent(studentData).then(res => {
      console.log(studentData)
      console.log("yes you added")
    })
  }



  return (
    <div className="container">
      <form  >
        {/* student Name */}
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Name</label>
          <input onChange={e => {
            e.preventDefault();
            setStName(e.target.value);
          }} type="text" className="form-control" id="studentName" />
        </div>

        {/* title  */}
        <div className="mb-3">
          <label htmlFor="studentTitle" className="form-label">Title </label>
          <input onChange={e => {
            e.preventDefault();
            setTittle(e.target.value);
          }} type="text" className="form-control" id="studentTitle" />
        </div>

        {/* hobbies */}
        <div className="mb-3">
          <label htmlFor="studentHobbies" className="form-label">Hobbies</label>
          <input type="text" className="form-control" id="studentHobbies" />
        </div>

        {/* quote */}
        <div className="mb-3">
          <label htmlFor="studenQuote" className="form-label">Quote</label>
          <input onChange={(event) => {
            event.preventDefault();
            // console.log("banana")
            setQuote(event.target.value);
          }} type="text" className="form-control" id="studenQuote" />
        </div>

        {/* linkedIn */}
        <label htmlFor="basic-url" className="form-label">LinkedIn </label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="LinkedIn link" id="basic-url" aria-describedby="basic-addon3" />
        </div>

        <button
          type="submit" className="btn btn-primary" onClick={(event) => {
            event.preventDefault();
            addStudent(StName, Hobbies, Quote, LinkedIn, Title);
          }
          }
        >Summit and Add more student</button>

        <button
        // type="submit" className="btn btn-primary" onClick={(event) => {
        //             event.preventDefault();
        //             signup(name, password);
        //         }
        //         }
        >Finished </button>

      </form>
    </div>
  )
}

export default StudentForm;



{/* <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1">
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1">
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */}