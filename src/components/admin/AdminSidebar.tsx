
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  FileText, 
  Settings, 
  Calendar, 
  Image,
  Globe,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

type MenuItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  submenu?: { title: string; path: string }[];
};

const AdminSidebar = () => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      title: 'Content',
      path: '/admin/content',
      icon: <FileText className="w-5 h-5" />,
      submenu: [
        { title: 'About', path: '/admin/content/about' },
        { title: 'Services', path: '/admin/content/services' },
        { title: 'Case Studies', path: '/admin/content/case-studies' },
        { title: 'Testimonials', path: '/admin/content/testimonials' },
        { title: 'Team Members', path: '/admin/content/team' }
      ]
    },
    {
      title: 'Inquiries',
      path: '/admin/inquiries',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: 'Consultations',
      path: '/admin/consultations',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: 'Media Library',
      path: '/admin/media',
      icon: <Image className="w-5 h-5" />
    },
    {
      title: 'Website',
      path: '/',
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: 'Users',
      path: '/admin/users',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Settings',
      path: '/admin/settings',
      icon: <Settings className="w-5 h-5" />
    }
  ];

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-innova-navy text-white min-h-screen flex-shrink-0">
      <div className="p-4">
        <Link to="/admin" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Innova Admin</span>
        </Link>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className={`flex w-full items-center px-4 py-3 text-sm hover:bg-innova-navy-light transition-colors`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.title}</span>
                    <span className="ml-auto">
                      {openSubmenu === item.title ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  
                  {openSubmenu === item.title && (
                    <ul className="pl-10 space-y-1 bg-innova-navy-light">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm ${
                              isActive(subItem.path)
                                ? 'text-innova-gold font-medium'
                                : 'text-gray-300 hover:text-white'
                            } transition-colors`}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm ${
                    isActive(item.path)
                      ? 'bg-innova-navy-light text-innova-gold font-medium'
                      : 'text-gray-300 hover:bg-innova-navy-light hover:text-white'
                  } transition-colors`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
