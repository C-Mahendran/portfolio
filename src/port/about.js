import React from 'react'
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic1 from './img/pic1.jpg';

function About() {
  return (
<section id="about-section">
<div class="">
    <div class="row text-light  text-center">
<div class="col">
    <img class="img2" src={Pic1}/>
</div>
<div class="col-lg">  
<h2 className="text-warning text-center">About Me:</h2>
    <h2>Creative Independent Web Developer</h2>
    <p>I'm Mahendiran, a passionate frontend developer with a strong focus on building beautiful, user-friendly websites and web applications. With expertise in HTML, CSS, JavaScript, and React.js, I aim to deliver seamless and intuitive user experiences.</p>
    </div>
</div>
</div>
</section>
  )
};
export default About;