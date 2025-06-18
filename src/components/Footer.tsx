
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/6c697fcb-f9ff-466e-97f0-7cddf3d6c664.png" 
                alt="Venus Appliances" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Providing quality air conditioners from premium brands to keep your space comfortable all year round.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cool-blue-light transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-cool-blue-light transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cool-blue-light transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cool-blue-light transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/brand/samsung" className="text-gray-400 hover:text-cool-blue-light transition">
                  Samsung
                </Link>
              </li>
              <li>
                <Link to="/brand/lg" className="text-gray-400 hover:text-cool-blue-light transition">
                  LG
                </Link>
              </li>
              <li>
                <Link to="/brand/voltas" className="text-gray-400 hover:text-cool-blue-light transition">
                  Voltas
                </Link>
              </li>
              <li>
                <Link to="/brand/daikin" className="text-gray-400 hover:text-cool-blue-light transition">
                  Daikin
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cool-blue-light shrink-0 mt-1" />
                <span className="text-gray-400">metro station and Hind cinema, 63, Ganesh Chandra Ave, near Rbl Bank, Between, Chandni Chawk, Bowbazar, Kolkata, West Bengal 700013</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cool-blue-light" />
                <span className="text-gray-400">8240223074 / 93319 62120</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cool-blue-light" />
                <span className="text-gray-400">venusapplianceskol@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © Copyright © 2025. All Rights Reserved. Website Developed & Maintained by Digital Exposure Online Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
