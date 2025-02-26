// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Mypic from './img/my pic.jpg';


// import './home.css'; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
// export default function Home() {
//   return (
//   <div>
// <section id="home-section">
//   <div className='home'>
//   <div className='container text-center'>
//     <div className='row lg'> 
//       <div className='col text-light'>
//  <h1>I'Am Mahendran</h1>     
//  <h3>Frontend</h3>
//  <h3>Web Developer</h3>

// <p> Welcome to my portfolio! I specialize in creating responsive and dynamic user interfaces using React, JavaScript, and modern frontend technologies. Explore my work, projects, and skills.</p>
// {/* <div>{state}</div> */}
// <div>
// <button className='see'><a className='more' href='#skills-section'>See more</a></button>
// </div></div>
// <div className='col-lg'>
// <img src={Mypic} className="img1" /> 
// </div></div></div></div>
// </section>

//  </div>
//   )
// };


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Mypic from "./img/my pic.jpg";
// import "./home.css";
// import { motion } from "framer-motion"; // For animations

// export default function Home() {
//   return (
//     <section id="home-section" className="home">
//       <div className="container text-center">
//         <div className="row align-items-center">
//           {/* Left Section - Text Content */}
//           <motion.div
//             className="col-lg text-light"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="title">I'm Mahendran</h1>
//             <h3 className="subtitle">Frontend Web Developer</h3>
//             <p className="description">
//               Welcome to my portfolio! I specialize in creating responsive and
//               dynamic user interfaces using React, JavaScript, and modern
//               frontend technologies. Explore my work, projects, and skills.
//             </p>
//             <motion.button
//               className="see"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a className="more" href="#skills-section">
//                 See More
//               </a>
//             </motion.button>
//           </motion.div>

//           {/* Right Section - Image with Animation */}
//           <motion.div
//             className="col-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
          
//               <img src={Mypic} className="img-fluid img1" alt="Mahendran" />
          
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mypic from "./img/my pic.jpg";
import "./home.css";
import { motion } from "framer-motion"; // For animations

export default function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <section id="home-section" className="home">
      <div className="container text-center">
        <div className="row align-items-center">
          {/* Left Section - Text Content */}
          <motion.div
            className="col-lg text-light"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="title">I'm Mahendran</h1>
            <motion.h3 className="subtitle" variants={textVariants} initial="hidden" animate="visible">
              Frontend Web Developer
            </motion.h3>

            <p className="description">
              Welcome to my portfolio! I specialize in creating responsive and
              dynamic user interfaces using React, JavaScript, and modern
              frontend technologies. Explore my work, projects, and skills.
            </p>
            <motion.button
              className="see"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="more" href="#skills-section">
                See More
              </a>
            </motion.button>
          </motion.div>

          {/* Right Section - Image with Animation */}
          <motion.div
            className="col-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={Mypic} className="img-fluid img1" alt="Mahendran" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
