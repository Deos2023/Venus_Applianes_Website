import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, MapPin, Shield, ThumbsUp, Users, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Venus Appliances Kolkata",
    description: "Learn about Venus Appliances, Kolkata's top authorized AC and commercial refrigeration dealer in Chandni Chowk since 2010.",
    url: "https://www.venusappliances.com/about",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Venus Appliances Kolkata",
      foundingDate: "2010",
      telephone: "+919331962120",
      address: {
        "@type": "PostalAddress",
        streetAddress: "63, Ganesh Chandra Avenue, Chandni Chowk",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700013",
        addressCountry: "IN",
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="About Venus Appliances | #1 AC & Appliance Dealer in Kolkata"
        description="Founded in 2010 at Chandni Chowk, Venus Appliances is Kolkata's leading authorized dealer for Hitachi, Daikin, O General, Mitsubishi, Voltas, Blue Star ACs, Deep Freezers, Visi Coolers & Geysers."
        keywords="about venus appliances, ac dealer kolkata history, best ac shop chandni chowk, air conditioner wholesaler kolkata, commercial refrigeration dealer west bengal"
        canonical="/about"
        schema={aboutSchema}
      />

      <div className="w-full max-w-[100vw] overflow-clip">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4 py-8 lg:py-16 w-full max-w-7xl">
            {/* Page Header */}
            <div className="max-w-4xl mx-auto mb-16 text-center w-full">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
                Established 2010 • Chandni Chowk, Kolkata
              </span>
              <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                About Venus Appliances Kolkata
              </h1>
              <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                Kolkata&apos;s trusted destination for genuine air conditioning systems, commercial refrigeration (Visi Coolers, Deep Freezers), and water heating solutions for residential homes and enterprises.
              </p>
            </div>

            {/* Our Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center w-full">
              <div className="space-y-6 w-full">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Our Story: Serving Kolkata for Over a Decade
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Founded in 2010 in the historic electronics and appliance trading hub of <strong>Chandni Chowk / Ganesh Chandra Avenue, Kolkata</strong>, Venus Appliances started with a clear vision: to provide 100% genuine, manufacturer-backed air conditioning and cooling equipment at fair wholesale and retail prices.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Over the past 14+ years, we have grown into one of Kolkata&apos;s premier multi-brand authorized dealerships, proudly partnering with global giants like <strong>Hitachi, Daikin, O General, Mitsubishi Heavy &amp; Electric, Voltas, Blue Star, Carrier, Panasonic, LG, Godrej, and Vestar</strong>.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Beyond residential air conditioning, we are key commercial suppliers for retail shops, supermarkets, restaurants, and cloud kitchens across West Bengal for commercial <strong>Visi Coolers (glass door display chillers)</strong> and <strong>Deep Freezers</strong>, as well as 5-star energy efficient <strong>Water Geysers</strong>.
                </p>
              </div>

              <div className="relative w-full">
                <img
                  src="/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png"
                  alt="Venus Appliances Kolkata Showroom and Authorized AC Dealership"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/lovable-uploads/lg/US-Q18KWXE/1.avif";
                  }}
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">14+ Years</div>
                    <div className="text-xs sm:text-sm font-medium">Serving Kolkata &amp; Bengal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-20 w-full">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Why Customers Choose Venus Appliances
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  When you buy from us, you get direct authorized dealership advantages that online marketplaces cannot match.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                <Card className="hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <Shield className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">100% Genuine Units</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Factory-sealed brand new products with official manufacturer barcode, verified brand warranties, and GST billing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <ThumbsUp className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Wholesale Prices</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Direct distributor pricing in Chandni Chowk with volume discounts for homeowners, retailers, and corporate buyers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                      <Award className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Certified Installation</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Direct company technician installation booking with certified copper piping, vacuuming, and testing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                      <Zap className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Kolkata Expertise</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Expert advice on AC sizing, high ambient cooling, anti-rust coatings, and humidity management for West Bengal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Location & Timings Card */}
            <div className="mb-16 bg-white rounded-3xl p-8 lg:p-12 border border-gray-200/90 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                    Kolkata Showroom Information
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Visit Our Store in Chandni Chowk
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>63 Ganesh Chandra Avenue, Ground Floor</strong>, near RBL Bank, Between Chandni Chowk Metro Station and Hind Cinema, Bowbazar, Kolkata - 700013.
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600 shrink-0" />
                      <span>
                        <strong>Monday to Saturday:</strong> 10:30 AM to 8:30 PM | <strong>Sunday:</strong> 11:00 AM to 6:00 PM
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 font-semibold">
                      <Link to="/contact">Get Directions &amp; Contact</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-gray-300 font-semibold">
                      <a href="tel:+919331962120">Call +91 93319 62120</a>
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs sm:text-sm text-gray-600 space-y-3">
                  <h4 className="font-bold text-gray-900 text-base mb-2">Our Core Product Portfolio</h4>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Split, Window, Cassette &amp; Tower Air Conditioners (Daikin, Hitachi, O General, Mitsubishi, Voltas, Blue Star)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Commercial Glass Door Visi Coolers (300L to 1200L for supermarkets, beverages &amp; dairy)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Commercial &amp; Domestic Deep Freezers (Hard top &amp; glass top 100L to 600L)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Storage &amp; Instant Water Geysers (Venus, Racold, Bajaj, AO Smith)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl w-full">
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">
                Looking for the Best AC Deal in Kolkata?
              </h2>
              <p className="mb-8 max-w-2xl mx-auto text-sm sm:text-base text-blue-100 leading-relaxed">
                Connect with our product specialists for personalized recommendations, room heat-load calculation, and best wholesale prices.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold">
                  <Link to="/gallery">Browse AC Catalog</Link>
                </Button>
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  <a
                    href="https://wa.me/919331962120?text=Hello%20Venus%20Appliances%20Kolkata!%20I%20would%20like%20to%20consult%20about%20an%20AC%20or%20commercial%20cooling%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Our Store Specialist
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
