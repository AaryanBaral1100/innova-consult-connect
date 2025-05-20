
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { globe, lightbulb, briefcase, fileText, chartBar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: globe,
      title: "Study Abroad Counseling",
      description: "Expert guidance for international university applications, visa processes, and scholarships for studying abroad.",
      link: "/services/study-abroad"
    },
    {
      icon: briefcase,
      title: "Career Development",
      description: "Personalized career planning, skill assessment, and preparation for the professional world.",
      link: "/services/career-development"
    },
    {
      icon: fileText,
      title: "Application Support",
      description: "Comprehensive assistance with applications, essays, personal statements, and admission interviews.",
      link: "/services/application-support"
    },
    {
      icon: chartBar,
      title: "Test Preparation",
      description: "Specialized coaching for standardized tests including SAT, ACT, GMAT, GRE, TOEFL, and IELTS.",
      link: "/services/test-preparation"
    },
    {
      icon: lightbulb,
      title: "Academic Counseling",
      description: "Guidance on course selection, major declaration, and academic improvement strategies.",
      link: "/services/academic-counseling"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innova-navy">Our Services</h2>
          <div className="w-24 h-1 bg-innova-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive educational consulting services designed to help students at every stage of their academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="bg-innova-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-innova-gold" />
                  </div>
                  <CardTitle className="text-xl font-bold text-innova-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-innova-gold hover:text-innova-navy font-medium">
                    Learn More →
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-innova-gold hover:bg-innova-lightgold text-white px-8 py-6 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
