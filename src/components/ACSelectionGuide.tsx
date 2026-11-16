import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  Flame,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { acTypes } from "@/lib/ac-selection-data";
import { GEYSERS_DATA, GeyserProduct } from "@/data/geysers-data";
import { motion, AnimatePresence } from "framer-motion";

const PREMIUM_BG_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";

const ACSelectionGuide = () => {
  const [activeCategory, setActiveCategory] = useState<"ac" | "geyser">("ac");
  const [selectedCapacity, setSelectedCapacity] = useState<string>("All");
  const [selectedOrientation, setSelectedOrientation] = useState<string>("all");

  const filteredGeysers = GEYSERS_DATA.filter((g) => {
    const matchCapacity =
      selectedCapacity === "All" || g.capacity === selectedCapacity;
    const matchOrientation =
      selectedOrientation === "all" || g.orientation === selectedOrientation;
    return matchCapacity && matchOrientation;
  });

  return (
    <section className="relative flex items-center py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url('${PREMIUM_BG_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.85) blur(0px)",
        }}
        aria-hidden="true"
      />
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[8px] z-10" />

      {/* Decorative Glass Circles */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/30 rounded-full blur-3xl z-20 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-orange-300/20 rounded-full blur-2xl z-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-30 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 text-blue-900 border border-blue-400/30 text-xs sm:text-sm font-bold mb-3 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" /> Guided Selection Guide
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-900 drop-shadow-sm">
            Find Your Perfect Air Conditioner &amp; Water Geyser
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto font-medium text-xs sm:text-sm md:text-base leading-relaxed">
            Our step-by-step selection guide helps you find the ideal cooling or water heating system for your Kolkata home, office, or commercial premises.
          </p>
        </motion.div>

        {/* Primary Category Switcher: Air Conditioners vs Venus Water Geysers */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/80 border border-white/60 shadow-lg backdrop-blur-md gap-2">
            <button
              onClick={() => setActiveCategory("ac")}
              className={`px-5 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "ac"
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md shadow-blue-700/30 scale-[1.02]"
                  : "text-gray-700 hover:text-blue-700 hover:bg-white/60"
              }`}
            >
              <Snowflake className="h-4 w-4" /> Air Conditioners (ACs)
            </button>
            <button
              onClick={() => setActiveCategory("geyser")}
              className={`px-5 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "geyser"
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-orange-600/30 scale-[1.02]"
                  : "text-gray-700 hover:text-orange-700 hover:bg-white/60"
              }`}
            >
              <Flame className="h-4 w-4" /> Venus Water Geysers
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-black bg-white/20 text-white">
                22 Models
              </span>
            </button>
          </div>
        </div>

        {/* Animate View Switch */}
        <AnimatePresence mode="wait">
          {activeCategory === "ac" ? (
            <motion.div
              key="ac-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* Steps Indicator for AC */}
              <div className="max-w-4xl mx-auto mb-10">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-lg font-bold mb-2 shadow-lg border border-white/40">
                      1
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-center text-blue-950">
                      AC Type
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <ChevronRight className="text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 text-blue-900 flex items-center justify-center text-lg font-bold mb-2 shadow border border-blue-200">
                      2
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-center text-gray-700">
                      Brand &amp; Star
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <ChevronRight className="text-blue-400" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 text-blue-900 flex items-center justify-center text-lg font-bold mb-2 shadow border border-blue-200">
                      3
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-center text-gray-700">
                      Tonnage &amp; Price
                    </p>
                  </div>
                </div>
              </div>

              {/* AC Types Grid (Including Geyser Option Card) */}
              <div className="mb-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-950 drop-shadow-sm">
                  Select Your Appliance Type
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                  {acTypes.map((type, index) => {
                    const isGeyser = type.id === "geyser";
                    const targetLink = isGeyser
                      ? "#geysers-catalog"
                      : `/select-brand/${type.id}`;

                    return (
                      <motion.div
                        key={type.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true }}
                      >
                        {isGeyser ? (
                          <div
                            onClick={() => setActiveCategory("geyser")}
                            className="cursor-pointer h-full"
                          >
                            <Card className="bg-gradient-to-b from-orange-50/80 via-white/80 to-amber-50/80 border-2 border-orange-300 hover:border-orange-500 hover:shadow-2xl hover:-translate-y-1.5 p-4 sm:p-5 h-full flex flex-col items-center justify-between rounded-2xl backdrop-blur-md transition-all duration-300 group">
                              <div className="h-28 sm:h-32 mb-3 flex items-center justify-center w-full">
                                <img
                                  src={type.image}
                                  alt="Venus Water Geyser in Kolkata"
                                  className="max-h-24 sm:max-h-28 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform"
                                />
                              </div>
                              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-800 mb-1">
                                Heating
                              </span>
                              <h4 className="text-center font-bold text-xs sm:text-sm text-gray-900 group-hover:text-orange-700 transition-colors">
                                {type.name}
                              </h4>
                              <p className="text-[10px] text-gray-500 mt-1 text-center font-medium">
                                3L to 35L Instant &amp; Storage
                              </p>
                            </Card>
                          </div>
                        ) : (
                          <Link to={targetLink} className="h-full block">
                            <Card className="bg-white/60 border border-white/60 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1.5 p-4 sm:p-5 h-full flex flex-col items-center justify-between rounded-2xl backdrop-blur-md transition-all duration-300 group">
                              <div className="h-28 sm:h-32 mb-3 flex items-center justify-center w-full">
                                <img
                                  src={type.image}
                                  alt={`${type.name} dealer in Kolkata`}
                                  loading="lazy"
                                  decoding="async"
                                  width="120"
                                  height="100"
                                  className="max-h-24 sm:max-h-28 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src =
                                      "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png";
                                  }}
                                />
                              </div>
                              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 mb-1">
                                Cooling
                              </span>
                              <h4 className="text-center font-bold text-xs sm:text-sm text-gray-900 group-hover:text-blue-700 transition-colors">
                                {type.name}
                              </h4>
                              <p className="text-[10px] text-gray-500 mt-1 text-center font-medium">
                                1T, 1.5T, 2T Inverter
                              </p>
                            </Card>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-xl rounded-full px-8 py-5 text-sm sm:text-base font-bold border border-white/30"
                >
                  <Link to="/select-type" className="flex items-center gap-2">
                    Start Full AC Selection Process
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="geyser-section"
              id="geysers-catalog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* Geyser Filter Controls */}
              <div className="bg-white/85 rounded-2xl p-5 sm:p-6 shadow-xl border border-white/80 backdrop-blur-md mb-8 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Flame className="h-5 w-5 text-orange-500" /> Venus Water Heaters &amp; Geysers
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Wholesale &amp; Retail Pricing directly from our Chandni Chowk showroom
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start md:self-auto flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> 22 Models In Stock • Genuine Brand Warranty
                  </span>
                </div>

                {/* Capacity Pills */}
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-gray-700 mr-2">Filter by Capacity:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {["All", "3 LTR", "6 LTR", "10 LTR", "15 LTR", "35 LTR"].map((cap) => (
                        <button
                          key={cap}
                          onClick={() => setSelectedCapacity(cap)}
                          className={`px-3 py-1 rounded-lg font-bold transition-all ${
                            selectedCapacity === cap
                              ? "bg-orange-600 text-white shadow-sm"
                              : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                          }`}
                        >
                          {cap} {cap === "3 LTR" && "(Instant)"} {cap === "35 LTR" && "(Heavy)"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Orientation Pills */}
                  <div>
                    <span className="font-bold text-gray-700 mr-2">Filter by Type:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {[
                        { id: "all", label: "All Types" },
                        { id: "instant", label: "Instant (3000W Kitchen/Compact)" },
                        { id: "vertical", label: "Vertical Storage (Wall Mount)" },
                        { id: "horizontal", label: "Horizontal Storage (Slim/Ceiling)" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedOrientation(item.id)}
                          className={`px-3 py-1 rounded-lg font-bold transition-all ${
                            selectedOrientation === item.id
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
              </div>

              {/* Geysers Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {filteredGeysers.map((product) => {
                  const savings = product.mrp - product.offerPrice;
                  const discountPct = Math.round((savings / product.mrp) * 100);
                  const isCopper = product.tankType.toLowerCase().includes("copper");

                  const waText = `Hi Venus Appliances Kolkata, I want to inquire about ${product.name} (Capacity: ${product.capacity}, Offer Price: Rs.${product.offerPrice.toLocaleString()}). Please confirm stock and delivery at Chandni Chowk store.`;

                  return (
                    <Card
                      key={product.id}
                      className="bg-white/95 rounded-2xl border border-gray-200/90 hover:border-orange-400 p-5 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 backdrop-blur-sm"
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

                        {/* Image Graphic */}
                        <div className="h-40 bg-gradient-to-b from-gray-50 to-white rounded-xl p-3 mb-4 flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform">
                          <img
                            src={product.image}
                            alt={`${product.name} dealer in Kolkata`}
                            className="max-h-36 max-w-[85%] object-contain drop-shadow"
                            loading="lazy"
                          />
                        </div>

                        {/* Title & Body */}
                        <h4 className="font-extrabold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-orange-600 transition-colors mb-1">
                          {product.name}
                        </h4>
                        <div className="text-[11px] text-gray-500 mb-3 font-medium">
                          {product.bodyMaterial} • {product.dimensions}
                        </div>

                        {/* Key Specs */}
                        <div className="bg-slate-50 rounded-xl p-3 mb-3 text-[11px] space-y-1.5 border border-slate-100">
                          <div className="flex items-start justify-between text-gray-700">
                            <span className="text-gray-500 font-medium">Tank:</span>
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
                            <span className="text-gray-500 font-medium">Element:</span>
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

                      {/* Pricing & CTA */}
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
                                Call Showroom
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* View Full Catalog Link */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl rounded-full px-8 py-5 text-sm sm:text-base font-bold"
                >
                  <Link to="/appliances?category=geyser" className="flex items-center gap-2">
                    View All Commercial Refrigeration &amp; Geysers
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ACSelectionGuide;
