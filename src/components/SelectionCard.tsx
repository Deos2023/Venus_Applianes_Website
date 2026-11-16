
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SelectionCardProps {
  image?: string;
  title: string;
  to: string;
  selected?: boolean;
  className?: string;
}

const SelectionCard = ({ image, title, to, selected = false, className }: SelectionCardProps) => {
  return (
    <Link to={to} className="block w-full group">
      <Card 
        className={cn(
          "transition-all duration-300 overflow-hidden h-full",
          "border-2 hover:shadow-xl hover-lift", 
          selected ? "border-cool-blue bg-blue-50" : "border-gray-200 hover:border-cool-blue/50",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center p-6 h-full">
          {image && (
            <div className="mb-4 flex items-center justify-center h-32 w-full">
              <img 
                src={image} 
                alt={title} 
                className="h-32 max-h-32 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="160"
                height="128"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png";
                }}
              />
            </div>
          )}
          <h3 className="text-lg font-medium text-center">{title}</h3>
        </div>
      </Card>
    </Link>
  );
};

export default SelectionCard;
