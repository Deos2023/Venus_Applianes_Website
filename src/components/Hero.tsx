
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 animate-fade-in">
            <span className="text-cool-blue font-semibold mb-2 block">Premium Air Conditioning Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Perfect 
              <span className="text-cool-blue block"> Climate Control</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Discover premium air conditioners from top brands that combine efficiency, style, and innovation for your ultimate comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-cool-blue hover:bg-cool-blue-dark">
                <Link to="#brands">
                  Explore Brands
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cool-blue text-cool-blue hover:bg-cool-blue/10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-cool-blue">10+</p>
                <p className="text-sm text-gray-600">Premium Brands</p>
              </div>
              <div className="h-8 border-r border-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cool-blue">50+</p>
                <p className="text-sm text-gray-600">AC Models</p>
              </div>
              <div className="h-8 border-r border-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cool-blue">5000+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl hover-lift animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern living room with air conditioner"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/6207634/pexels-photo-6207634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-gray-800 font-medium">Modern cooling solutions for every space</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements for premium look */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cool-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-warm-amber/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-40 bg-cool-blue/20 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
