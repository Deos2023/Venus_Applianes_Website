import { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SelectionLayout from "@/components/SelectionLayout";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  acProducts, acTypes, brands, inverterTypes,
  ACType, Brand, InverterType, ACProduct
} from "@/lib/ac-selection-data";

/* ─── Deduplication helper (same fix as GalleryPage) ─── */
const uniqueProducts = acProducts.filter(
  (p, idx, arr) => arr.findIndex((x) => x.id === p.id) === idx
);

/* ─── Recommendations Slider ─── */
const RecommendedSlider = ({ products }: { products: ACProduct[] }) => {
  const trackRef = useRef<HTMLDivElement| null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const CARD_WIDTH = 300; // px — matches the card min-w below

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = trackRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, [products]);

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: dir === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  if (products.length === 0) return null;

  return (
    <div className="mt-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">You Might Also Like</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Similar products with different brands
          </p>
        </div>
        {/* Arrow buttons — desktop */}
        <div className="hidden sm:flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[280px] sm:w-[300px]"
            >
            <div className="flex flex-col w-full">
              <ProductCard product={product} />
            </div>
            </div>
          ))}
        </div>

        {/* Fade edges on desktop */}
        {canScrollLeft && (
          <div className="hidden sm:block absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        )}
        {canScrollRight && (
          <div className="hidden sm:block absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Mobile swipe hint */}
      <p className="sm:hidden text-xs text-center text-gray-400 mt-2">
        Swipe to explore more →
      </p>
    </div>
  );
};

/* ─── Main Page ─── */
const ProductResultsPage = () => {
  const { type, brand, inverter, tonnage, star } = useParams<{
    type: string; brand: string; inverter: string; tonnage: string; star?: string;
  }>();

  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<ACProduct[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<ACProduct[]>([]);

  const acType = type as ACType;
  const brandId = brand as Brand;
  const inverterType = inverter as InverterType;
  const tonnageValue = decodeURIComponent(tonnage || "");
  const starRating = star ? decodeURIComponent(star) : "";

  const currentType = acTypes.find(t => t.id === acType)?.name || "AC";
  const currentBrand = brands.find(b => b.id === brandId)?.name || "Brand";
  const currentInverter = inverterTypes.find(i => i.id === inverterType)?.name || "Type";

  useEffect(() => {
    /* ── Main results ── */
    const matched = uniqueProducts.filter(product =>
      product.type === acType &&
      product.brand === brandId &&
      product.inverter === inverterType &&
      product.tonnage === tonnageValue &&
      (star ? product.starRating === starRating : product.starRating === "")
    );
    setFilteredProducts(matched);

    /* ── Recommendations: same specs, different brand ── */
    const recs = uniqueProducts.filter(product =>
      product.brand !== brandId &&          // different brand
      product.type === acType &&
      product.inverter === inverterType &&
      product.tonnage === tonnageValue &&
      (star ? product.starRating === starRating : true)
    );
    setRecommendedProducts(recs);

    window.scrollTo(0, 0);
  }, [acType, brandId, inverterType, tonnageValue, star, starRating]);

  const getBackUrl = () => {
    if (star) {
      return `/select-star/${acType}/${brandId}/${inverterType}/${encodeURIComponent(tonnageValue)}`;
    }
    return `/select-tonnage/${acType}/${brandId}/${inverterType}`;
  };

  return (
    <SelectionLayout
      title="Available Products"
      description={`${currentBrand} ${currentType} - ${tonnageValue}${star ? `, ${starRating}` : ""}, ${currentInverter}`}
      currentStep={5}
      backUrl={getBackUrl()}
    >
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No products found matching your criteria
          </h3>
          <p className="text-gray-500 mb-6">
            Try selecting different specifications or browse our available options
          </p>
          <Button asChild>
            <Link to="/select-type">Start Again</Link>
          </Button>
        </div>
      )}

      {/* ── Recommendations slider ── */}
      <RecommendedSlider products={recommendedProducts} />

      <div className="mt-12 text-center">
        <p className="mb-4 text-gray-600">Not finding what you're looking for?</p>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline">
            <Link to="/select-type">Start New Search</Link>
          </Button>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </SelectionLayout>
  );
};

export default ProductResultsPage;
