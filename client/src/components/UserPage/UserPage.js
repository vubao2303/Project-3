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
                        <ul><li><a key={id} href={href}>{book.schoolName}, {book.year}</a></li></ul>
                    )
                })}
            </div>
        </div>
    )

}

export default UserPage;