import React from "react";
import './About.css';
import headshot from "./davy.JPG"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {

    return( 
    <div>
    <h1>About</h1>
    <div className="pic-with-links">
    <img src= {headshot} alt="" />
    <br />
<div className="social-icons">
<div className="icon">
     <a
          href="https://github.com/dkeyer"
          rel="noreferrer"
          aria-label='Github'
          target="_blank"
        >
    <FaGithub />
    </a>
    </div>   
    <div className="icon">
    <a
          href="https://www.linkedin.com/in/david-keyer-5869151aa/"
          rel="noreferrer"
          aria-label='LinkedIn'
          target="_blank"
        >
    <FaLinkedin />
    </a>
    </div>   
    </div>   
    </div>
    <br />
    <p>David Keyer is a Software and Data Engineer from Louisville, Kentucky.</p>
    <br />
    <p>You can find the full code for this project <a href="https://github.com/dkeyer/soccer_graphs_wesbite">here</a>.</p>
    </div>
    )
  }