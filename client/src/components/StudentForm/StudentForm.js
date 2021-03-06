// import React from "react"
import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function StudentForm() {

  const [Student, setStudent] = useState({});

  const [book, setBook] = useState(-1);

  const [books, setBooks] = useState([]);

  const [Class, setClass] = useState([]);

  // useEffect
  useEffect(() => {
    if (sessionStorage.getItem("userId")) {
      API.getBooksByUser(sessionStorage.getItem("userId")).then((books) => {
        setBooks(books.data);
      });
    }

  }, [])

  useEffect(() => {
    if (book !== -1) {
      API.getClassByBook(book).then((classes) => {
        setClass(...Class, classes.data);
        console.log(Class);
      });
    }

  }, [book])
  // ok this is redundant but I don't know a better way 

  // const [StName, setStName] = useState("");
  // const [Hobbies, setHobbies] = useState("");
  // const [LinkedIn, setLinked] = useState("");
  // const [Quote, setQuote] = useState("");
  // const [Title, setTittle] = useState("")

  // This will show all the students in the database 

  function addStudent(Student) {
    API.saveStudent(Student).then(() => {
      console.log("yes you added a student")
      window.location.href = "/student"
    })
  }

  function handleSave(e) {
    setStudent({ ...Student, [e.target.name]: e.target.value })
  }



  return (
    <div className="container">

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form  >
            {/* student Name */}
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">Name</label>
              <input onChange={handleSave} name="name" type="text" className="form-control" id="studentName" />
            </div>

            {/* title  */}
            <div className="mb-3">
              <label htmlFor="studentTitle" className="form-label">Title </label>
              <input onChange={handleSave} name="title" type="text" className="form-control" id="studentTitle" />
            </div>

            {/* hobbies */}
            <div className="mb-3">
              <label htmlFor="studentHobbies" className="form-label">Hobbies</label>
              <input onChange={handleSave} name="hobbies" type="text" className="form-control" id="studentHobbies" />
            </div>

            {/* quote */}
            <div className="mb-3">
              <label htmlFor="studenQuote" className="form-label">Quote</label>
              <input onChange={handleSave} name="quote"
                type="text" className="form-control" id="studenQuote" />
            </div>

            {/* linkedIn */}
            <label htmlFor="basic-url" className="form-label">LinkedIn </label>
            <div className="input-group mb-3">
              <input onChange={handleSave} name="linkedIn" type="text" className="form-control" placeholder="LinkedIn link" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <select className="form-select" aria-label="Default select example" onChange={
              (event => {
                event.preventDefault();
                var newBookId = event.target.value;
                setBook(newBookId);
              })
            }>
              <option value={false} defaultValue>Select one of your books to add this class to</option>
              {books.map(book => {
                return (
                  <option value={book.id}>{book.schoolName}, {book.year}</option>
                );
              }
              )}
            </select>

            <select className="form-select" aria-label="Default select example" onChange={
              (event => {
                event.preventDefault();
                setStudent({ ...Student, ClassId: event.target.value });
              })
            }>
              <option value={-1} defaultValue>Select one of your books to add this class to</option>
              {
                Class.map(littleClass => {
                  return (
                    <option value={littleClass.id}>{littleClass.className}</option>
                  );
                }
                )}
            </select>

            <button
              type="submit" className="btn btn-primary" onClick={(event) => {
                event.preventDefault();
                addStudent(Student);
              }
              }
            >Submit and Add more student</button>

            <button
            // type="submit" className="btn btn-primary" onClick={(event) => {
            //             event.preventDefault();
            //             signup(name, password);
            //         }
            //         }
            >Finished </button>

          </form>
        </div>

      </div>
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

// function addStudent(Students) {
//   var studentData = {
//     stName: stName,
//     hobbies: hobbies,
//     LinkedIn: linked,
//     Quote: Quote
//   };
//   API.saveStudent(studentData).then(res => {
//     console.log(studentData)
//     console.log("yes you added")
//   })
// }