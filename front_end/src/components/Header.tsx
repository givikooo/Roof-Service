import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
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
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
          "md:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0"
        )}
        style={{ top: scrolled ? '60px' : '72px' }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
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
