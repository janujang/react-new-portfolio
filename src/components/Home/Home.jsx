import React, { useEffect, useRef } from "react";
import "./Home.scss";
import { ExpandMore } from "@material-ui/icons";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="home" id="home">
      {/* <div className="left">
        <div className="imgContainer">
          <img src="assets/jg" alt="" />
        </div>
      </div> */}
      <div className="container">
        <div className="introText">
          <h2>Hi, I'm</h2>
          <h1>Janujan</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: ["Software Development", "Architecture", "Hardware"],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#about">
          <ExpandMore className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
