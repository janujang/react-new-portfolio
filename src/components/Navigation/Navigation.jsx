import React from "react";
import "./Navigation.scss";
import { Person, Mail } from "@material-ui/icons";

const Navigation = (props) => {
  return (
    <div className={`navigation ${props.menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            J.G
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>git</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mail</span>
          </div>
          {/* <a href="#portfolio">Portfolio</a>
          <a href="#experience">Experience</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#contact">Contact</a> */}
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => props.onMenuOpen(!props.menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
