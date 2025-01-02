import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mypic from './img/my pic.jpg';
import './home.css'; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

export default function Home() {
  return (
  <div>
<section id="home-section">
  <div className='home'>
  <div className='container text-center'>
    <div className='row lg'> 
      <div className='col text-light'>
 <h1>I'Am Mahendiran</h1>     
 <h3>Frontend</h3>
 <h3>Web Developer</h3>

<p> Welcome to my portfolio! I specialize in creating responsive and dynamic user interfaces using React, JavaScript, and modern frontend technologies. Explore my work, projects, and skills.</p>
{/* <div>{state}</div> */}
<div>
<button className='w-25 m-3'><a className='see' href='#skills-section'>See more</a></button>
</div></div>
<div className='col-lg'>
<img className="img1"  src={Mypic} /> 
</div></div></div></div>
</section>

 </div>
  )
};


