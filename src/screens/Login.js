import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
   const [credentials, setcredentials] = useState({
      email: "",
      password: ""
   });
   let navigate = useNavigate();
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/api/loginUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
  
        const json = await response.json();
        console.log(json);
        if (!json.success) {
          alert("Enter valid credentials");
        }
        if (json.success) {
         localStorage.setItem("authToken", json.authToken);
         console.log(localStorage.getItem("authToken"))
         navigate('/')
       }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
  
    const onChange = (event) => {
      setcredentials({ ...credentials, [event.target.name]: event.target.value });
    };
   return(
   <>
      <div className="container">
        <div className="row">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
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
                    Login
                  </button>
                  <div className="text-center mt-3">
                  <p>
                    I'm a new user? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>                 
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
   );
    }