
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <motion.section 
      className="py-16 bg-gradient-to-r from-gray-50 to-blue-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Store
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us at our convenient location in Kolkata for personalized AC solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p className="text-gray-600">
                  metro station and Hind cinema, 63, Ganesh Chandra Ave, near Rbl Bank, Between, Chandni Chawk, Bowbazar, Kolkata, West Bengal 700013
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold mb-4">Why Visit Us?</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Expert consultation on AC selection</li>
                <li>• See products in person before buying</li>
                <li>• Professional installation services</li>
                <li>• After-sales support and maintenance</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.338720866952!2d88.3579329!3d22.5664314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aa23527e69%3A0x768adf630181c6e8!2sVenus%20Appliances!5e0!3m2!1sen!2sin!4v1750248716047!5m2!1sen!2sin"
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MapSection;
