import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTonnageOptions, getACModels } from "@/lib/ac-data";
import { acProducts } from "@/lib/ac-selection-data";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { ShieldCheck, Truck, Wrench, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

const BrandPage = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Get tonnage options for the selected brand
  const tonnageOptions = getTonnageOptions(brandName || "");
  const acModels = getACModels(brandName || "");

  useEffect(() => {
    if (tonnageOptions.length === 0 && brandName) {
      toast({
        title: "Brand catalog loading",
        description: "Checking availability for this brand in our Kolkata warehouse.",
      });
    }
  }, [brandName, tonnageOptions, toast]);

  const handleAcOptions = (ton: string) => {
    const norm = (brandName || "").toLowerCase().trim();
    const product = acProducts.find((p) => p.brand.toLowerCase() === norm && p.tonnage === ton);
    if (product) {
      navigate(
        `/select-star/${product.type}/${product.brand}/${product.inverter}/${product.tonnage}`
      );
      return;
    }
    const tonnageAcData = acModels.find((model) => model.tonnage === ton);
    if (tonnageAcData) {
      navigate(
        `/select-star/${tonnageAcData.type}/${tonnageAcData.brand}/${tonnageAcData.inverter}/${tonnageAcData.tonnage}`
      );
    } else {
      navigate(`/gallery?brand=${brandName}`);
    }
  };

  // Capitalize brand name for display
  const rawBrand = brandName || "air conditioner";
  const displayBrandName =
    rawBrand === "o-general"
      ? "O General"
      : rawBrand === "mitsubishi-heavy"
      ? "Mitsubishi Heavy"
      : rawBrand === "mitsubishi-electric"
      ? "Mitsubishi Electric"
      : rawBrand === "blue-star"
      ? "Blue Star"
      : rawBrand.charAt(0).toUpperCase() + rawBrand.slice(1);

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.venusappliances.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Brands",
        "item": "https://www.venusappliances.com/gallery"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${displayBrandName} AC Dealer in Kolkata`,
        "item": `https://www.venusappliances.com/brand/${brandName}`
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title={`${displayBrandName} AC Dealer in Kolkata | Best Price & Genuine Warranty`}
        description={`Venus Appliances is the leading authorized ${displayBrandName} AC dealer in Kolkata. Buy 1 Ton, 1.5 Ton, 2 Ton Split, Window & Cassette ${displayBrandName} ACs at wholesale rates in Chandni Chowk with official brand warranty.`}
        keywords={`${displayBrandName} ac dealer in kolkata, best ${displayBrandName} ac in kolkata, buy ${displayBrandName} ac chandni chowk, ${displayBrandName} inverter split ac kolkata price, ${displayBrandName} 1.5 ton 5 star ac dealer kolkata`}
        canonical={`/brand/${brandName}`}
        schema={brandSchema}
      />

      <div className="bg-gradient-to-b from-blue-50/60 to-white pt-6 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-gray-500 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/gallery" className="hover:text-blue-600">Brands</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{displayBrandName}</span>
          </nav>

          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl mb-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs sm:text-sm font-medium border border-blue-400/30 mb-4">
                <MapPin className="h-3.5 w-3.5" /> Authorized {displayBrandName} AC Dealer in Kolkata (Chandni Chowk)
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                {displayBrandName} Air Conditioners in Kolkata
              </h1>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                Shop 100% genuine {displayBrandName} Air Conditioners at Venus Appliances Kolkata. Available in 1 Ton, 1.5 Ton, 2 Ton, and heavy commercial capacities with 100% manufacturer warranty, lowest dealer pricing, and certified installation across Kolkata &amp; West Bengal.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Fast Kolkata Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Certified Installation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tonnage Selector Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Select {displayBrandName} Tonnage for Your Space
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Choose the ideal cooling capacity recommended for Kolkata&apos;s climate
                </p>
              </div>
              <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                Chandni Chowk Wholesale Stock
              </span>
            </div>

            {tonnageOptions.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 text-center py-12 px-4 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Explore {displayBrandName} Models in Our Catalog
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
                  We have {displayBrandName} units in stock at our Chandni Chowk store. Browse all products or message our team directly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/gallery">Browse All ACs</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                    <a
                      href={`https://wa.me/919331962120?text=${encodeURIComponent(
                        `Hi Venus Appliances Kolkata, I want to inquire about ${displayBrandName} AC availability and best dealer pricing.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" /> Inquire on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tonnageOptions.map((tonnage) => (
                  <Card
                    key={tonnage}
                    className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/80 hover:border-blue-400 group overflow-hidden"
                    onClick={() => handleAcOptions(tonnage)}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-blue-50 text-blue-700 flex flex-col items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <span className="text-2xl font-black">{tonnage}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider">Capacity</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {displayBrandName} {tonnage} Capacity
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm mb-4 leading-relaxed">
                        {parseFloat(tonnage) <= 1
                          ? "Perfect for bedrooms & small rooms up to 120 sq.ft in Kolkata"
                          : parseFloat(tonnage) <= 1.5
                          ? "Most popular choice for master bedrooms & living rooms (120 - 180 sq.ft)"
                          : "High power cooling for large halls, offices & drawing rooms (180 - 260+ sq.ft)"}
                      </p>
                      <div className="mt-auto text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View Models &amp; Pricing →
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Model Catalog Grid */}
          {acModels.length > 0 && (
            <div className="mt-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Top 10 Recently Popular {displayBrandName} AC Models in Kolkata
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Showing {acModels.length} top popular {displayBrandName} air conditioner models with original photos and instant dealer pricing
                  </p>
                </div>
                <div className="text-xs text-gray-500 mt-2 sm:mt-0 flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-600 inline" /> Official GST Bill &amp; Manufacturer Warranty
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {acModels.map((model) => (
                  <Card
                    key={model.id}
                    className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col justify-between overflow-hidden"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center min-h-[160px]">
                        <img
                          src={model.image}
                          alt={`${displayBrandName} ${model.tonnage} ${model.starRating} AC dealer in Kolkata`}
                          className="max-h-36 max-w-full object-contain"
                          loading="lazy"
                          decoding="async"
                          width="200"
                          height="144"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png";
                          }}
                        />
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-800">
                          {model.tonnage}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                          {model.starRating} Star
                        </span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-700 uppercase">
                          {model.inverter}
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2">
                        {displayBrandName} {model.tonnage} {model.starRating} Inverter AC
                      </h3>
                      <p className="text-xs text-gray-400 mb-3 font-mono">
                        Model: {model.modelNumber}
                      </p>

                      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Kolkata Dealer Price</div>
                          <div className="text-lg font-extrabold text-blue-600">
                            ₹{model.price.toLocaleString()}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/919331962120?text=${encodeURIComponent(
                              `Hello Venus Appliances Kolkata! I am inquiring about ${displayBrandName} AC (Model: ${model.modelNumber}, Capacity: ${model.tonnage}, Star: ${model.starRating}). Please share your best deal and installation details.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-600 hover:text-white transition-colors"
                            aria-label={`Inquire about ${model.modelNumber} on WhatsApp`}
                          >
                            <MessageCircle className="h-4 w-4" />
                          </a>

                          <Link
                            to={`/brand/${brandName}/ton/${model.tonnage}/star/${model.starRating}`}
                            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Localized FAQ / Buyer Advice for Kolkata */}
          <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Why Buy {displayBrandName} Air Conditioners from Venus Appliances in Kolkata?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 leading-relaxed">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  1. Official Brand Dealership with Genuine Warranty
                </h4>
                <p>
                  As Kolkata&apos;s leading AC distributor located in Chandni Chowk, we provide 100% factory-sealed {displayBrandName} air conditioners with verified brand warranties, GST invoices, and comprehensive after-sales assistance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  2. Humidity &amp; Climate Optimized Sizing
                </h4>
                <p>
                  Kolkata experiences high humidity throughout summer and monsoon. Our technical consultants guide you to pick the right copper-condenser {displayBrandName} AC with anti-corrosion protection that lasts for years.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  3. Wholesale &amp; Retail Pricing
                </h4>
                <p>
                  Whether you need a single 1.5 Ton AC for your bedroom or bulk units for a hotel, office, hospital, or showroom in Kolkata, we provide direct wholesale rates that beat large retail chain prices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  4. Fast Delivery Across Kolkata &amp; Bengal
                </h4>
                <p>
                  We offer same-day and next-day delivery to Central Kolkata, Salt Lake, New Town, Howrah, Bowbazar, Ballygunge, Behala, Dum Dum, Barasat, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrandPage;
