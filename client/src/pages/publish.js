import React from "react";

const Publish = () => {
  return (
    <div className="container">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "Left",
          alignItems: "Left",
          height: "10vh",
        }}
      >
        <h1>Publish</h1>
      </div>
         <div className="mx-5">
        <form action="/publish" method="POST">
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label for="validationDefault01">Book Name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="First name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02">Author Name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02">Description</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div class="col-md-4 mb-3 form-group">
              <label for="sel1">Select a Genre :</label>
              <select class="form-control" id="sel1">
                <option>Action</option>
                <option>Adventure</option>
                <option>Art & Photography</option>
                <option>Business & Economics</option>
                <option>Biography & Memoirs</option>
                <option>Comics & Graphic Novels</option>
                <option>Health , Family & LifeSytle</option>
                <option>Detective & Mystery</option>
                <option>Horror</option>
                <option>Short Stories</option>
                <option>Religion, spirituality, and new age</option>
                <option>Science & Technology </option>
                <option>Romance</option>
                <option>Sporty, Travel & Activities</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02">Description</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02">ISBN-13</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02">Price</label>
              <input
                type="number"
                class="form-control"
                id="validationDefault02"
                placeholder="$ 4.00"
                required
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Upload Books Image</span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Upload Book </span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
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

export default Publish;
