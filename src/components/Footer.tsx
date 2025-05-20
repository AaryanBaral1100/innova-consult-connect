
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-innova-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/24468ec7-9604-403b-a865-decac3cf4482.png" 
                alt="Innova Education Consultancy" 
                className="h-12 w-auto"
              />
              <span className="ml-2 font-montserrat font-bold text-xl text-white">
                Innova
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students to achieve their academic and career goals through expert guidance and personalized consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-innova-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-innova-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-innova-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-innova-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-innova-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-innova-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-innova-gold transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-innova-gold transition-colors">Success Stories</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-innova-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/study-abroad" className="text-gray-300 hover:text-innova-gold transition-colors">Study Abroad</Link></li>
              <li><Link to="/services/career-development" className="text-gray-300 hover:text-innova-gold transition-colors">Career Development</Link></li>
              <li><Link to="/services/application-support" className="text-gray-300 hover:text-innova-gold transition-colors">Application Support</Link></li>
              <li><Link to="/services/test-preparation" className="text-gray-300 hover:text-innova-gold transition-colors">Test Preparation</Link></li>
              <li><Link to="/services/academic-counseling" className="text-gray-300 hover:text-innova-gold transition-colors">Academic Counseling</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on education opportunities and tips.
            </p>
            <div className="flex space-x-2 mb-2">
              <Input 
                placeholder="Your email" 
                className="bg-innova-navy border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-innova-gold hover:bg-innova-lightgold text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Innova Education Consultancy. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-innova-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-innova-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-innova-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
