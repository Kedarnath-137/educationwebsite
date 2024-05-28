import React, { useEffect, useState } from 'react';
import './Hero.css';

import dark_arrow from '../../assets/dark-arrow.png';

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow}></img>
        </button>
      </div>
    </div>
  );
}

export default Hero;

// import React, { useEffect, useState } from "react";
// import './Hero.css';
// import dark_arrow from '../../assets/dark-arrow.png';
// import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { app } from "../../userInformation/firebase";

// function Hero() {
//   const nav = useNavigate();
//   const [user, setUser] = useState('');
//   const auth = getAuth(app);

//   useEffect(() => {
//     onAuthStateChanged(auth, (u) => {
//       if (u) {
//         setUser(u);
//       }
//     });
//   }, [auth]);

//   const log = () => {
//     nav("/login");
//   };

//   const sig = () => {
//     nav("/signup");
//   };

//   const logo = () => {
//     signOut(auth).then(() => {
//       console.log("Successfully signed out");
//       nav("/login");
//     });
//   };

//   return (
//     <div className="hero container">
//       <div className="hero-text">
//         <h1>We Ensure better education for a better world</h1>
//         <p>Our cutting curriculum is designed to empower students
//           with the knowledge, skills, and experiences needed to excel in
//           the dynamic field of education.
//         </p>
//         <button className="btn">Explore more <img src={dark_arrow} alt="arrow" /></button>
//         <button onClick={log}>Login</button>
//         <button onClick={sig}>Sign Up</button>
//       </div>
//     </div>
//   );
// }

// export default Hero;
