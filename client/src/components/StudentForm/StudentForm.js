// import React from "react"
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

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
        if (classes.data[0]) {
          setClass(classes.data);
          // console.log(Class);
        }
      });
    }

  }, [book])

  function addStudent(Student) {
    // make sure required fields are filled
    // console.log(Student);
    if (Student.name !== "" && Student.ClassId && Student.ClassId !== -1) {
      API.saveStudent(Student).then(() => {
        // console.log("yes you added a student")
        window.location.href = "/student"
      })
    }
    else {
      alert("You are missing required fields! (Name and class are required)");
    }
  }

  function addStudentandFinish(Student) {
    // make sure required fields are filled
    // console.log(Student);
    if (Student.name !== "" && Student.ClassId && Student.ClassId !== -1) {
      API.saveStudent(Student).then(() => {
        // console.log("yes you added a student")
        window.location.replace("/yearbook/" + Student.ClassId)
      })
    }
    else {
      alert("You are missing required fields! (Name and class are required)");
    }
  }

  function handleSave(e) {
    setStudent({ ...Student, [e.target.name]: e.target.value })
  }
  return (
    <div className="container">

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form className="studentform">
            <select className="form-select" aria-label="Default select example" onChange={
              (event => {
                event.preventDefault();
                var newBookId = event.target.value;
                setBook(newBookId);
              })
            }>
              <option value={false} defaultValue>Choose A Yearbook</option>
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
              <option value={-1} defaultValue>Choose A Class To Add The Student To </option>
              {
                Class.map(littleClass => {
                  return (
                    <option value={littleClass.id}>{littleClass.className}</option>
                  );
                }
                )}
            </select>
            {/* student Name */}
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">Name</label>
              <input onChange={handleSave} name="name" type="text" className="form-control" id="studentName" />
            </div>

            {/* title  */}
            <div className="mb-3">
              <label htmlFor="studentTitle" className="form-label">Nickname </label>
              <input onChange={handleSave} name="nickname" type="text" className="form-control" id="studentTitle" />
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

            {/* student image, url */}
            <div className="mb-3">
              <label htmlFor="studentImage" className="form-label">Image Url (try to make this not too long)</label>
              <input onChange={handleSave} name="image" type="text" className="form-control" id="studentImage" />
            </div>

            {/* linkedIn */}
            <label htmlFor="basic-url" className="form-label">LinkedIn </label>
            <div className="input-group mb-3">
              <input onChange={handleSave} name="linkedIn" type="text" className="form-control" placeholder="LinkedIn link" id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <button
              type="submit" className="btn btn-primary" onClick={(event) => {
                event.preventDefault();
                addStudent(Student);
              }
              }
            >Add more student</button>

            <button
              type="submit" className="btn btn-primary" onClick={(event) => {
                // console.log("finished")
                event.preventDefault();
                addStudentandFinish(Student);
                // when clicked navigate to yearbook page
              }
              }
            >Finished </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentForm;
