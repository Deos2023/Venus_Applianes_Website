import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ACProduct } from '@/lib/ac-selection-data';
import {
  ACCategory,
  GALLERY_CATEGORIES,
  activeGalleryBrands,
  getPopularACsByBrand,
  getPopularACsByCategory,
  getAllCategoriesTop10,
  getBrandDisplayName,
  fixGalleryImage,
} from '@/lib/gallery-service';
import { formatCoolingCapacity } from '@/lib/utils';
import {
  Star,
  Zap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Eye,
  SlidersHorizontal,
  ChevronRight,
  ChevronDown,
  Layers,
  Wind,
  Box,
  Columns,
  Share2,
  Loader2,
} from 'lucide-react';

const StarRating = ({ rating }: { rating: string }) => {
  const count = parseInt(rating, 10) || 0;
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} star rating`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= count ? 'fill-amber-400 text-amber-400' : 'text-gray-200'
          }`}
        />
      ))}
      <span className="text-xs font-semibold text-gray-600 ml-1">
        {count > 0 ? `${count}★` : 'Standard'}
      </span>
    </div>
  );
};

// Map category icons
const getCategoryIcon = (catId: ACCategory) => {
  switch (catId) {
    case 'split':
      return <Wind className="w-4 h-4" />;
    case 'window':
      return <Box className="w-4 h-4" />;
    case 'cassette':
      return <Layers className="w-4 h-4" />;
    case 'tower':
      return <Columns className="w-4 h-4" />;
    case 'multi-split':
      return <Share2 className="w-4 h-4" />;
    default:
      return <Sparkles className="w-4 h-4" />;
  }
};

const PAGE_SIZE = 10;

const GalleryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Read initial filter values from URL search params
  const [activeCategory, setActiveCategory] = useState<ACCategory>(
    (searchParams.get('category') as ACCategory) || 'all'
  );
  const [activeBrand, setActiveBrand] = useState<string>(
    searchParams.get('brand') || 'all'
  );
  const [selectedProduct, setSelectedProduct] = useState<ACProduct | null>(null);

  // Pagination / Load More state for Single View
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  // Pagination state for Grouped View (per-category limits)
  const [categoryLimits, setCategoryLimits] = useState<Record<string, number>>({});
  const [loadingCategory, setLoadingCategory] = useState<string | null>(null);

  // Synchronize state with URL parameters
  useEffect(() => {
    const brandParam = searchParams.get('brand');
    const catParam = searchParams.get('category') as ACCategory;

    if (brandParam) {
      setActiveBrand(brandParam);
    }
    if (catParam && GALLERY_CATEGORIES.some((c) => c.id === catParam)) {
      setActiveCategory(catParam);
    }
  }, [location.search, searchParams]);

  // Reset pagination count whenever filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeBrand, activeCategory]);

  const handleBrandSelect = (brandId: string) => {
    setActiveBrand(brandId);
    setVisibleCount(PAGE_SIZE);
    const params = new URLSearchParams(searchParams);
    if (brandId === 'all') {
      params.delete('brand');
    } else {
      params.set('brand', brandId);
    }
    setSearchParams(params);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleCategorySelect = (catId: ACCategory) => {
    setActiveCategory(catId);
    setVisibleCount(PAGE_SIZE);
    const params = new URLSearchParams(searchParams);
    if (catId === 'all') {
      params.delete('category');
    } else {
      params.set('category', catId);
    }
    setSearchParams(params);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setActiveBrand('all');
    setActiveCategory('all');
    setVisibleCount(PAGE_SIZE);
    setSearchParams(new URLSearchParams());
  };

  // Selected brand metadata
  const selectedBrandObj = useMemo(
    () => activeGalleryBrands.find((b) => b.id === activeBrand),
    [activeBrand]
  );

  // Compute all matching products for Single View (Brand selected OR Category selected)
  const allFilteredProducts = useMemo(() => {
    if (activeBrand !== 'all') {
      // Return ALL models matching this brand (e.g. all 26 models for O General)
      return getPopularACsByBrand(activeBrand, activeCategory);
    }
    if (activeCategory !== 'all') {
      // Return ALL models matching this category
      return getPopularACsByCategory(activeCategory, activeBrand);
    }
    return [];
  }, [activeBrand, activeCategory]);

  // Sliced products for current view based on visibleCount
  const displayedProducts = useMemo(() => {
    return allFilteredProducts.slice(0, visibleCount);
  }, [allFilteredProducts, visibleCount]);

  const hasMore = visibleCount < allFilteredProducts.length;

  const handleLoadMore = useCallback(() => {
    setIsLoadingMore(true);
    // Smooth async batch loading simulation for polished lazy load feel
    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setIsLoadingMore(false);
    }, 200);
  }, []);

  // Grouped categories data for 'all' mode
  const allCategoriesData = useMemo(() => {
    if (activeBrand === 'all' && activeCategory === 'all') {
      return getAllCategoriesTop10(50); // Get full list per category
    }
    return [];
  }, [activeBrand, activeCategory]);

  const handleCategoryLoadMore = useCallback((catId: string) => {
    setLoadingCategory(catId);
    setTimeout(() => {
      setCategoryLimits((prev) => ({
        ...prev,
        [catId]: (prev[catId] || PAGE_SIZE) + PAGE_SIZE,
      }));
      setLoadingCategory(null);
    }, 200);
  }, []);

  return (
    <Layout>
      <SEO
        title="AC Products Gallery Kolkata | Official Models with Original Photos & Dealer Pricing"
        description="Explore popular Air Conditioners in Kolkata. Browse Split, Window & Cassette ACs from O General (2026 Models), Daikin, Voltas, Hitachi, Blue Star, LG & Panasonic with authentic images and authorized dealer pricing."
        canonical="/gallery"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        {/* Header Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white pt-12 pb-14 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-xs sm:text-sm font-semibold border border-blue-400/30 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Official AC Gallery • Verified Models with Original Photos &amp; Specs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Air Conditioner Gallery &amp; Catalog
            </h1>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Discover authentic air conditioners for every category and authorized brand. Every model features verified original photos, exact technical specifications (cooling capacity, dimensions, gas type), and direct Chandni Chowk wholesale dealer pricing.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-blue-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Original Manufacturer Photos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Authorized Brand Dealership in Kolkata
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Direct Wholesale Prices with GST Invoice &amp; Warranty
              </span>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-5 mb-8">
            {/* Filter Row 1: AC Categories */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" /> 1. Select AC Category
                </span>
                <span className="text-xs text-blue-600 font-medium">
                  {activeCategory === 'all' ? 'All categories available' : 'Filtered by category'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {GALLERY_CATEGORIES.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                          : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200/60'
                      }`}
                    >
                      {getCategoryIcon(cat.id)}
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Row 2: Company Brands */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> 2. Select Company / Brand
                </span>
                {(activeBrand !== 'all' || activeCategory !== 'all') && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold underline underline-offset-2 cursor-pointer"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleBrandSelect('all')}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                    activeBrand === 'all'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  All Brands
                </button>

                {activeGalleryBrands.map((brand) => {
                  const isSelected = activeBrand === brand.id;
                  const isOG = brand.id === 'o-general';
                  return (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => handleBrandSelect(brand.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-[1.02]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50'
                      }`}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        loading="lazy"
                        decoding="async"
                        className={`h-4.5 w-auto max-w-[55px] object-contain ${
                          isSelected ? 'brightness-0 invert' : ''
                        }`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <span>{brand.name}</span>
                      {isOG && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          26 Models
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Filter State Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 px-1">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                {activeBrand !== 'all' ? (
                  <>
                    <span>Official {getBrandDisplayName(activeBrand)} AC Collection</span>
                    <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">
                      {allFilteredProducts.length} Models Available
                    </span>
                    {activeBrand === 'o-general' && (
                      <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full">
                        2026 Catalog Only
                      </span>
                    )}
                  </>
                ) : activeCategory !== 'all' ? (
                  <>
                    <span>
                      {GALLERY_CATEGORIES.find((c) => c.id === activeCategory)?.name} Collection
                    </span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                      {allFilteredProducts.length} Models
                    </span>
                  </>
                ) : (
                  <>
                    <span>Popular Air Conditioners by Category</span>
                    <span className="text-xs bg-purple-100 text-purple-800 font-semibold px-2.5 py-0.5 rounded-full">
                      Full Catalog Showcase
                    </span>
                  </>
                )}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                {activeBrand !== 'all'
                  ? `Showing ${displayedProducts.length} of ${allFilteredProducts.length} ${getBrandDisplayName(activeBrand)} models in Kolkata with authentic original photos and direct wholesale pricing.`
                  : activeCategory !== 'all'
                  ? `Showing ${displayedProducts.length} of ${allFilteredProducts.length} models for this category across authorized brands.`
                  : `Browse models across every category with authentic original photos and direct wholesale dealer pricing.`}
              </p>
            </div>

            {activeBrand !== 'all' && selectedBrandObj && (
              <div className="flex items-center gap-2 shrink-0 bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm">
                <img
                  src={selectedBrandObj.logo}
                  alt={selectedBrandObj.name}
                  className="h-6 w-auto object-contain max-w-[70px]"
                />
                <span className="text-xs text-gray-600 font-medium">Authorized Dealer Stock</span>
              </div>
            )}
          </div>

          {/* CASE A: Specific Brand OR Specific Category is selected -> Render Paginated Cards with Load More */}
          {(activeBrand !== 'all' || activeCategory !== 'all') && (
            <div>
              {allFilteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-200 text-center py-16 px-4">
                  <p className="text-gray-600 text-base font-semibold mb-2">
                    No models found matching both filters.
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Try changing your category or brand selection.
                  </p>
                  <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700">
                    Reset All Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
                    {displayedProducts.map((product, index) => (
                      <ProductGalleryCard
                        key={product.id}
                        product={product}
                        rankIndex={index + 1}
                        onSelect={() => setSelectedProduct(product)}
                      />
                    ))}
                  </div>

                  {/* Load More Button & Progress Bar */}
                  <div className="mt-10 flex flex-col items-center justify-center gap-3">
                    <div className="w-full max-w-xs text-center space-y-1.5">
                      <div className="flex justify-between text-xs text-gray-500 font-medium">
                        <span>Loaded Models</span>
                        <span>
                          <strong>{displayedProducts.length}</strong> of{' '}
                          <strong>{allFilteredProducts.length}</strong>
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(
                                (displayedProducts.length / allFilteredProducts.length) * 100
                              )
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {hasMore ? (
                      <Button
                        type="button"
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
                      >
                        {isLoadingMore ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Loading 10 More Models...</span>
                          </>
                        ) : (
                          <>
                            <span>Load More Models (+10)</span>
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </Button>
                    ) : (
                      allFilteredProducts.length > PAGE_SIZE && (
                        <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>All {allFilteredProducts.length} models loaded</span>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {/* CASE B: Both filters are 'all' -> Render Each Category with its Models and Category Load More */}
          {activeBrand === 'all' && activeCategory === 'all' && (
            <div className="space-y-12">
              {allCategoriesData.map(({ category, meta, products, totalCount }) => {
                if (products.length === 0) return null;
                const limit = categoryLimits[category] || PAGE_SIZE;
                const catDisplayed = products.slice(0, limit);
                const catHasMore = limit < products.length;
                const isCatLoading = loadingCategory === category;

                return (
                  <section
                    key={category}
                    className="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-gray-100 gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                            {getCategoryIcon(category)}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {meta.name}
                          </h3>
                          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                            {catDisplayed.length} of {products.length} Models
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">{meta.description}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCategorySelect(category)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 self-start sm:self-auto hover:underline cursor-pointer"
                      >
                        Explore All {meta.name} <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
                      {catDisplayed.map((product, index) => (
                        <ProductGalleryCard
                          key={product.id}
                          product={product}
                          rankIndex={index + 1}
                          onSelect={() => setSelectedProduct(product)}
                        />
                      ))}
                    </div>

                    {/* Per-Category Load More Button */}
                    {catHasMore && (
                      <div className="mt-8 flex justify-center">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => handleCategoryLoadMore(category)}
                          disabled={isCatLoading}
                          className="border-blue-300 text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                        >
                          {isCatLoading ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                              <span>Loading 10 More...</span>
                            </>
                          ) : (
                            <>
                              <span>Load 10 More in {meta.name}</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          )}

          {/* Product Detail Modal Dialog */}
          <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
            <DialogContent className="max-w-2xl bg-white border-gray-200 max-h-[92vh] overflow-y-auto rounded-2xl p-6">
              {selectedProduct && (
                <ProductModalContent
                  product={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

interface CardProps {
  product: ACProduct;
  rankIndex: number;
  onSelect: () => void;
}

const ProductGalleryCard = ({ product, rankIndex, onSelect }: CardProps) => {
  const brandName = getBrandDisplayName(product.brand);
  const mainImage = fixGalleryImage(product.image);

  // Lazy loading state for smooth progressive loading
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const is2026Model = product.features?.some((f) => f.includes('2026'));
  const isHotAndCold =
    product.specialFeatures?.some((f) => f.toLowerCase().includes('hot & cold')) ||
    product.description?.toLowerCase().includes('hot & cold');

  return (
    <div
      onClick={onSelect}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden border border-gray-200/90 flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail View with Aspect Ratio and Skeleton Placeholder */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/60 flex items-center justify-center p-3">
          {/* Rank Badge */}
          <span className="absolute top-2 left-2 z-10 text-[10px] font-extrabold bg-slate-900/85 text-white px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
            #{rankIndex}
          </span>

          {/* Genuine Stock Indicator or 2026 Model Badge */}
          <div className="absolute top-2 right-2 z-10 flex flex-col items-end gap-1 pointer-events-none">
            {is2026Model ? (
              <span className="text-[9px] font-extrabold bg-amber-500 text-white px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wide">
                2026 Model
              </span>
            ) : (
              <span className="text-[9px] font-bold bg-emerald-500/90 text-white px-1.5 py-0.5 rounded shadow-xs">
                Original Photo
              </span>
            )}
            {isHotAndCold && (
              <span className="text-[8.5px] font-extrabold bg-rose-500 text-white px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wide">
                Hot &amp; Cold
              </span>
            )}
          </div>

          {/* Skeleton Placeholder while loading */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200/70 to-gray-100 animate-pulse flex items-center justify-center">
              <span className="w-8 h-8 rounded-full border-2 border-blue-200 border-t-blue-600 animate-spin" />
            </div>
          )}

          <img
            src={mainImage}
            alt={`${brandName} ${product.modelNumber} air conditioner`}
            className={`w-full h-full object-contain transition-all duration-300 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } group-hover:scale-105`}
            loading="lazy"
            decoding="async"
            width="240"
            height="190"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              setImageError(true);
              const target = e.target as HTMLImageElement;
              target.src = '/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png';
            }}
          />
        </div>

        {/* Card Body */}
        <div className="p-3 sm:p-3.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
              {brandName}
            </span>
            <span className="text-[10px] text-gray-500 font-semibold uppercase">
              {product.type.replace(/-/g, ' ')}
            </span>
          </div>

          <p className="text-xs font-mono text-gray-900 font-bold mb-1.5 truncate" title={product.modelNumber}>
            {product.modelNumber}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">
              {product.tonnage}
            </span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                product.inverter === 'inverter'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-amber-50 text-amber-700'
              }`}
            >
              {product.inverter === 'inverter' ? 'Inverter' : 'Fixed'}
            </span>
            {product.coolingCapacity && (
              <span className="text-[9.5px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                {product.coolingCapacity}
              </span>
            )}
          </div>

          <StarRating rating={product.starRating} />
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="p-3 sm:p-3.5 pt-0 border-t border-gray-100 mt-2">
        <div className="flex items-baseline justify-between pt-2">
          <div>
            <span className="text-[10px] text-gray-400 block font-medium">Wholesale Price</span>
            <span className="text-sm sm:text-base font-extrabold text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
          {product.mrp && product.mrp > product.price && (
            <span className="text-[10px] text-gray-400 line-through">
              MRP ₹{product.mrp.toLocaleString('en-IN')}
            </span>
          )}
        </div>
        <div className="mt-2 text-[11px] font-semibold text-blue-600 group-hover:text-blue-800 flex items-center justify-between">
          <span>View Specs</span>
          <Eye className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

const ProductModalContent = ({
  product,
  onClose,
}: {
  product: ACProduct;
  onClose: () => void;
}) => {
  const brandName = getBrandDisplayName(product.brand);
  const images = (product.images && product.images.length > 0
    ? product.images
    : [product.image]
  ).map(fixGalleryImage);

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const whatsappMessage = encodeURIComponent(
    `Hello Venus Appliances Kolkata! I am inquiring about the ${brandName} AC (Model: ${product.modelNumber}, Capacity: ${product.tonnage}, Star Rating: ${product.starRating}, Inverter: ${product.inverter}). Please share the latest wholesale deal and installation charges in Kolkata.`
  );

  return (
    <div className="space-y-5">
      {/* Modal Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
            {brandName}
          </span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Genuine Manufacturer Stock
          </span>
          {product.features?.some((f) => f.includes('2026')) && (
            <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full">
              2026 Model
            </span>
          )}
        </div>
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
          {product.description || `${brandName} ${product.tonnage} ${product.starRating} AC`}
        </h2>
        <p className="text-xs text-gray-500 font-mono mt-0.5">
          Model Number: <strong className="text-gray-800">{product.modelNumber}</strong>
        </p>
      </div>

      {/* Main Image View */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-center h-64 sm:h-72">
        <img
          src={images[activeImgIndex] || images[0]}
          alt={`${brandName} ${product.modelNumber}`}
          className="max-h-full max-w-full object-contain"
          loading="eager"
        />
      </div>

      {/* Image Thumbnails Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImgIndex(idx)}
              className={`h-14 w-14 shrink-0 rounded-xl border p-1 bg-white cursor-pointer transition-all ${
                activeImgIndex === idx
                  ? 'border-blue-600 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`View ${idx + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
                width="56"
                height="56"
              />
            </button>
          ))}
        </div>
      )}

      {/* Quick Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {[
          { label: 'Capacity', value: product.tonnage },
          { label: 'Star Rating', value: product.starRating || 'Standard' },
          { label: 'Compressor', value: product.inverter === 'inverter' ? 'Inverter' : 'Fixed Speed' },
          { label: 'AC Type', value: product.type.replace(/-/g, ' ').toUpperCase() },
        ].map(({ label, value }) => (
          <div key={label} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
            <span className="text-[11px] text-gray-500 block mb-0.5">{label}</span>
            <span className="text-xs sm:text-sm font-bold text-gray-900">{value}</span>
          </div>
        ))}
      </div>

      {/* Technical Specifications */}
      {(product.coolingCapacity ||
        product.gasType ||
        product.indoorUnitDimensions ||
        product.outdoorUnitDimensions ||
        product.airWing ||
        product.specialFeatures) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-gray-100">
          {product.coolingCapacity && (
            <div>
              <span className="text-gray-500">Cooling Capacity: </span>
              <strong className="text-blue-900">
                {formatCoolingCapacity(product.coolingCapacity)}
              </strong>
            </div>
          )}
          {product.gasType && (
            <div>
              <span className="text-gray-500">Refrigerant Gas: </span>
              <strong className="text-emerald-700">{product.gasType} (Eco-Friendly)</strong>
            </div>
          )}
          {product.indoorUnitDimensions && (
            <div>
              <span className="text-gray-500">IDU Dimensions: </span>
              <strong className="text-gray-800">{product.indoorUnitDimensions}</strong>
            </div>
          )}
          {product.outdoorUnitDimensions && (
            <div>
              <span className="text-gray-500">ODU Dimensions: </span>
              <strong className="text-gray-800">{product.outdoorUnitDimensions}</strong>
            </div>
          )}
          {product.airWing && (
            <div className="sm:col-span-2">
              <span className="text-gray-500">Air Wing Tech: </span>
              <strong className="text-cyan-800">{product.airWing}</strong>
            </div>
          )}
          {product.specialFeatures && product.specialFeatures.length > 0 && (
            <div className="sm:col-span-2">
              <span className="text-gray-500">Special Highlights: </span>
              <strong className="text-purple-800">
                {Array.isArray(product.specialFeatures)
                  ? product.specialFeatures.join(', ')
                  : product.specialFeatures}
              </strong>
            </div>
          )}
        </div>
      )}

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <div>
          <span className="text-xs font-bold text-gray-700 block mb-1.5 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> Key Features
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.features.map((f, i) => (
              <span
                key={i}
                className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-medium"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Pricing & Footer Actions */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] text-gray-400 block font-medium">Kolkata Dealer Price</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.mrp && product.mrp > product.price && (
              <span className="text-xs text-gray-400 line-through">
                MRP ₹{product.mrp.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <span className="text-[10px] text-emerald-600 font-semibold block">
            Inclusive of GST • Authorized Kolkata Dealership
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/919331962120?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Best Deal
          </a>
          <Link to={`/product/${product.id}`} onClick={onClose}>
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-4 py-2 text-xs font-bold cursor-pointer">
              Full Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
