import React from 'react';
import {
  Navbar,
  AboutMe,
  Contact,
  Experience,
  Expertise,
  Footer,
  Projects,
} from '../components';
import '../styles/Pages/Home.scss';

function Home() {
  return (
    <div>
      <Navbar />
      <h1>EM CONSTRUÇÃO!</h1>
      <AboutMe />
      <Expertise />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
