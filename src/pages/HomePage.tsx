import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ShieldCheck,
  Truck,
  Award,
  Store,
  Snowflake,
  Flame,
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  Sparkles,
  ExternalLink,
  HelpCircle,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ACProduct } from "@/lib/ac-selection-data";
import type { GeyserProduct } from "@/data/geysers-data";
import { Suspense, lazy, useDeferredValue, useMemo, useState, useCallback } from "react";
import LazySection from "@/components/LazySection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ACSelectionGuide = lazy(() => import("@/components/ACSelectionGuide"));
const ProductFilter = lazy(() => import("@/components/ProductFilter"));
const FeaturedDeals = lazy(() => import("@/components/FeaturedDeals"));
const PremiumShowcase = lazy(() => import("@/components/PremiumShowcase"));
const MapSection = lazy(() => import("@/components/MapSection"));
const TestimonialCarousel = lazy(() => import("@/components/TestimonialCarousel"));

const SectionFallback = () => (
  <div className="w-full py-16">
    <div className="mx-auto h-40 max-w-7xl animate-pulse rounded-2xl bg-gray-100" />
  </div>
);

const TOP_BRANDS_SHOWCASE = [
  {
    id: "daikin",
    name: "Daikin",
    tagline: "Japanese Inverter & Streamer Technology",
    desc: "1 Ton, 1.5 Ton, 2 Ton 3-Star & 5-Star Smart Inverter ACs.",
    badge: "Top Seller in Kolkata",
    logo: "/lovable-uploads/94100e13-1446-47ff-8bb4-4cd8fb95035f.png",
  },
  {
    id: "o-general",
    name: "O General",
    tagline: "Heavy-Duty Tropical Inverter Cooling",
    desc: "Unmatched performance for extreme heat & Kolkata humidity.",
    badge: "Premium Choice",
    logo: "/lovable-uploads/1524253e-afab-4038-9a4e-2af8f24418c1.png",
  },
  {
    id: "hitachi",
    name: "Hitachi",
    tagline: "Expandable Inverter & Dual Gold Fin",
    desc: "Ultra-quiet cooling with 100% inner grooved copper coils.",
    badge: "High Energy Saver",
    logo: "/lovable-uploads/833f8e8e-835d-435d-9db4-82dc17c80ebb.png",
  },
  {
    id: "mitsubishi-heavy",
    name: "Mitsubishi Heavy",
    tagline: "Heavy Industries Tropical Series",
    desc: "Jet engine airflow aerodynamics & ultra-long throw cooling.",
    badge: "Industrial Grade",
    logo: "/lovable-uploads/2b6a0337-071e-49f0-8853-b8d4ad5c5f6d.png",
  },
  {
    id: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    tagline: "Whisper Quiet Japanese Cooling",
    desc: "Ultra-efficient dual barrier coating & precision inverter.",
    badge: "Whisper Quiet",
    logo: "/lovable-uploads/97d42845-0d65-42cd-9e69-51af08f84088.png",
  },
  {
    id: "voltas",
    name: "Voltas",
    tagline: "Tata Product - Reliable & Affordable",
    desc: "All-weather split & window ACs with lowest maintenance costs.",
    badge: "India's #1 Brand",
    logo: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  },
  {
    id: "blue-star",
    name: "Blue Star",
    tagline: "Precision Cooling & Commercial Reliability",
    desc: "Inverter splits, window, and commercial cassette solutions.",
    badge: "Commercial Leader",
    logo: "/lovable-uploads/72002498-a99e-40af-8002-2a7eddb8ffc5.png",
  },
  {
    id: "carrier",
    name: "Carrier",
    tagline: "Inventor of Modern Air Conditioning",
    desc: "High ISEER cooling with PM 2.5 air purification filters.",
    badge: "Global Pioneer",
    logo: "/lovable-uploads/4e7ddae9-0f68-40af-a6e0-27ecaa0e02ca.png",
  },
  {
    id: "panasonic",
    name: "Panasonic",
    tagline: "Miraie AI & Nanoe-X Purification",
    desc: "Smart WiFi enabled ACs with voice controls & dust defense.",
    badge: "Smart AI Tech",
    logo: "/lovable-uploads/43b71c61-896e-4271-a7b2-a9a165a9f892.png",
  },
  {
    id: "lg",
    name: "LG",
    tagline: "AI Dual Inverter & 6-in-1 Cooling",
    desc: "AI convertible cooling with Ocean Black anti-corrosion fin.",
    badge: "Fast Cooling",
    logo: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  },
  {
    id: "godrej",
    name: "Godrej",
    tagline: "Eco-Friendly 100% Copper ACs",
    desc: "Heavy-duty tropical compressors designed for coastal Bengal.",
    badge: "Eco Friendly",
    logo: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  },
  {
    id: "lloyd",
    name: "Lloyd",
    tagline: "Havells Brand - Rapid 4-Way Cooling",
    desc: "Cools even at 60°C ambient with anti-viral dust filter protection.",
    badge: "Rapid Cooling",
    logo: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  },
  {
    id: "vestar",
    name: "Vestar",
    tagline: "Heavy-Duty Commercial & Residential",
    desc: "High cooling capacity with rust-resistant gold fin coils.",
    badge: "High Durability",
    logo: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  },
];

