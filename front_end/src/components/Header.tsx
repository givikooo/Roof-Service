import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Home, ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Check if we're on home page
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        // Only set transparent on home page at top
        setScrolled(!isHomePage);
      }
    };

    // Set initial state
    if (!isHomePage) {
      setScrolled(true);
    } else if (window.scrollY <= 50) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close mobile menu and services dropdown when route changes
  useEffect(() => {
    closeMenu();
    setIsServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const roofingServices = [
    { name: "Cladding Repair", slug: "cladding-repair" },
    { name: "Downpipe Repair", slug: "downpipe-repair" },
    { name: "Dry Verge", slug: "dry-verge" },
    { name: "Fascia Replacement", slug: "fascia-replacement" },
    { name: "Flat Roofing", slug: "flat-roofing" },
    { name: "Gutter Services", slug: "gutter-services" },
    { name: "Rainwater Systems", slug: "rainwater-systems" },
    { name: "Ridge Repointing", slug: "ridge-repointing" },
    { name: "Roof Cleaning", slug: "roof-cleaning" },
    { name: "Roof Inspection", slug: "roof-inspection" },
    { name: "Roof Installation", slug: "roof-installation" },
    { name: "Roof Maintenance", slug: "roof-maintenance" },
    { name: "Roof Repair", slug: "roof-repair" },
    { name: "Roof Replacement", slug: "roof-replacement" },
    { name: "Roofing Leadwork", slug: "roofing-leadwork" },
    { name: "Slate Roofing", slug: "slate-roofing" },
    { name: "Soffit Replacement", slug: "soffit-replacement" },
    { name: "Storm Damage", slug: "storm-damage" },
    { name: "Tile Roofing", slug: "tile-roofing" },
    { name: "Velux Installation", slug: "velux-installation" },
  ];

  const insulationServices = [
    { name: "External Insulation", slug: "external-insulation" },
    { name: "Internal Insulation", slug: "internal-insulation" },
    { name: "Loft Insulation", slug: "loft-insulation" },
    { name: "Roof Insulation", slug: "roof-insulation" },
  ];

  // Split roofing services into two columns
  const midpoint = Math.ceil(roofingServices.length / 2);
  const roofingColumn1 = roofingServices.slice(0, midpoint);
  const roofingColumn2 = roofingServices.slice(midpoint);

  return (
    <header 
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        "top-4 md:top-5",
        scrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/home" 
            className={cn(
              "text-2xl font-bold transition-colors duration-300",
              scrolled ? "text-gray-900" : "text-white"
            )}
          >
            AllSeasonInsulation
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "text-base font-medium transition-all duration-300 relative group flex items-center gap-1",
                        scrolled
                          ? isActive
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                          : isActive
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )} />
                      <span 
                        className={cn(
                          "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                          scrolled ? "bg-blue-600" : "bg-white",
                          isActive && "w-full"
                        )}
                      />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-200 origin-top",
                        isServicesOpen 
                          ? "opacity-100 visible scale-100" 
                          : "opacity-0 invisible scale-95 pointer-events-none"
                      )}
                    >
                      <div className="p-6">
                        {/* Roofing Services Section */}
                        <div className="mb-6">
                          <Link 
                            to="/services/roofing"
                            className="block mb-3 pb-2 border-b border-gray-200 group"
                          >
                            <h3 className="text-lg font-semibold text-roofing-navy group-hover:text-blue-600 transition-colors flex items-center gap-2">
                              <Home size={20} />
                              Roofing Services
                              <ArrowRight size={16} className="ml-auto" />
                            </h3>
                          </Link>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                            <div className="space-y-1">
                              {roofingColumn1.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-150"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                            <div className="space-y-1">
                              {roofingColumn2.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-150"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Insulation Services Section */}
                        <div>
                          <Link 
                            to="/services/insulation"
                            className="block mb-3 pb-2 border-b border-gray-200 group"
                          >
                            <h3 className="text-lg font-semibold text-roofing-navy group-hover:text-blue-600 transition-colors flex items-center gap-2">
                              <Sparkles size={20} />
                              Insulation Services
                              <ArrowRight size={16} className="ml-auto" />
                            </h3>
                          </Link>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                            {insulationServices.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-150"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link
                            to="/services"
                            className="block w-full text-center py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-150"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-base font-medium transition-all duration-300 relative group",
                    scrolled
                      ? isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      : isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                      scrolled ? "bg-blue-600" : "bg-white",
                      isActive && "w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-300",
              scrolled 
                ? "text-gray-900 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300",
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        style={{ top: scrolled ? '60px' : '72px' }}
      />

      {/* Mobile Menu */}
      <nav
        className={cn(
          "md:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-y-auto",
          isMenuOpen 
            ? "max-h-[calc(100vh-72px)] opacity-100" 
            : "max-h-0 opacity-0"
        )}
        style={{ top: scrolled ? '60px' : '72px' }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={cn(
                        "w-full text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between",
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      isServicesOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="pl-4 space-y-4">
                        {/* Roofing Services */}
                        <div>
                          <Link
                            to="/services/roofing"
                            onClick={closeMenu}
                            className="block px-4 py-2 mb-2 font-semibold text-roofing-navy hover:text-blue-600 transition-colors flex items-center gap-2"
                          >
                            <Home size={18} />
                            Roofing Services
                            <ArrowRight size={14} className="ml-auto" />
                          </Link>
                          <div className="space-y-1 pl-2">
                            {roofingServices.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={closeMenu}
                                className="block py-1.5 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-150"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Insulation Services */}
                        <div>
                          <Link
                            to="/services/insulation"
                            onClick={closeMenu}
                            className="block px-4 py-2 mb-2 font-semibold text-roofing-navy hover:text-blue-600 transition-colors flex items-center gap-2"
                          >
                            <Sparkles size={18} />
                            Insulation Services
                            <ArrowRight size={14} className="ml-auto" />
                          </Link>
                          <div className="space-y-1 pl-2">
                            {insulationServices.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={closeMenu}
                                className="block py-1.5 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-150"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Close Button in Mobile Menu */}
          <button
            onClick={closeMenu}
            className="mt-6 w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <X className="h-5 w-5" />
            Close Menu
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
