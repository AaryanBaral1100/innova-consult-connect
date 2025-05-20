
import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Services />
        <CaseStudies />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
