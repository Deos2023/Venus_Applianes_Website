import { useEffect } from "react";
import SelectionLayout from "@/components/SelectionLayout";
import SelectionCard from "@/components/SelectionCard";
import { acTypes } from "@/lib/ac-selection-data";
import SEO from "@/components/SEO";

const TypeSelectionPage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SelectionLayout
      title="Select Your AC &amp; Geyser Type in Kolkata"
      description="Choose the type of air conditioner or water geyser that best suits your requirements in Kolkata."
      currentStep={0}
      showBackButton={false}
    >
      <SEO
        title="Select AC & Geyser Type in Kolkata | Split, Window, Cassette AC & Water Heaters"
        description="Choose the ideal AC or water heater geyser for your Kolkata home or office. Compare Split ACs, Window ACs, Cassette ACs, Multi ACs, and Venus Water Geysers at Venus Appliances."
        canonical="/select-type"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {acTypes.map((type) => (
          <SelectionCard
            key={type.id}
            image={type.image}
            title={type.name}
            to={type.id === "geyser" ? "/appliances?category=geyser" : `/select-brand/${type.id}`}
          />
        ))}
      </div>
    </SelectionLayout>
  );
};

export default TypeSelectionPage;
