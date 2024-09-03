import React from 'react'
import './contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='contact-main'>
        <h1>Connect with me</h1>
        <div className='link'>
        <a href="https://linkedin.com/in/mohassinhussain"><FaLinkedin /></a>
        <a href="https://github.com/MohassinHussain"><FaGithubSquare /></a>
        <a href="https://instagram.com/mohassinhussain03"><FaInstagramSquare /></a>
        </div>
    </div>
  )
}
