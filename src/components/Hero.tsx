
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-innova-navy text-white pt-28 pb-20 overflow-hidden">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-innova-gold/10 blur-3xl"></div>
        <div className="absolute top-[50%] right-[15%] w-72 h-72 rounded-full bg-innova-lightgold/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full bg-innova-lightblue/10 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Shaping Future Leaders Through Education
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">
                Expert guidance for students seeking excellence in higher education and career development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-innova-gold hover:bg-innova-lightgold text-white px-8 py-6 text-lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-innova-navy px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-innova-gold/20 rounded-full blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Education Consultancy"
                className="relative z-10 max-w-full w-[80%] md:w-full mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
