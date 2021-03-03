import React from "react";

function CreateForm() {
    return (
        <div>
            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">School Name</label>
                <div class="col-sm-10" />
                <input type="schoolName" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Year</label>
                <div class="col-sm-10" />
                <input type="year" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
            </div>

            <div class="row mb-3">
                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Name</label>
                <div class="col-sm-10" />
                <input type="name" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>

    )
}

export default CreateForm;