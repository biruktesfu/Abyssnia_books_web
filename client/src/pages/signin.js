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
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" placeholder="Enter email" id="email" />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>

    </div>
  );
};

export default SignIn;
