import React from "react";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage-main">
      <div className="image">
        <img src="src\Images\myPic.jpg" alt="" />
      </div>
      <div className="introduction-matter">
        <p>
          Hi, I'm <b>B Md Mohassin Hussain</b>, a passionate developer currently
          pursuing a B.Tech degree in Artificial Intelligence & Machine Learning
          from CMRCET, Hyderabad, Telangana. I bring a strong foundation in
          problem-solving and critical thinking, striving to create impactful
          solutions that stand out.
        </p>
        {/* With a keen interest in AI and ML,
          I am dedicated to innovation and driven to excel in pushing the
          boundaries of technology. */}
      </div>
    </div>
  );
}
