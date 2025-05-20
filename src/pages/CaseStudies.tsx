
import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudies from '../components/CaseStudies';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const CaseStudiesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <CaseStudies />
        <Testimonial />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
