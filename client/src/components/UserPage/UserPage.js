// when I click login, it it will take me to this page, where I have all of my classes that I created

// this user page will have a list of my created yearbook (if any), and a create button for me to create more

// the create button will take me to the create page

// the list of my year book will take me to the classes and yearbook page
import React, { useState, useEffect } from "react"
import API from "../../utils/API";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

// import "./style.css";


function UserPage() {

    const [books, setBooks] = useState([]);
    const [user, setUser] = useState(sessionStorage.getItem("userId"));


    useEffect(() => {
        API.getBooksByUser(user).then((books) => {
            setBooks(books.data);
        })
            .catch(err => console.log(err));
    }, [user])

    function deleteBook(id) {
        API.deleteBook(id).then(() => {
            API.getBooksByUser(user).then((books) => {
                setBooks(books.data);
            })
                .catch(err => console.log(err));
        });
    }

    return (
        <div>
            <div className="searchResult">
                {books.map((book, id) => {
                    var href = "/display/" + book.id;
                    return (

                        <div className="schoolList">
                            <Card>

                                <CardBody>
                                    <CardTitle tag="h5"> School: {book.schoolName} </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Year: {book.year} </CardSubtitle>

                                    <Button onClick={() => { window.location.replace(href) }} > View </Button>
                                    <Button onClick={() => { window.location.replace("/class") }}>Add Class</Button>
                                    <Button onClick={() => { window.location.replace("/student") }}>Add Student</Button>
                                    <Button onClick={(event) => {
                                        event.preventDefault();
                                        deleteBook(book.id)
                                    }} > Delete</Button>
                                </CardBody>
                            </Card>

                        </div>

                    )
                })}
            </div>
        </div>
    )

}

export default UserPage;



// import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const Example = (props) => {
//     return (
//         <div>
//             <Card>

//                 <CardBody>
//                     <CardTitle tag="h5"> School: {book.schoolName} </CardTitle>
//                     <CardSubtitle tag="h6" className="mb-2 text-muted"> Year: {book.year} </CardSubtitle>

//                     <Button>Button</Button>
//                     <Button>Button</Button>
//                     <Button>Button</Button>
//                     <Button>Button</Button>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// export default Example;

// try drop right 
{/* <div className="btn-group dropend">
    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {book.schoolName}, {book.year}
    </button>
    <ul className="dropdown-menu">
        <li> <a key={id} href={href}> View </a> </li>
        <li> <a href="/class"> Add Class </a> </li>
        <li> <a href="/student"> Add Student </a> </li>
        <li> Delete </li>
    </ul>
</div> */}


// try to make 5 collumns 
// <div className="container">
//     <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
//         <div className="col">
//             <div className="p-3  ">{book.schoolName}</div>
//         </div>
//         <div className="col">
//             <div className="p-3  ">{book.year}</div>
//         </div>
//         <div className="col">
//             <div className="p-3  "> <a key={id} href={href}> View </a>
//             </div>
//         </div>
//         <div className="col">
//             <div className="p-3  "><a href="/class"> Add Class </a></div>
//         </div>
//         <div className="col">
//             <div className="p-3  "><a href="/student"> Add Student </a> </div>
//         </div>

//     </div>
// </div>

// try to make 2 columns 
{/* <div className="container">
    <div className="row">
        <div className="col-md-4"> {book.schoolName}, {book.year} </div>
        <div className="col-md-4 ms-auto"><a key={id} href={href}> View </a>
            <button> <a href="/class"> Add Class </a></button>
            <button> <a href="/student"> Add Student </a></button></div>
    </div>

</div> */}


// Just a list 
{/* <ul classname="row">
    <li>{book.schoolName}, {book.year}
        <a key={id} href={href}> View </a>
        <button> <a href="/class"> Add Class </a></button>
        <button> <a href="/student"> Add Student </a></button>
    </li>
</ul> */}