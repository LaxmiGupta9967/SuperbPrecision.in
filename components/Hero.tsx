
import React from 'react';
import { BriefcaseIcon, CpuChipIcon, RocketLaunchIcon, HeartIcon } from './icons/IndustryIcons';

const IndustryCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="text-accent-green w-16 h-16 mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-steel-blue mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center text-white">
        {/* Mobile and Tablet Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('https://i.ytimg.com/vi/KDf8n0IJqcs/maxresdefault.jpg')" }}
        ></div>
        
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://i.ytimg.com/vi/KDf8n0IJqcs/maxresdefault.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 animate-fade-in-down">Engineering the Future with Precision.</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto font-light animate-fade-in-up">
            Advanced Manufacturing Solutions for Automobile, Electronics, Aerospace, and Medical Industries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#industries" 
              onClick={(e) => handleScrollTo(e, '#industries')}
              className="w-full sm:w-auto bg-accent-green text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-accent-green transition-all duration-300 text-lg"
            >
              Explore Industries
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-steel-blue transition-all duration-300 text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-gray-50 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IndustryCard icon={<BriefcaseIcon />} title="Automobile" description="Driving Innovation" />
            <IndustryCard icon={<CpuChipIcon />} title="Electronics" description="Miniaturization with Accuracy" />
            <IndustryCard icon={<RocketLaunchIcon />} title="Aerospace" description="Reliability in Air & Space" />
            <IndustryCard icon={<HeartIcon />} title="Medical" description="Precision that Saves Lives" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
