import React, { useState } from "react";
import API from "../../utils/API";


function CreateForm() {

    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    function createYearbook(schoolname, schoolyear) {
        var yearbookData = { schoolName: schoolname, year: schoolyear }
        API.createYearbook(yearbookData);
    }

    return (
        <div>
            <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">School Name</label>
                <div className="col-sm-10" />
                <input onChange={(event) => {
                    event.preventDefault();
                    // console.log("banana")
                    setName(event.target.value);
                }} type="schoolName" className="form-control form-control-sm" id="colFormLabelSm" placeholder="School Name" />
            </div>

            <div className="row mb-3">
                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Year</label>
                <div className="col-sm-10" />
                <input onChange={(event) => {
                    event.preventDefault();
                    // console.log("banana")
                    setYear(event.target.value);
                }} type="year" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Year" />
            </div>
            <div className="col-auto">
                <button onClick={(event) => {
                    event.preventDefault();
                    createYearbook(name, year);
                }} type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>

    )
}

export default CreateForm;