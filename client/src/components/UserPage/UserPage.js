// when I click login, it it will take me to this page, where I have all of my classes that I created

// this user page will have a list of my created yearbook (if any), and a create button for me to create more

// the create button will take me to the create page

// the list of my year book will take me to the classes and yearbook page
import React, { useState, useEffect } from "react"
import API from "../../utils/API";
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

    return (
        <div>
            <div className="searchResult">
                {books.map((book, id) => {
                    var href = "/display/" + book.id;
                    return (
                        <div className="schoolList">
                            <div className="btn-group dropend">
                                <div type="button" className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {book.schoolName}, {book.year}
                                </div>
                                <ul className="dropdown-menu">
                                    <li> <a key={id} href={href}> View </a> </li>
                                    <li> <a href="/class"> Add Class </a> </li>
                                    <li> <a href="/student"> Add Student </a> </li>
                                    <li> Delete </li>
                                </ul>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )

}

export default UserPage;


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