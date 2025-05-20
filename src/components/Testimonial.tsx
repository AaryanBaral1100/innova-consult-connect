
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Priya S.",
      role: "Medical School Student",
      content: "Innova Education Consultancy was instrumental in helping me get accepted to my dream medical school. Their strategic approach to my application made all the difference.",
      image: "/placeholder.svg"
    },
    {
      name: "James T.",
      role: "Graduate Student",
      content: "The test preparation services were outstanding. My scores improved dramatically, opening doors to programs I hadn't thought possible before.",
      image: "/placeholder.svg"
    },
    {
      name: "Mei L.",
      role: "International Student",
      content: "As an international student, the guidance I received for visa applications and university selection was invaluable. I'm now thriving at my university of choice.",
      image: "/placeholder.svg"
    },
    {
      name: "Robert K.",
      role: "Parent",
      content: "The personalized attention my son received helped him secure scholarships worth over $30,000. I couldn't be more grateful for their expertise and dedication.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="section-padding bg-innova-navy text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-innova-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from students and parents who've experienced our services.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/10 backdrop-blur-lg border-none h-full">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="rounded-full h-12 w-12 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <CardDescription className="text-gray-300">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <blockquote className="text-gray-200 italic">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-innova-gold/80 text-white hover:bg-innova-gold border-none" />
          <CarouselNext className="bg-innova-gold/80 text-white hover:bg-innova-gold border-none" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
