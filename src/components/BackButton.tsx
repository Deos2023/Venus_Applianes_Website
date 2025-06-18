
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

interface BackButtonProps {
  customUrl?: string;
}

const BackButton = ({ customUrl }: BackButtonProps) => {
  const navigate = useNavigate();
  
  if (customUrl) {
    return (
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="group mb-4"
      >
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
      onClick={() => navigate(-1)}
      className="group mb-4"
    >
      <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
      Back
    </Button>
  );
};

export default BackButton;
