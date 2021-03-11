// when I click login, it it will take me to this page, where I have all of my classes that I created

// this user page will have a list of my created yearbook (if any), and a create button for me to create more

// the create button will take me to the create page

// the list of my year book will take me to the classes and yearbook page
import React, { useState, useEffect } from "react"
import API from "../../utils/API";
import {
    Card, CardBody,
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
                                    <Button onClick={() => { window.location.replace(href) }} > <i class="fas fa-eye"></i></Button>
                                    <Button onClick={() => { window.location.replace("/class") }}> <i class="fas fa-plus"></i> Class</Button>
                                    <Button onClick={() => { window.location.replace("/student") }}><i class="fas fa-plus"></i> Student</Button>
                                    <Button onClick={(event) => {
                                        event.preventDefault();
                                        deleteBook(book.id)
                                    }} > <i class="fas fa-trash-alt"></i></Button>
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