const COMMERCIAL_APPLIANCES_CARDS = [
  {
    title: "Commercial Visi Coolers",
    subtitle: "Glass Door Display Chillers",
    desc: "Single & double glass-door chillers for supermarkets, dairy, beverages, restaurants & confectioneries across Kolkata.",
    capacity: "300L to 1200L",
    brands: "Blue Star, Voltas, Western, Trufrost",
    link: "/appliances?category=visi-cooler",
    icon: Store,
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Deep Freezers & Deep Fridges",
    subtitle: "Hard Top & Curved Glass Freezers",
    desc: "Heavy PUF insulated chest freezers for frozen foods, meat, ice cream, dairy & bulk inventory with 24-hr cooling retention.",
    capacity: "100L to 600L",
    brands: "Voltas, Blue Star, Haier, Rockwell",
    link: "/appliances?category=deep-freezer",
    icon: Snowflake,
    color: "from-cyan-600 to-blue-700",
  },
  {
    title: "Water Heaters & Geysers",
    subtitle: "Storage & Instant Water Heaters",
    desc: "5-star BEE energy efficient geysers with glass-lined tanks built for Kolkata's high-rise building pressure and hard water.",
    capacity: "3L, 10L, 15L, 25L, 50L",
    brands: "Venus, Racold, Bajaj, AO Smith, Havells",
    link: "/appliances?category=geyser",
    icon: Flame,
    color: "from-amber-600 to-orange-700",
  },
  {
    title: "Commercial Cassette & Tower ACs",
    subtitle: "Ceiling & Floor Standing ACs",
    desc: "Heavy commercial cooling for retail showrooms, corporate offices, banquets, and conference rooms in Kolkata.",
    capacity: "2.0 Ton to 4.0 Ton",
    brands: "Daikin, O General, Blue Star, Voltas",
    link: "/appliances?category=commercial-ac",
    icon: Layers,
    color: "from-purple-600 to-indigo-800",
  },
];

