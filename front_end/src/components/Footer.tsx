import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-roofing-navy text-white">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">AllSeasonInsulation</h3>
            <p className="text-white/80 mb-6">
              Professional roofing services delivered with quality craftsmanship and exceptional customer care.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                className="bg-white/10 hover:bg-roofing-orange text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-roofing-orange text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-roofing-orange text-white p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-roofing-orange text-white p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/home' },
                { name: 'Services', href: '/services' },
                { name: 'About Us', href: '/about' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Roofing Services', href: '/services/roofing' },
                { name: 'Insulation Services', href: '/services/insulation' }
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-roofing-orange">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-white/80">
                  Usher's Quay, Dublin 8<br />
                  Ireland
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-roofing-orange">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-white/80">+353852803497</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-roofing-orange">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-white/80">info@AllSeasonInsulation.com</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-roofing-orange">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-white/80">
                  Mon-Fri: 8am-6pm<br />
                  Sat: 9am-2pm
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} AllSeasonInsulation. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="bg-roofing-orange text-white p-3 rounded-full fixed bottom-6 right-6 shadow-md hover:bg-roofing-orange/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;