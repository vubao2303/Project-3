import React from "react";
import "./style.css";

function MainPage() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Mnemosyne</h1>
        <h2><small>CREATE MEMORY | MAKE A YEARBOOK  </small></h2>
        <br />
        <div className="mainLinks">
          {/* Link to login  */}
          <button><a href="/login">Login To Create</a></button>
          {/* Link to search */}
          <button><a href="/search">Search For Yearbook</a></button>
          {/* Link to create page  */}
          {/* <button><a href="/create">Create</a></button> */}

        </div>
      </div>
    </div>
  )
}

export default MainPage;


