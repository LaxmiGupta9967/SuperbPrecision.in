
import React from 'react';
import { FounderIcon, TechnicalExpertIcon } from './icons/LeadershipIcons';

const founders = [
  {
    name: "Mrs. Smita Suhas Satbhai",
    role: "Partner",
    description: " Provides substantial financial backing and strategic long-term vision, leveraging over a decade of deep commitment and financial acumen from global trading ventures."
  },
  {
    name: "Mrs. Archana Sandeep Sali",
    role: "Partner",
    description: " Brings an unwavering foundation of stability and legacy ownership as the enduring owner of cutting tool business, deeply embedding family values and technical heritage into the firm's structure."
  },
  {
    name: "Mrs. Managal Dadaram Sapre",
    role: "Partner",
    description: " Serves as a pivotal strategic consultant, contributing sharp analytical skills and extensive market experience from the family business (global trading) to guide long-term growth."
  }
];

const experts = [
  {
    name: "Mr. Sanchay Sali",
    role: "Manufacturing Head",
    description: " Leads operations with 10 years of precision engineering expertise, drawing directly from his success as the driving force behind multiple cutting tool business, ensuring world-class machining standards."
  },
  {
    name: "Dr. Swaroopkumar Magar",
    role: "Clinical Consultant",
    description: "A distinguished dentist with over 25 years of experience, providing unparalleled clinical insight that guides product development, material selection, and fosters significant sales growth within the Indian dental community."
  },
  {
    name: "Dr. Deepak Vikhe",
    role: "Patent & Development Consultant",
    description: "The visionary patent holder of our core dental implant technology, ensuring continuous product innovation, clinical efficacy, and serving as a crucial link to the next generation of dental professionals through his academic leadership."
  },
  {
    name: "Mr. Swwapnil Satbhai",
    role: "Financial Head",
    description: " Provides critical financial and analytical oversight, managing the entire financial infrastructure, strategic planning, and rigorous administrative activities necessary to support the company's aggressive expansion."
  }
];

const LeadershipCard: React.FC<{ name: string; role: string; description: string }> = ({ name, role, description }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1">
    <h4 className="font-bold text-xl text-white">{name}</h4>
    <p className="text-accent-green font-semibold mb-3">{role}</p>
    <p className="text-silver-gray text-sm">{description}</p>
  </div>
);

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-12 md:py-20 bg-gradient-to-br from-steel-blue to-[#122a3e]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Leadership & Expertise</h2>
          <p className="text-lg text-silver-gray max-w-3xl mx-auto">
            Superb Precision is driven by a unique blend of strategic financial backing, operational excellence, and unparalleled clinical and technical consulting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Founders & Promoters */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 text-accent-green"><FounderIcon /></div>
              <h3 className="text-3xl font-bold text-white">Founders & Promoters</h3>
            </div>
            <div className="space-y-6">
              {founders.map((founder) => (
                <LeadershipCard key={founder.name} {...founder} />
              ))}
            </div>
          </div>

          {/* Technical & Clinical Experts */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
               <div className="w-12 h-12 text-accent-green"><TechnicalExpertIcon /></div>
              <h3 className="text-3xl font-bold text-white">Technical & Clinical Experts</h3>
            </div>
            <div className="space-y-6">
              {experts.map((expert) => (
                <LeadershipCard key={expert.name} {...expert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
