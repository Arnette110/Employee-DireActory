import React from "react";

function SearchForm(props){
    return (
      <form className="search">
      <div className="input-field">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="{props.worker}"
          id="term"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
        {/* <h1>{props.findEmployees}</h1> */}
      </div>
    </form>
    );
}

export default SearchForm;