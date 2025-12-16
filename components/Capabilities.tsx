
import React from 'react';
import { 
    MachineIcon, 
    CleanroomIcon, 
    ToleranceIcon, 
    MaterialIcon, 
    MicroIcon, 
    InspectionIcon, 
    PrototypeIcon 
} from './icons/CapabilityIcons';

const CapabilityCard: React.FC<{ 
    title: string; 
    icon: React.ReactNode; 
    description: string; 
    listItems?: string[];
    isLarge?: boolean;
}> = ({ title, icon, description, listItems, isLarge }) => (
    <div className={`group relative bg-white hover:bg-gradient-to-br hover:from-steel-blue hover:to-[#0f2336] border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${isLarge ? 'md:col-span-2' : ''}`}>
        {/* Hover Decoration Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 group-hover:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-150 duration-700"></div>
        
        <div className="relative z-10">
            {/* Icon Box: Blue normally, White on hover */}
            <div className="w-14 h-14 bg-steel-blue text-white group-hover:bg-white group-hover:text-steel-blue rounded-xl flex items-center justify-center mb-6 shadow-lg transition-colors duration-300">
                <div className="w-8 h-8">{icon}</div>
            </div>
            
            {/* Title: Blue normally, White on hover */}
            <h3 className="text-2xl font-bold text-steel-blue group-hover:text-white mb-3 transition-colors duration-300">{title}</h3>
            
            {/* Description: Gray normally, Light Gray on hover */}
            <p className="text-gray-600 group-hover:text-gray-200 mb-6 leading-relaxed transition-colors duration-300">{description}</p>
            
            {/* List Items: Gray normally, Light Gray on hover */}
            {listItems && (
                <ul className="grid sm:grid-cols-2 gap-2">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                            <span className="w-1.5 h-1.5 bg-accent-green rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
);

const Capabilities: React.FC = () => {
    return (
        <section id="capabilities" className="py-12 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-steel-blue mb-6">Our Capabilities</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        SUPERB PRECISION delivers world-class micro-machining and advanced manufacturing solutions powered by Swiss technology, cleanroom facilities, and sub-micron tolerance control. Our capabilities ensure flawless performance across aerospace, medical, automotive, electronics, and micro-mechanics industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Key Feature: Swiss Machining */}
                    <CapabilityCard 
                        title="Swiss-Type CNC Machining"
                        icon={<MachineIcon />}
                        description="Our production line is powered by the Tornos Swiss GT 13/6, one of the world’s most trusted multi-axis CNC platforms for ultra-precision components. It enables sub-micron accuracy for miniature parts with exceptional consistency."
                        listItems={['6-Axis simultaneous machining', '13 mm bar capacity', 'Titanium & Aerospace alloys', 'Zero vibration production']}
                        isLarge={true}
                    />

                    {/* Key Feature: Cleanroom */}
                    <CapabilityCard 
                        title="Cleanroom Manufacturing"
                        icon={<CleanroomIcon />}
                        description="We operate state-of-the-art Class 7 & Class 8 cleanrooms for industries where contamination control is mission-critical, ensuring zero dust, oil, and airborne contamination."
                        listItems={['Medical implants', 'Sterile packaging', 'Anti-static workspaces', 'Temp & humidity control']}
                    />

                    {/* Sub-Micron Tolerance */}
                    <CapabilityCard 
                        title="Sub-Micron Tolerance"
                        icon={<ToleranceIcon />}
                        description="We specialize in manufacturing parts with extreme accuracy. When the world needs absolute precision—it trusts SUPERB PRECISION."
                        listItems={['Precision up to ±0.5 microns', 'Roundness within 0.3 microns', 'Surface finish Ra 0.1 μm', 'Zero vibration environment']}
                    />

                    {/* Materials */}
                    <CapabilityCard 
                        title="Materials Expertise"
                        icon={<MaterialIcon />}
                        description="We work with industry-critical materials that demand technical mastery, from biocompatible medical alloys to high-temp aerospace metals."
                        listItems={['Titanium Grade 5 & 2', 'Inconel & Monel', 'Stainless Steel 316L', 'Medical-grade steels']}
                    />

                     {/* Micro-Machining */}
                     <CapabilityCard 
                        title="Micro-Machining"
                        icon={<MicroIcon />}
                        description="We deliver components as small as 0.2 mm with extreme accuracy and complexity, supporting industries where even minor deviations can cause major failures."
                        listItems={['Micro shafts', 'Pivot pins & Watch stems', 'Micro gears', 'Sensor components']}
                    />

                     {/* Quality Inspection */}
                     <CapabilityCard 
                        title="Advanced Quality Inspection"
                        icon={<InspectionIcon />}
                        description="Quality is integrated into every stage of manufacturing. We utilize digital microscopes up to 180x, profile projectors, and 5-axis metrology."
                        listItems={['Digital microscopes (180x)', 'First article inspection (FAI)', 'Cleanroom-level verification', 'Dimensional analysis']}
                    />

                    {/* Prototyping - Large Card to balance grid if needed, or normal */}
                    <CapabilityCard 
                        title="Custom Engineering"
                        icon={<PrototypeIcon />}
                        description="We provide complete development support for new projects, from rapid prototyping and design refinement to high-volume production scaling."
                        listItems={['Rapid prototyping', 'Design refinement', 'Material guidance', 'Small-batch development']}
                        isLarge={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
