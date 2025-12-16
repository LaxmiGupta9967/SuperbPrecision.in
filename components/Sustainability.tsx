
import React from 'react';

const Sustainability: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sustainability" className="relative py-12 md:py-24 bg-steel-blue text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=7')" }}
      ></div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Precision with Purpose</h2>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          We are committed to a sustainable future by reducing waste, optimizing energy use, and utilizing eco-friendly materials in our processes. Our environmental initiatives are integrated into every stage of our sustainable machining lifecycle, ensuring we manufacture responsibly.
        </p>
        <div className="mt-10">
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="bg-accent-green text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-accent-green transition-all duration-300 text-lg cursor-pointer"
          >
            Learn About Our Initiatives
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
