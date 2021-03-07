import React, { useState } from "react"
import API from "../../utils/API";
import "./style.css";

function SearchForm() {

  const [books, setBooks] = useState([]);
  const [year, setYear] = useState("-50");

  React.useEffect(() => {
    if (year === "") {
      setYear("-50");
    }
  }, [year])

  function loadYearbook(searchYear) {
    console.log("load")

    API.getBooksByYear(searchYear).then((books) => {
      setBooks(books.data);
      console.log(books.data);
    })
      .catch(err => console.log(err));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-4">

          <form className="meform">
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
              document.getElementById('searchForYB').value = '';
            }} type="submit" className="btn btn-primary">Submit</button>
          </form>



        </div>
        <div className="searchResult">
          {books.map((book, id) => {
            var href = "/yearbook/" + book.id;
            return (
              <ul><li><a key={id} href={href}>{book.schoolName}, {book.year}</a></li></ul>
            )
          })}
        </div>
      </div></div>
  )

}

export default SearchForm;