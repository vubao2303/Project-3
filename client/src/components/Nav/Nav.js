// import React from "react";

// function Nav() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/">Home</a>
//                     <div className="endNavbar">
//                         {/* <button className="btn btn-outline-success" type="submit">Login</button> */}
//                         <a href="/create"> Create</a>

//                         <a href="/login"> Login</a>
//                         <a href="/logout"> Logout </a>
//                     </div>

//                 </div>
//             </nav>
//         </div>

//     )
// }

// export default Nav;


// B trying 
import React from "react";


function Nav() {

    function logoutUser() {
        sessionStorage.clear();
    }
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">Home</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/create"> Create</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Search">Search</a>
                            </li>


                        </ul>

                        <div className="d-flex">

                            <a className="nav-link active" aria-current="page" href="/login"> Login</a>


                            <a onClick={logoutUser} className="nav-link active" aria-current="page" href="/"> Logout</a>

                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav;