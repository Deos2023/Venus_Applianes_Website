import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

interface BackButtonProps {
  customUrl?: string;
}

const BackButton = ({ customUrl }: BackButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasNavigated = useRef(false);

  useEffect(() => {
    hasNavigated.current = true;
  }, [location]);

  // Simple route-based back navigation that avoids loops
  const handleBack = () => {
    const path = location.pathname;
    
    // Use browser history if available and we have sufficient history
    if (window.history.length > 2 && hasNavigated.current) {
      navigate(-1);
      return;
    }
    
    // For specific routes, use direct navigation to avoid loops
    if (path.startsWith('/products/') && path.split('/').length >= 5) {
      const segments = path.split('/').filter(s => s);
      
      if (segments.length === 6) { 
        // /products/type/brand/inverter/tonnage/star → go to star selection
        navigate(`/select-star/${segments[1]}/${segments[2]}/${segments[3]}/${encodeURIComponent(segments[4])}`);
      } else if (segments.length === 5) { 
        // /products/type/brand/inverter/tonnage → go to tonnage selection
        navigate(`/select-tonnage/${segments[1]}/${segments[2]}/${segments[3]}`);
      }
    } 
    else if (path.startsWith('/select-star/')) {
      // Go to tonnage selection (one step back in the flow)
      const segments = path.split('/').filter(s => s);
      navigate(`/select-tonnage/${segments[2]}/${segments[3]}/${segments[4]}`);
    }
    else if (path.startsWith('/select-tonnage/')) {
      // Go to inverter selection
      const segments = path.split('/').filter(s => s);
      navigate(`/select-inverter/${segments[2]}/${segments[3]}`);
    }
    else if (path.startsWith('/select-inverter/')) {
      // Go to brand selection
      const segments = path.split('/').filter(s => s);
      navigate(`/select-brand/${segments[2]}`);
    }
    else if (path.startsWith('/select-brand/')) {
      // Go to type selection
      navigate('/select-type');
    }
    else if (path.startsWith('/brand/') && path.split('/').length > 3) {
      // For brand detail pages, go back to brand overview
      const segments = path.split('/').filter(s => s);
      navigate(`/brand/${segments[1]}`);
    }
    else {
      // Default fallback
      navigate('/');
    }
  };

  // if (customUrl) {
  //   return (
  //     <Button variant="ghost" size="sm" asChild className="group mb-4">
  //       <Link to={customUrl}>
  //         <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
  //         Back
  //       </Link>
  //     </Button>
  //   );
  // }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleBack}
      className="group mb-4"
    >
      <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
      Back to previous
    </Button>
  );
};

export default BackButton;