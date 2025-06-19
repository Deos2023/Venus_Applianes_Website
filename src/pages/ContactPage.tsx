
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <motion.section 
          className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Contact Venus Appliances
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-blue-100 px-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Get in touch with our experts for the best AC solutions for your home or office
            </motion.p>
          </div>
        </motion.section>

        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2">Our Location</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          63 GANESH CHANDRA AVENUE KOLKATA 700013<br />
                          BETWEEN CHANDNI METRO STATION AND HIND CINEMA BESIDE RBL BANK, GROUND FLOOR.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2">Phone Number</h3>
                        <p className="text-gray-600 text-sm sm:text-base">93319 62120</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2">Email</h3>
                        <p className="text-gray-600 text-sm sm:text-base break-all">venusapplianceskol@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2">Business Hours</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-600 text-sm sm:text-base">Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Send us a Message</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Your phone number" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your AC requirements..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Find Us on the Map</h2>
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0272914546995!2d88.3579329!3d22.5664314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a98756e675%3A0x53fdcc792ee02617!2s63%2C%20Ganesh%20Chandra%20Ave%2C%20Chandni%20Chawk%2C%20Bowbazar%2C%20Kolkata%2C%20West%20Bengal%20700012!5e1!3m2!1sen!2sin!4v1750314538333!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
