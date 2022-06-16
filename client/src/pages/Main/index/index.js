import React, { Fragment } from "react";

//Components
import SearchBar from "../../../components/SearchBar/SearchBar";
import Recommendation from "../../../components/Recommendation/Recommendation";
import Explore from "../../../components/Explore/Explore";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
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
              Welcome to Abyssinian Books.(index.js) <hr />
            </h1>
          </div>
        </div>
        <SearchBar />
        <Recommendation />
        <Explore />
      </div>
    </Fragment>
  );
};

export default Home;
