import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const GOOGLE_MAPS_LINK =
  "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwio_4GY5-uXAxUAAAAAHQAAAAAQCA..i&rlz=1C1UEAD_enIN1068IN1068&udm&fvr=1&pvq=Cg0vZy8xMWRkeWs1azE2IhYKEHZlbnVzIGFwcGxpYW5jZXMQAhgD&lqi=ChB2ZW51cyBhcHBsaWFuY2VzSKaIy9izrICACFoiEAAQARgAGAEiEHZlbnVzIGFwcGxpYW5jZXMqBggCEAAQAZIBD2FwcGxpYW5jZV9zdG9yZQ&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a0277aa23527e69:0x768adf630181c6e8";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const message = `
🏢 *Venus Appliances Kolkata - Contact Inquiry*

👤 *Customer Details:*
• Name: ${data.firstName} ${data.lastName}
• Phone: ${data.phone}

📋 *Inquiry:*
• Subject: ${data.subject}
• Message: ${data.message}

📍 *Store:* 63 Ganesh Chandra Avenue, Chandni Chowk, Kolkata 700013
      `.trim();

      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = "919331962120";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      await new Promise((resolve) => setTimeout(resolve, 600));
      window.open(whatsappUrl, "_blank");

      toast({
        title: "Inquiry Prepared Successfully!",
        description: "Redirecting to WhatsApp to chat with our Kolkata store specialist.",
        duration: 3000,
      });

      reset();
    } catch (error) {
      toast({
        title: "Failed to prepare message",
        description: "Please call us directly at 93319 62120.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Venus Appliances Kolkata",
    description: "Contact information and showroom location for Venus Appliances in Chandni Chowk, Kolkata.",
    url: "https://www.venusappliances.com/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Venus Appliances Kolkata",
      telephone: "+919331962120",
      email: "venusapplianceskol@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "63, Ganesh Chandra Avenue, Between Chandni Chawk Metro & Hind Cinema, Beside RBL Bank, Ground Floor",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700013",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.5664314,
        longitude: 88.3579329,
      },
      hasMap: GOOGLE_MAPS_LINK,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:30",
          closes: "20:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "11:00",
          closes: "18:00",
        },
      ],
    },
  };

  return (
    <Layout>
      <SEO
        title="Contact Venus Appliances Kolkata | Showroom in Chandni Chowk"
        description="Visit Venus Appliances at 63 Ganesh Chandra Ave, Chandni Chowk, Bowbazar, Kolkata 700013. Authorized dealer for Daikin, Hitachi, O General, Voltas, Visi Coolers & Geysers. Call 93319 62120."
        keywords="contact venus appliances, ac showroom chandni chowk kolkata, ac dealer near me kolkata, ganesh chandra avenue ac shop, buy ac bowbazar kolkata, deep freezer showroom kolkata, visi cooler dealer kolkata phone"
        canonical="/contact"
        schema={contactSchema}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header Hero Banner */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30 mb-3">
              <MapPin className="h-3.5 w-3.5" /> Chandni Chowk Electronics Hub, Kolkata
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              Contact Venus Appliances Kolkata
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Visit our showroom for live demos or reach out to our AC and commercial appliance specialists for direct wholesale &amp; retail price quotes in Kolkata.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-10 sm:py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Store Information */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  Get in Touch with Our Kolkata Team
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  We are here to assist you with AC sizing, brand comparisons, wholesale discounts, and installation bookings.
                </p>
              </div>

              <div className="space-y-4">
                {/* Location Card */}
                <Card className="border-l-4 border-l-blue-600 shadow-sm hover:shadow-md transition">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                          Showroom Address
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                          <strong>Chandni, 63, Ganesh Chandra Ave</strong>, near RBL Bank, Between Chandni Chawk Metro Station &amp; Hind Cinema, Bowbazar, Kolkata, West Bengal 700013 (Ground Floor).
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="bg-blue-100/70 text-blue-800 px-2.5 py-1 rounded-md font-medium">
                            2 min walk from Chandni Chowk Metro
                          </span>
                          <span className="bg-emerald-100/70 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                            Beside RBL Bank
                          </span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
                            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                              <Navigation className="h-3.5 w-3.5 mr-1.5" /> Get Directions
                            </a>
                          </Button>
                          <Button asChild size="sm" variant="outline" className="border-gray-300 text-xs">
                            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Google Maps Profile
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone Card */}
                <Card className="border-l-4 border-l-emerald-600 shadow-sm hover:shadow-md transition">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-0.5">
                          Phone Helpline
                        </h3>
                        <a href="tel:+919331962120" className="text-blue-600 font-extrabold text-base sm:text-lg hover:underline block">
                          +91 93319 62120
                        </a>
                        <span className="text-xs text-gray-500">Call for instant price quote &amp; model availability</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="border-l-4 border-l-orange-500 shadow-sm hover:shadow-md transition">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-orange-50 text-orange-600 shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-0.5">
                          Email Support
                        </h3>
                        <a href="mailto:venusapplianceskol@gmail.com" className="text-gray-700 hover:text-blue-600 text-sm sm:text-base break-all">
                          venusapplianceskol@gmail.com
                        </a>
                        <span className="text-xs text-gray-500 block">For corporate tenders &amp; bulk institutional orders</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours Card */}
                <Card className="border-l-4 border-l-purple-600 shadow-sm hover:shadow-md transition">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-0.5">
                          Showroom Timings
                        </h3>
                        <p className="text-gray-700 text-xs sm:text-sm">
                          <strong>Monday – Saturday:</strong> 10:30 AM – 8:30 PM
                        </p>
                        <p className="text-gray-700 text-xs sm:text-sm">
                          <strong>Sunday:</strong> 11:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Service Areas Note */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900">
                <span className="font-bold">Prompt Delivery &amp; Certified Installation Across:</span> Chandni Chowk, Bowbazar, Central Avenue, Esplanade, Park Street, Salt Lake, New Town Rajarhat, Howrah, Hooghly, Ballygunge, Behala, Dum Dum, Barasat, and all West Bengal locations.
              </div>
            </motion.div>

            {/* Contact / WhatsApp Inquiry Form */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-gray-200 shadow-lg rounded-2xl bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Request an Instant Quote</h3>
                  <p className="text-blue-100 text-xs mt-0.5">
                    Fill the form below to receive immediate dealer pricing via WhatsApp
                  </p>
                </div>

                <CardContent className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="e.g. Rahul"
                          {...register("firstName")}
                          className="mt-1"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="e.g. Banerjee"
                          {...register("lastName")}
                          className="mt-1"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-xs font-semibold text-gray-700">Mobile / WhatsApp Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 98300XXXXX"
                        {...register("phone")}
                        className="mt-1"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-xs font-semibold text-gray-700">Product / Appliance Required *</Label>
                      <Input
                        id="subject"
                        placeholder="e.g. Daikin 1.5T 5 Star AC / Visi Cooler 400L / Deep Freezer"
                        {...register("subject")}
                        className="mt-1"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-xs font-semibold text-gray-700">Message / Delivery Location *</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Share your requirements, room size, delivery area in Kolkata..."
                        {...register("message")}
                        className="mt-1"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-sm shadow-md"
                    >
                      {isSubmitting ? (
                        "Opening WhatsApp..."
                      ) : (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4" /> Send Inquiry via WhatsApp
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-gray-400 text-center">
                      Your inquiry will be sent directly to our Chandni Chowk showroom team for priority response.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Interactive Google Map Section */}
          <div className="mt-16">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Showroom Location Map
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                63, Ganesh Chandra Avenue, Chandni Chowk, Bowbazar, Kolkata, West Bengal 700013
              </p>
            </div>

            <Card className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <CardContent className="p-0">
                <div className="w-full h-80 sm:h-96 lg:h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0272914546995!2d88.3579329!3d22.5664314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aa23527e69%3A0x768adf630181c6e8!2sVenus%20Appliances!5e0!3m2!1sen!2sin!4v1750314538333!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venus Appliances Store Location Kolkata"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
