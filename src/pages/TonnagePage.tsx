
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { getStarRatings } from '@/lib/ac-data';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TonnagePage = () => {
  const { brandName, tonValue } = useParams<{ brandName: string; tonValue: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get star ratings for the selected brand and tonnage
  const starRatings = getStarRatings(brandName || '', tonValue || '');
  
  useEffect(() => {
    if (starRatings.length === 0) {
      toast({
        title: "Options not found",
        description: "We couldn't find any products with the selected specifications",
        variant: "destructive",
      });
      
      // Redirect back to brand page after a short delay
      const timer = setTimeout(() => {
        navigate(`/brand/${brandName}`);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [brandName, tonValue, starRatings, navigate, toast]);

  // Capitalize brand name for display
  const displayBrandName = brandName ? brandName.charAt(0).toUpperCase() + brandName.slice(1) : '';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="text-cool-blue hover:underline">Home</Link>
            <span className="text-gray-400">›</span>
            <Link to={`/brand/${brandName}`} className="text-cool-blue hover:underline">{displayBrandName}</Link>
            <span className="text-gray-400">›</span>
            <span>{tonValue} Ton</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{displayBrandName} {tonValue} Ton Air Conditioners</h1>
          <p className="text-gray-600">Select the energy efficiency rating (stars)</p>
        </div>
        
        {starRatings.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Models Found</h2>
            <p className="text-gray-500 mb-6">
              We couldn't find any {tonValue} Ton models for {displayBrandName}. Please try a different tonnage or brand.
            </p>
            <Link 
              to={`/brand/${brandName}`} 
              className="inline-block px-6 py-2 bg-cool-blue text-white rounded-md hover:bg-cool-blue-dark transition-colors"
            >
              Back to {displayBrandName}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {starRatings.map((rating) => (
              <Link to={`/brand/${brandName}/ton/${tonValue}/star/${rating}`} key={rating}>
                <Card className="hover-lift h-full transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: parseInt(rating) }).map((_, i) => (
                        <Star key={i} className="w-8 h-8 fill-warm-amber text-warm-amber" />
                      ))}
                      {Array.from({ length: 5 - parseInt(rating) }).map((_, i) => (
                        <Star key={i + parseInt(rating)} className="w-8 h-8 text-gray-300" />
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{rating} Star Rating</h3>
                    <p className="text-gray-500 text-center">
                      {parseInt(rating) <= 3 
                        ? "Standard efficiency with competitive pricing" 
                        : "Premium efficiency with lower power consumption"}
                    </p>
                    <div className="mt-6 text-cool-blue font-medium">View Details →</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TonnagePage;
