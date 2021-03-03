import React from "react"

function ClassForm() {
  return (
    <div clasName="container">
      <form >
        {/* Grade/Class Level/ Name */}
        <div className="mb-3">
          <label for="grade" className="form-label">Grade/Class Level</label>
          <input type="text" className="form-control" id="grade" />
        </div>

        {/*  Title/Class Name  */}
        <div className="mb-3">
          <label for="class-name" className="form-label">Title/Class Name</label>
          <input type="text" className="form-control" id="class-name" />
        </div>

        {/* Image for front page */}
        <div className="mb-3">
          <label for="class-frontpage" className="form-label">Front's Page Image</label>
          <input type="text" className="form-control" id="studentHobbies" />
        </div>

        {/* shoudl I have a teacher Name here? */}
        <div className="mb-3">
          <label for="studenQuote" className="form-label">Teacher NAme? Maybe </label>
          <input type="text" className="form-control" id="studenQuote" />
        </div>

        {/* Button here  */}
        {/* Save and add another class */}
        <button type="button" class="btn btn-primary">Save and add another class</button>

        {/* Save and go on to add student */}
        <button type="button" class="btn btn-primary"> Save and go on to add student</button>

      </form>
    </div>
  )
}

export default ClassForm;