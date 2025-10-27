import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import JoinExperts from './components/JoinExperts';
import Resources from './components/Resources';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <JoinExperts />
      <Resources />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;