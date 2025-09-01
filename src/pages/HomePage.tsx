
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BrandGrid from '@/components/BrandGrid';
import PremiumShowcase from '@/components/PremiumShowcase';
import ProductFilter from '@/components/ProductFilter';
import FeaturedDeals from '@/components/FeaturedDeals';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ACSelectionGuide from '@/components/ACSelectionGuide';
import MapSection from '@/components/MapSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ACInquiryForm from '@/components/ACInquiryForm';
import { acProducts, brands, acTypes } from "@/lib/ac-selection-data";
import { useState } from 'react';

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Helper to get brand/type names
  const getBrandName = id => (brands.find(b => b.id === id)?.name || id);
  const getTypeName = id => (acTypes.find(t => t.id === id)?.name || id);

  // Filter products based on search
  const filteredProducts = acProducts.filter(product => {
    const q = search.trim().toLowerCase();
    if (!q) return false;
    // Check modelNumber, product name (description), brand, type
    return (
      (product.modelNumber && product.modelNumber.toLowerCase().includes(q)) ||
      (product.description && product.description.toLowerCase().includes(q)) ||
      getBrandName(product.brand).toLowerCase().includes(q) ||
      getTypeName(product.type).toLowerCase().includes(q)
    );
  });

  return (
    <Layout>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full"
      >
        <Hero />
      </motion.div>

      {/* Product Search Section */}
      <div className="w-full bg-white mb-6 py-8 px-4 sm:px-6 lg:px-8 shadow-sm border-b">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search by Model Number, Product Name, Brand, or Category..."
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={search}
            onChange={e => { setSearch(e.target.value); setShowResults(true); }}
            aria-label="Product search"
          />
        </div>
        {/* Results shown only while searching */}
        {showResults && search.trim() !== '' && (
          <div className="max-w-2xl mx-auto">
            {filteredProducts.length === 0 ? (
              <div className="text-gray-500 py-8 text-center">No products found.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-2 border hover:border-blue-400">
                    <div className="flex items-center gap-2">
                      <img src={product.image} alt={product.modelNumber} className="h-16 w-16 object-contain rounded" />
                      <div>
                        <div className="font-bold text-gray-800">{product.modelNumber}</div>
                        <div className="text-sm text-gray-700">{getBrandName(product.brand)} | {getTypeName(product.type)}</div>
                        <div className="text-sm text-gray-600">{product.description?.slice(0,50)}{product.description?.length > 50 ? '...' : ''}</div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <div className="font-bold text-blue-600 text-lg">₹{product.price?.toLocaleString() ?? '---'}</div>
                      <a
                        href={`/product/${product.id}`}
                        className="ml-2 px-3 py-1 rounded text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {/* AC Inquiry Form - Mobile First Responsive */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <ACInquiryForm/>
      </motion.div>
      
      {/* AC Selection Guide Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full overflow-hidden"
      >
        <ACSelectionGuide />
      </motion.div>
      
      {/* Product Filtering Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full bg-gradient-to-b from-blue-50 to-white overflow-hidden"
      >
        <ProductFilter />
      </motion.div>
      
      {/* Featured Deals */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536566482680-fca31930a0bd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3')" }}
      >
        <div className="bg-gradient-to-r from-gray-900/90 to-gray-900/80">
          <FeaturedDeals />
        </div>
      </motion.div>
      
      {/* Features Section */}
      <motion.section 
        className="bg-gradient-to-r from-cool-blue/5 to-blue-300/20 section-padding w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-8 sm:mb-12" variants={fadeIn}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Cooling Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Experience the perfect blend of efficiency, technology, and comfort with our premium range of ACs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden hover-lift border-none p-4 sm:p-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.2 
                    } 
                  }
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-cool-blue flex-shrink-0" />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* PremiumShowcase Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3')" }}
      >
        <div className="bg-gradient-to-b from-gray-900/95 to-gray-900/90">
          <PremiumShowcase />
        </div>
      </motion.div>
      
      {/* Map Section */}
      <MapSection />
      
      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="w-full bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 overflow-hidden"
      >
        <TestimonialCarousel />
      </motion.div>
      
      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-cool-blue to-blue-600 section-padding text-white w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Experience Supreme Comfort?
          </motion.h2>
          <motion.p 
            className="text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Find the perfect cooling solution for your needs using our guided selection process.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-cool-blue w-full sm:w-auto">
              <Link to="/select-type">
                Start Selection
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-cool-blue hover:bg-blue-50 w-full sm:w-auto">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default HomePage;
