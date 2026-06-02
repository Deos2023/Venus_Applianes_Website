import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Format the WhatsApp message
      const message = `
🏢 *Venus Appliances - New Contact Inquiry*

👤 *Customer Information:*
• Name: ${data.firstName} ${data.lastName}
• Phone: ${data.phone}

📋 *Inquiry Details:*
• Subject: ${data.subject}
• Message: ${data.message}

🕒 *Submitted On:* ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'short'
})}

📍 *Location:* 63 Ganesh Chandra Avenue, Kolkata - 700013

Please respond to this inquiry at your earliest convenience. Thank you! 🙏
      `.trim();

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      
      // WhatsApp business number
      const phoneNumber = "9331962120";
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Simulate brief processing delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
      
      // Show success message
      toast({
        title: "Message Prepared Successfully!",
        description: "Redirecting to WhatsApp to send your inquiry.",
        duration: 3000,
      });
      
      // Reset form
      reset();
      
    } catch (error) {
      toast({
        title: "Failed to prepare message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
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

                <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
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

                <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-300">
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

                <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow duration-300">
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

              {/* WhatsApp Quick Action */}
              <Card className="mt-6 border-l-4 border-l-green-500 bg-green-50">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-4">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 text-green-800">
                        Quick WhatsApp Connect
                      </h3>
                      <p className="text-green-700 text-sm mb-3">
                        Prefer to chat directly? Click below to start a conversation on WhatsApp.
                      </p>
                      <Button 
                        onClick={() => window.open('https://wa.me/9331962120', '_blank')}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we'll redirect you to WhatsApp with your message.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </Label>
                        <Input 
                          id="firstName" 
                          placeholder="Your first name" 
                          className="mt-1"
                          {...register('firstName')}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </Label>
                        <Input 
                          id="lastName" 
                          placeholder="Your last name" 
                          className="mt-1"
                          {...register('lastName')}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="mt-1"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div> */}
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Your phone number" 
                        className="mt-1"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    {/* <div>
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input 
                        id="subject" 
                        placeholder="What is this regarding?" 
                        className="mt-1"
                        {...register('subject')}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div> */}
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your AC requirements..."
                        rows={4}
                        className="mt-1"
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Preparing WhatsApp Message...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send via WhatsApp
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      * Required fields. After submission, you'll be redirected to WhatsApp with your message pre-filled.
                    </p>
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
            <Card className="hover:shadow-lg transition-shadow duration-300">
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
                    title="Venus Appliances Location"
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