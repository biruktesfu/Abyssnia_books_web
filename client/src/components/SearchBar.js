import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div>
        <h1>Search Bar</h1>
        <form className="d-flex mx-5">
          <input type="text" className="form-control" />
          <button type="button" className="btn-outline-primary">
            search
          </button>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default SearchBar;
