import React, { useState, useEffect } from "react"
import API from "../../utils/API";
import "./style.css";

function ClassForm() {

  const [Class, setClass] = useState({});
  const [books, setBooks] = useState([]);
  // useEffect
  useEffect(() => {
    if (sessionStorage.getItem("userId")) {
      API.getBooksByUser(sessionStorage.getItem("userId")).then((books) => {
        setBooks(books.data);
      });
    }

  }, [])

  function createStudent(Class) {
    if (Class.className && Class.className !== "" && Class.YearbookId && Class.YearbookId !== -1) {
      API.saveClass(Class).then(() => {
        window.location.href = "/student"
      });
    }
    else {
      alert("You need to choose a yearbook and a name to add a class!");
    }
  }

  function createClass(Class) {
    if (Class.className && Class.className !== "" && Class.YearbookId && Class.YearbookId !== -1) {
      API.saveClass(Class).then(() => {
        window.location.href = "/class"
      });
    }
    else {
      alert("You need to choose a yearbook and a name to add a class!");
    }
  }



  function handleChange(event) {
    console.log(event)
    console.log(event.target.value)
    setClass({ ...Class, [event.target.name]: event.target.value })
    console.log(Class);

  }

  return (
    <div className="container">
      <form className="classform">
        <select className="form-select" aria-label="Default select example" onChange={
          (event => {
            event.preventDefault();
            setClass({ ...Class, YearbookId: event.target.value });
          })
        }>
          <option value={-1} defaultValue>Select one of your books to add this class to</option>
          {books.map(book => {
            return (
              <option value={book.id}>{book.schoolName}, {book.year}</option>
            );
          }
          )}
        </select>

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
        } type="button" className="btn btn-primary">Add another class</button>

        {/* Save and add student class */}
        <button onClick={e => {
          e.preventDefault();
          createStudent(Class);
        }
        } type="button" className="btn btn-primary">Add students</button>


      </form >
    </div >
  )
}

export default ClassForm;