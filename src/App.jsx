// import React from 'react';
import { Suspense, lazy, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/hero';
import Title from './components/title/title';

const Program = lazy(() => import('./components/Programs/Program'));
const About = lazy(() => import('./components/About/About'));
const Campus = lazy(() => import('./components/Campus/Campus'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Videoplayer = lazy(() => import('./components/Videoplayer/Videoplayer'));

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
        <Navbar />
        <Hero />
        <div className='container'>
          <Title 
          subTitle="Our Programs"
          Title="What We Offer"
        />
        <Suspense fallback={null}>
          <Program />
        </Suspense>
        <Suspense fallback={null}>
          <About setPlayState={setPlayState}/>
        </Suspense>
        <Title 
          subTitle="Gallery"
          Title="Campus Photos"
        />
        <Suspense fallback={null}>
          <Campus />
        </Suspense>
        <Title 
          subTitle="TESTIMONIALS"
          Title="What Students Says"
        />
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Title 
          subTitle="Contact Us"
          Title="Get in Touch"
        />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        </div>
        <Suspense fallback={null}>
          <Videoplayer playState={playState} setPlayState={setPlayState} />
        </Suspense>
    </div>
  );
}

export default App;
