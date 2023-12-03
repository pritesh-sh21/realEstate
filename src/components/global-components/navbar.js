import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Navbar = () => {
  const { userInfo } = useContext(UserContext);
  const renderUserGreeting = () => {
    if (Object.keys(userInfo).length === 0) {
      return <Link to="/sign-in">Login</Link>;
    } else {
      return <span style={{ color: "white" }}>Hi, {userInfo}</span>;
    }
  };

  const publicUrl = "";
  return (
    <div className="navbar-area navbar-area-1">
      <div className="navbar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-lg-left text-center">
              <ul>
                <li>
                  <p>
                    <img
                      src={publicUrl + "assets/img/icon/location.png"}
                      alt="img"
                    />{" "}
                    Allahabad, India
                  </p>
                </li>
                <li>
                  <p>
                    <img
                      src={publicUrl + "assets/img/icon/phone.png"}
                      alt="img"
                    />{" "}
                    +9179XXXXXXXX
                  </p>
                </li>
                <li>
                  <p>
                    <img
                      src={publicUrl + "assets/img/icon/envelope.png"}
                      alt="img"
                    />{" "}
                    realestate@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="topbar-right text-lg-right text-center">
                <li>{renderUserGreeting()}</li>
                <li className="social-area">
                  <a>
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                  <a>
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                  <a>
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>
                  <a>
                    <i className="fab fa-skype" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              className="menu toggle-btn d-block d-lg-none"
              data-target="#dkt_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">Real Estate Marketplace</Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <ul>
              <li>
                <a className="search" href="#">
                  <i className="fa fa-search" />
                </a>
              </li>
              <li>
                <Link className="btn btn-base" to="/add-property">
                  <span className="btn-icon">
                    <i className="fa fa-plus" />
                  </span>{" "}
                  <span className="btn-text">SUBMIT PROPERTY</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="dkt_main_menu">
            <ul className="navbar-nav menu-open text-center">
              <li className="menu-item-has-children current-menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children current-menu-item">
                <a href="#">Property</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/property-for-sale">Property For Sale</Link>
                  </li>
                  <li>
                    <Link to="/property-for-rent">Property For Rent</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children current-menu-item">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/sign-in">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/add-property">Add Property</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop">
            <ul>
              <li>
                <a className="search" href="#">
                  <i className="fa fa-search" />
                </a>
              </li>
              <li>
                <Link className="btn btn-base" to="/add-property">
                  <span className="btn-icon">
                    <i className="fa fa-plus" />
                  </span>{" "}
                  <span className="btn-text">SUBMIT PROPERTY</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
