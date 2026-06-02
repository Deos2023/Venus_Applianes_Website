import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  const [loadMap, setLoadMap] = useState(false);

  return (
    <motion.section
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-gray-50 to-blue-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Store
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Find us at our convenient location in Kolkata for personalized AC solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  63 GANESH CHANDRA AVENUE KOLKATA 700013<br />
                  BETWEEN CHANDNI METRO STATION AND HIND CINEMA BESIDE RBL BANK, GROUND FLOOR.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Why Visit Us?</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>• Expert consultation on AC selection</li>
                <li>• See products in person before buying</li>
                <li>• Professional installation services</li>
                <li>• After-sales support and maintenance</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg order-1 lg:order-2 min-h-[300px] bg-gray-100">
            {!loadMap ? (
              <button
                type="button"
                onClick={() => setLoadMap(true)}
                className="flex h-[300px] sm:h-[350px] lg:h-[400px] w-full items-center justify-center text-blue-700 font-medium hover:bg-gray-200 transition"
                aria-label="Load map"
              >
                Load map
              </button>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0272914546995!2d88.3579329!3d22.5664314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a98756e675%3A0x53fdcc792ee02617!2s63%2C%20Ganesh%20Chandra%20Ave%2C%20Chandni%20Chawk%2C%20Bowbazar%2C%20Kolkata%2C%20West%20Bengal%20700012!5e1!3m2!1sen!2sin!4v1750314538333!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="sm:h-[350px] lg:h-[400px] w-full"
                style={{ border: 0 }}
                title="Venus Appliances location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MapSection;