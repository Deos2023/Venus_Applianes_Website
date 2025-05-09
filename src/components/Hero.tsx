
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Welcome to a Home Beyond Excellence.",
    subtitle: "Crafted for reliability, built for tomorrow.",
    description: "Up to 50%* off | Cashback up to ₹15000*",
    image: "public/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png",
    btnText: "Shop Now",
    btnLink: "/brand/samsung"
  },
  {
    id: 2,
    title: "Experience Perfect Climate Control",
    subtitle: "Premium Cooling Technology",
    description: "Up to 40%* off | No Cost EMI on Select Products",
    image: "public/lovable-uploads/32b80bca-8b8e-4aac-8316-76596978bb51.png",
    btnText: "Explore",
    btnLink: "/brand/lg"
  },
  {
    id: 3,
    title: "Smart Cooling. Smarter Living.",
    subtitle: "AI-Powered Efficiency",
    description: "Starting at ₹24999* | Free Installation",
    image: "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    btnText: "View Collection",
    btnLink: "/brand/daikin"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg";
              }}
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <span className="text-cool-blue font-medium mb-2 block text-lg">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl text-gray-200 mb-8">{slide.description}</p>
              <Button asChild size="lg" className="bg-cool-blue hover:bg-cool-blue-dark">
                <Link to={slide.btnLink}>{slide.btnText}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-cool-blue" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
