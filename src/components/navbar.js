import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="topnav__wrapper">
        <div class="topnav">
          <nav>
            <ul class="nav__ul">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="portfolio">
                <li>Portfolio</li>
              </Link>
              <Link to="resume">
                <li>Resume</li>
              </Link>
              <Link to="contact">
                <li>Contact</li>
              </Link>
              <Link to="login">
                <li>Login</li>
              </Link>
            </ul>
          </nav>
          <div class="social__wrapper">
            <Link href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link href="#">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>
            <Link href="#">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
