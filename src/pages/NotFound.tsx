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

  const getParentUrl = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    
    if (pathSegments.length <= 1) {
      return "/";
    }
    
    const parentSegments = pathSegments.slice(0, -1);
    return `/${parentSegments.join('/')}`;
  };

  const handleBack = () => {
    const parentUrl = getParentUrl();
    
    // Try to navigate to parent URL, but fall back to browser history if it fails
    if (window.history.length > 2 && hasNavigated.current) {
      // Use browser history as fallback
      navigate(-1);
    } else {
      // If no history, try parent URL or fallback to home
      navigate(parentUrl !== "/" ? parentUrl : "/");
    }
  };

  if (customUrl) {
    return (
      <Button variant="ghost" size="sm" asChild className="group mb-4">
        <Link to={customUrl}>
          <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </Button>
    );
  }

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