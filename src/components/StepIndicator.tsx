
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  stepUrls?: (string | null)[];
}

const StepIndicator = ({ steps, currentStep, stepUrls = [] }: StepIndicatorProps) => {
  return (
    <div className="w-full py-4 px-2 sm:px-0">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const url = stepUrls[index] ?? null;
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isClickable = isCompleted && url !== null;

          const circle = isCompleted ? (
            <div className="w-8 h-8 mx-auto rounded-full bg-cool-blue text-white flex items-center justify-center">
              <CheckCircle className="h-5 w-5" />
            </div>
          ) : (
            <div className={cn(
              "w-8 h-8 mx-auto rounded-full text-white flex items-center justify-center",
              isCurrent ? "bg-cool-blue" : "bg-gray-300"
            )}>
              <span className="text-sm font-medium">{index + 1}</span>
            </div>
          );

          const label = (
            <div className={cn(
              "text-xs font-medium mt-2 text-center",
              isCurrent ? "text-cool-blue" :
              isCompleted ? "text-gray-900" : "text-gray-500"
            )}>
              {step}
            </div>
          );

          const connector = index < steps.length - 1 && (
            <div className="hidden sm:block w-full bg-gray-200 h-0.5 my-3">
              <div
                className={cn(
                  "h-full bg-cool-blue transition-all duration-300",
                  isCompleted ? "w-full" : "w-0"
                )}
              />
            </div>
          );

          return (
            <div key={step} className="flex-1">
              <div className="flex flex-col items-center">
                {isClickable ? (
                  <a
                    href={url}
                    title={`Go back to ${step}`}
                    className="flex flex-col items-center cursor-pointer group focus:outline-none"
                  >
                    <div className="transition-transform duration-150 group-hover:scale-110">
                      {circle}
                    </div>
                    <div className={cn(
                      "text-xs font-medium mt-2 text-center",
                      "text-gray-900 group-hover:text-cool-blue transition-colors duration-150"
                    )}>
                      {step}
                    </div>
                  </a>
                ) : (
                  <>
                    {circle}
                    {label}
                  </>
                )}
                {connector}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
