// import { session } from "passport";
import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";

function LoginForm() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    async function signup(userName, passWord) {
        // console.log("triggeredsignup");
        var userData = { username: userName, password: passWord };
        API.signup(userData).then((res) => {
            // console.log(res);
            if (res.data === false) {
                // console.log("taken");
                alert("Username already taken!");
            }
            else {
                API.login(userData).then((res) => {
                    sessionStorage.setItem("userId", res.data);
                    window.location.replace("/create");
                    alert("Account created!");
                });
            }
        });
    }

    function login(userName, passWord) {
        // console.log("triggeredlogin");
        var userData = { username: userName, password: passWord };
        API.login(userData).then((res) => {
            // console.log(res);
            if (res.data && res.data !== "wrong") {
                window.location.replace("/create");
                <a href="/create">Login</a>
                // console.log("you are logged in");
                alert("Login");
                sessionStorage.setItem("userId", res.data);
            }
            else if (res.data === "wrong") {
                alert("Wrong password!");
            }
            else {
                // console.log("there is no account");
                alert("Check again, no such account");
            }
        });
    }

    return (
        <div className="container"> <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-5">
                <form className="meform">
                    <h1> Login </h1>
                    <div className="md-5">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input placeholder="Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => {
                            event.preventDefault();
                            // console.log("banana")
                            setName(event.target.value);
                        }} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => {
                            event.preventDefault();
                            // console.log("banana")
                            setPassword(event.target.value);
                        }} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(event) => {
                        event.preventDefault();
                        login(name, password);
                    }
                    }><a href="/create">Login</a></button>



                    <button type="submit" className="btn btn-primary" onClick={(event) => {
                        event.preventDefault();
                        signup(name, password);
                    }
                    }>Signup</button>
                </form>
            </div>
        </div>
        </div>
    )

}

export default LoginForm;