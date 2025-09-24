import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SelectionLayout from "@/components/SelectionLayout";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  acProducts, acTypes, brands, inverterTypes, 
  ACType, Brand, InverterType, ACProduct 
} from "@/lib/ac-selection-data";

const ProductResultsPage = () => {
  const { type, brand, inverter, tonnage, star } = useParams<{ 
    type: string; brand: string; inverter: string; tonnage: string; star?: string 
  }>();
  
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<ACProduct[]>([]);
  
  const acType = type as ACType;
  const brandId = brand as Brand;
  const inverterType = inverter as InverterType;
  const tonnageValue = decodeURIComponent(tonnage || "");
  const starRating = star ? decodeURIComponent(star) : ""; // Handle undefined star parameter
  
  // Find the current selections for display
  const currentType = acTypes.find(t => t.id === acType)?.name || "AC";
  const currentBrand = brands.find(b => b.id === brandId)?.name || "Brand";
  const currentInverter = inverterTypes.find(i => i.id === inverterType)?.name || "Type";
  
  useEffect(() => {
    // Filter products based on selection
    let products;
    
    if (!star) {
      // If star rating is not provided, show products with empty star rating
      products = acProducts.filter(product => 
        product.type === acType && 
        product.brand === brandId && 
        product.inverter === inverterType && 
        product.tonnage === tonnageValue && 
        product.starRating === ""
      );
    } else {
      // Otherwise, filter by the selected star rating
      products = acProducts.filter(product => 
        product.type === acType && 
        product.brand === brandId && 
        product.inverter === inverterType && 
        product.tonnage === tonnageValue && 
        product.starRating === starRating
      );
    }
    
    setFilteredProducts(products);
    window.scrollTo(0, 0);
  }, [acType, brandId, inverterType, tonnageValue, star, starRating]);

  // Determine the back URL based on whether star rating is present
  const getBackUrl = () => {
    if (star) {
      return `/select-star/${acType}/${brandId}/${inverterType}/${encodeURIComponent(tonnageValue)}`;
    } else {
      return `/select-tonnage/${acType}/${brandId}/${inverterType}`;
    }
  };

  return (
    <SelectionLayout 
      title="Available Products" 
      description={`${currentBrand} ${currentType} - ${tonnageValue}${star ? `, ${starRating}` : ""}, ${currentInverter}`}
      currentStep={5}
      backUrl={getBackUrl()}
    >
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found matching your criteria</h3>
          <p className="text-gray-500 mb-6">Try selecting different specifications or browse our available options</p>
          <Button asChild>
            <Link to="/select-type">Start Again</Link>
          </Button>
        </div>
      )}
      
      <div className="mt-12 text-center">
        <p className="mb-4 text-gray-600">Not finding what you're looking for?</p>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline">
            <Link to="/select-type">Start New Search</Link>
          </Button>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </SelectionLayout>
  );
};

export default ProductResultsPage;