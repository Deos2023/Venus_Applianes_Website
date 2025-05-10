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
import { acTypes } from '@/lib/ac-selection-data';

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
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Air Conditioner
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Use our step-by-step selection guide to find the ideal AC that matches your specific requirements
          </p>
          <Button asChild size="lg" className="text-lg bg-cool-blue hover:bg-cool-blue-dark">
            <Link to="/select-type">
              Start Selection Process
            </Link>
          </Button>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
            {acTypes.map((type, index) => (
              <Link 
                key={type.id} 
                to={`/select-brand/${type.id}`}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-32 flex items-center justify-center">
                  <img 
                    src={type.image} 
                    alt={type.name} 
                    className="max-h-28 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/150?text=AC+Type";
                    }}
                  />
                </div>
                <h3 className="text-center font-medium mt-4">{type.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Filtering Section */}
      <ProductFilter />
      
      {/* Featured Deals */}
      <FeaturedDeals />
      
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
            Find the perfect cooling solution for your needs using our guided selection process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cool-blue">
              <Link to="/select-type">
                Start Selection
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
