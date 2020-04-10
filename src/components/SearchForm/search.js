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
          placeholder="filter by first name"
          id="term"
        />
      </div>
    </form>
    );
}

export default SearchForm;