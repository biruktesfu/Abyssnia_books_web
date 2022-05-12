import React from "react";

const Events = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "Left",
        alignItems: "Left",
        height: "100vh",
        padding: "2rem"
      }}
    >
      <p>
        <h1>Welcome to Abyssinian Books Events</h1>
        <h2>Currently Planned Events:</h2>
      </p>
      <img 
      src="https://media4.giphy.com/media/SUzPI5wAkp6UXMEkok/giphy.gif?cid=ecf05e47c9j9zfieey67rgksm8zb6gyp5ce40wq4ti0hhz92&rid=giphy.gif&ct=g"
      alt="new"
      style={{  width: "50%",
      height: "50%",}}
      />
    </div>
  );
};

export default Events;
