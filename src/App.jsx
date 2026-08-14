import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/hero';
import Program from './components/Programs/Program';
import Title from './components/title/title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className='container'>
          <Title 
          subTitle="Our Programs"
          Title="What We Offer"
        />
        <Program />
        <About />
        <Title 
          subTitle="Gallery"
          Title="Campus Photos"
        />
        <Campus />
        <Title 
          subTitle="TESTIMONIALS"
          Title="What Students Says"
        />
        <Testimonials />
        <Title 
          subTitle="Contact Us"
          Title="Get in Touch"
        />
        <Contact />
        </div>
    </div>
  );
}

export default App;
