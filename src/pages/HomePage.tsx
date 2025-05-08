
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BrandGrid from '@/components/BrandGrid';
import PremiumShowcase from '@/components/PremiumShowcase';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Energy Efficiency",
    description: "Our ACs are designed to provide optimal cooling while consuming minimal electricity."
  },
  {
    title: "Smart Controls",
    description: "Control your AC from anywhere using smartphone apps and voice assistants."
  },
  {
    title: "Air Purification",
    description: "Advanced filters that remove allergens, dust, and bacteria for cleaner air."
  },
  {
    title: "Quiet Operation",
    description: "Enjoy peaceful sleep with our whisper-quiet air conditioning systems."
  }
];

const HomePage = () => {
  return (
    <Layout>
      {/* Premium Hero Section */}
      <Hero />
      
      {/* Premium Showcase */}
      <PremiumShowcase />
      
      {/* Brands Section */}
      <BrandGrid />
      
      {/* Features Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Premium Cooling Solutions
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of efficiency, technology, and comfort with our premium range of ACs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-none shadow-md bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-cool-blue" />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lifestyle Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Luxury Cooling</h2>
              <p className="text-gray-600 mb-6">
                Our premium air conditioners are designed to complement your lifestyle while providing exceptional comfort. Featuring cutting-edge technology, elegant design, and whisper-quiet operation.
              </p>
              <ul className="mb-8 space-y-3">
                {['Voice Control Integration', 'Smart Home Compatibility', 'Elegant Design', 'Ultra-silent Technology'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cool-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-cool-blue hover:bg-cool-blue-dark">
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury living room with air conditioner"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/6207634/pexels-photo-6207634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg w-full max-w-xs">
                    <p className="text-gray-800 font-medium">Seamless integration with modern interiors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialCarousel />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cool-blue to-cool-blue-dark section-padding text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Supreme Comfort?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Explore our collection of premium air conditioners from top brands and find the perfect cooling solution for your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cool-blue">
              <Link to="#brands">
                Explore Brands
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-cool-blue hover:bg-blue-50">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
