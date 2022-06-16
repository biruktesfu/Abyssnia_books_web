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
              <label htmlFor="validationDefault01">Book Name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="First name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault02">Author Name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault02">Description</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3 form-group">
              <label htmlFor="sel1">Select a Genre :</label>
              <select className="form-control" id="sel1">
                <option>Action</option>
                <option>Adventure</option>
                <option>Art & Photography</option>
                <option>Business & Economics</option>
                <option>Biography & Memoirs</option>
                <option>Comics & Graphic Novels</option>
                <option>Health , Family & LifeStyle</option>
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
              <label htmlFor="validationDefault02">Description</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault02">ISBN-13</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault02">Price</label>
              <input
                type="number"
                className="form-control"
                id="validationDefault02"
                placeholder="$ 4.00"
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload Books Image</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload Book </span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
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
              <label className="form-check-label" htmlFor="invalidCheck2">
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
