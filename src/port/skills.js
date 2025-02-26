import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css'; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap,FaGithub } from 'react-icons/fa'; // Import icons

export default function Skills() {
  return (
    <div>
      <section id="skills-section">
        <div className="container">
          <div className="text-center text-light"> 
            <h2 className="text text-warning">Skills:</h2>
            <div className=" justify-content-center row m-3">
              {/* HTML5 */}
              <div style={{}} className=" col-md-3 m-3 p-3 bg">
                <div>
              <FaHtml5 size={50} color="#e34c26"/>
                <h4>HTML5</h4>
                <p>Expertise in creating semantic, well-structured, and accessible web pages.</p>
                 </div>
              </div>
              {/* CSS3 */}
              <div className="col-md-3 bg m-3 p-2">
                <FaCss3Alt size={50} color="#264de4" />
                <h4>CSS3</h4>
                <p>Proficient in writing clean, responsive CSS, using Flexbox, Grid, and preprocessors.</p>
              </div>
               {/* Bootstrap */}
               <div  className="col-md-3 bg m-3 p-2">
                <FaBootstrap size={50} color="#563d7c" />
                <h4>Bootstrap</h4>
                <p>Expertise in using Bootstrap for responsive and mobile-first web design.</p>
              </div>
              {/* JavaScript */}
              <div className="col-md-3 bg m-3 p-2">

                <FaJsSquare size={50} color="#f7df1e" />
                <h4>JavaScript</h4>
                <p>Strong knowledge of JavaScript and modern frameworks, handling DOM manipulation,</p>
              </div>
              {/* React */}
              <div className="col-md-3 m-3 p-2 bg">
                <FaReact size={50} color="#61dbfb" />
                <h4>React.js</h4>
                <p>Building dynamic, component-based user interfaces with React.</p>
              </div>
              <div className="col-md-3 m-3 p-2 bg">
                {/* <FaReact size={50} color="#61dbfb" />
                <h4>React.js</h4>
                <p>Building dynamic, component-based user interfaces with React.</p> */}

                <FaGithub size={50} color="black" className="mt-2" />
                <h4>GitHub</h4>
                <p>Version control and collaboration using GitHub repositories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './skills.css'; 
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa'; // Import icons

// export default function Skills() {
//   return (
//     <div>
//       <section id="skills-section">
//         <div className="container">
//           <div className="text-center text-light"> 
//             <h2 className="text text-warning">Skills:</h2>
//             <div className="row">
//               {/* HTML5 */}
//               <div className="col-md-3 m-3 bg">
//                 <div></div>
//                 <FaHtml5 size={50} color="#e34c26"/>
//                 <h4>HTML5</h4>
//                 <p>Expertise in creating semantic, well-structured, and accessible web pages.</p>
//               </div>
              
//               {/* CSS3 */}
//               <div className="col-md-3 bg m-3">
//                 <FaCss3Alt size={50} color="#264de4" />
//                 <h4>CSS3</h4>
//                 <p>Proficient in writing clean, responsive CSS, using Flexbox, Grid, and preprocessors.</p>
//               </div>

//               {/* Bootstrap */}
//               <div className="col-md-3 bg m-3">
//                 <FaBootstrap size={50} color="#563d7c" />
//                 <h4>Bootstrap</h4>
//                 <p>Expertise in using Bootstrap for responsive and mobile-first web design.</p>
//               </div>

//               {/* JavaScript */}
//               <div className="col-md-3 bg m-3">
//                 <FaJsSquare size={50} color="#f7df1e" />
//                 <h4>JavaScript</h4>
//                 <p>Strong knowledge of JavaScript and modern frameworks, handling DOM manipulation.</p>
//               </div>

//               {/* React */}
//               <div className="col-md-3 m-3 bg">
//                 <FaReact size={50} color="#61dbfb" />
//                 <h4>React.js</h4>
//                 <p>Building dynamic, component-based user interfaces with React.</p>
//               </div>

//               {/* GitHub */}
//               <div className="col-md-3 m-3 bg">
//                 <FaGithub size={50} color="black" className="mt-2" />
//                 <h4>GitHub</h4>
//                 <p>Version control and collaboration using GitHub repositories.</p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

