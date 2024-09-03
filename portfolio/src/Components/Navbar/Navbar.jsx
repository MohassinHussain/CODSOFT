import React, { useState } from "react";
import "./navbar.css";
import { MdCloseFullscreen } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
// import { Link } from "react-router-dom";
import {Link} from 'react-scroll'
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [radius, setRadius] = useState("");

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ left: 20, top: 20 });

  function handleTouchStart(e) {
    setIsDragging(true);
    const startX = e.touches[0].clientX;
    const startY = e.touches[0].clientY;

    setPosition((prevPosition) => ({
      ...prevPosition,
      startX,
      startY,
      initialleft: prevPosition.left,
      initialtop: prevPosition.top,
    }));

    // e.preventDefault();
  }
  function handleTouchMove(e) {
    if (isDragging) {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dx = currentX - position.startX;
      const dy = currentY - position.startY;

      setPosition((prevPosition) => ({
        ...prevPosition,
        left: prevPosition.initialleft + dx,
        top: prevPosition.initialtop + dy,
      }));
      // e.preventDefault();
    }
  }
  function handleTouchEnd(e) {
    setIsDragging(false);
  }

  function handleBubbleClick() {

    setW("20rem");
    setH("20rem");
    setRadius("0");
    setShowMenu(true);
  }

  function handleBubbleClose(e) {
    e.stopPropagation();
    setW("4rem");
    setH("4rem");
    setRadius("50%");
    setShowMenu(false);
  }

  
  

  return (
    <>
      <div className="navbar-main">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={800} >
          <li>Home</li>
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800}>
          <li>Projects</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-120} duration={800}>
          <li>About</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={800}>
          <li>Contact</li>
        </Link>
      </div>
      <div
        style={{
          left: position.left,
          top: position.top,
          width: w,
          height: h,
          borderRadius: "10%",
          transition: "width, height .5s",
          
        }}
        className="bubble-menu"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleBubbleClick}
      >
        {!showMenu && <FaHamburger />}
        {showMenu && (
          <div className="menu-items">
             <Link to="home" spy={true} smooth={true} offset={-100} duration={1000} onClick={handleBubbleClose} >
          <li>Home</li>
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={800} onClick={handleBubbleClose}>
          <li>Projects</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={1000} onClick={handleBubbleClose}>
          <li>About</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={800} onClick={handleBubbleClose}>
          <li>Contact</li>
        </Link>
            {/* <li onClick={handleBubbleClose}> Close</li> */}
             <MdCloseFullscreen onClick={handleBubbleClose} /> 
          </div>
        )}
      </div>
    </>
  );
}
