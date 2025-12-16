
import React, { useState, useEffect } from 'react';

// Icons for the mobile menu button
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  // JS-based smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on click
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    {
      name: 'Industries',
      href: '#industries',
      children: [
        { name: 'Automobile', href: '#automobile' },
        { name: 'Electronics', href: '#electronics' },
        { name: 'Aerospace', href: '#aerospace' },
        { name: 'Medical', href: '#medical' },
        { name: 'Micro-Mechanics', href: '#micro-mechanics' },
      ],
    },
    {
        name: 'Capabilities',
        href: '#capabilities',
        children: [
            { name: 'Swiss Precision', href: '#capabilities' },
            { name: 'Tornos GT-13/6', href: '#capabilities' },
            { name: 'Cleanroom Systems', href: '#capabilities' },
            { name: 'Sub-Micron Machining', href: '#capabilities' },
            { name: 'Prototyping & Production', href: '#capabilities' },
        ]
    },
    { name: 'Technology', href: '#technology' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Quality', href: '#quality' },
  ];
  
  const showSolidHeader = isScrolled || isMenuOpen;
  
  // Text color is always white now because both transparent (on hero) and steel-blue (sticky) are dark backgrounds
  const headerTextColor = 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidHeader ? 'bg-steel-blue/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-4 transition-all duration-300">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center"
        >
          <img 
            src="https://i.postimg.cc/SQ9CWZLJ/Whats-App-Image-2025-12-11-at-5-28-10-PM-removebg-preview.png" 
            alt="Superb Precision" 
            className="w-auto h-16 md:h-19 transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            if (link.children) {
              return (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-bold text-lg transition-colors duration-300 flex items-center cursor-pointer ${
                      isActive
                        ? 'text-accent-green'
                        : 'text-white hover:text-accent-green'
                    }`}
                  >
                    {link.name}
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </a>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="py-1 ring-1 ring-black ring-opacity-5 rounded-md">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href)}
                          className="block px-4 py-2 text-sm text-steel-blue hover:bg-gray-100 hover:text-accent-green border-b border-gray-50 last:border-none"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-bold text-lg transition-colors duration-300 ${
                  isActive
                    ? 'text-accent-green'
                    : 'text-white hover:text-accent-green'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden lg:inline-block bg-accent-green text-white font-bold text-lg py-2 px-6 rounded-full hover:bg-white hover:text-steel-blue transition-all duration-300 shadow-lg"
        >
          Contact Us
        </a>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={headerTextColor}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'} overflow-y-auto bg-steel-blue/98 backdrop-blur-md`}>
          <nav className="flex flex-col px-6 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.name ? null : link.name)}
                      aria-expanded={openMobileSubmenu === link.name}
                      className="w-full flex justify-between items-center font-bold text-lg text-white hover:text-accent-green py-3 text-left border-b border-gray-700"
                    >
                      <span>{link.name}</span>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${openMobileSubmenu === link.name ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openMobileSubmenu === link.name ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="pl-4 py-1 flex flex-col items-start bg-black/20 rounded-md my-1">
                        {link.children.map((child) => (
                           <a
                           key={child.name}
                           href={child.href}
                           onClick={(e) => handleNavClick(e, child.href)}
                           className="font-normal text-sm text-gray-200 hover:text-accent-green py-2 px-2 w-full block"
                         >
                           {child.name}
                         </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-bold text-lg text-white hover:text-accent-green py-3 block border-b border-gray-700"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
             <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center bg-accent-green text-white font-bold text-lg py-3 mt-4 px-6 rounded-full hover:bg-white hover:text-steel-blue transition-all duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </nav>
      </div>
    </header>
  );
};

export default Header;
