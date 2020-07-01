// about.js

import React from "react";

import "./about.css";

function About(props) {
  // console.log(props);
  
  return (
    <div className="about">
      <p className="about_text">
      인터넷 강의를 스터디하며 만든 사이트입니다.
      </p>
      <div className="about_link">
        <a href="https://nomadcoders.co/react-fundamentals/lobby" rel="noopener noreferrer" target="_blank">인터넷 강의 링크</a>
        <a href="https://github.com/jexists/study/tree/master/e_react/200701_movie_app" rel="noopener noreferrer" target="_blank">GitHub 링크</a>
      </div>
    </div>
  );
}

export default About;