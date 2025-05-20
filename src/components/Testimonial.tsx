
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  image_url: string | null;
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('active', true)
          .order('sort_order', { ascending: true });

        if (error) {
          console.error('Error fetching testimonials:', error);
          return;
        }

        setTestimonials(data || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Default testimonials for fallback
  const defaultTestimonials = [
    {
      id: '1',
      name: "Priya S.",
      role: "Medical School Student",
      content: "Innova Education Consultancy was instrumental in helping me get accepted to my dream medical school. Their strategic approach to my application made all the difference.",
      image_url: "/placeholder.svg"
    },
    {
      id: '2',
      name: "James T.",
      role: "Graduate Student",
      content: "The test preparation services were outstanding. My scores improved dramatically, opening doors to programs I hadn't thought possible before.",
      image_url: "/placeholder.svg"
    },
    {
      id: '3',
      name: "Mei L.",
      role: "International Student",
      content: "As an international student, the guidance I received for visa applications and university selection was invaluable. I'm now thriving at my university of choice.",
      image_url: "/placeholder.svg"
    },
    {
      id: '4',
      name: "Robert K.",
      role: "Parent",
      content: "The personalized attention my son received helped him secure scholarships worth over $30,000. I couldn't be more grateful for their expertise and dedication.",
      image_url: "/placeholder.svg"
    }
  ];

  // Use database testimonials if available, otherwise use defaults
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

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

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-innova-gold"></div>
          </div>
        ) : (
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {displayTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/10 backdrop-blur-lg border-none h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <img 
                        src={testimonial.image_url || "/placeholder.svg"} 
                        alt={testimonial.name}
                        className="rounded-full h-12 w-12 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
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
        )}
      </div>
    </section>
  );
};

export default Testimonial;
