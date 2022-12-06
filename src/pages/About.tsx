import React from "react";
import './About.css';
import headshot from "./davy.JPG"
import { FaGithub } from "react-icons/fa";

export default function About() {

    return( 
    <div>
    <h1>About</h1>
    <img src= {headshot} alt="" />
    <br />
    <FaGithub />
    <p>David Keyer is a Software and Data Engineer from Louisville, Kentucky.</p>
    <br />
    <p>You can find the full code for this project <a href="https://github.com/dkeyer/soccer_graphs_wesbite">here</a>.</p>
    </div>
    )
  }