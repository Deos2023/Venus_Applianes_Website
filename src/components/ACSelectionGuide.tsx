
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { acTypes } from '@/lib/ac-selection-data';

const ACSelectionGuide = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Air Conditioner</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our step-by-step selection guide helps you find the ideal AC that matches your specific requirements.
          </p>
        </div>
        
        {/* Selection Process Steps */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-cool-blue text-white flex items-center justify-center text-xl font-bold mb-2">1</div>
              <p className="text-sm text-center">AC Type</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-gray-400" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-400 text-white flex items-center justify-center text-xl font-bold mb-2">2</div>
              <p className="text-sm text-center">Brand</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-gray-400" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-400 text-white flex items-center justify-center text-xl font-bold mb-2">3</div>
              <p className="text-sm text-center">Specifications</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* AC Types Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Select Your AC Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {acTypes.map((type) => (
              <Link 
                key={type.id} 
                to={`/select-brand/${type.id}`}
                className="transition-all duration-300"
              >
                <Card className="bg-white border-2 border-gray-200 hover:border-cool-blue hover:shadow-lg hover:-translate-y-1 p-4 h-full flex flex-col items-center justify-center">
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
                  <h4 className="text-center font-medium">{type.name}</h4>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-cool-blue hover:bg-cool-blue-dark">
            <Link to="/select-type" className="flex items-center gap-2">
              Start Full Selection Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ACSelectionGuide;
