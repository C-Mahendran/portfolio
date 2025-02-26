import React from 'react'
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic from './img/pic.jpg';

function About() {
  return (
<section id="about-section">
<div class="">
    <div class="row about text-light ">
<div class="col">
    <img class="img2" src={Pic}/>
</div>
<div class="col-lg aboutcontent">  

<h2 className="text-warning">About Me:</h2>
    <h2 className='h2-head'>Creative Independent Web Developer</h2>
    <p className='p-paragraph'>I'm Mahendran, a passionate frontend developer with a strong focus on building beautiful, user-friendly websites and web applications. With expertise in HTML, CSS, JavaScript, and React.js, I aim to deliver seamless and intuitive user experiences.</p>
    </div>
</div>
</div>
</section>
  )
}; 
export default About;