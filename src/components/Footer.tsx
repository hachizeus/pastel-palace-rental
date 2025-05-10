
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Help Center</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Safety Information</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Cancellation Options</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Our COVID-19 Response</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Community Forum</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Support Refugees</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Combating Discrimination</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Try Hosting</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Protection for Hosts</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Explore Hosting Resources</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Visit our Community Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Newsroom</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Learn about new features</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-airbnb-primary transition">Investors</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 StayEasy, Inc. All rights reserved
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-500 hover:text-airbnb-primary transition">Privacy</Link>
            <Link to="#" className="text-gray-500 hover:text-airbnb-primary transition">Terms</Link>
            <Link to="#" className="text-gray-500 hover:text-airbnb-primary transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
