import React from "react"

function StudentCard() {
  return (
    <div>
      return (
      <div className="container">

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-2">
              <img src={props.image} alt="..." />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p> {props.author} </p>
                <p className="card-text">{props.synopsis}</p>
                <a href={props.link} target="_blank" > <button type="button"> View</button> </a>
                <button type="button" onClick={(event) => {
                  event.preventDefault();
                  props.saveBooks({ title: props.title, author: props.author, synopsis: props.synopsis, image: props.image, link: props.link });
                }}> save </button>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
    </div>
  )
}
export default StudentCard