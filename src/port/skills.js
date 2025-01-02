import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css';
 
export default function Skills() {
  return (
    <div>
<section id='skills-section'>
 <div className='container'>
<div className='lg text-center text-light'> 
  <h2 className='text-warning'>Skills:</h2>
 <div className='lg'>
  <h4>HTML5</h4>
  <p>Expertise in creating semantic, well-structured, and accessible web pages.</p>
  <h4 className='m-3'>CSS3</h4>
  <p className='p-3'>Proficient in writing clean, responsive CSS,using Flexbox,Grid,and processor.</p>
  <h4>JavaScript</h4>
 <p>Strong knowledge of javascript and modern fremwork.handling DOM manipulation, event handling,and API integrations. </p>
 <h4 className='m-3'>React.JS</h4>
  <p>Building dynomic, component-based user interfaces with react.</p>
</div></div></div>
</section>
    </div>
  )
}
