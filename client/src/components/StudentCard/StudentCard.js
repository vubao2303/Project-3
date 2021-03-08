// import React from "react";

// function StudentCard(props) {
//   return (
//       <div className="container">

//         <div className="card mb-3">
//           <h2>{props.name}</h2>
//           <h3>Also known as {props.nickname}</h3>
//           <h4>Hobbies:</h4>
//           <p>{props.hobbies}</p>
//           <h4>Quote:</h4>
//           <p>{props.quote}</p>
//           <h5>Link:</h5>
//           <a href = {props.linkedIn} >See more info on this person!</a>
//         </div>

//       </div>
//   )
// }
// export default StudentCard;





import React from "react";

function StudentCard(props) {
  return (
    <div className="container">

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card mb-3">
              <h2>{props.name}</h2>
              <h3>Also known as {props.nickname}</h3>
              <h4>Hobbies:</h4>
              <p>{props.hobbies}</p>
              <h4>Quote:</h4>
              <p>{props.quote}</p>
              <img src = {props.image}/>
              <h5>Link:</h5>
              <a href={props.linkedIn} >See more info on this person!</a>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}


export default StudentCard;