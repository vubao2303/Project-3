import React from "react"
import { useLocation } from "react-router-dom";
import FrontResult from '../components/FrontResult/FrontResult';
import StudentCard from "../components/SearchForm/SearchForm";
function Yearbook() {
  let location = useLocation();
  console.log(location); 
  // /yearbook/1
  return (
    <StudentCard />
  )
}
export default Yearbook