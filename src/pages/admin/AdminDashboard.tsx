
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from '@/components/admin/AdminLayout';
import { MessageSquare, Users, Calendar, FileText } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [counts, setCounts] = useState({
    testimonials: 0,
    caseStudies: 0,
    contacts: 0,
    consultations: 0
  });
  const [recentContacts, setRecentContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Get counts
        const [
          { count: testimonialsCount }, 
          { count: caseStudiesCount }, 
          { count: contactsCount }, 
          { count: consultationsCount },
          { data: recentContactData }
        ] = await Promise.all([
          supabase.from('testimonials').select('*', { count: 'exact', head: true }),
          supabase.from('case_studies').select('*', { count: 'exact', head: true }),
          supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
          supabase.from('consultation_bookings').select('*', { count: 'exact', head: true }),
          supabase.from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(5)
        ]);

        setCounts({
          testimonials: testimonialsCount || 0,
          caseStudies: caseStudiesCount || 0,
          contacts: contactsCount || 0,
          consultations: consultationsCount || 0
        });

        setRecentContacts(recentContactData || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
            <MessageSquare className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '-' : counts.testimonials}</div>
            <p className="text-xs text-gray-500">Total testimonials</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Case Studies</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '-' : counts.caseStudies}</div>
            <p className="text-xs text-gray-500">Success stories published</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Contacts</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '-' : counts.contacts}</div>
            <p className="text-xs text-gray-500">Contact form submissions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Consultations</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? '-' : counts.consultations}</div>
            <p className="text-xs text-gray-500">Scheduled consultations</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Contacts</CardTitle>
            <CardDescription>
              Recent inquiries submitted through the contact form
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-innova-gold"></div>
              </div>
            ) : recentContacts.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No contact submissions yet
              </div>
            ) : (
              <div className="space-y-6">
                {recentContacts.map((contact) => (
                  <div key={contact.id} className="flex items-start space-x-4 border-b pb-4 last:border-0">
                    <div className="flex-1">
                      <h4 className="font-semibold">{contact.full_name}</h4>
                      <div className="flex flex-wrap gap-1 text-sm text-gray-500">
                        <span>{contact.email}</span>
                        <span>•</span>
                        <span>{contact.phone || 'No phone'}</span>
                      </div>
                      <p className="text-sm mt-1 line-clamp-2">{contact.message}</p>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDate(contact.created_at)}
                        {contact.service_interested && ` • Interested in: ${contact.service_interested}`}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${contact.read ? 'bg-gray-300' : 'bg-green-500'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4 text-center">
              <Link to="/admin/inquiries">
                <Button variant="outline">View All Inquiries</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
