
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BrandGrid from '@/components/BrandGrid';
import PremiumShowcase from '@/components/PremiumShowcase';
import ProductFilter from '@/components/ProductFilter';
import FeaturedDeals from '@/components/FeaturedDeals';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

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
      
      {/* Product Filtering Section */}
      <ProductFilter />
      
      {/* Featured Deals */}
      <FeaturedDeals />
      
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
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover-lift border-none">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-cool-blue" />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
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
