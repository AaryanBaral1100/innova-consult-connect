
import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <About />
        <Testimonial />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
