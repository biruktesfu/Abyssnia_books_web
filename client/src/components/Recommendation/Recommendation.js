import React from "react";
import Card from "../Card/Card";

const Recommendation = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "Left",
          alignItems: "Left",
          height: "20vh",
        }}
      >
        <h1>
          Recommendation <hr />
        </h1>
      </div>
      
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Recommendation;
