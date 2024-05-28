import './App.css';
import React, { useState } from 'react';
import About2 from './component/About/About';
import Campus from './component/Campus/Campus';
import Contact from './component/Contact/Contact';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import Testimonials from './component/Testimonial/Testimonial';
import Footer from './component/footer/footer';
import Programs from './component/programs/Program';
import Title from './component/title/Title';
import VideoPlayer from './component/videoPlayer/VideoPlayer';

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About2 setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;

// import './App.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About2 from './component/About/About';
// import Campus from './component/Campus/Campus';
// import Contact from './component/Contact/Contact';
// import Hero from './component/Hero/Hero';
// import Navbar from './component/Navbar/Navbar';
// import Testimonials from './component/Testimonial/Testimonial';
// import Footer from './component/footer/footer';
// import Programs from './component/programs/Program';
// import Title from './component/title/Title';
// import VideoPlayer from './component/videoPlayer/VideoPlayer';
// import LoginPage from './userInformation/login';
// import SignupPage from './userInformation/signup';

// function App() {
//   const [playState, setPlayState] = useState(false);

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <div className='container'>
//               <Title subTitle='Our PROGRAM' title='What We Offer' />
//               <Programs />
//               <About2 setPlayState={setPlayState} />
//               <Title subTitle='Gallery' title='Campus photos' />
//               <Campus />
//               <Title subTitle='TESTIMONIALS' title='What Student Says' />
//               <Testimonials />
//               <Title subTitle='Contact Us' title='Get in Touch' />
//               <Contact />
//               <Footer />
//             </div>
//             <VideoPlayer playState={playState} setPlayState={setPlayState} />
//           </>
//         } />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
