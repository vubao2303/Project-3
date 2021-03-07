import React from "react"

function StudentCard(props) {
  return (
    <div>
      return (
      <div className="container">

        <div className="card mb-3">
          <h2>{props.name}</h2>
          <h3>Also known as {props.nickname}</h3>
          <h4>Hobbies:</h4>
          <p>{props.hobbies}</p>
          <h4>Quote:</h4>
          <p>{props.quote}</p>
          <h5>Link:</h5>
          <a href = {props.linkedIn} >See more info on this person!</a>
        </div>

      </div>
  )
    </div>
  )
}
export default StudentCard