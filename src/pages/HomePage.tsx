
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BrandGrid from '@/components/BrandGrid';
import { Card, CardContent } from '@/components/ui/card';
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
      <Hero />
      <BrandGrid />
      
      {/* Features Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Our Air Conditioners?
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of efficiency, technology, and comfort with our premium range of ACs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift">
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
      
      {/* CTA Section */}
      <section className="bg-cool-blue section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Supreme Comfort?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Explore our collection of premium air conditioners from top brands and find the perfect cooling solution for your space.
          </p>
          <a 
            href="#brands" 
            className="inline-block px-8 py-3 bg-white text-cool-blue font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            Explore Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
