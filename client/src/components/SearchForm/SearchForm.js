import React, { useState } from "react"
import API from "../../utils/API";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./style.css";

function SearchForm() {

  const [books, setBooks] = useState([]);
  const [year, setYear] = useState("-50");
  const [name, setName] = useState("");
  // add search by name


  React.useEffect(() => {
    if (year === "") {
      setYear("-50");
    }
  }, [year])

  function loadYearbook(searchYear, searchName) {
    // console.log("load");
    if (year !== "-50" && name !== "") {
      API.getBooksByYearandName(searchYear, searchName).then((books) => {
        setBooks(books.data);
        setYear("-50");
        setName("");
        console.log(books.data);
      })
        .catch(err => console.log(err));
    }
    else if (year !== "-50") {
      API.getBooksByYear(searchYear).then((books) => {
        setBooks(books.data);
        setYear("-50");
        setName("");
        console.log(books.data);
      })
        .catch(err => console.log(err));
    }
    else if (name !== "") {
      API.getBooksByName(searchName).then((books) => {
        setBooks(books.data);
        setYear("-50");
        setName("");
        console.log(books.data);
      })
        .catch(err => console.log(err));
    }

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
              }} placeholder="Year here" className="form-control" id="searchForYB" />
            </div>

            <div className="mb-5">
              <input onChange={(event) => {
                event.preventDefault();
                // console.log("banana")
                setName(event.target.value);
              }} placeholder="School name here" className="form-control" id="searchForYBname" />
            </div>

            <button onClick={(event) => {
              event.preventDefault();
              loadYearbook(year, name);
              document.getElementById('searchForYB').value = '';
              document.getElementById('searchForYBname').value = '';
            }} type="submit" className="btn btn-primary">Submit</button>
          </form>


          <div className="searchResult">
            {books.map((book, id) => {
              var href = "/display/" + book.id;
              return (


                <p className="searchList"><a key={id} href={href}>{book.schoolName}, {book.year}</a></p>
              )
            })}
          </div>
        </div>


      </div>
    </div>
  )

}

export default SearchForm;

// <Card>

//   <CardBody>
//     <CardTitle tag="h5"> Yearbook:{book.schoolName} </CardTitle>
//     <CardSubtitle tag="h6" className="mb-2 text-muted"> Year: {book.year} </CardSubtitle>

//     <Button><a key={id} href={href}>View </a></Button>

//   </CardBody>
// </Card>