const FAQS_DATA = [
  {
    q: "Who is the best AC dealer in Kolkata?",
    a: "Venus Appliances is widely recognized as one of the best and most trusted AC dealers in Kolkata, conveniently located at 63 Ganesh Chandra Avenue, Chandni Chowk (Bowbazar). We are authorized dealers for all top brands including Daikin, O General, Hitachi, Mitsubishi Heavy & Electric, Voltas, Blue Star, Carrier, Panasonic, LG, Godrej, and Vestar, offering wholesale and retail pricing with official brand warranty.",
  },
  {
    q: "Do you supply genuine Hitachi, Daikin, O General, and Mitsubishi ACs in Kolkata?",
    a: "Yes. Every air conditioner sold at Venus Appliances is 100% genuine, brand-new, factory-sealed, and comes directly from the official manufacturer with authorized brand warranty and a valid GST invoice.",
  },
  {
    q: "Which AC brand is best suited for Kolkata's humid summer climate?",
    a: "For Kolkata's extreme heat and high coastal humidity, heavy-duty Japanese brands like O General, Mitsubishi Heavy Industries, Daikin, and Hitachi with 100% copper coils and anti-corrosion blue/gold fin coatings are highly recommended. For budget-friendly efficiency, Voltas, Blue Star, and Carrier offer excellent cooling and power saving.",
  },
  {
    q: "Do you sell commercial Visi Coolers and Deep Freezers in Kolkata?",
    a: "Yes! Venus Appliances is an authorized distributor for commercial refrigeration across West Bengal. We supply single and double-door Visi Coolers (glass door display chillers) for supermarkets, dairy, and beverage shops, as well as hard top and curved glass Deep Freezers (100L to 600L) from Blue Star, Voltas, Western, and Trufrost.",
  },
  {
    q: "Do you supply water heaters and geysers in Kolkata?",
    a: "Yes, we stock a wide variety of 5-star energy efficient storage geysers (10L, 15L, 25L, 35L, 50L) and instant electric water heaters from top brands like Venus, Racold, Bajaj, AO Smith, and Havells, built with corrosion-resistant glass-lined tanks suitable for high-rise buildings in Kolkata.",
  },
  {
    q: "Where is Venus Appliances located in Kolkata?",
    a: "Our showroom is located at Chandni, 63, Ganesh Chandra Avenue, near RBL Bank, between Chandni Chowk Metro Station and Hind Cinema, Bowbazar, Kolkata, West Bengal 700013. We are just a 2-minute walk from Chandni Chowk Metro Station.",
  },
  {
    q: "Do you provide delivery and certified installation across Kolkata and West Bengal?",
    a: "Yes, we provide same-day or next-day delivery across Central Kolkata, Salt Lake, New Town, Howrah, Bowbazar, Ballygunge, Behala, Dum Dum, and neighboring districts. Installation is handled by certified manufacturer technicians.",
  },
];

