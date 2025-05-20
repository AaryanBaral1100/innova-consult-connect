
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { handshake, lightbulb, users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: users,
      title: "Student-Centered",
      description: "We focus on each student's unique needs and goals, providing tailored guidance for their educational journey."
    },
    {
      icon: lightbulb,
      title: "Excellence & Innovation",
      description: "We strive for excellence in all we do, embracing innovative approaches to education consultancy."
    },
    {
      icon: handshake,
      title: "Integrity & Trust",
      description: "We uphold the highest ethical standards and build lasting relationships based on trust and transparency."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innova-navy">About Us</h2>
          <div className="w-24 h-1 bg-innova-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guiding students toward successful academic futures with personalized consulting and proven strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-innova-navy">Our Mission & Vision</h3>
            <p className="text-gray-700 mb-4">
              At Innova Education Consultancy, we are dedicated to empowering students to achieve their full academic potential and career aspirations. Our mission is to provide expert guidance through the complex landscape of educational choices and opportunities.
            </p>
            <p className="text-gray-700 mb-4">
              We envision a world where every student has access to the resources, knowledge, and support needed to make informed decisions about their educational future, regardless of background or circumstance.
            </p>
            <div className="flex items-center mt-8">
              <div className="flex flex-col">
                <div className="flex space-x-8">
                  <div>
                    <span className="block text-3xl font-bold text-innova-gold">500+</span>
                    <span className="text-sm text-gray-600">Students Placed</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-innova-gold">15+</span>
                    <span className="text-sm text-gray-600">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-innova-gold">50+</span>
                    <span className="text-sm text-gray-600">Partner Universities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-innova-gold/20 rounded-lg"></div>
            <img 
              src="/placeholder.svg" 
              alt="About Innova Education Consultancy" 
              className="relative z-10 rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-innova-navy">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-innova-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-innova-gold" />
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-innova-navy">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
