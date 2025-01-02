// import React, { useState } from 'react';

// const Youtube = () => {
//   // State to control the video play
//   const [video, setVideo] = useState(false);

//   // Function to handle the play action
//   const videoPlay = () => {
//     setVideo(true);
//   };

//   return (
//     <div 
//       style={{
//         width: '100%', 
//         height: '100vh', 
//         display: 'flex', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         backgroundColor: 'olive'
//       }}
//       onClick={videoPlay} 
//       onTouchStart={videoPlay}
//     >
//       {/* Conditional rendering: If video state is false, show message, else show iframe */}
//       {!video ? (
//         <div style={{ color: 'white', fontSize: '20px' }}>
//           <p>Click or touch to play the video</p>
//         </div>
//       ) : (
//         <iframe
//           width="80%"
//           height="450"
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//       )}
//     </div>
//   );
// };
// export default Youtube;
