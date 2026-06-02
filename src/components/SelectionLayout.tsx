
import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import StepIndicator from "@/components/StepIndicator";
import BackButton from "@/components/BackButton";

interface SelectionLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  currentStep: number;
  showBackButton?: boolean;
  backUrl?: string;
}

const steps = [
  "AC Type",
  "Brand",
  "Inverter Type",
  "Tonnage",
  "Star Rating",
  "Products"
];

const SelectionLayout = ({
  children,
  title,
  description,
  currentStep,
  showBackButton = true,
  backUrl
}: SelectionLayoutProps) => {
  // Grab whatever URL params exist at the current page depth
  const { type, brand, inverter, tonnage } = useParams<{
    type?: string;
    brand?: string;
    inverter?: string;
    tonnage?: string;
  }>();

  // Build the URL for each completed step so users can jump back
  // A step is only navigable if we have enough params to reconstruct its URL
  const stepUrls: (string | null)[] = [
    // Step 0 – AC Type: always reachable
    currentStep > 0 ? "/select-type" : null,
    // Step 1 – Brand: need type
    currentStep > 1 && type ? `/select-brand/${type}` : null,
    // Step 2 – Inverter: need type + brand
    currentStep > 2 && type && brand ? `/select-inverter/${type}/${brand}` : null,
    // Step 3 – Tonnage: need type + brand + inverter
    currentStep > 3 && type && brand && inverter
      ? `/select-tonnage/${type}/${brand}/${inverter}`
      : null,
    // Step 4 – Star Rating: need type + brand + inverter + tonnage
    currentStep > 4 && type && brand && inverter && tonnage
      ? `/select-star/${type}/${brand}/${inverter}/${tonnage}`
      : null,
    // Step 5 – Products: not navigable (it's the final destination)
    null,
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <StepIndicator steps={steps} currentStep={currentStep} stepUrls={stepUrls} />

          <div className="mt-8">
            {showBackButton && <BackButton customUrl={backUrl} />}

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              {description && (
                <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
              )}
            </div>

            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SelectionLayout;
