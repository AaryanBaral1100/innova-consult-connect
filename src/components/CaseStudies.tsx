
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const CaseStudies = () => {
  const caseStudies = [
    {
      student: "Sarah T.",
      university: "Harvard University",
      program: "Computer Science",
      image: "/placeholder.svg",
      quote: "Innova's personalized approach to my applications completely transformed my chances. Their guidance was invaluable.",
      story: "From a small town with limited resources to an Ivy League education with 75% scholarship."
    },
    {
      student: "Michael R.",
      university: "Oxford University",
      program: "International Relations",
      image: "/placeholder.svg",
      quote: "The test preparation and interview coaching I received gave me the confidence to succeed in the competitive Oxford admissions process.",
      story: "Overcame application rejections previously to secure admission to a dream program with comprehensive application overhaul."
    },
    {
      student: "Aisha K.",
      university: "Stanford University",
      program: "Biomedical Engineering",
      image: "/placeholder.svg",
      quote: "Innova helped me navigate the complex scholarship landscape and secure funding that made my education possible.",
      story: "First-generation college student who secured full funding through strategic scholarship applications."
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innova-navy">Success Stories</h2>
          <div className="w-24 h-1 bg-innova-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read about our students' journeys and how our guidance helped them achieve their educational goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={`${study.student} at ${study.university}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-innova-navy">{study.student}</CardTitle>
                <CardDescription className="text-innova-gold font-medium">
                  {study.program}, {study.university}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="italic text-gray-600 mb-4">
                  "{study.quote}"
                </blockquote>
                <Separator className="my-4" />
                <p className="text-sm text-gray-700">
                  {study.story}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 text-innova-gold hover:text-innova-navy">
                  Read Full Story
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-medium text-innova-navy mb-6">
            Ready to start your own success story?
          </p>
          <Button className="bg-innova-gold hover:bg-innova-lightgold text-white px-8 py-6 text-lg">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
