
import React from 'react';

const IndustrySection: React.FC<{
    id: string;
    title: string;
    headline: string;
    description: string;
    components: string[];
    imageUrl: string;
    bgClass: string;
    textClass: string;
    reverse?: boolean;
}> = ({ id, title, headline, description, components, imageUrl, bgClass, textClass, reverse }) => (
    <div id={id} className={`py-12 md:py-20 ${bgClass} ${textClass}`}>
        <div className="container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={reverse ? 'lg:col-start-2' : ''}>
                    <h3 className="text-lg font-bold text-accent-green uppercase mb-2">{title}</h3>
                    <h2 className="text-4xl font-bold mb-6">{headline}</h2>
                    <p className="text-lg mb-6 opacity-90 leading-relaxed">{description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {components.map(comp => (
                            <div key={comp} className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>{comp}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`relative h-96 rounded-lg overflow-hidden shadow-2xl ${reverse ? 'lg:col-start-1' : ''}`}>
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
            </div>
        </div>
    </div>
);

const ProductShowcaseCard: React.FC<{
  title: string;
  image: string;
  usedIn: string;
  description: string;
}> = ({ title, image, usedIn, description }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full">
    {/* Image Container with Enhanced Visibility */}
    <div className="h-64 bg-slate-50 overflow-hidden relative flex items-center justify-center p-4 md:p-6 border-b border-gray-100">
       {/* Subtle radial gradient for depth and contrast against metallic parts */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-slate-100 opacity-80"></div>
       <img 
         src={image} 
         alt={title} 
         className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-xl" 
       />
    </div>
    
    {/* Content */}
    <div className="p-6 md:p-8 flex-grow flex flex-col">
      <h4 className="text-xl font-bold text-steel-blue mb-3">{title}</h4>
      
      <div className="mb-4">
        <span className="text-xs font-bold text-accent-green uppercase tracking-wider block mb-1">Used in</span>
        <p className="text-sm text-gray-700 font-medium">{usedIn}</p>
      </div>
      
      <div className="mt-auto">
        <span className="text-xs font-bold text-steel-blue uppercase tracking-wider block mb-1">Why it matters</span>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Industries: React.FC = () => {
  return (
    <section id="industries">
      <div className="text-center py-12 md:py-20 bg-white">
        <h2 className="text-4xl font-bold text-steel-blue">Industries We Serve</h2>
        <p className="text-lg text-gray-600 mt-2">Powering progress across the world's most demanding sectors.</p>
      </div>
      
      {/* AUTOMOBILE SECTION */}
      <IndustrySection
        id="automobile"
        title="Automotive"
        headline="Driving Innovation through Precision Engineering."
        description="Our precision components improve performance, reduce emissions, and enhance safety in modern vehicles, from traditional engines to EV platforms."
        components={['Shafts & Valves', 'Engine Housings', 'Transmission Connectors', 'EV Components']}
        imageUrl="https://www.tornos.com/sites/tornos.com/files/data/managed-files/banners/gb_tornos_automobile.jpg"
        bgClass="bg-gray-50"
        textClass="text-steel-blue"
      />

      {/* Automobile Components Showcase */}
      <div className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-steel-blue">Automotive Precision Components</h3>
            <p className="text-gray-500 mt-2">Engineered for durability, efficiency, and safety.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
             <ProductShowcaseCard 
              title="Valve System Micro Parts"
              image="https://i.postimg.cc/0j2xfm5K/valve-system-micro-parts-(1).png"
              usedIn="engine valve trains, timing systems, automotive motion assemblies"
              description="These micro-precision valve components ensure accurate air–fuel flow and support high-efficiency combustion. Engineered with micron-level tolerances, they reduce wear, enhance durability, and maintain optimal performance in modern automotive engines."
            />
             <ProductShowcaseCard 
              title="Small Shaft & Bushing"
              image="https://i.postimg.cc/hjDHWnFW/small-shaft-and-bushing-(1).png"
              usedIn="rotational mechanisms, steering assemblies, gearbox subsystems"
              description="Small shafts paired with high-precision bushings provide stable rotation and friction-controlled movement. Their dimensional accuracy and strength improve reliability and reduce mechanical noise across key automotive systems."
            />
             <ProductShowcaseCard 
              title="Precision Fasteners"
              image="https://i.postimg.cc/4xrWQg4x/precision-fastners-(1).png"
              usedIn="engine housings, chassis assemblies, structural joints"
              description="Automotive-grade precision fasteners deliver secure, long-lasting connections in high-vibration environments. Manufactured to strict standards, they enhance vehicle safety, structural integrity, and long-term reliability."
            />
             <ProductShowcaseCard 
              title="Fuel Injector Parts"
              image="https://i.postimg.cc/3Rb42K79/fuel-injector-parts-(1).png"
              usedIn="fuel delivery systems, combustion chambers, emission-control units"
              description="These ultra-precise injector components regulate fuel spray and flow consistency, improving engine efficiency and reducing emissions. Their fine machining ensures superior atomization and stable combustion performance."
            />
             <ProductShowcaseCard 
              title="ABS Sensor Components"
              image="https://i.postimg.cc/qBSj2KJd/ABS-Sensor-components-(1).png"
              usedIn="anti-lock braking systems, wheel-speed sensing units"
              description="ABS sensor components are designed for accurate wheel-speed detection, enabling safer braking responses. Their robust construction ensures reliable functionality in harsh automotive environments, enhancing overall vehicle safety."
            />
          </div>
        </div>
      </div>

      <IndustrySection
        id="electronics"
        title="Electronics"
        headline="Miniaturization with Maximum Accuracy."
        description="We enable the future of electronics with micro-machining for compact, reliable components in consumer devices, sensors, and smart technologies."
        components={['Pins & Connectors', 'Semiconductor Housings', 'Heat Sinks', 'Sensor Casings']}
        imageUrl="https://www.tornos.com/sites/tornos.com/files/data/managed-files/banners/gb_tornos_horlogerie.jpg"
        bgClass="bg-steel-blue"
        textClass="text-white"
        reverse={true}
      />

       {/* Electronics Components Showcase */}
       <div className="bg-steel-blue pb-12 md:pb-24 pt-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Electronics Precision Components</h3>
            <p className="text-silver-gray mt-2">Reliability and connectivity for the digital age.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
            <ProductShowcaseCard 
              title="Switch Components"
              image="https://i.postimg.cc/Gp44P43Z/switch-components-(1).png"
              usedIn="consumer electronics, control panels"
              description="Reliable tactile response, consistent electrical connectivity, and long-term switching durability."
            />
            <ProductShowcaseCard 
              title="Sensor Housing"
              image="https://i.postimg.cc/fLxT5m4D/Sensor-housiong-(2).png"
              usedIn="proximity sensors, IoT devices"
              description="Precision housings that protect sensors, maintain alignment, and ensure measurement accuracy."
            />
            <ProductShowcaseCard 
              title="Micro Shaft"
              image="https://i.postimg.cc/jS7VzK0H/micro-shaft-(1).png"
              usedIn="miniature motors and micro-actuators"
              description="Stable rotation, low friction, and smooth operation for compact electromechanical systems."
            />
            <ProductShowcaseCard 
              title="Connector Pin"
              image="https://i.postimg.cc/Cx1GtLLt/connector-pin-(1).png"
              usedIn="PCB connectors and cable assemblies"
              description="Ensures stable electrical contact, low resistance, and high signal reliability."
            />
            <ProductShowcaseCard 
              title="Threaded Inserts"
              image="https://i.postimg.cc/g2sZY9rw/Threaded-Inserts-(1).png"
              usedIn="plastic enclosures and electronic housings"
              description="Strong, wear-resistant fastening points ideal for repeated assembly."
            />
          </div>
        </div>
      </div>

      <IndustrySection
        id="aerospace"
        title="Aerospace"
        headline="Precision that Takes Flight."
        description="We deliver high-tolerance, flight-critical parts with zero-defect reliability, manufacturing components from lightweight alloys for hydraulic, structural, and satellite systems."
        components={['Lightweight Alloys', 'Hydraulic Parts', 'Satellite Systems', 'Turbine Blades']}
        imageUrl="https://www.tornos.com/sites/tornos.com/files/data/managed-files/banners/gb_tornos_electronic.jpg"
        bgClass="bg-white"
        textClass="text-steel-blue"
      />

       {/* Aerospace Components Showcase */}
       <div className="bg-white pb-12 md:pb-24 pt-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-steel-blue">Aerospace Precision Components</h3>
            <p className="text-gray-500 mt-2">Mission-critical reliability for air and space.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 justify-center">
            <ProductShowcaseCard 
              title="Titanium Aerospace Component"
              image="https://i.postimg.cc/FK2SnC4c/Titanium-Aerospace-component.png"
              usedIn="airframes, landing systems, actuators"
              description="Titanium components offer high strength-to-weight ratio, excellent fatigue resistance, and corrosion resistance essential for aircraft structures. These parts ensure long-term reliability under extreme temperature and mechanical stresses encountered during flight operations."
            />
            <ProductShowcaseCard 
              title="Missile Connector Terminals"
              image="https://i.postimg.cc/9XJc1RVP/Missile-connector-terminals.png"
              usedIn="guidance systems, defense electronics, missile communication"
              description="Precision-machined terminals guarantee secure electrical connectivity in high-vibration, high-temperature missile environments. They ensure fault-free data transfer crucial for targeting accuracy and mission success."
            />
            <ProductShowcaseCard 
              title="Actuator Components (Miniature Shafts)"
              image="https://i.postimg.cc/jSN0VLVm/Actuator-components-(miniature-shafts).png"
              usedIn="servo actuators, drone stabilization systems, aerospace robotic mechanisms"
              description="Miniature shafts manufactured with micron-level tolerance deliver smooth linear and rotational motion. These components are vital for accurate flight-control actuation, contributing to stability, maneuverability, and automated system performance."
            />
            <ProductShowcaseCard 
              title="Bushings and Sleeves"
              image="https://i.postimg.cc/qMhWnz7t/bushings-and-sleeves.png"
              usedIn="rotor assemblies, landing gear systems, turbine mechanisms"
              description="These wear-resistant bushings reduce friction, vibration, and mechanical wear in moving aerospace assemblies. Their durability enhances system life, improves heat dissipation, and ensures stable performance under heavy dynamic loads."
            />
            <ProductShowcaseCard 
              title="Satellite Connector Pins"
              image="https://i.postimg.cc/RC8DM4Tv/Satellite-connector-pins.png"
              usedIn="satellite instrumentation, communication modules, orbital mechanical systems"
              description="Ultra-precise connector pins ensure stable data transmission and secure mechanical fastening in space conditions. With the ability to withstand vacuum, radiation, and temperature fluctuations, they support long-term satellite reliability."
            />
             <ProductShowcaseCard 
              title="Gyroscope Pins"
              image="https://i.postimg.cc/fbTGV5SX/Gyroscope-pins.png"
              usedIn="navigation systems, inertial measurement units (IMUs), flight-control systems"
              description="Gyroscope pins maintain rotational accuracy and balance in navigation assemblies. Their precision enables aircraft and satellites to achieve accurate orientation, stability, and trajectory control."
            />
          </div>
        </div>
      </div>

      <IndustrySection
        id="medical"
        title="Medical"
        headline="Precision that Saves Lives."
        description="In our certified clean-room environments, we produce biocompatible components for surgical, dental, and diagnostic equipment, adhering to strict ISO 13485 & FDA standards."
        components={['Surgical Instruments', 'Dental Implants', 'Diagnostic Components', 'Orthopedic Devices']}
        imageUrl="https://www.tornos.com/sites/tornos.com/files/data/managed-files/banners/gb_tornos_medical.jpg"
        bgClass="bg-gray-100"
        textClass="text-steel-blue"
        reverse={true}
      />
      
      {/* Medical Components Section */}
      <div className="bg-gray-100 pb-12 md:pb-24 pt-4">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-steel-blue">Medical Components We Manufacture</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductShowcaseCard 
              title="Bone Screw"
              image="https://i.postimg.cc/Fz59stcR/Bone-screw.png"
              usedIn="orthopedic fixation, fracture repair"
              description="Engineered for strength and biocompatibility, our bone screws provide stable fixation while promoting optimal healing. Manufactured with micron-level precision to meet global medical standards."
            />
            <ProductShowcaseCard 
              title="Dental Abutment Part"
              image="https://i.postimg.cc/L6mpy33V/Dental-Implant-parts.png"
              usedIn="dental implants, prosthetic restorations"
              description="Our abutments ensure accurate fit, long-term durability, and perfect integration between implant and crown. Designed for smooth surface finish and high patient comfort."
            />
            <ProductShowcaseCard 
              title="Surgical Pin"
              image="https://i.postimg.cc/XqGVnjXz/Surgical-instrument-pins-(1).png"
              usedIn="trauma surgery, temporary stabilization"
              description="Corrosion-resistant and ultra-precise surgical pins that guarantee consistent performance in critical surgical environments."
            />
          </div>
        </div>
      </div>

      <IndustrySection
        id="micro-mechanics"
        title="Micro-Mechanics"
        headline="Micro-Mechanics Mastery"
        description="We specialize in micro-machining complex geometries at sub-micron accuracy. From intricate gears to miniaturized sensor bodies, our proprietary techniques deliver reliable miniature components for instrumentation, medical devices and precision tooling. We combine advanced CNC multi-axis capability with strict process controls to ensure repeatable performance and long lifecycle reliability."
        components={['Proprietary micro-machining workflows', 'Complex micro-geometries', 'In-house metrology', 'High-aspect-ratio parts']}
        imageUrl="https://www.researchgate.net/publication/336475282/figure/fig7/AS:815301423796267@1571394415967/Constructed-ornithopter-with-micro-mechanism-3D-printed-parts-see-online-version-for.jpg"
        bgClass="bg-steel-blue"
        textClass="text-white"
      />

       {/* Micro-Mechanics Components Section */}
       <div className="bg-steel-blue py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Precision Micro-Mechanics Portfolio</h3>
            <p className="text-silver-gray mt-2">Engineering the smallest details for the biggest impacts.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <ProductShowcaseCard 
              title="Micro Axles & Shafts"
              image="https://i.postimg.cc/SKYqPMP5/Axles-for-micro-devices-(1).png"
              usedIn="miniature motors, micro-robotics, medical instruments"
              description="Precision-machined micro axles ensure smooth rotational motion in compact assemblies. Their micron-level accuracy supports high reliability in aerospace sensors, medical devices, and advanced instrumentation."
            />
            <ProductShowcaseCard 
              title="Micro Pivot Pins"
              image="https://i.postimg.cc/52ZD6kPh/pivot-pins-(1).png"
              usedIn="micro-hinge systems, alignment mechanisms, miniature actuators"
              description="Engineered for stability and durability, pivot pins provide controlled axial rotation in space-restricted systems. Their high-strength design ensures long-term performance with minimal friction and wear."
            />
            <ProductShowcaseCard 
              title="Miniature Gear Components"
              image="https://i.postimg.cc/yNmpW63G/small-gears-(1).png"
              usedIn="micro-transmission systems, robotics, timing mechanisms"
              description="Miniature gears enable efficient torque transfer in micro-scale motion assemblies. Manufactured with advanced CNC machining, they deliver precise, vibration-free performance for demanding industrial and medical applications."
            />
             <ProductShowcaseCard 
              title="Micro Stems & Rods"
              image="https://i.postimg.cc/VvdF9z58/Watch-stems-(1).png"
              usedIn="precision alignment units, micro-guidance assemblies"
              description="Micro stems provide consistent movement control and alignment accuracy in high-precision environments. Their robust geometry and flawless finish ensure dependable performance in miniature mechanical systems."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
