import React from "react"

function StudentForm() {
  return (
    <div clasName="container">
      <form >
        {/* student Name */}
        <div className="mb-3">
          <label for="studentName" className="form-label">Name</label>
          <input type="text" className="form-control" id="studentName" />
        </div>

        {/* title  */}
        <div className="mb-3">
          <label for="studentTitle" className="form-label">Title </label>
          <input type="text" className="form-control" id="studentTitle" />
        </div>

        {/* hobbies */}
        <div className="mb-3">
          <label for="studentHobbies" className="form-label">Hobbies</label>
          <input type="text" className="form-control" id="studentHobbies" />
        </div>

        {/* quote */}
        <div className="mb-3">
          <label for="studenQuote" className="form-label">Quote</label>
          <input type="text" className="form-control" id="studenQuote" />
        </div>

        {/* linkedIn */}
        <label for="basic-url" className="form-label">LinkedIn </label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="LinkedIn link" id="basic-url" aria-describedby="basic-addon3" />
        </div>


      </form>
    </div>
  )
}

export default StudentForm;



{/* <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1">
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1">
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */}