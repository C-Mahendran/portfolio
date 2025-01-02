import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home'
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Navbar from './navbar';
// import Video from './video';

export default function portfolio() {
  return (
    <div>
      <section>
        <Navbar />
        <Home />
        <About />
        <Skills />
      </section>
{/* <Video /> */}
      <section >
        <Contact />
      </section>
      <div className=''>
        <footer className="footer">
          <div>
            © 2024 MAHENDRAN. All Rights Reserved.
          </div>
          <div>Privacy Policy Teams and Condition</div>
        </footer>
      </div>
    </div>
  )
}