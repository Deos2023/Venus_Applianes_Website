
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-12 lg:py-20">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
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
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-2xl hover-lift animate-scale-in">
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
                <p className="text-white font-medium">Modern cooling solutions for every space</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
