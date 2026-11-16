import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_MAPS_LINK =
  "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwio_4GY5-uXAxUAAAAAHQAAAAAQCA..i&rlz=1C1UEAD_enIN1068IN1068&udm&fvr=1&pvq=Cg0vZy8xMWRkeWs1azE2IhYKEHZlbnVzIGFwcGxpYW5jZXMQAhgD&lqi=ChB2ZW51cyBhcHBsaWFuY2VzSKaIy9izrICACFoiEAAQARgAGAEiEHZlbnVzIGFwcGxpYW5jZXMqBggCEAAQAZIBD2FwcGxpYW5jZV9zdG9yZQ&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a0277aa23527e69:0x768adf630181c6e8";

const MapSection = () => {
  const [loadMap, setLoadMap] = useState(false);

  return (
    <motion.section
      className="py-12 sm:py-16 bg-gradient-to-b from-white via-blue-50/50 to-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-blue-100 text-blue-800 mb-3">
            <MapPin className="h-3.5 w-3.5" /> Chandni Chowk AC Market, Kolkata
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Visit Our Showroom in Kolkata
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Located in Kolkata&apos;s famous electronics commercial hub at Chandni Chowk for live product demos, wholesale deals &amp; expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Venus Appliances - Store Address
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    <strong>Chandni, 63, Ganesh Chandra Ave</strong>, near RBL Bank, Between Chandni Chawk Metro Station &amp; Hind Cinema, Bowbazar, Kolkata, West Bengal 700013 (Ground Floor).
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-blue-800 font-medium">
                    <span className="bg-blue-50 px-2.5 py-1 rounded-md">
                      2 Mins Walk from Chandni Chowk Metro
                    </span>
                    <span className="bg-blue-50 px-2.5 py-1 rounded-md">
                      Near RBL Bank Ground Floor
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-gray-700">
                  <Clock className="h-4 w-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-900">Showroom Hours:</span>
                    <span>Mon - Sat: 10:30 AM - 8:30 PM</span>
                    <br />
                    <span>Sunday: 11:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-gray-700">
                  <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-900">Direct Helpline:</span>
                    <a href="tel:+919331962120" className="text-blue-600 font-bold hover:underline">
                      +91 93319 62120
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex-1">
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4 mr-2" /> Get Directions
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1">
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> View on Google Maps
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold mb-3 text-base sm:text-lg">
                Why Buy Directly from Our Kolkata Showroom?
              </h4>
              <ul className="space-y-2 text-blue-100 text-xs sm:text-sm">
                <li>• Inspect 100% genuine sealed boxes with official manufacturer barcode</li>
                <li>• Instant corporate &amp; wholesale GST billing on the spot</li>
                <li>• Immediate stock dispatch for Kolkata, Howrah, and Salt Lake delivery</li>
                <li>• Certified company installation booking with immediate slot confirmation</li>
              </ul>
            </div>
          </div>

          {/* Map Preview / Interactive Embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 min-h-[350px] bg-slate-100 border border-gray-200 relative">
            {!loadMap ? (
              <div className="flex flex-col h-[350px] sm:h-[420px] w-full items-center justify-center p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100/60">
                <MapPin className="h-12 w-12 text-blue-600 mb-3 animate-bounce" />
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Venus Appliances - Chandni Chowk Showroom
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm max-w-sm mb-4">
                  63, Ganesh Chandra Avenue, Kolkata 700013 (Between Chandni Metro &amp; Hind Cinema)
                </p>
                <Button
                  onClick={() => setLoadMap(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
                >
                  Load Interactive Google Map
                </Button>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline mt-3 inline-flex items-center gap-1"
                >
                  Open in Google Maps App <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0272914546995!2d88.3579329!3d22.5664314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aa23527e69%3A0x768adf630181c6e8!2sVenus%20Appliances!5e0!3m2!1sen!2sin!4v1750314538333!5m2!1sen!2sin"
                width="100%"
                height="420"
                className="w-full h-[350px] sm:h-[420px]"
                style={{ border: 0 }}
                title="Venus Appliances Store Location Kolkata"
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
