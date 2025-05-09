
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const deals = [
  {
    id: 1,
    title: "Unlock Premium Cooling",
    description: "Up to 50%* off | Cashback up to ₹7500*",
    image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    bgColor: "bg-gradient-to-r from-gray-900 to-gray-800",
    link: "/brand/samsung"
  },
  {
    id: 2,
    title: "AI Powered Efficiency",
    description: "Up to 44%* off | Cashback up to ₹10%*",
    image: "public/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
    bgColor: "bg-gradient-to-r from-blue-900 to-blue-800",
    link: "/brand/lg"
  },
  {
    id: 3,
    title: "Superior Cooling Technology",
    description: "Up to 40%* off | No Cost EMI Available",
    image: "public/lovable-uploads/1a4210eb-3a20-4fd7-9983-a8b981ece7a8.png",
    bgColor: "bg-gradient-to-r from-indigo-900 to-indigo-800",
    link: "/brand/daikin"
  }
];

const FeaturedDeals = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Offers</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive deals on premium air conditioning solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div 
              key={deal.id} 
              className={`${deal.bgColor} rounded-lg overflow-hidden hover-lift shadow-xl relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={deal.image} 
                alt={deal.title} 
                className="w-full h-60 object-contain pt-8"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/300x200?text=AC+Image";
                }}
              />
              <div className="p-6 relative z-20 text-white">
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <p className="mb-4">{deal.description}</p>
                <Button asChild className="bg-white text-gray-900 hover:bg-gray-100 group">
                  <Link to={deal.link}>
                    Buy Now
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
