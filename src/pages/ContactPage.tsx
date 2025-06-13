
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, MapPin, Phone, MessageSquare, Clock, Headphones } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^\d{10}$/.test(phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }
    
    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Hello! I'd like to get in touch about AC services.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n\n` +
      `Message: ${message}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/+911234567890?text=${whatsappMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: "Message sent successfully!",
      description: "We've opened WhatsApp with your inquiry. Complete sending the message there.",
    });
    
    // Reset form
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Contact CoolBreeze AC</h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Need expert advice on air conditioning? We're here to help! Reach out through any of the methods below for personalized AC solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Send Us a Message</h2>
                    <p className="text-gray-600">Get in touch for AC consultation and quotes</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium text-gray-700 mb-2 block">Full Name</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Enter your full name"
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-gray-700 mb-2 block">Phone Number</Label>
                    <Input 
                      id="phone" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="Enter your 10-digit phone number" 
                      type="tel"
                      className="h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base font-medium text-gray-700 mb-2 block">Message</Label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Tell us about your AC requirements, room size, budget, etc." 
                      rows={6}
                      className="text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Call Us</h3>
                    <p className="text-blue-600 font-semibold text-lg">+91 98765 43210</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Available during business hours for immediate assistance</p>
              </div>

              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">WhatsApp</h3>
                    <p className="text-green-600 font-semibold text-lg">+91 98765 43210</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Quick inquiries and instant support via WhatsApp</p>
              </div>

              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <p className="text-purple-600 font-semibold">info@coolbreeze.com</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 lg:p-8 rounded-3xl text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">24/7 Emergency</h3>
                    <p className="text-blue-100">AC Repair Service</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm">Round-the-clock support for urgent AC repairs</p>
              </div>
            </div>
          </div>

          {/* Business Hours & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600 font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600 font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600 font-medium">11:00 AM - 4:00 PM</span>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                  <p className="text-red-700 font-medium text-sm">🚨 Emergency services available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Visit Our Showroom</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  123 Cooling Street, Comfort City, AC 54321
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">AC Models</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-600">Top Brands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  question: "Do you provide free AC installation?",
                  answer: "Yes, we provide professional installation services for all air conditioners purchased from us. Our certified technicians ensure proper setup and optimal performance with warranty coverage."
                },
                {
                  question: "What brands of AC do you sell?",
                  answer: "We sell premium AC brands including Samsung, LG, Daikin, Voltas, Mitsubishi, Carrier, Hitachi, Blue Star, and more. All units come with manufacturer warranty."
                },
                {
                  question: "Do you offer AC repair and maintenance?",
                  answer: "Absolutely! We provide comprehensive after-sales support including regular maintenance, emergency repairs, and genuine part replacements with 24/7 service availability."
                },
                {
                  question: "What payment options do you accept?",
                  answer: "We accept all major payment methods including credit/debit cards, UPI, bank transfers, and cash. We also offer attractive EMI options with zero down payment on select models."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
