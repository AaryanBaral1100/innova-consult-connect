
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Globe, Users } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterested: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone || null,
            service_interested: formData.serviceInterested || null,
            message: formData.message
          }
        ]);

      if (error) throw error;

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceInterested: '',
        message: ''
      });

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innova-navy">Get In Touch</h2>
          <div className="w-24 h-1 bg-innova-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to start your educational journey? Contact us today for personalized guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start">
              <div className="bg-innova-gold/10 p-3 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-innova-gold" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-innova-navy">Talk to Us</h4>
                <p className="text-gray-600 mb-1">info@innovaeducation.com</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-innova-gold/10 p-3 rounded-full mr-4">
                <Globe className="h-6 w-6 text-innova-gold" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-innova-navy">Visit Our Office</h4>
                <p className="text-gray-600 mb-1">123 Education Lane</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-innova-gold/10 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-innova-gold" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-innova-navy">Working Hours</h4>
                <p className="text-gray-600 mb-1">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-600">Saturday: 10am - 2pm</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-lg shadow-xl p-6 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-innova-navy">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name" 
                    className="w-full" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email" 
                    className="w-full" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number" 
                  className="w-full" 
                />
              </div>
              
              <div>
                <label htmlFor="serviceInterested" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interested In
                </label>
                <select 
                  id="serviceInterested"
                  name="serviceInterested"
                  value={formData.serviceInterested}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-innova-gold focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Study Abroad Counseling">Study Abroad Counseling</option>
                  <option value="Career Development">Career Development</option>
                  <option value="Application Support">Application Support</option>
                  <option value="Test Preparation">Test Preparation</option>
                  <option value="Academic Counseling">Academic Counseling</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  className="w-full min-h-[120px]" 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-innova-gold hover:bg-innova-lightgold text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
