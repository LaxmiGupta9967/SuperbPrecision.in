
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Industries from './components/Industries';
import Technology from './components/Technology';
import Sustainability from './components/Sustainability';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Leadership from './components/Leadership';
import Capabilities from './components/Capabilities';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Capabilities />
        <Industries />
        <Technology />
        <Sustainability />
        <Quality />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
