import React from "react";

function SearchForm(props) {
  return (
    <div className="field">
      <div className="control">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="input"
          placeholder="filter by column"
          id="term"
        />
      </div>
    </div>
  );
}

export default SearchForm;