const features = [
  {
    title: "100% Genuine Brand Warranty",
    description: "Factory-sealed units from Daikin, Hitachi, O General, Voltas, Blue Star with authorized company warranty.",
  },
  {
    title: "Lowest Wholesale & Retail Rates",
    description: "Direct distributor pricing that beats large showroom chains, with full GST input credit for businesses.",
  },
  {
    title: "Kolkata Climate Optimized",
    description: "Anti-corrosion copper condensers and tropicalized compressors built specifically for coastal Bengal humidity.",
  },
  {
    title: "Fast Delivery & Certified Installation",
    description: "Doorstep delivery across Kolkata, Howrah, and Salt Lake with certified company installation booking.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [allProducts, setAllProducts] = useState<ACProduct[]>([]);
  const [allGeysers, setAllGeysers] = useState<GeyserProduct[]>([]);
  const [brandNameMap, setBrandNameMap] = useState<Map<string, string>>(new Map());
  const [typeNameMap, setTypeNameMap] = useState<Map<string, string>>(new Map());
  const [isSearchDataLoaded, setIsSearchDataLoaded] = useState(false);

  const loadSearchData = useCallback(async () => {
    if (isSearchDataLoaded) return;
    setIsSearchDataLoaded(true);
    try {
      const [acMod, geyserMod] = await Promise.all([
        import("@/lib/ac-selection-data"),
        import("@/data/geysers-data"),
      ]);
      setAllProducts(acMod.acProducts);
      setBrandNameMap(new Map(acMod.brands.map((b) => [b.id, b.name])));
      setTypeNameMap(new Map(acMod.acTypes.map((t) => [t.id, t.name])));
      setAllGeysers(geyserMod.GEYSERS_DATA);
    } catch {
      // Graceful fallback
    }
  }, [isSearchDataLoaded]);

  const deferredSearch = useDeferredValue(search);

  const filteredProducts = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase();
    if (!q || allProducts.length === 0) return [];

    return allProducts.filter((product) => {
      return (
        (product.modelNumber && product.modelNumber.toLowerCase().includes(q)) ||
        (product.description && product.description.toLowerCase().includes(q)) ||
        (brandNameMap.get(product.brand)?.toLowerCase().includes(q) ?? false) ||
        (typeNameMap.get(product.type)?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [deferredSearch, allProducts, brandNameMap, typeNameMap]);

  const filteredGeysers = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase();
    if (!q || allGeysers.length === 0) return [];

    return allGeysers.filter((g) => {
      return (
        g.name.toLowerCase().includes(q) ||
        g.modelCode.toLowerCase().includes(q) ||
        g.brand?.toLowerCase().includes(q) ||
        g.capacity.toLowerCase().includes(q) ||
        g.tankType.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        (q.includes("geyser") && true) ||
        (q.includes("water") && true) ||
        (q.includes("heater") && true) ||
        (q.includes("smith") && true) ||
        (q.includes("venus") && true)
      );
    });
  }, [deferredSearch, allGeysers]);

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <Layout>
      <SEO
        title="Best AC Dealer in Kolkata | Top AC, Visi Cooler, Deep Freezer & Geyser Dealer"
        description="Venus Appliances is Kolkata's top authorized AC dealer located in Chandni Chowk. Best deals on Hitachi, Daikin, O General, Mitsubishi, Voltas, Blue Star, Carrier, Deep Freezers, Visi Coolers & Geysers. Call 93319 62120."
        keywords="Best ac dealer in kolkata, Top ac dealer in kolkata, All types of ac dealer in kolkata, Hitachi ac dealer in kolkata, Daikin ac dealer in kolkata, O General ac dealer in kolkata, Mitsubishi ac dealer in kolkata, Carrier ac dealer in kolkata, Panasonic ac dealer in kolkata, Voltas ac dealer in kolkata, Bluestar ac dealer in kolkata, Godrej ac dealer in kolkata, Vestar ac dealer in kolkata, LG ac dealer in kolkata, geyser dealer in kolkata, deep freedge dealer in kolkata, deep freezer dealer in kolkata, visi cooler dealer in kolkata, cassette ac dealer in kolkata, Chandni Chowk AC market"
        canonical="/"
        schema={homeFaqSchema}
      />

      <div className="w-full max-w-[100vw] overflow-clip">
        {/* Top SEO Trust Bar */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white py-3 px-4 border-b border-blue-800/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-center md:text-left">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                <strong>#1 AC &amp; Commercial Refrigeration Dealer in Kolkata</strong> — Chandni Chowk Showroom
              </span>
            </div>
            <div className="flex items-center gap-4 text-blue-200 text-xs">
              <span>📍 63 Ganesh Chandra Ave (Near RBL Bank)</span>
              <a
                href="tel:+919331962120"
                className="font-bold text-white hover:text-emerald-300 transition flex items-center gap-1"
              >
                <Phone className="h-3 w-3" /> 93319 62120
              </a>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <div className="w-full">
          <Hero />
        </div>

        {/* Primary SEO H1 & Intro Banner */}
        <section className="bg-gradient-to-b from-blue-50/80 to-white py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold mb-3">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" /> Authorized Distributor &amp; Multi-Brand Showroom
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
              Best AC Dealer in Kolkata &amp; Commercial Appliance Specialist
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to <strong>Venus Appliances</strong>, Kolkata&apos;s most trusted showroom for residential &amp; commercial cooling. We are authorized dealers for{" "}
              <strong>Hitachi, Daikin, O General, Mitsubishi Heavy &amp; Electric, Voltas, Blue Star, Carrier, Panasonic, LG, Godrej, and Vestar</strong> air conditioners. We also specialize in commercial <strong>Visi Coolers, Deep Freezers / Deep Fridges, and Water Geysers</strong> at unbeatable wholesale &amp; retail prices with genuine manufacturer warranties.
            </p>
          </div>
        </section>

        {/* Product Live Search Bar */}
        <div className="w-full bg-white mb-6 py-6 px-4 sm:px-6 lg:px-8 shadow-sm border-b">
          <div className="max-w-3xl mx-auto w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by Model Number, Brand (Daikin, Hitachi, Voltas...), or Category..."
                className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 pl-4 pr-12 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-sm sm:text-base transition-all"
                value={search}
                onFocus={loadSearchData}
                onChange={(e) => {
                  loadSearchData();
                  setSearch(e.target.value);
                  setShowResults(true);
                }}
                aria-label="Product search for AC models and brands in Kolkata"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Quickly find 100+ split, window, cassette AC models and commercial appliances available in Kolkata
            </p>
          </div>

          {/* Search Results */}
          {showResults && search.trim() !== "" && (
            <div className="max-w-4xl mx-auto w-full mt-6">
              {filteredProducts.length === 0 && filteredGeysers.length === 0 ? (
                <div className="text-gray-500 py-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  No exact match found for &quot;{search}&quot;. Contact our Chandni Chowk store directly at <strong>93319 62120</strong> for custom orders.
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Matching Geysers */}
                  {filteredGeysers.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Flame className="h-3.5 w-3.5" /> Matching Water Geysers ({filteredGeysers.length})
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {filteredGeysers.slice(0, 6).map((geyser) => (
                          <div
                            key={geyser.id}
                            className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col gap-2 border border-orange-200 hover:border-orange-400 hover:shadow-md transition"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={geyser.image}
                                alt={geyser.name}
                                loading="lazy"
                                decoding="async"
                                width="56"
                                height="56"
                                className="h-14 w-14 object-contain rounded bg-orange-50/50 p-1 shrink-0"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src =
                                    "/lovable-uploads/geysers/venus-water-geyser.png";
                                }}
                              />
                              <div className="min-w-0 flex-1">
                                <div className="font-bold text-gray-900 text-xs truncate flex items-center gap-1.5">
                                  <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded text-white ${
                                    geyser.brand === "AO Smith" ? "bg-blue-950" : "bg-orange-600"
                                  }`}>
                                    {geyser.brand}
                                  </span>
                                  <span className="truncate">{geyser.name}</span>
                                </div>
                                <div className="text-[11px] text-orange-600 font-bold uppercase mt-0.5">{geyser.capacity} • {geyser.starRating}</div>
                                <div className="text-[10px] text-gray-500 truncate">{geyser.tankWarranty}</div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-1 pt-2 border-t border-gray-100 text-xs">
                              <div className="font-extrabold text-gray-900">
                                ₹{geyser.offerPrice.toLocaleString()}{" "}
                                <span className="text-[10px] text-gray-400 line-through">₹{geyser.mrp.toLocaleString()}</span>
                              </div>
                              <a
                                href={`https://wa.me/919331962120?text=${encodeURIComponent(
                                  `Hi Venus Appliances Kolkata, I want to inquire about ${geyser.brand} ${geyser.name} (Offer Price: Rs.${geyser.offerPrice.toLocaleString()}).`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-green-600 text-white hover:bg-green-700 transition"
                              >
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching ACs */}
                  {filteredProducts.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Snowflake className="h-3.5 w-3.5" /> Matching Air Conditioners ({filteredProducts.length})
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {filteredProducts.slice(0, 6).map((product) => (
                          <div
                            key={product.id}
                            className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col gap-2 border border-gray-200 hover:border-blue-400 hover:shadow-md transition"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image}
                                alt={`${product.modelNumber} in Kolkata`}
                                loading="lazy"
                                decoding="async"
                                width="56"
                                height="56"
                                className="h-14 w-14 object-contain rounded bg-gray-50 p-1 shrink-0"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png";
                                }}
                              />
                              <div className="min-w-0 flex-1">
                                <div className="font-bold text-gray-900 text-xs truncate">{product.modelNumber}</div>
                                <div className="text-[11px] text-blue-600 font-semibold uppercase">{product.brand} | {product.type}</div>
                                <div className="text-[10px] text-gray-500 truncate">{product.tonnage} • {product.starRating}</div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-1 pt-2 border-t border-gray-100">
                              <div className="font-extrabold text-blue-700 text-sm">
                                ₹{product.price?.toLocaleString() ?? "---"}
                              </div>
                              <Link
                                to={`/product/${product.id}`}
                                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        
        {/* Guided AC Selection Interactive Section (Step-by-step Guide) */}
        <LazySection minHeight="480px" fallback={<SectionFallback />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="w-full"
          >
            <ACSelectionGuide />
          </motion.div>
        </LazySection>

        {/* NEW SECTION: Commercial & Specialized Appliances in Kolkata */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <Snowflake className="h-3.5 w-3.5" /> Commercial Refrigeration &amp; Heating Kolkata
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
                  Visi Coolers, Deep Freezers &amp; Geysers in Kolkata
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-1 max-w-2xl">
                  Authorized wholesale and retail supplies for businesses, supermarkets, restaurants, cloud kitchens &amp; modern Kolkata homes.
                </p>
              </div>
              <Button asChild variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50 mt-4 md:mt-0 font-semibold">
                <Link to="/appliances">
                  Explore Full Commercial Range <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMMERCIAL_APPLIANCES_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">
                        {card.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-2 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 text-xs space-y-2">
                      <div className="flex justify-between text-gray-600">
                        <span className="font-medium">Capacity:</span>
                        <span className="font-bold text-gray-900">{card.capacity}</span>
                      </div>
                      <div className="text-[11px] text-gray-400">
                        Brands: {card.brands}
                      </div>
                      <div className="pt-2">
                        <Link
                          to={card.link}
                          className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1"
                        >
                          View Models &amp; Prices <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEW SECTION: Authorized Top AC Brands Dealer in Kolkata */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 via-indigo-950 to-blue-950 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30 mb-3">
                <Award className="h-3.5 w-3.5 text-blue-300" /> Authorized Multi-Brand Dealership
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                Authorized AC Brands Dealer in Kolkata
              </h2>
              <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
                Click any brand below to explore available tonnage (1T, 1.5T, 2T), star ratings, inverter models, and direct wholesale pricing at our Chandni Chowk store.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
              {TOP_BRANDS_SHOWCASE.map((b) => (
                <Link
                  key={b.id}
                  to={`/brand/${b.id}`}
                  className="bg-white/10 hover:bg-white/15 border border-white/10 hover:border-blue-400 rounded-2xl p-3.5 transition-all duration-300 flex flex-col justify-between group text-center hover:scale-[1.03] hover:shadow-xl backdrop-blur-sm"
                >
                  <div>
                    {/* Real Company Logo in clean white container */}
                    <div className="bg-white rounded-xl p-2.5 h-16 w-full flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                      <img
                        src={b.logo}
                        alt={`${b.name} AC dealer in Kolkata`}
                        className="max-h-11 max-w-[85%] object-contain"
                        loading="lazy"
                        decoding="async"
                        width="100"
                        height="44"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.logo-fallback')) {
                            const fallback = document.createElement('span');
                            fallback.className = 'logo-fallback font-bold text-gray-800 text-xs sm:text-sm tracking-wide';
                            fallback.innerText = b.name;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/30 text-blue-200 mb-1.5 border border-blue-400/20">
                      {b.badge}
                    </span>
                    <h3 className="font-bold text-white text-xs sm:text-sm group-hover:text-blue-300 transition-colors">
                      {b.name} AC Kolkata
                    </h3>
                    <p className="text-[11px] text-blue-200 line-clamp-2 mt-1 leading-snug">
                      {b.tagline}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 text-xs text-blue-300 font-semibold flex items-center justify-center gap-1 group-hover:text-white transition-colors">
                    <span>View Models</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8">
                <Link to="/gallery">Browse All 15+ AC Brands &amp; Catalogs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Product Filtering Section */}
        <LazySection minHeight="450px" fallback={<SectionFallback />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="w-full bg-gradient-to-b from-blue-50 to-white"
          >
            <ProductFilter />
          </motion.div>
        </LazySection>

        {/* Featured Deals */}
        <LazySection minHeight="500px" fallback={<SectionFallback />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="w-full bg-cover bg-center"
          >
            <div className="bg-gradient-to-r from-gray-900/90 to-gray-900/80 w-full">
              <FeaturedDeals />
            </div>
          </motion.div>
        </LazySection>

        {/* Features / Why Choose Us Section */}
        <motion.section
          className="bg-gradient-to-r from-cool-blue/5 to-blue-300/20 py-16 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div className="text-center mb-10 sm:mb-14" variants={fadeIn}>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                The Venus Appliances Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
                Why We Are the Best AC Dealer in Kolkata
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Trusted by thousands of residential and commercial clients across Chandni Chowk, Bowbazar, Salt Lake, and greater Kolkata since 2010.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.15 },
                    },
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                    <h3 className="font-bold text-gray-900 text-base">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Premium Showcase Section */}
        <LazySection minHeight="520px" fallback={<SectionFallback />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3')",
            }}
          >
            <div className="bg-gradient-to-b from-gray-900/95 to-gray-900/90 w-full">
              <PremiumShowcase />
            </div>
          </motion.div>
        </LazySection>

        {/* Store Location & Google Map Section */}
        <LazySection minHeight="420px" fallback={<SectionFallback />}>
          <div className="w-full">
            <MapSection />
          </div>
        </LazySection>

        {/* Testimonials Section */}
        <LazySection minHeight="400px" fallback={<SectionFallback />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="w-full bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50"
          >
            <TestimonialCarousel />
          </motion.div>
        </LazySection>

        {/* NEW SECTION: Frequently Asked Questions (FAQ) with Schema */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
                <HelpCircle className="h-3.5 w-3.5" /> Kolkata AC Buying &amp; Dealer FAQs
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Everything you need to know about buying air conditioners, visi coolers, deep freezers, and geysers in Kolkata.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS_DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl px-6 py-1 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600 text-sm sm:text-base py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-xs sm:text-sm leading-relaxed pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <motion.section
          className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 py-16 text-white w-full shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 w-full">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-3">
              Visit Our Chandni Chowk Showroom Today
            </span>
            <motion.h2
              className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready for Unmatched Cooling in Kolkata?
            </motion.h2>
            <motion.p
              className="text-blue-100 max-w-2xl mx-auto mb-8 text-sm sm:text-base lg:text-lg px-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Get wholesale prices on Daikin, Hitachi, O General, Mitsubishi, Voltas, Blue Star, Carrier, Deep Freezers, Visi Coolers &amp; Geysers.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold w-full sm:w-auto shadow-lg">
                <Link to="/select-type">Find Ideal AC</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 font-bold w-full sm:w-auto shadow-lg">
                <a
                  href="https://wa.me/919331962120?text=Hello%20Venus%20Appliances%20Kolkata!%20I%20want%20to%20inquire%20about%20AC%20and%20commercial%20appliances%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default HomePage;
