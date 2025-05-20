
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/24468ec7-9604-403b-a865-decac3cf4482.png" 
            alt="Innova Education Consultancy" 
            className="h-12 w-auto"
          />
          <span className={`ml-2 font-montserrat font-bold text-lg md:text-xl ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`}>
            Innova
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium text-sm hover:text-innova-gold transition-colors ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`}>
            Home
          </Link>
          <Link to="/about" className={`font-medium text-sm hover:text-innova-gold transition-colors ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`}>
            About Us
          </Link>
          <Link to="/services" className={`font-medium text-sm hover:text-innova-gold transition-colors ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`}>
            Services
          </Link>
          <Link to="/case-studies" className={`font-medium text-sm hover:text-innova-gold transition-colors ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`}>
            Case Studies
          </Link>
          <Link to="/contact" className={`font-medium text-sm hover:text-innova-gold transition-colors ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`}>
            Contact
          </Link>
          <Button className="bg-innova-gold hover:bg-innova-lightgold text-white font-medium">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Toggle Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-innova-navy' : 'text-innova-navy'}`} />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              <Link to="/" className="px-6 py-3 text-innova-navy hover:bg-gray-100" onClick={closeNav}>
                Home
              </Link>
              <Link to="/about" className="px-6 py-3 text-innova-navy hover:bg-gray-100" onClick={closeNav}>
                About Us
              </Link>
              <Link to="/services" className="px-6 py-3 text-innova-navy hover:bg-gray-100" onClick={closeNav}>
                Services
              </Link>
              <Link to="/case-studies" className="px-6 py-3 text-innova-navy hover:bg-gray-100" onClick={closeNav}>
                Case Studies
              </Link>
              <Link to="/contact" className="px-6 py-3 text-innova-navy hover:bg-gray-100" onClick={closeNav}>
                Contact
              </Link>
              <div className="px-6 py-3">
                <Button className="w-full bg-innova-gold hover:bg-innova-lightgold text-white font-medium">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
