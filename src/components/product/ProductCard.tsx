import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";
import { ChevronRight, ArrowRight } from "lucide-react";
import { ACProduct, brands, acTypes } from "@/lib/ac-selection-data";

interface ProductCardProps {
  product: ACProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Find the brand name
  const brand = brands.find(b => b.id === product.brand)?.name || product.brand;
  // Find the AC type name
  const acType = acTypes.find(t => t.id === product.type)?.name || product.type;

  return (
    <Card className="overflow-hidden border border-gray-200 shadow-lg hover-lift">
      <div className="h-52 flex items-center justify-center bg-gradient-to-r from-gray-50 to-blue-50 p-4">
        <img 
          src={product.image} 
          alt={product.modelNumber} 
          className="max-h-48 w-auto object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/300x200?text=AC+Image";
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-1">{brand} {product.tonnage} {product.starRating}</h3>
        <p className="text-gray-500 mb-2">Model: {product.modelNumber}</p>
        <p className="text-2xl font-bold text-gray-900 mb-4">₹{product.price.toLocaleString()}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <ChevronRight className="h-4 w-4 text-cool-blue mr-1 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3 mt-6">
          <WhatsAppInquiry 
            productName={`${brand} ${product.tonnage} ${product.starRating} ${acType}`}
            modelNumber={product.modelNumber}
            price={product.price}
          />
          
          <Button asChild variant="outline" className="w-full group">
            <Link to={`/product/${product.id}`}>
              View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;