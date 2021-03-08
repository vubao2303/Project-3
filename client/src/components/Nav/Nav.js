import React from "react";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    {/* <button className="btn btn-outline-success" type="submit">Login</button> */}
                    <a href="/create"> Create</a>

                </div>
            </nav>
        </div>

    )
}

export default Nav;