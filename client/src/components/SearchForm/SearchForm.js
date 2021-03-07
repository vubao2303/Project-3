import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function SearchForm() {

  const [books, setBooks] = useState([]);
  const [year, setYear] = useState("");

  function loadYearbook(searchYear) {
    console.log("load")
    API.getBooksByYear(searchYear).then((books) => {
      setBooks(books.data);
      console.log(books.data);
    })
      .catch(err => console.log(err));
  }
  // useEffect(() => {

  //   setBooks([1])
  // }, []
  // )



  return (
    <div>
      <form >
        <div className="mb-3">
          <label htmlFor="searchforYearBook" className="form-label">Search</label>
          <input onChange={(event) => {
            event.preventDefault();
            // console.log("banana")
            setYear(event.target.value);
          }} placeholer="search for your yearbook here" className="form-control" id="searchForYB" />
        </div>

        <button onClick={(event) => {
          event.preventDefault();
          loadYearbook(year);
        }} type="submit" className="btn btn-primary">Submit</button>
      </form>

      { (() => {
        return (
          books.map((book, id) => {
            var href = "/yearbook/" + book.id;
            return (
              <div>
                <a key={id} href={href}>{book.schoolName}, {book.year}</a>
              </div>
            )
          }))
      })
      }
    </div>
  )

}

export default SearchForm;