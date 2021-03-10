// import React from "react"
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function StudentForm() {

  const [Classo, setClasso] = useState("");
  const [Student, setStudent] = useState("");
  const [Students, setStudents] = useState([]);
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

  useEffect(() => {
    if (Classo !== "" && Classo !== -1) {
      API.getStudentByClass(Classo).then((students) => {
        if (students && students.data[0]) {
          setStudents(students.data);
        }
      });
    }
  }, [Classo])

  function deleteStudent() {
    if (Student !== -1){
      API.deleteStudent(Student).then(() => {
        window.location.href = "/student";
      })
    }
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
                setBook(() => newBookId);
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
                setClasso(() => event.target.value);
              })
            }>
              <option value={-1} defaultValue>Select one of the classes in your selected yearbook to add this student to</option>
              {
                Class.map(littleClass => {
                  return (
                    <option value={littleClass.id}>{littleClass.className}</option>
                  );
                }
                )}
            </select>
            <select className="form-select" aria-label="Default select example" onChange={
              (event => {
                event.preventDefault();
                var newStudentId = event.target.value;
                setStudent(() => newStudentId);
              })
            }>
              <option value={false} defaultValue>Select one of your books to add this class to</option>
              {
                Students.map(student => {
                  return (
                    <option value={student.id}>{student.name}</option>
                  );
                })
              }
            </select>

            <button
              type="submit" className="btn btn-primary" onClick={(event) => {
                // console.log("finished")
                event.preventDefault();
                deleteStudent();
                // when clicked navigate to yearbook page
              }
              }
            >Delete </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentForm;
