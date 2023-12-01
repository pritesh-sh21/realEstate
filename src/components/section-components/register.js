import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      email: "", // Added email field to the state
    };
  }

  componentDidMount() {
    const $ = window.$;

    $("body").addClass("bg-gray");
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Admin = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email, // Added email to the Admin object
    };

    axios
      .post("http://localhost:5000/Admin/register", Admin)
      .then((res) => {
        alert("Registration Successful");
        if (res.status == 200) {
          window.location.href = "/";
        }
      })
      .catch((res) => alert(res.data));
  }

  render() {
    return (
      <div className="signin-page-area pd-top-100 ">
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
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        required
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        required
                      />
                    </label>
                  </div>

                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required
                      />
                    </label>
                  </div>

                  <div className="col-12 mb-4">
                    <button
                      className="btn btn-base w-100"
                      onClick={this.onSubmit}
                    >
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
  }
}

export default Register;
