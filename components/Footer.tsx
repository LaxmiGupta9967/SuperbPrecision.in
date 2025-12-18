
import React from 'react';

// Social Media Icons
const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.185 5.432 0v8.306h5v-10.592c0-6.648-7.234-6.459-10.464-3.25v-2.464z"/>
  </svg>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-green hover:text-white transition-all duration-300 transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-steel-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://i.postimg.cc/SQ9CWZLJ/Whats-App-Image-2025-12-11-at-5-28-10-PM-removebg-preview.png" 
              alt="Superb Precision" 
              className="h-14 w-auto mb-4 " 
            />
            <p className="text-silver-gray mb-6">Engineering the Future, One Micron at a Time.</p>
            
            <div className="flex space-x-4">
              <SocialIcon href="https://www.instagram.com/superb_precision/" icon={<InstagramIcon />} label="Instagram" />
              <SocialIcon href="https://www.facebook.com/profile.php?id=61585019997712" icon={<FacebookIcon />} label="Facebook" />
              <SocialIcon href="https://www.linkedin.com/feed/?trk=onboarding-landing" icon={<LinkedInIcon />} label="LinkedIn" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => handleFooterNavClick(e, '#about')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#industries" onClick={(e) => handleFooterNavClick(e, '#industries')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Industries</a></li>
              <li><a href="#capabilities" onClick={(e) => handleFooterNavClick(e, '#capabilities')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Capabilities</a></li>
              <li><a href="#sustainability" onClick={(e) => handleFooterNavClick(e, '#sustainability')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Sustainability</a></li>
              <li><a href="#contact" onClick={(e) => handleFooterNavClick(e, '#contact')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#automobile" onClick={(e) => handleFooterNavClick(e, '#automobile')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Automobile</a></li>
              <li><a href="#electronics" onClick={(e) => handleFooterNavClick(e, '#electronics')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Electronics</a></li>
              <li><a href="#aerospace" onClick={(e) => handleFooterNavClick(e, '#aerospace')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Aerospace</a></li>
              <li><a href="#medical" onClick={(e) => handleFooterNavClick(e, '#medical')} className="text-silver-gray hover:text-white transition-colors cursor-pointer">Medical</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-lg mb-4">Our Certifications</h4>
            <div className="flex space-x-4">
               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center" title="ISO 9001">
                  <span className="font-bold text-xs">ISO</span>
               </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center" title="AS9100">
                  <span className="font-bold text-xs">AS</span>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-600 pt-8 text-center text-silver-gray">
          <p>&copy; {new Date().getFullYear()} Superb Precision. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
