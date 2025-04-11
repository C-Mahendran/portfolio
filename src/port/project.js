import React from 'react';
import './project.css'
import Calculator from './img/calculator.png';
import Rea from './img/rea.png';
import Car from './img/car.png';
import Stopwatch from './img/Stopwatch.png';
import Todolist from './img/Todolist.png';
import Coffeeshop from './img/Coffeeshop.png';

export default function Project() {
  return (
    <>
<section id='project-section'>
        <div className='container'>
          <h2 className='text text-warning text-center fs-1'>Projects:</h2>
          <div className='row m'>

            <div className='col-lg-4'>
              <div className='card text-center m-1'>
              <a href={'https://mahecoffeeshop.netlify.app/'}><img className='w-100 h-50' src={Coffeeshop} alt="Car project" /></a>
              </div>
              <p className='text-center text-dark'>COFFEESHOP</p>
            </div>
            <div className='col-lg-4'>
              <div className='card text-center m-1'>
               <a href={'https://mahe-calculator.netlify.app'}><img className='w-100 h-75' src={Calculator} alt="Calculator project" /></a>
              </div>
              <p className='text-center text-dark'>CALCULATOR</p>
            </div>
            <div className='col-lg-4'>
              <div className='card text-center m-1'>
              <a href={'https://mahe-todo.netlify.app/'}><img className='w-100 h-75' src={Todolist} alt="React project" /></a>
              </div>
              <p className='text-center text-dark'>TODOLIST</p>
            </div>
            <div className='col-lg-4'>
              <div className='card text-center m-1'>
              <a href='https://mahe-stopwatch.netlify.app/'><img className='w-100 h-75' src={Stopwatch} alt="React project" /></a>
              </div>
              <p className='text-center text-dark'>STOPWATCH</p>
            </div>
            <div className='col-lg-4'>
              <div style={{boxShadow:'-1px -5px 30px black',backgroundColor:'black'}} className='card text-center m-1'>
              <a href='/projects/Stopwatch/stopwatch.html'><img className='w-100 h-75'src={Car} alt="React project" /></a>
              </div>
              <p className='text-center text-dark'>CAR</p>
            </div>
            {/* <div className='col-lg-4'>
              <div className='card text-center m-1'>
              <a href='/projects/Stopwatch/stopwatch.html'><img className='w-100 h-75'src={Rea}  alt="React project" /></a>
              </div>
              <p className='text-center text-light'>CAR</p>
            </div> */}
          </div>
          </div>
      </section>
    </>
  );
}
