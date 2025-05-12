
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { acTypes } from '@/lib/ac-selection-data';
import { motion } from 'framer-motion';

const ACSelectionGuide = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cool-blue to-blue-700">
            Find Your Perfect Air Conditioner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our step-by-step selection guide helps you find the ideal AC that matches your specific requirements.
          </p>
        </motion.div>
        
        {/* Selection Process Steps - Enhanced Premium Design */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cool-blue to-blue-600 text-white flex items-center justify-center text-xl font-bold mb-3 shadow-lg">1</div>
              <p className="text-sm font-medium text-center">AC Type</p>
            </motion.div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-gray-400" />
            </div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white flex items-center justify-center text-xl font-bold mb-3 shadow-md">2</div>
              <p className="text-sm font-medium text-center">Brand</p>
            </motion.div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-gray-400" />
            </div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white flex items-center justify-center text-xl font-bold mb-3 shadow-md">3</div>
              <p className="text-sm font-medium text-center">Specifications</p>
            </motion.div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-gray-400" />
            </div>
          </div>
        </motion.div>

        {/* AC Types Grid - Enhanced with Premium Cards */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Select Your AC Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {acTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/select-brand/${type.id}`}
                  className="transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} 
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="bg-white border-2 border-gray-200 hover:border-cool-blue hover:shadow-xl hover:-translate-y-2 p-6 h-full flex flex-col items-center justify-center rounded-xl">
                      <div className="h-32 mb-4 flex items-center justify-center">
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
                      <h4 className="text-center font-medium text-gray-800">{type.name}</h4>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Button - Premium Style */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-cool-blue to-blue-600 hover:from-cool-blue-dark hover:to-blue-700 shadow-md"
            >
              <Link to="/select-type" className="flex items-center gap-2 px-8 py-6 text-lg">
                Start Full Selection Process
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ACSelectionGuide;
