import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Menu from '../components/sections/Menu';
import Chefs from '../components/sections/Chefs';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Chefs />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;