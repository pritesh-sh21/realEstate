import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext.js";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext);
  let navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/Admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      response.json().then((x) => {
        setUserInfo(x.username);
        alert("Signed in successfully");
        navigate("/");
      });
    } else {
      alert("wrong credentials");
    }
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
                      type="text"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="col-12 mb-4">
                  <button className="btn btn-base w-100" onClick={handleSubmit}>
                    Sign In
                  </button>
                </div>
                <div className="col-12">
                  <Link to="/register">Not Registered?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
