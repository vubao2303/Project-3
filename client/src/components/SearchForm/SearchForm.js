import React, { useState } from "react";
import API from "../../utils/API";

function SearchForm() {

  const [books, setBooks] = useState([]);
  const [year, setYear] = useState("");

  function loadYearbook(searchYear) {
    console.log("load")

    API.getBooksByYear(searchYear).then((books) => {
      setBooks(books);
      console.log(books)
    })
      .catch(err => console.log(err));
  }
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
    </div>
  )

}

export default SearchForm;