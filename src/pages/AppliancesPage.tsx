import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Snowflake,
  Flame,
  Store,
  Layers,
  Phone,
  MessageCircle,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Truck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GEYSERS_DATA, GeyserProduct } from "@/data/geysers-data";

interface ApplianceItem {
  id: string;
  category: "visi-cooler" | "deep-freezer" | "commercial-ac";
  title: string;
  subtitle: string;
  capacity: string;
  brands: string[];
  features: string[];
  temperature?: string;
  energyRating?: string;
  image: string;
  priceNote: string;
}

const COMMERCIAL_PRODUCTS: ApplianceItem[] = [
  // Visi Coolers
  {
    id: "visi-cooler-single-door",
    category: "visi-cooler",
    title: "Single Door Commercial Visi Cooler",
    subtitle: "Beverage & Dairy Glass Door Display Chiller",
    capacity: "300L / 350L / 400L / 500L",
    brands: ["Blue Star", "Voltas", "Western", "Trufrost", "Rockwell"],
    features: [
      "Double layer vacuum insulated glass door",
      "Dynamic fan cooling for uniform temperature",
      "Eco-friendly R134a / R290 refrigerant",
      "Bright internal LED display lighting",
      "Self-closing door with safety lock",
      "Adjustable heavy-duty shelves",
    ],
    temperature: "1°C to 10°C",
    energyRating: "Commercial High Efficiency",
    image: "/lovable-uploads/bluestar/28891/1.jpg",
    priceNote: "Wholesale & Retail Kolkata Pricing",
  },
  {
    id: "visi-cooler-double-door",
    category: "visi-cooler",
    title: "Double Glass Door Visi Cooler",
    subtitle: "Heavy-Duty Supermarket & Store Display Chiller",
    capacity: "600L / 800L / 1000L / 1200L",
    brands: ["Blue Star", "Voltas", "Western", "Trufrost"],
    features: [
      "Heavy commercial duty compressor for continuous cooling",
      "Heated glass door to prevent condensation & fog in Kolkata humidity",
      "Digital temperature controller & display",
      "Castor wheels with brakes for easy positioning",
      "High visibility canopy for brand promotion",
    ],
    temperature: "1°C to 8°C",
    energyRating: "Heavy Commercial Grade",
    image: "/lovable-uploads/bluestar/28891/2.jpg",
    priceNote: "Direct Distributor Discount",
  },

  // Deep Freezers
  {
    id: "deep-freezer-hard-top",
    category: "deep-freezer",
    title: "Hard Top Deep Freezer (Chest Freezer)",
    subtitle: "Bulk Frozen Food, Meat & Dairy Storage Freezer",
    capacity: "100L / 200L / 300L / 400L / 500L",
    brands: ["Blue Star", "Voltas", "Rockwell", "Western", "Haier"],
    features: [
      "Tropicalized heavy compressor operates up to 43°C ambient temperature",
      "High density 60mm+ PUF insulation preserves cooling during power cuts",
      "Convertible dual temperature setting (Freezer & Chiller modes)",
      "Embossed aluminum inner liner for quick thermal conduction",
      "Sturdy keyed lock handle and castor wheels",
    ],
    temperature: "-18°C to -24°C",
    energyRating: "BEE Energy Efficient",
    image: "/lovable-uploads/bluestar/37000/2.jpg",
    priceNote: "Best Wholesale Rate in Kolkata",
  },
  {
    id: "deep-freezer-glass-top",
    category: "deep-freezer",
    title: "Curved Glass Top Display Deep Freezer",
    subtitle: "Commercial Ice Cream & Frozen Snacks Merchandiser",
    capacity: "200L / 300L / 400L / 500L",
    brands: ["Blue Star", "Voltas", "Western", "Trufrost"],
    features: [
      "Low-emissivity sliding curved glass top for premium product display",
      "Sub-zero freezing maintains ice cream texture without melting",
      "Includes wire baskets for convenient product segregation",
      "Pre-painted galvanized steel exterior resistant to rust",
    ],
    temperature: "-14°C to -22°C",
    energyRating: "Commercial Grade",
    image: "/lovable-uploads/bluestar/37000/1.jpg",
    priceNote: "Call / WhatsApp for Best Deal",
  },

  // Commercial AC
  {
    id: "commercial-cassette-ac",
    category: "commercial-ac",
    title: "Commercial Cassette Ceiling AC",
    subtitle: "360-Degree Air Flow for Showrooms, Offices & Banquets",
    capacity: "2.0 Ton / 3.0 Ton / 4.0 Ton",
    brands: ["Daikin", "O General", "Mitsubishi Heavy", "Hitachi", "Blue Star", "Voltas"],
    features: [
      "Ceiling mounted recessed flush finish saving wall space",
      "360 degree uniform four-way air discharge",
      "Built-in drain pump for smooth condensate drainage",
      "Inverter compressor for low running costs",
      "Centralized wired / wireless remote control",
    ],
    energyRating: "Inverter High ISEER",
    image: "/lovable-uploads/cassete/cassete.png",
    priceNote: "Turnkey Installation in Kolkata",
  },
  {
    id: "commercial-tower-ac",
    category: "commercial-ac",
    title: "Floor Standing Tower AC",
    subtitle: "High Throw Vertical AC for Conference Halls & Restaurants",
    capacity: "2.5 Ton / 3.0 Ton / 4.0 Ton",
    brands: ["Voltas", "Blue Star", "Daikin", "Carrier"],
    features: [
      "Powerful long-distance airflow throw up to 15 meters",
      "Sleek aesthetic floor-standing column design",
      "Touch screen control panel & wireless remote",
      "Quick cool turbo feature for high footfall spaces",
    ],
    energyRating: "Commercial Inverter",
    image: "/lovable-uploads/tower/1.png",
    priceNote: "Direct Wholesale Pricing",
  },
];

const AppliancesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const activeTab = searchParams.get("category") || (location.pathname.includes("geyser") ? "geyser" : "all");
  const [geyserCapacity, setGeyserCapacity] = useState<string>("All");
  const [geyserOrientation, setGeyserOrientation] = useState<string>("all");

  const setCategory = (cat: string) => {
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const filteredCommercial =
    activeTab === "all"
      ? COMMERCIAL_PRODUCTS
      : COMMERCIAL_PRODUCTS.filter((item) => item.category === activeTab);

  const filteredGeysers = GEYSERS_DATA.filter((g) => {
    const matchCapacity = geyserCapacity === "All" || g.capacity === geyserCapacity;
    const matchOrientation = geyserOrientation === "all" || g.orientation === geyserOrientation;
    return matchCapacity && matchOrientation;
  });

  const appliancesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Commercial Visi Coolers, Deep Freezers & Venus Geysers Dealer in Kolkata",
    description:
      "Authorized wholesale and retail dealer in Kolkata for Commercial Visi Coolers, Deep Freezers, and Venus Water Geysers located at Chandni Chowk.",
    url: "https://www.venusappliances.com/appliances",
    publisher: {
      "@type": "LocalBusiness",
      name: "Venus Appliances Kolkata",
      telephone: "+919331962120",
      address: {
        "@type": "PostalAddress",
        streetAddress: "63, Ganesh Chandra Avenue, Chandni Chowk",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700013",
        addressCountry: "IN",
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="Visi Cooler, Deep Freezer & Venus Geyser Dealer in Kolkata | Venus Appliances"
        description="Venus Appliances is Kolkata's top dealer for Commercial Visi Coolers, Deep Freezers, Venus Water Geysers & Cassette ACs in Chandni Chowk. Best wholesale prices for supermarkets, dairy, restaurants & homes."
        keywords="visi cooler dealer in kolkata, deep freezer dealer in kolkata, deep freedge dealer in kolkata, geyser dealer in kolkata, venus geyser kolkata, water heater dealer kolkata, commercial visi cooler chandni chowk, chest freezer kolkata"
        canonical="/appliances"
        schema={appliancesSchema}
      />

      <div className="bg-gradient-to-b from-blue-50/60 to-white pt-6 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-gray-500 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Commercial Appliances &amp; Water Geysers</span>
          </nav>

          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs sm:text-sm font-semibold border border-blue-400/30 mb-4">
                <Store className="h-4 w-4 text-blue-300" /> Authorized Commercial Showroom &bull; Chandni Chowk, Kolkata
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                Commercial Visi Coolers, Deep Freezers &amp; Venus Geysers in Kolkata
              </h1>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                Welcome to <strong>Venus Appliances</strong>, Chandni Chowk, Kolkata. We are authorized suppliers for commercial display Visi Coolers, Deep Freezers (hard top &amp; glass top), Venus 100% Copper &amp; Porcelain Glass-Lined Water Geysers (3L to 35L), and commercial cassette AC systems at verified wholesale prices across West Bengal.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>100% Brand Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Prompt Kolkata Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Chandni Chowk Wholesale Stock</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            <button
              onClick={() => setCategory("all")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <Layers className="h-4 w-4" /> All Appliances
            </button>
            <button
              onClick={() => setCategory("geyser")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === "geyser"
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-400 hover:text-orange-600"
              }`}
            >
              <Flame className="h-4 w-4 text-orange-500" /> Venus Water Geysers
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-orange-100 text-orange-800">
                22 Models
              </span>
            </button>
            <button
              onClick={() => setCategory("visi-cooler")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === "visi-cooler"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <Store className="h-4 w-4 text-blue-500" /> Visi Coolers (Display Chillers)
            </button>
            <button
              onClick={() => setCategory("deep-freezer")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === "deep-freezer"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <Snowflake className="h-4 w-4 text-cyan-500" /> Deep Freezers / Deep Fridges
            </button>
            <button
              onClick={() => setCategory("commercial-ac")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === "commercial-ac"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <Snowflake className="h-4 w-4 text-indigo-500" /> Cassette &amp; Tower ACs
            </button>
          </div>

          {/* DEDICATED VENUS GEYSER SHOWCASE SECTION (When 'geyser' or 'all') */}
          {(activeTab === "geyser" || activeTab === "all") && (
            <div className="mb-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <Flame className="h-3.5 w-3.5" /> Venus Home Appliances Official Dealer Showroom
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    Venus Water Heaters &amp; Geysers Collection
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                    Instant 3L Kitchen Geysers, 6L/10L/15L 5-Star BEE Bathroom Storage Geysers, and 35L Heavy Storage Systems with 100% Copper &amp; Porcelain Glassline Tanks.
                  </p>
                </div>
                <div className="mt-3 md:mt-0 flex items-center gap-2">
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {filteredGeysers.length} Models Available
                  </span>
                </div>
              </div>

              {/* Sub-filters for Geysers */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200 mb-8 space-y-3 text-xs">
                <div>
                  <span className="font-bold text-gray-700 mr-2">Filter by Capacity:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {["All", "3 LTR", "6 LTR", "10 LTR", "15 LTR", "35 LTR"].map((cap) => (
                      <button
                        key={cap}
                        onClick={() => setGeyserCapacity(cap)}
                        className={`px-3 py-1 rounded-lg font-bold transition-all ${
                          geyserCapacity === cap
                            ? "bg-orange-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                        }`}
                      >
                        {cap} {cap === "3 LTR" && "(Instant)"} {cap === "35 LTR" && "(Heavy Storage)"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700 mr-2">Filter by Mounting / Type:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {[
                      { id: "all", label: "All Types" },
                      { id: "instant", label: "Instant (3000W Kitchen/Compact)" },
                      { id: "vertical", label: "Vertical Storage (Wall Mount)" },
                      { id: "horizontal", label: "Horizontal Storage (Slim/Ceiling Mount)" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setGeyserOrientation(item.id)}
                        className={`px-3 py-1 rounded-lg font-bold transition-all ${
                          geyserOrientation === item.id
                            ? "bg-blue-700 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Geyser Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredGeysers.map((product) => {
                  const savings = product.mrp - product.offerPrice;
                  const discountPct = Math.round((savings / product.mrp) * 100);
                  const isCopper = product.tankType.toLowerCase().includes("copper");

                  const waText = `Hi Venus Appliances Kolkata, I want to inquire about ${product.name} (Capacity: ${product.capacity}, Offer Price: Rs.${product.offerPrice.toLocaleString()}). Please confirm stock and delivery at Chandni Chowk store.`;

                  return (
                    <Card
                      key={product.id}
                      className="bg-white rounded-2xl border border-gray-200/90 hover:border-orange-400 p-5 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        {/* Badges Bar */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              product.starRating.includes("5★")
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : product.starRating.includes("4★")
                                ? "bg-blue-100 text-blue-800 border border-blue-300"
                                : "bg-amber-100 text-amber-800 border border-amber-300"
                            }`}
                          >
                            {product.starRating}
                          </span>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                            {product.capacity} • {product.orientation.toUpperCase()}
                          </span>
                        </div>

                        {/* Image Showcase */}
                        <div className="h-44 bg-gradient-to-b from-gray-50 to-white rounded-xl p-3 mb-4 flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform">
                          <img
                            src={product.image}
                            alt={`${product.name} dealer in Kolkata`}
                            className="max-h-40 max-w-[85%] object-contain drop-shadow"
                            loading="lazy"
                            decoding="async"
                            width="220"
                            height="160"
                          />
                        </div>

                        {/* Title & Body */}
                        <h3 className="font-extrabold text-gray-900 text-base leading-snug group-hover:text-orange-600 transition-colors mb-1">
                          {product.name}
                        </h3>
                        <div className="text-[11px] text-gray-500 mb-3 font-medium">
                          {product.bodyMaterial} • {product.dimensions}
                        </div>

                        {/* Key Specs Box */}
                        <div className="bg-slate-50 rounded-xl p-3 mb-3 text-[11px] space-y-1.5 border border-slate-100">
                          <div className="flex items-start justify-between text-gray-700">
                            <span className="text-gray-500 font-medium">Inner Tank:</span>
                            <span
                              className={`font-bold text-right ${
                                isCopper ? "text-amber-800" : "text-gray-900"
                              }`}
                            >
                              {product.tankType}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-gray-700">
                            <span className="text-gray-500 font-medium">Tank Warranty:</span>
                            <span className="font-bold text-emerald-700">
                              {product.tankWarranty}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-gray-700">
                            <span className="text-gray-500 font-medium">Element Wnty:</span>
                            <span className="font-semibold text-gray-900">
                              {product.elementWarranty}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-gray-700">
                            <span className="text-gray-500 font-medium">Colors:</span>
                            <span className="font-semibold text-gray-900">
                              {product.colors.join(", ")}
                            </span>
                          </div>
                        </div>

                        {/* Installation Notice */}
                        <div className="text-[11px] font-semibold text-blue-900 bg-blue-50/80 px-2.5 py-1.5 rounded-lg border border-blue-100 mb-4 flex items-center gap-1.5">
                          <ShieldCheck className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{product.installationTerms}</span>
                        </div>
                      </div>

                      {/* Pricing & CTA Buttons */}
                      <div>
                        <div className="pt-3 border-t border-gray-100 mb-3 flex items-baseline justify-between">
                          <div>
                            <span className="text-[10px] text-gray-400 block font-semibold uppercase">
                              Venus Wholesale Price
                            </span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl font-black text-gray-900">
                                ₹{product.offerPrice.toLocaleString()}
                              </span>
                              <span className="text-xs text-gray-400 line-through">
                                MRP ₹{product.mrp.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {discountPct}% OFF
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            asChild
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs"
                          >
                            <a
                              href={`https://wa.me/919331962120?text=${encodeURIComponent(
                                waText
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageCircle className="h-3.5 w-3.5 mr-1" /> WhatsApp
                            </a>
                          </Button>
                          {product.officialUrl ? (
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="text-gray-700 hover:text-blue-700 border-gray-300 text-xs font-semibold"
                            >
                              <a
                                href={product.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Specs <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            </Button>
                          ) : (
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="text-gray-700 hover:text-blue-700 border-gray-300 text-xs font-semibold"
                            >
                              <a href="tel:+919331962120">
                                Call Store
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* COMMERCIAL APPLIANCES GRID (Visi Coolers, Deep Freezers, Commercial ACs) */}
          {activeTab !== "geyser" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <Store className="h-3.5 w-3.5" /> Commercial Refrigeration &amp; HVAC
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    Visi Coolers, Deep Freezers &amp; Cassette ACs
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCommercial.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-2xl flex flex-col justify-between overflow-hidden bg-white group"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700">
                          {item.category.replace("-", " ")}
                        </span>
                        <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> In Stock Kolkata
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 mb-5 flex items-center justify-center min-h-[190px] group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={item.image}
                          alt={`${item.title} dealer in Kolkata`}
                          className="max-h-44 max-w-full object-contain drop-shadow"
                          loading="lazy"
                          decoding="async"
                          width="240"
                          height="176"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png";
                          }}
                        />
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3">
                        {item.subtitle}
                      </p>

                      <div className="bg-slate-50 rounded-xl p-3 mb-4 space-y-1.5 border border-slate-100 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 font-medium">Capacities:</span>
                          <span className="font-bold text-gray-900">{item.capacity}</span>
                        </div>
                        {item.temperature && (
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 font-medium">Temp Range:</span>
                            <span className="font-bold text-blue-700">{item.temperature}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 font-medium">Top Brands:</span>
                          <span className="font-semibold text-gray-700 text-right">
                            {item.brands.join(", ")}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5 mb-6 flex-1 text-xs text-gray-600">
                        {item.features.slice(0, 4).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold shrink-0">•</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-100 mt-auto">
                        <div className="text-xs text-gray-400 mb-3 font-medium">
                          {item.priceNote}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            asChild
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold flex-1 text-xs"
                          >
                            <a
                              href={`https://wa.me/919331962120?text=${encodeURIComponent(
                                `Hi Venus Appliances Kolkata, I want to inquire about wholesale dealer pricing for ${item.title} (${item.capacity}).`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageCircle className="h-4 w-4 mr-1.5" /> WhatsApp Quote
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-blue-600 text-blue-700 hover:bg-blue-50 text-xs px-3"
                          >
                            <a href="tel:+919331962120" aria-label="Call Venus Appliances Kolkata">
                              <Phone className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Kolkata Commercial Buying Guide Section */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center">
              Commercial Appliance Guide &amp; Wholesale Supply in Kolkata
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600 leading-relaxed">
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  Visi Coolers for Kolkata Retailers
                </h3>
                <p>
                  Visi Coolers are essential for supermarkets, grocery stores, bakeries, cafes, and sweet shops across Kolkata. We supply Blue Star, Voltas, and Western models equipped with anti-sweat heated glass doors to maintain full visibility in Kolkata&apos;s humid climate.
                </p>
              </div>

              <div className="bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100">
                <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  Deep Freezers &amp; Deep Fridges
                </h3>
                <p>
                  Available in hard top (storage) and curved glass top (display) configurations. Built with 60mm+ high-density PUF insulation to hold freezing temperatures up to 24 hours during power outages, safeguarding meat, ice cream, and dairy investments.
                </p>
              </div>

              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  Venus Geysers &amp; Water Heaters
                </h3>
                <p>
                  Equipped with porcelain enamel glass-lined and pure copper inner tanks designed to withstand hard water and high water pressure up to 8 Bar in high-rise residential towers across Salt Lake, New Town, Rajarhat, South Kolkata, and Howrah.
                </p>
              </div>
            </div>

            {/* Visit Store Callout */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-lg sm:text-xl">
                  Visit Our Chandni Chowk Showroom in Kolkata
                </h4>
                <p className="text-blue-200 text-xs sm:text-sm">
                  63 Ganesh Chandra Avenue, Between Chandni Metro Station &amp; Hind Cinema, beside RBL Bank, Bowbazar, Kolkata 700013
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 font-bold">
                  <Link to="/contact">Get Store Directions</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-bold">
                  <a href="tel:+919331962120">
                    <Phone className="h-4 w-4 mr-1.5" /> Call 93319 62120
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppliancesPage;
