import React, { useState } from "react";
import API from "../../utils/API";

function LoginForm() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function signup(userName, passWord) {
        console.log("triggeredsignup");
        var userData = { username: userName, password: passWord };
        API.signup(userData).then(res => {
            console.log(res);
            if (res.data === false) {
                console.log("taken");
                alert("Username already taken!");
            }
            else {
                console.log("not taken");
                alert("Account created!");
            }
        });
    }

    function login(userName, passWord) {
        console.log("triggeredlogin");
        var userData = { username: userName, password: passWord };
        API.login(userData).then((res) => {
            console.log(res);
<<<<<<< HEAD
            if (res.data) {
                console.log("you are logged in");
                alert("Loggin");
            }
            else {
                console.log("there is no account");
                alert("Check again, no such account");
            }
        });
=======
            console.log("im baaaaaaaaaack");
        })
>>>>>>> 4ad3eb0 (building out user tracking and logging in)
    }

    // function takeHome() {

    // }

    return (
        <div>
            <form >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => {
                        event.preventDefault();
                        // console.log("banana")
                        setName(event.target.value);
                    }} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => {
                        event.preventDefault();
                        // console.log("banana")
                        setPassword(event.target.value);
                    }} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={(event) => {
                    event.preventDefault();
                    login(name, password);
                }
                }>Login</button>
                <button type="submit" className="btn btn-primary" onClick={(event) => {
                    event.preventDefault();
                    signup(name, password);
                }
                }>Signup</button>
            </form>
        </div>
    )

}

export default LoginForm;