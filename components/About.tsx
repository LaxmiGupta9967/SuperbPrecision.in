
import React from 'react';
import { EyeIcon, LightBulbIcon, ShieldCheckIcon, SparklesIcon, UsersIcon } from './icons/ValueIcons';

// Helper for the existing top section
const ValueItem: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="flex items-center space-x-3">
        <div className="w-10 h-10 text-accent-green">{icon}</div>
        <span className="text-lg font-semibold text-steel-blue">{title}</span>
    </div>
);

// Helper for new list items
const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start space-x-3">
    <svg className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span className="text-gray-600">{text}</span>
  </li>
);

// Helper for advantage cards
const AdvantageCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="w-12 h-12 text-accent-green flex-shrink-0 bg-white rounded-full p-2 shadow-sm flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-xl text-steel-blue mb-2">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Original About Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 md:mb-24">
                    <div>
                        <h2 className="text-4xl font-bold text-steel-blue mb-6">Global Expertise in Micro-Engineering</h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            Superb Precision is a global leader in high-tolerance manufacturing. With a legacy of excellence, we leverage cutting-edge technology and a commitment to micro-engineering to deliver components that define the future of critical industries worldwide.
                        </p>
                        
                        <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-accent-green shadow-sm">
                            <h3 className="text-2xl font-bold text-steel-blue mb-4">Our Vision & Mission</h3>
                            <p className="text-gray-600 mb-2"><strong>Vision:</strong> To be the most trusted name in precision manufacturing globally.</p>
                            <p className="text-gray-600"><strong>Mission:</strong> To deliver world-class precision through innovation, technology, and sustainable engineering.</p>
                        </div>

                        <div className="mt-8">
                             <h3 className="text-2xl font-bold text-steel-blue mb-6">Core Values</h3>
                             <div className="grid grid-cols-2 gap-6">
                                <ValueItem icon={<LightBulbIcon />} title="Innovation" />
                                <ValueItem icon={<SparklesIcon />} title="Precision" />
                                <ValueItem icon={<ShieldCheckIcon />} title="Integrity" />
                                <ValueItem icon={<EyeIcon />} title="Sustainability" />
                                <ValueItem icon={<UsersIcon />} title="Commitment" />
                             </div>
                        </div>
                    </div>
                    <div className="relative h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://www.tornos.com/sites/tornos.com/files/data/managed-files/banners/tornos_17_halle1_ansicht_05_web_resized_0.jpg" 
                            alt="Precision engineered metal part" 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                         <div className="absolute inset-0 bg-steel-blue opacity-30"></div>
                    </div>
                </div>

                {/* SECTION 4 — What We Do */}
                <div className="mb-12 md:mb-24">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 md:p-10 text-center max-w-5xl mx-auto relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-steel-blue to-accent-green"></div>
                         <h3 className="text-3xl font-bold text-steel-blue mb-6">What We Do: Micro-Tolerance Manufacturing</h3>
                         <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            We specialize in advanced micro-mechanics, providing Tier-1 manufacturing quality across multiple mission-critical industries. Our adaptive manufacturing platform handles the most complex requirements with uncompromising tolerance, accuracy, and reliability.
                         </p>
                    </div>
                </div>

                {/* SECTION 5 — Industries We Serve */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-24">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-6">
                             <h3 className="text-2xl font-bold text-steel-blue">Medical & Dental Industry</h3>
                        </div>
                        <p className="text-accent-green font-bold tracking-wide text-sm uppercase mb-6">Swiss Accuracy</p>
                        <ul className="space-y-4">
                            <ListItem text="Dental Implants" />
                            <ListItem text="Orthopedic Implants & Instruments (Spinal Implants, Pedicle Hooks & Screws, Trauma Bone Screws & Plates, Nails, Ring & Rail Fixation Systems)" />
                            <ListItem text="Maxillofacial Implants" />
                            <ListItem text="Surgical Instruments" />
                            <ListItem text="Reconstructive HIP Systems" />
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                         <h3 className="text-2xl font-bold text-steel-blue mb-10">High-Precision Engineering Sectors</h3>
                         <ul className="space-y-4">
                            <ListItem text="Aerospace Industry – ultra-reliable micro-components" />
                            <ListItem text="Micro-Mechanics Industry – Swiss-level precision parts" />
                            <ListItem text="Electronics Industry – high-accuracy electronic components" />
                            <ListItem text="Automotive Industry – precision products for performance & safety" />
                         </ul>
                    </div>
                </div>

                {/* SECTION 6 — Manufacturing Advantage */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-steel-blue mb-6">Manufacturing Advantage: Controlled Environment</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Our commitment to manufacturing excellence is supported by a precision-engineered infrastructure.
                        </p>
                        
                        <div className="space-y-6">
                            <AdvantageCard 
                                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                                title="Advanced CNC Machinery" 
                                description="Cutting-edge equipment achieving Swiss-level accuracy." 
                            />
                            <AdvantageCard 
                                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>}
                                title="Cleanroom Facility" 
                                description="ISO Class 7 and Class 8 controlled environments ensuring strict control over particulate levels, airflow, temperature, and humidity—ideal for precision components and medical-grade production." 
                            />
                        </div>
                    </div>
                    <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                         <img 
                            src="https://casting-china.org/wp-content/uploads/2025/01/CNC-Roughing-and-Finishing.jpg" 
                            alt="Cleanroom Facility" 
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-steel-blue opacity-20"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
