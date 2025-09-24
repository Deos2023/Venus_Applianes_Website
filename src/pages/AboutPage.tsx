
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, MapPin, Shield, ThumbsUp, Users, Zap, Settings } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">About CoolBreeze AC</h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Your trusted partners in creating comfortable living and working environments through premium air conditioning solutions.
            </p>
          </div>
          
          {/* Our Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2010, CoolBreeze AC started as a small family business with a vision to provide quality air conditioning solutions to homes and businesses. Over the years, we've grown into a trusted name in the industry, serving thousands of satisfied customers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is simple: to help people create comfortable living and working environments through premium air conditioning solutions and exceptional service. We believe that comfort shouldn't be a luxury, and we're dedicated to making it accessible to everyone.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, with over a decade of experience, we continue to uphold our values of quality, integrity, and customer satisfaction in everything we do.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/samsung/split-ac/1.png" 
                alt="Premium AC Installation by CoolBreeze team"
                className="rounded-2xl shadow-2xl w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/lovable-uploads/lg/US-Q18KWXE/1.avif";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us Section */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose CoolBreeze AC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Premium Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We partner only with the most trusted AC brands to ensure you get the best air conditioners with latest technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <ThumbsUp className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Customer Satisfaction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our 4.8/5 customer satisfaction rating speaks to our commitment to exceptional service at every step.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                    <Award className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Expert Installation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our certified technicians provide professional installation and maintenance services for optimal performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                    <Zap className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Energy Efficient</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All our AC units are energy-efficient with 5-star ratings, helping you save on electricity bills.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    <Settings className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">24/7 Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Round-the-clock customer support and emergency repair services to keep your AC running smoothly.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                    <Users className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Experienced Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team of experienced professionals will help you find the perfect AC solution for your specific needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* AC Brands Section */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center">Our Premium AC Brands</h2>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                <div className="flex flex-col items-center group">
                  <img 
                    src="/lovable-uploads/hitachi/RAK.B312PCAIBA1-RAC312WCAID/1.jpg" 
                    alt="Hitachi AC" 
                    className="h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-gray-600">Hitachi</span>
                </div>
                <div className="flex flex-col items-center group">
                  <img 
                    src="/lovable-uploads/lg/Q18JNYE/1.jpg" 
                    alt="LG AC" 
                    className="h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-gray-600">LG</span>
                </div>
                <div className="flex flex-col items-center group">
                  <img 
                    src="/lovable-uploads/daikin/ATKL35UV16W/1.jpg" 
                    alt="Daikin AC" 
                    className="h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-gray-600">Daikin</span>
                </div>
                <div className="flex flex-col items-center group">
                  <img 
                    src="/lovable-uploads/voltas/185V_VECTRA_PRISM/1.webp" 
                    alt="Voltas AC" 
                    className="h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-gray-600">Voltas</span>
                </div>
                <div className="flex flex-col items-center group">
                  <img 
                    src="/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/1.webp" 
                    alt="Mitsubishi AC" 
                    className="h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-gray-600">Mitsubishi</span>
                </div>
                <div className="flex flex-col items-center group">
                  <img 
                    src="/lovable-uploads/carrier/Xcel-Lumo-Fxi/1.jpg" 
                    alt="Carrier AC" 
                    className="h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-gray-600">Carrier</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Coverage */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center">Our Service Coverage</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-4">Service Areas</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        We proudly serve the following metropolitan areas and surrounding communities:
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">Delhi NCR</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">Mumbai</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">Bangalore</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">Hyderabad</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">Chennai</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">Pune</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        We're available when you need us most:
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Monday - Friday:</span>
                          <span className="text-gray-600">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Saturday:</span>
                          <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Sunday:</span>
                          <span className="text-gray-600">11:00 AM - 4:00 PM</span>
                        </div>
                        <div className="mt-4 p-3 bg-red-50 rounded-lg">
                          <span className="text-red-600 font-medium text-sm">🚨 24/7 Emergency Service Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 lg:p-12 rounded-3xl shadow-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Ready for the Ultimate Cooling Experience?</h2>
            <p className="mb-8 max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
              Browse our selection of premium air conditioners or get in touch with our team for personalized recommendations and professional installation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/" 
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore AC Collection
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
