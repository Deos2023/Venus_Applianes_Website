import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SelectionLayout from "@/components/SelectionLayout";
import SelectionCard from "@/components/SelectionCard";
import { starRatings, acTypes, brands, inverterTypes, ACType, Brand, InverterType, acProducts } from "@/lib/ac-selection-data";
import { getAvailableStarRatings, hasStarRatings } from "@/lib/utils";

const StarSelectionPage = () => {
  const { type, brand, inverter, tonnage } = useParams<{ type: string; brand: string; inverter: string; tonnage: string }>();
  const navigate = useNavigate();
  const acType = type as ACType;
  const brandId = brand as Brand;
  const inverterType = inverter as InverterType;
  const tonnageValue = decodeURIComponent(tonnage || "");
  const hasRedirected = useRef(false); // Add this ref to track redirects
  
  // Find the current selections for display
  const currentType = acTypes.find(t => t.id === acType)?.name || "AC";
  const currentBrand = brands.find(b => b.id === brandId)?.name || "Brand";
  
  // Get only star ratings that have products available for this combination
  const availableStarRatings = getAvailableStarRatings(acType, brandId, inverterType, tonnageValue);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there are any products with star ratings for this combination
    if (!hasStarRatings(acType, brandId, inverterType, tonnageValue) && !hasRedirected.current) {
      // If no products have star ratings, find products without star ratings
      const productsWithoutStarRating = acProducts.filter(product => 
        product.type === acType && 
        product.brand === brandId && 
        product.inverter === inverterType && 
        product.tonnage === tonnageValue &&
        product.starRating === ""
      );
      
      // If there are products without star ratings, redirect to the product results page
      if (productsWithoutStarRating.length > 0) {
        hasRedirected.current = true; // Mark that we've redirected
        navigate(`/products/${acType}/${brandId}/${inverterType}/${encodeURIComponent(tonnageValue)}`, { replace: true });
      }
    }
    
    // Reset the redirect flag when component unmounts or parameters change
    return () => {
      hasRedirected.current = false;
    };
  }, [acType, brandId, inverterType, tonnageValue, navigate]);

  // If we have no available star ratings and haven't redirected, show a message
  if (availableStarRatings.length === 0 && !hasStarRatings(acType, brandId, inverterType, tonnageValue)) {
    return (
      <SelectionLayout 
        title="No Star Ratings Available" 
        description={`There are no products with star ratings for your selection. Showing all available products.`}
        currentStep={4}
      >
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Redirecting to products...</p>
        </div>
      </SelectionLayout>
    );
  }

  return (
    <SelectionLayout 
      title="Select Star Rating" 
      description={`Choose the energy efficiency rating for your ${currentBrand} ${tonnageValue} ${currentType}.`}
      currentStep={4}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
        {availableStarRatings.map((star) => (
          <SelectionCard
            key={star}
            title={star}
            to={`/products/${acType}/${brandId}/${inverterType}/${encodeURIComponent(tonnageValue)}/${encodeURIComponent(star)}`}
            className="h-32 flex items-center justify-center"
          />
        ))}
      </div>
    </SelectionLayout>
  );
};

export default StarSelectionPage;
