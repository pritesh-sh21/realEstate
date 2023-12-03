import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/Admin/register", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
      headers: { "Content-type": "application/json" },
    });
    if (res.status === 200) setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/sign-in"} />;
  }
  return (
    <div className="signin-page-area pd-top-50 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <form className="signin-inner">
              <div className="row">
                <div className="col-12">
                  <label className="single-input-inner style-bg-border">
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="col-12">
                  <label className="single-input-inner style-bg-border">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <div className="col-12">
                  <label className="single-input-inner style-bg-border">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <div className="col-12 mb-4">
                  <button className="btn btn-base w-100" onClick={handleSubmit}>
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
