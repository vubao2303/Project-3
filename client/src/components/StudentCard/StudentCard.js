import React from "react"

function StudentCard(props) {
  return (
    <div>
      return (
      <div className="container">
{/* add props skeleton */}
        <div className="card mb-3">
          <h2>{props.name}</h2>
          <h3>Also known as {props.nickname}</h3>
          <h2>Hobbies: {props.hobbies}</h2>
          <h2>Quote: {props.quote}</h2>
          <h2>Linkedin: {props.link}</h2>
          <h2>{props.title}</h2>
          
        </div>

      </div>
  )
    </div>
  )
}
export default StudentCard