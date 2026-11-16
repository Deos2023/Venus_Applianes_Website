import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ShieldCheck, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwio_4GY5-uXAxUAAAAAHQAAAAAQCA..i&rlz=1C1UEAD_enIN1068IN1068&udm&fvr=1&pvq=Cg0vZy8xMWRkeWs1azE2IhYKEHZlbnVzIGFwcGxpYW5jZXMQAhgD&lqi=ChB2ZW51cyBhcHBsaWFuY2VzSKaIy9izrICACFoiEAAQARgAGAEiEHZlbnVzIGFwcGxpYW5jZXMqBggCEAAQAZIBD2FwcGxpYW5jZV9zdG9yZQ&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a0277aa23527e69:0x768adf630181c6e8";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      {/* Top Banner on Footer */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 py-4 px-4 border-b border-blue-800/50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-blue-200">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Kolkata&apos;s #1 Authorized AC Dealer | Chandni Chowk Electronics Market</span>
          </div>
          <div className="flex items-center gap-4 text-blue-100">
            <span>Wholesale &amp; Retail Inquiries:</span>
            <a href="tel:+919331962120" className="font-bold text-white hover:underline flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" /> +91 93319 62120
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: About & Trust */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/6c697fcb-f9ff-466e-97f0-7cddf3d6c664.png"
                alt="Venus Appliances Kolkata - Best AC Dealer"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
                width="180"
                height="48"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Venus Appliances is Kolkata&apos;s leading authorized dealer and distributor for premium air conditioners (Daikin, O General, Hitachi, Mitsubishi, Voltas, Blue Star, Carrier, Panasonic, LG, Godrej, Vestar), commercial Visi Coolers, Deep Freezers, and Water Geysers. Serving homes and businesses with wholesale prices, genuine brand warranties, and certified Kolkata installation since 2010.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>✔ 100% Genuine Factory-Sealed Units</p>
              <p>✔ Valid GST Tax Invoices for Commercial Input Credit</p>
              <p>✔ Certified Installation &amp; Prompt Service Across Bengal</p>
            </div>
          </div>

          {/* Col 2: Top AC Brands in Kolkata */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs sm:text-sm text-blue-400">
              AC Brands Kolkata
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/brand/hitachi" className="text-gray-400 hover:text-white transition">
                  Hitachi AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/daikin" className="text-gray-400 hover:text-white transition">
                  Daikin AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/o-general" className="text-gray-400 hover:text-white transition">
                  O General AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/mitsubishi-heavy" className="text-gray-400 hover:text-white transition">
                  Mitsubishi AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/voltas" className="text-gray-400 hover:text-white transition">
                  Voltas AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/blue-star" className="text-gray-400 hover:text-white transition">
                  Blue Star AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/carrier" className="text-gray-400 hover:text-white transition">
                  Carrier AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/panasonic" className="text-gray-400 hover:text-white transition">
                  Panasonic AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/lg" className="text-gray-400 hover:text-white transition">
                  LG AC Dealer Kolkata
                </Link>
              </li>
              <li>
                <Link to="/brand/godrej" className="text-gray-400 hover:text-white transition">
                  Godrej &amp; Vestar ACs Kolkata
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Commercial Appliances */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs sm:text-sm text-blue-400">
              Appliances &amp; Coolers
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/appliances?category=visi-cooler" className="text-gray-400 hover:text-white transition">
                  Visi Cooler Dealer in Kolkata
                </Link>
              </li>
              <li>
                <Link to="/appliances?category=deep-freezer" className="text-gray-400 hover:text-white transition">
                  Deep Freezer / Deep Fridge Kolkata
                </Link>
              </li>
              <li>
                <Link to="/appliances?category=geyser" className="text-gray-400 hover:text-white transition">
                  Geyser Dealer in Kolkata
                </Link>
              </li>
              <li>
                <Link to="/appliances?category=commercial-ac" className="text-gray-400 hover:text-white transition">
                  Commercial Cassette &amp; Tower ACs
                </Link>
              </li>
              <li>
                <Link to="/select-type" className="text-gray-400 hover:text-white transition">
                  Interactive AC Selection Guide
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition">
                  All Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Venus Appliances
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact &amp; Store Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & Contact */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs sm:text-sm text-blue-400">
              Store Contact Info
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-1" />
                <div className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Venus Appliances</strong>
                  <br />
                  Chandni, 63, Ganesh Chandra Ave, near RBL Bank, Between Chandni Chawk Metro &amp; Hind Cinema, Bowbazar, Kolkata, West Bengal 700013
                </div>
              </div>

              <div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="tel:+919331962120" className="text-gray-300 hover:text-white">
                  +91 93319 62120
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="mailto:venusapplianceskol@gmail.com" className="text-gray-300 hover:text-white break-all">
                  venusapplianceskol@gmail.com
                </a>
              </div>

              <div className="pt-2 text-[11px] text-gray-500">
                Mon - Sat: 10:30 AM - 8:30 PM
                <br />
                Sunday: 11:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Local Area Served Badges */}
        <div className="border-t border-gray-900 mt-10 pt-6">
          <p className="text-xs text-gray-500 mb-2">
            <strong className="text-gray-400">Service &amp; Delivery Locations in Kolkata:</strong> Chandni Chowk, Bowbazar, Central Avenue, Esplanade, Bada Bazar, Park Street, Salt Lake (Sector 1-5), New Town, Rajarhat, Howrah, Ballygunge, Gariahat, Behala, Tollygunge, Alipore, Dum Dum, Barasat, Hooghly, and all surrounding West Bengal districts.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 mt-6 pt-6 text-center text-xs text-gray-500">
          <p>
            © 2026 Venus Appliances Kolkata. All Rights Reserved. Authorized dealer for Daikin, Hitachi, O General, Mitsubishi, Voltas, Blue Star, Carrier, Panasonic, LG, Godrej, Vestar.
          </p>
          <p className="mt-1">
            Website Developed &amp; Maintained by{" "}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 font-semibold transition"
            >
              Digital Exposure Online Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
