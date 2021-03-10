import React, { useState, useEffect } from "react"
import CreateForm from '../components/CreateForm/CreateForm';
import UserPage from '../components/UserPage/UserPage'
import API from "../utils/API";

function Create() {

  const [user, setUser] = useState(sessionStorage.getItem("userId"));
  const [userName, setUserName] = useState("");

  useEffect(() => {
    API.getUserById(user).then((users) => {
      console.log(users)
      setUserName(users.data.username);
    })
      .catch(err => console.log(err));
  }, [])


  return (
    <div className="container overflow-hidden">
      <div className="row">
        <div className="col">
          <div className="createform"><CreateForm /></div>
        </div>
        <div className="col">
          <div className="p-3 border">
            <h2> My Yearbooks </h2>
            <h4> {userName} </h4>
            <UserPage /></div>
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