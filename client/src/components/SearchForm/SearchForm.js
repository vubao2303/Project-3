import React from "react";

function SearchForm() {
  return (
    <div>
      <form >
        <div className="mb-3">
          <label for="searchforYearBook" className="form-label">Search</label>
          <input placeholer="search for your yearbook here" type="password" className="form-control" id="searchForYB" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )

}

export default SearchForm;