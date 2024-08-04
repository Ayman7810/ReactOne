/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Nav = ({ SearchMovie }) => {
  const onSearch = (word) => {
    SearchMovie(word);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-style">
      <div className="container">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent">
          <form className="d-flex mt-sm-3 form">
            <input
              className="form-control me-2 font "
              type="search"
              placeholder="ابحث عن فلم"
              aria-label="Search"
              onChange={(e) => {
                onSearch(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
