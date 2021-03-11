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
                                <a className="nav-link" href="/Search"><i class="fas fa-search"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fas fa-user"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/create"> Your Profile</a></li>
                                            <li><a className="dropdown-item" href="/login"> Login </a> </li>
                                            <li><a onClick={logoutUser} className="dropdown-item" href="/"> Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Contact Us</a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><a className="dropdown-item" target="_blank" href="https://www.linkedin.com/in/b-tram-vu/">B Vu</a></li>
                                            <li><a className="dropdown-item" target="_blank" href="https://www.linkedin.com/in/raffi-lepejian-071876153/">Raffi Lepejian</a></li>
                                            <li><a className="dropdown-item" target="_blank" href="https://www.linkedin.com/in/jasmine-franklin-8b08ba121/">Jasmine Franklin</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;