// import React from "react";
// import "./style.css";


// function MainPage() {
//   return (
//     <div>
//       <div className="hero-image">

//         <div className="hero-text">
//           <h1>Mnemosyne</h1>
//           <p><h5>Collect Moments</h5></p>
//           <button>Create Yearbook</button>
//         </div>

//       </div>
//     </div>

//   )
// }

// export default MainPage;


// try this 


import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (

    <div className="hero-image">
      <div className="hero-text">
        <h1>Mnemosyne</h1>
        <h2><small>CREATE MEMORY</small></h2>

        <br />
        <div className="mainLinks">


          <Link to={"/login"}>
            <button><a className="login-bnt">Login</a></button>
          </Link>

          <Link to={"/search"}>
            <button><a className="bnt">Search</a></button>
          </Link>

          <Link to={"/Create"}>
            <button><a className="create-bnt">Create</a></button>
          </Link>

        </div>

        <div>

        </div>
      </div>
    </div>


  )
}

export default MainPage;