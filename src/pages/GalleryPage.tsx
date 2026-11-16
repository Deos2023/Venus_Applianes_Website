import { useState, useEffect, useMemo } from 'react';
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
  Layers,
  Wind,
  Box,
  Columns,
  Share2,
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

const GalleryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState<ACCategory>(
    (searchParams.get('category') as ACCategory) || 'all'
  );
  const [activeBrand, setActiveBrand] = useState<string>(
    searchParams.get('brand') || 'all'
  );
  const [selectedProduct, setSelectedProduct] = useState<ACProduct | null>(null);

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

  const handleBrandSelect = (brandId: string) => {
    setActiveBrand(brandId);
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
    setSearchParams(new URLSearchParams());
  };

  // Selected brand metadata
  const selectedBrandObj = useMemo(
    () => activeGalleryBrands.find((b) => b.id === activeBrand),
    [activeBrand]
  );

  // Compute products according to requirements:
  // 1. If an individual company category (brand) is selected -> show ONLY 10 recently popular AC details for that company
  // 2. If a specific category is selected -> show ONLY 10 recently popular AC details for that category
  // 3. If both are 'all' -> grouped view of top 10 for each category
  const singleViewProducts = useMemo(() => {
    if (activeBrand !== 'all') {
      // Individual company category selected: 10 recently popular AC details
      return getPopularACsByBrand(activeBrand, activeCategory, 10);
    }
    if (activeCategory !== 'all') {
      // Specific AC category selected: 10 recently popular AC details
      return getPopularACsByCategory(activeCategory, activeBrand, 10);
    }
    return [];
  }, [activeBrand, activeCategory]);

  // Grouped categories for 'all' mode: each category showing exactly 10 AC details
  const allCategoriesData = useMemo(() => {
    if (activeBrand === 'all' && activeCategory === 'all') {
      return getAllCategoriesTop10();
    }
    return [];
  }, [activeBrand, activeCategory]);

  return (
    <Layout>
      <SEO
        title="AC Products Gallery Kolkata | Top 10 Popular ACs with Original Photos"
        description="Explore the top 10 recently popular Air Conditioners in Kolkata. Browse Split, Window & Cassette ACs from Daikin, Voltas, O General, Hitachi, Blue Star, LG & Panasonic with authentic images and authorized dealer pricing."
        canonical="/gallery"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        {/* Header Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white pt-12 pb-14 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-xs sm:text-sm font-semibold border border-blue-400/30 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Official AC Gallery • Top 10 Popular Models with Original Photos</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Air Conditioner Gallery &amp; Catalog
            </h1>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Discover the <strong className="text-white">top 10 recently popular AC models</strong> for every category and authorized brand. Every model features its authentic, individual photos, verified energy ratings, and direct Chandni Chowk wholesale dealer pricing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-blue-200">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Only 10 Popular Models per Selection
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Original &amp; Authentic Images
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Zap className="w-4 h-4 text-amber-300" /> Authorized Dealer GST Bill &amp; Warranty
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
                  Showing 10 models per category
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
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                          : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200/60'
                      }`}
                    >
                      {getCategoryIcon(cat.id)}
                      <span>{cat.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-gray-200/80 text-gray-600'
                        }`}
                      >
                        {cat.id === 'all' ? 'All' : '10'}
                      </span>
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
                    className="text-xs text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleBrandSelect('all')}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                    activeBrand === 'all'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  All Brands
                </button>

                {activeGalleryBrands.map((brand) => {
                  const isSelected = activeBrand === brand.id;
                  return (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => handleBrandSelect(brand.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 ${
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
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Filter State Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 px-1">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                {activeBrand !== 'all' ? (
                  <>
                    <span>Top 10 Recently Popular {getBrandDisplayName(activeBrand)} ACs</span>
                    <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">
                      10 Original Models
                    </span>
                  </>
                ) : activeCategory !== 'all' ? (
                  <>
                    <span>
                      Top 10 Recently Popular{' '}
                      {GALLERY_CATEGORIES.find((c) => c.id === activeCategory)?.name}
                    </span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                      10 Curated Models
                    </span>
                  </>
                ) : (
                  <>
                    <span>Popular Air Conditioners by Category</span>
                    <span className="text-xs bg-purple-100 text-purple-800 font-semibold px-2.5 py-0.5 rounded-full">
                      10 Models Per Category
                    </span>
                  </>
                )}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                {activeBrand !== 'all'
                  ? `Showing the 10 highest-demand ${getBrandDisplayName(activeBrand)} models in Kolkata with authentic original photos.`
                  : activeCategory !== 'all'
                  ? `Showing top 10 bestselling models for this category across authorized brands.`
                  : `Each AC category shows only the top 10 recently popular models with individual original photos.`}
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

          {/* CASE A: Specific Brand OR Specific Category is selected -> Render 10 Cards */}
          {(activeBrand !== 'all' || activeCategory !== 'all') && (
            <div>
              {singleViewProducts.length === 0 ? (
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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
                  {singleViewProducts.map((product, index) => (
                    <ProductGalleryCard
                      key={product.id}
                      product={product}
                      rankIndex={index + 1}
                      onSelect={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* CASE B: Both filters are 'all' -> Render Each Category with its Top 10 AC details */}
          {activeBrand === 'all' && activeCategory === 'all' && (
            <div className="space-y-12">
              {allCategoriesData.map(({ category, meta, products }) => {
                if (products.length === 0) return null;
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
                            Top 10 Models
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">{meta.description}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCategorySelect(category)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 self-start sm:self-auto hover:underline"
                      >
                        Explore All {meta.name} <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
                      {products.map((product, index) => (
                        <ProductGalleryCard
                          key={product.id}
                          product={product}
                          rankIndex={index + 1}
                          onSelect={() => setSelectedProduct(product)}
                        />
                      ))}
                    </div>
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

  return (
    <div
      onClick={onSelect}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden border border-gray-200/90 flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail View */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/50 flex items-center justify-center p-3">
          {/* Rank Badge */}
          <span className="absolute top-2 left-2 z-10 text-[10px] font-extrabold bg-slate-900/80 text-white px-2 py-0.5 rounded-md backdrop-blur-xs">
            #{rankIndex}
          </span>

          {/* Genuine Stock Indicator */}
          <span className="absolute top-2 right-2 z-10 text-[9px] font-bold bg-emerald-500/90 text-white px-1.5 py-0.5 rounded shadow-xs">
            Original Photo
          </span>

          <img
            src={mainImage}
            alt={`${brandName} ${product.modelNumber} air conditioner`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width="240"
            height="190"
            onError={(e) => {
              // Never fallback to an unrelated external photo
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

          <p className="text-xs font-mono text-gray-900 font-bold mb-1.5 truncate">
            {product.modelNumber}
          </p>

          <div className="flex items-center gap-1.5 mb-2">
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
        </div>
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
          {product.description || `${brandName} ${product.tonnage} ${product.starRating} AC`}
        </h2>
        <p className="text-xs text-gray-500 font-mono mt-0.5">
          Model Number: <strong className="text-gray-800">{product.modelNumber}</strong>
        </p>
      </div>

      {/* Main Image View */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-center min-h-[220px]">
        <img
          src={images[activeImgIndex] || images[0]}
          alt={`${brandName} ${product.modelNumber} view`}
          className="max-h-56 max-w-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png';
          }}
        />
      </div>

      {/* Thumbnails if multiple images exist */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImgIndex(i)}
              className={`h-14 w-14 shrink-0 rounded-xl bg-gray-50 border-2 overflow-hidden p-1 transition-all ${
                activeImgIndex === i
                  ? 'border-blue-600 shadow-sm'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <img
                src={src}
                alt={`${product.modelNumber} thumbnail ${i + 1}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png';
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Primary Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {[
          { label: 'Capacity', value: product.tonnage },
          { label: 'Star Rating', value: product.starRating || 'Standard' },
          {
            label: 'Compressor',
            value: product.inverter === 'inverter' ? 'Inverter' : 'Fixed Speed',
          },
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
        product.airWing) && (
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
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-4 py-2 text-xs font-bold">
              Full Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
