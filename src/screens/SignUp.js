import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/creatuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });

      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("Enter valid credentials");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign up</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="name"
                      value={credentials.name}
                      onChange={onChange}
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="geolocation"
                      name="geolocation"
                      value={credentials.geolocation}
                      onChange={onChange}
                      placeholder="Location"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="termsCheck"
                    />
                    <label className="form-check-label" htmlFor="termsCheck">
                      I agree to Zomato's <a href="#">Terms of Service</a>,{" "}
                      <a href="#">Privacy Policy</a> and{" "}
                      <a href="#">Content Policies</a>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-danger w-100">
                    Create account
                  </button>
                  <div className="text-center my-3">or</div>
                  <button type="button" className="btn btn-light w-100 border">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      alt="Google Sign In"
                      style={{ width: "20px", marginRight: "8px" }}
                    />
                    Sign in with Google
                  </button>
                </form>
                <div className="text-center mt-3">
                  <p>
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
