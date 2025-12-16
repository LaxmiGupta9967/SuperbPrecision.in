
import React from 'react';

const Certification: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
        <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        <span className="font-semibold text-steel-blue">{name}</span>
    </div>
);

const Quality: React.FC = () => {
    return (
        <section id="quality" className="py-12 md:py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                        <img 
                            src="https://www.tornos.com/sites/tornos.com/files/data/managed-files/banners/swissdeco_36_machine_option_banner.jpg" 
                            alt="Quality inspection lab" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-steel-blue opacity-40"></div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-steel-blue mb-6">Certified Precision. Guaranteed Performance.</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                           Our commitment to quality is absolute. We employ state-of-the-art inspection systems, ensure full traceability, and utilize automated defect detection to maintain the highest standards. Every component we create reflects our obsession with perfection.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Certification name="ISO 9001" />
                            <Certification name="ISO 13485" />
                            <Certification name="AS9100" />
                            <Certification name="FDA Compliant" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
