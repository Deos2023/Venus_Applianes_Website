
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/6c697fcb-f9ff-466e-97f0-7cddf3d6c664.png" 
                alt="Venus Appliances" 
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Providing quality air conditioners from premium brands to keep your space comfortable all year round.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Top Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gallery?brand=hitachi" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  Hitachi
                </Link>
              </li>
              <li>
                <Link to="/gallery?brand=lg" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  LG
                </Link>
              </li>
              <li>
                <Link to="/gallery?brand=voltas" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  Voltas
                </Link>
              </li>
              <li>
                <Link to="/gallery?brand=daikin" className="text-gray-400 hover:text-cool-blue-light transition text-sm sm:text-base">
                  Daikin
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cool-blue-light shrink-0 mt-1" />
                <span className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  63 GANESH CHANDRA AVENUE KOLKATA 700013<br />
                  BETWEEN CHANDNI METRO STATION AND HIND CINEMA BESIDE RBL BANK, GROUND FLOOR.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-cool-blue-light" />
                <span className="text-gray-400 text-sm sm:text-base">93319 62120</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-cool-blue-light" />
                <span className="text-gray-400 text-sm sm:text-base break-all">venusapplianceskol@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            © 2026 Venus Appliances. Website Developed & Maintained by 
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service 
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
