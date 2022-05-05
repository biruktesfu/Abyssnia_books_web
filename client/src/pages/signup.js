import React from "react";

const SignUp = () => {
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
        <h1>Sign Up</h1>
      </div>
      <div className="mx-5">
        <form action="/signup" method="POST">
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label for="validationDefault01">First name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="First name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02">Last name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefaultUsername">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationDefault03">Email</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationDefault04">Phone</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault04"
                placeholder="09123456789"
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationDefault05">Password</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="custom-file ">
            <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" for="customFile">
              Choose Image for id
            </label>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" for="invalidCheck2">
                <a href="./about">Agree to terms and conditions</a>
              </label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
