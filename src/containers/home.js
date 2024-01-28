// // import React,{useState,useEffect} from "react"
// // import { useInView } from 'react-intersection-observer';
// // import Me2 from "../assests/Me2.png";

// // export default function Home(){
// //     const { ref, inView, entry } = useInView();
// //     return (
// //         <>
// //         <div className="home-container" ref = {ref}>
// //         <div className="home-content" >
// //         <div className="home-Name">
// //             <h1>Sai Manjunath</h1>
// //         </div>
// //             <h2>Hi I am a Software Developer </h2>
// //             <p>I'm a dedicated software developer with a strong passion for solving complex challenges. With a solid background in computer science and a keen eye for detail, I've embarked on a professional journey focused on creating software that not only meets but exceeds expectations. Whether it's developing user-friendly applications to boost efficiency or fine-tuning algorithms for smoother operations, I'm fully committed to the art and science of software engineering. My insatiable curiosity drives me to continuously explore new technologies and approaches, ensuring that my work stays on the cutting edge of innovation. Let's team up to bring your software dreams to life!</p>
// //         </div>
// //         <div className="home-image">
// //             <div className="home-img">
// //             <img src = {Me2} />
// //             </div>
// //             <div className="home-curve">

// //             </div>
// //         </div>
// //         </div>
// //         </>
// //     )
// // }

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Me2 from "../assests/Me2.png";


export default function Home() {
  return (
     <Box />
  );
}



const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  };
}

const Box = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const [prevMouse,setPreviousPosition] = useState({});
  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  const css = {
    box: {
      backgroundColor: "transparent",
      width: "100%",
      height: "100%",
      position: "relative",
      overflow:"hidden"
    },
    fly: {
      position: "absolute",
      width: "15px",
      height: "15px",
      margin: "-10px",
      backgroundColor: "#22C3E6",
      borderRadius:10,
      
    }
  };
  return (
    <motion.div
      ref={boxRef}
      style={{ ...css.box, perspective: 600 }}
      onMouseMove={e => handleMouseMove(e)}
      animate={{
        rotateX: mousePosition.centerX * 20,
        rotateY: mousePosition.centerY * 20
      }}
    >
      <motion.div
        style={css.fly}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "#A4FCFA" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: "spring" }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "#C2EFDF" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: "tween" }}
      />
     <>
     <div className="home-container" id="first">
     <div class="container">
            <section class="animation">
                <div class="first"><div>print</div></div>
                <div class="second"><div>console.log</div></div>
                <div class="third"><div>System.out.println</div></div>
            </section>
            <p>("Hello 👋 I'm")</p>
        </div>
        <div className="home-content" >
        <div className="home-Name">
            <h1>Sai Manjunath</h1>
        </div>
            {/* <h2>Hi I am a Software Developer </h2> */}
            <p>A dedicated software developer with a strong passion for solving complex challenges. With a solid background in computer science and a keen eye for detail, I focus on creating innovative software, whether it's user-friendly applications or finely tuned algorithms. My insatiable curiosity drives me to explore new technologies, ensuring my work stays on the cutting edge. Let's team up to bring your software dreams to life!</p>
            {/* <p>I'm a dedicated software developer with a strong passion for solving complex challenges. With a solid background in computer science and a keen eye for detail, I've embarked on a professional journey focused on creating software that not only meets but exceeds expectations. Whether it's developing user-friendly applications to boost efficiency or fine-tuning algorithms for smoother operations, I'm fully committed to the art and science of software engineering. My insatiable curiosity drives me to continuously explore new technologies and approaches, ensuring that my work stays on the cutting edge of innovation. Let's team up to bring your software dreams to life!</p> */}
        </div>
        <div className="home-image">
            <div className="home-img">
            <img src = {Me2} />
            </div>
            <div className="home-curve">

            </div>
        </div>
        </div>
     </>
    </motion.div>
  );
};






// import { motion } from "framer-motion";
// import React, { useState, useRef } from "react";



// function getRelativeCoordinates(event, referenceElement) {
//   const position = {
//     x: event.pageX,
//     y: event.pageY
//   };

//   const offset = {
//     left: referenceElement.offsetLeft,
//     top: referenceElement.offsetTop,
//     width: referenceElement.clientWidth,
//     height: referenceElement.clientHeight
//   };

//   let reference = referenceElement.offsetParent;

//   while (reference) {
//     offset.left += reference.offsetLeft;
//     offset.top += reference.offsetTop;
//     reference = reference.offsetParent;
//   }

//   return {
//     x: position.x - offset.left,
//     y: position.y - offset.top,
//     width: offset.width,
//     height: offset.height,
//     centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
//     centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
//   };
// }

  

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 }
//       }
//     };
//   }
// };



// export default function Home() {
//       const [mousePosition, setMousePosition] = useState({});
//       const [prevMouse,setPreviousPosition] = useState({});
//       const boxRef = useRef();
//   const handleMouseMove = e => {
//     setPreviousPosition(mousePosition);
//     setMousePosition(getRelativeCoordinates(e, boxRef.current));
//   };

//   return (
// <motion.div
//       ref={boxRef}
//       style={{perspective: 600 }}
//       onMouseMove={e => handleMouseMove(e)}
//       animate={{
//         rotateX: mousePosition.centerX * 20,
//         rotateY: mousePosition.centerY * 20
//       }}
//     >
//     <motion.svg
//       width="600"
//       height="600"
//       viewBox="0 0 600 600"
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.line
//         x1={prevMouse.x}
//         y1={prevMouse.y}
//         x2={mousePosition.x}
//         y2={mousePosition.y}
//         stroke="#00cc88"
//         variants={draw}
//         custom={3}
//         width={5}
//       />
//       <motion.line
//         x1="220"
//         y1="230"
//         x2="360"
//         y2="370"
//         stroke="#ff0055"
//         custom={3}
//         variants={draw}
//       />
//       <motion.line
//         x1="220"
//         y1="370"
//         x2="360"
//         y2="230"
//         stroke="#ff0055"
//         custom={3.5}
//         variants={draw}
//       />
//     </motion.svg>
//     </motion.div>
//   );
// }



