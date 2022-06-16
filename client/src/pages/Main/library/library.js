import React, { Fragment } from "react";
import ListBooks from "../../../components/ListBooks/ListBooks";

const Library = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "Left",
          alignItems: "Left",
          height: "20vh",
        }}
      >
        <h1>Library</h1>
      </div>
      <div>
        <h1>
          My Books <hr />
        </h1>
      </div>
      <Fragment>
        <ListBooks />
      </Fragment>
    </div>
  );
};

export default Library;
