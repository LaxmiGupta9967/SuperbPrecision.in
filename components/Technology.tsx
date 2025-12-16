
import React from 'react';

const TechnologyPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-accent-green/10 text-steel-blue font-semibold py-3 px-5 rounded-full text-center border-2 border-accent-green/30">
        {children}
    </div>
);

const ProcessStep: React.FC<{ number: string; title: string; last?: boolean }> = ({ number, title, last }) => (
    <div className="flex items-center">
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-steel-blue text-white font-bold text-2xl border-4 border-white shadow-md">
                {number}
            </div>
            <p className="mt-2 font-semibold text-steel-blue">{title}</p>
        </div>
        {!last && <div className="flex-grow border-t-2 border-dashed border-silver-gray mx-4"></div>}
    </div>
);

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-steel-blue mb-4">Where Engineering Meets Intelligence</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We integrate CNC Swiss-type machining, robotics, and AI-based quality control to create a seamless, data-driven production ecosystem.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-steel-blue">
          <TechnologyPill>Multi-axis CNC Machining</TechnologyPill>
          <TechnologyPill>Automated Production Lines</TechnologyPill>
          <TechnologyPill>Optical & AI Inspection Systems</TechnologyPill>
          <TechnologyPill>Digital Twin Process Control</TechnologyPill>
        </div>
        
        <div className="relative p-8">
            <h3 className="text-3xl font-bold text-steel-blue mb-10">Our Integrated Process</h3>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-0">
                <ProcessStep number="01" title="Concept" />
                <ProcessStep number="02" title="Design" />
                <ProcessStep number="03" title="Prototype" />
                <ProcessStep number="04" title="Production" />
                <ProcessStep number="05" title="Inspection" last />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
