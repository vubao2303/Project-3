import React from "react"
import CreateForm from '../components/CreateForm/CreateForm';
import UserPage from '../components/UserPage/UserPage'
function Create() {
  return (
    <div className="container overflow-hidden">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border"> <h2> My Yearbooks </h2> <UserPage /></div>
        </div>
        <div className="col">
          <div className="createform"><CreateForm /></div>
        </div>

      </div>
    </div>
  )
}
export default Create


{/* <div className="container overflow-hidden">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3 border bg-light"><CreateForm /></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"> <UserPage /></div>
    </div>
  </div>
</div> */}