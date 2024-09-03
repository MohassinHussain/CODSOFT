import React from "react";
import "./about.css";
export default function About() {
  return (
    <div className="about-main">
      <h1 className="about-head">About</h1>
      <p>
        I am an enthusiastic developer with a strong foundation in AI & ML,
        problem-solving, and critical thinking. I thrive in team environments
        and focus on creating user-centric interfaces that bridge the gap
        between design and development for enhanced user experiences.
      </p>
      <div className="about-subs">
        <div className="Education">
          <h1>Education</h1>
          <p>Bachelor of Technology in AI & ML, CMRCET 2022-2026, <b>CGPA: 9.08</b></p>
          <p>Intermediate, MPC in Sri chaitanya junior kalasala 2020-2022, <b>percentage: 97.5</b></p>
          <p>Secondary education Sreemannarayana High school 2019-2020, <b>GPA: 10</b></p>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <h2>Frontend</h2>
          <div className="skills-container-individual">
            <img src="src\Images\htmlLogo.png" alt="" />
            <img src="src\Images\cssLogo.png" alt="" />
            <img src="src\Images\jsLogo.png" alt="" />
            <img src="src\Images\reactLogo.png" alt="" />
            <img src="src\Images\bootstrapLogo.png" alt="" />
            <img src="src\Images\tailwindLogo.png" alt="" />
            <img src="src\Images\rnLogo.png" alt="" />
          </div>
          <h2>Backend </h2>
          <div className="skills-container-individual">
            <img src="src\Images\nodeLogo.png" alt="" />
            <img src="src\Images\expressLogo.png" alt="" />
            <img src="src\Images\firebaseLogo.png" alt="" />
            <img src="src\Images\mongoLogo.png" alt="" />
          </div>
          <h2>Programming Languages </h2>
          <div className="skills-container-individual">
            <img src="src\Images\cLogo.png" alt="" />
            <img src="src\Images\cppLogo.png" alt="" />
            <img src="src\Images\javaLogo.png" alt="" />
            <img src="src\Images\pyLogo.png" alt="" />
          </div>
          <h2>Web Hosting</h2>
          <div className="skills-container-individual">
            <img src="src\Images\wordpressLogo.png" alt="" />
          </div>
          <h2>DevOps</h2>
          <div className="skills-container-individual">
            <img src="src\Images\gitHubLogo.png" alt="" />
            <img src="src\Images\netlifyLogo.png" alt="" />
            <img src="src\Images\vercelLogo.png" alt="" />
            <img src="src\Images\clerkLogo.png" alt="" />
          </div>
          <h2>Designing </h2>
          <div className="skills-container-individual">
            <img src="src\Images\figmaLogo.png" alt="" />
            {/* <img src="src\Images\.png" alt="" /> */}
          </div>
        </div>
      </div>
      <div className="certifications">
        <h1>Certifications/ Achievements</h1>
        <p>Hosted a tech event <b>“BugRack”</b> at CMRCET’s largest tech event “Azura2k24.”</p>
        <p>Mentored juniors as part of the <b>MAGIC mentorship program</b>, helping them complete their projects.</p>
      </div>
    </div>
  );
}
