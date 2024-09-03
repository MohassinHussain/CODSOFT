import React, { useState } from "react";
import "./projects.css";

export default function Projects() {

  const [visitStatus, setVisitStatus] = useState("Visit") 
  const projects = [
    {
      Title: "TechStovia",
      Description:
        "TechStovia is a platform that offers a wide range of resources for skill and knowledge development. It includes top documents available on the internet for learning and project execution. The Roadmap section guides users on what to learn, how to learn it, and the extent of learning required for specific skills.",
      TechStack:
        "React.js, Tailwind CSS, other React libraries, and MongoDB to store feedback",
        visitLink: "https://techstovia.netlify.app",
    },
   
    {
      Title: "ArchivEnvo",
      Description:
        "ArchivEnvo is a file-sharing website that allows users to share files using a code provided by the sender. Files remain on the server for a selected duration before expiring, supporting the sharing of texts, links, and other data with time constraints. No registration is required, and files automatically vanish after a set time.",
      TechStack:
        "Frontend: React.js, Tailwind CSS; Backend: Node.js, Express.js, MongoDB",
        visitLink: "https://archivenvo.vercel.app",
    },
    {
      Title: "Fake Logo Detection",
      Description:
        "Detecting fake logos by comparing them to original logos. The approach involves dividing the logo image into rows and columns, assigning index values to each cell. These index values are then compared with the corresponding cells of the original logo. If all index values match, the logo is deemed authentic; otherwise, it is identified as fake.",
        TechStack: "Python, Algorithms(CNN)",
        visitLink: "https://github.com/MohassinHussain/Fake_Logo_Detection_Team-13"
    },
    {
      Title: "Mobile App",
      Description: "This project is currently in the development phase. I am diligently working to perfect it. I am excited to share it with you soon. Your patience and interest are greatly appreciated. Stay tuned for further updates!",
      TechStack: "React Native(Frontend)",
    },
  ];

  return (
    <>
          <h1 className="projects-head">Start Exploring...</h1>

      <h1 className="projects-head">Projects</h1>
      <div className="projects-main">
        {projects.map((data, index) => {
          return (
            <div key={index} className="project-box">
              <h1>{data.Title}</h1>
              <p>
                <b>Description:</b> {data.Description}
                <br />
                <b>Tech Stack:</b>
                {data.TechStack}
              </p>
              <div className="btn">
                <button className="visit-btn" onClick={(e)=>{
                  e.preventDefault();
                  window.location.href = data.visitLink;
                  setVisitStatus("Visiting...")
                }}>{visitStatus}</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
