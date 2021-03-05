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
        <div className="button-hover-reveal-wrapper hide-for-small-only">
          <label>Learn More</label>
          <a href="/login" target="_blank" rel="noreferrer"
            className="button-hover-reveal">Login</a>

          <Link to={"/search"}>
            <button><a className="button-hover-reveal">Search</a></button>
          </Link>

          <Link to={"/Creat"}>
            <a className="button-hover-reveal">Create</a>
          </Link>

        </div>

        <div>

        </div>
      </div>
    </div>


  )
}

export default MainPage;