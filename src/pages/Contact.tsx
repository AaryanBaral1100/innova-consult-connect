
import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
