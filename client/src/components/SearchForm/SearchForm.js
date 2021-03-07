import React, { useState } from "react"
import API from "../../utils/API";
import "./style.css";

function SearchForm() {

  const [Class, setClass] = useState([]);
  const [books, setBooks] = useState([]);
  const [year, setYear] = useState("-50");
  // add search by name


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
  // add function to load classes
  function loadClasses(searchBooks) {
    console.log("loadClasses")

    API.getClassByBook(searchBooks).then((Class) => {
      setClass(Class.data);
      console.log(Class.data);
    })
      .catch(err => console.log(err));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-5">

          <form className="searchform">
            <div className="mb-5">
              <label htmlFor="searchforYearBook" className="form-label">Search</label>
              <input onChange={(event) => {
                event.preventDefault();
                // console.log("banana")
                setYear(event.target.value);
              }} placeholder="search for your yearbook here" className="form-control" id="searchForYB" />
            </div>

            <button onClick={(event) => {
              event.preventDefault();
              loadYearbook(year);
              document.getElementById('searchForYB').value = '';
            }} type="submit" className="btn btn-primary">Submit</button>
          </form>



        </div>
        {/* show class result */}
        {/* <div className="searchResult">
          {books.map((Class, id) => {
            var href = "/yearbook/" + Class.id;
            return (
              <ul><li onclick={loadClasses}><a key={id} href={href}>{Class.schoolName}, {Class.year}</a></li></ul>
            )
          })}
        </div> */}



        <div className="searchResult">
          {books.map((book, id) => {
            var href = "/display/" + book.id;
            return (
              <ul><li><a key={id} href={href}>{book.schoolName}, {book.year}</a></li></ul>
            )
          })}
        </div>
      </div></div>
  )

}

export default SearchForm;