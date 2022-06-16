import React from "react";

const SignIn = () => {
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
        <h1>Sign In</h1>
      </div>

      <div className='mx-5'>
      <form >
        <div className="form-group" action="/signin" method="POST">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" placeholder="Enter email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>

    </div>
  );
};

export default SignIn;
