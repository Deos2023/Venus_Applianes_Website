import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { acProducts, brands, ACProduct } from '@/lib/ac-selection-data';
import { Star, Zap } from 'lucide-react';

const getBrandName = (brandId: string) =>
  brands.find((b) => b.id === brandId)?.name ?? brandId.toUpperCase();

const fixImage = (img?: string) => {
  if (!img) return 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80';
  return img.startsWith('public/') ? img.replace(/^public/, '') : img;
};

const StarRating = ({ rating }: { rating: string }) => {
  const count = parseInt(rating) || 0;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">{count}★</span>
    </div>
  );
};

// Deduplicate products by id (keeps first occurrence)
const uniqueProducts = acProducts.filter(
  (p, idx, arr) => arr.findIndex((x) => x.id === p.id) === idx
);

// Only include brands that actually have products
const activeBrands = brands.filter((b) => uniqueProducts.some((p) => p.brand === b.id));

const GalleryPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<ACProduct | null>(null);
  const [activeBrand, setActiveBrand] = useState<string>(
    searchParams.get('brand') ?? 'all'
  );

  useEffect(() => {
    const brand = searchParams.get('brand');
    if (brand) {
      setActiveBrand(brand);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.search]);

  const displayed = activeBrand === 'all'
    ? uniqueProducts
    : uniqueProducts.filter((p) => p.brand === activeBrand);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 lg:py-16">

          <div className="mb-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">All Products</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Browse our complete range of air conditioners. Click any product to see full details.
            </p>
          </div>

          {/* Brand filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 px-2 sm:px-0">
            {/* All button */}
            <button
              type="button"
              onClick={() => setActiveBrand('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                activeBrand === 'all'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              All Brands
            </button>

            {activeBrands.map((brand) => (
              <button
                type="button"
                key={brand.id}
                onClick={() => setActiveBrand(brand.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                  activeBrand === brand.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading='lazy'
                  decoding='async'
                  className={`h-5 w-auto object-contain ${activeBrand === brand.id ? 'brightness-0 invert' : ''}`}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {brand.name}
              </button>
            ))}
          </div>

          {/* Product count */}
          <p className="text-center text-blue-600 font-semibold mb-6">{displayed.length} products</p>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {displayed.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={fixImage(product.image)}
                    alt={product.description}
                    className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=60';
                    }}
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-0.5">
                    {getBrandName(product.brand)}
                  </p>
                  <p className="text-xs text-gray-500 font-mono mb-1 truncate">{product.modelNumber}</p>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                      {product.tonnage}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      product.inverter === 'inverter'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {product.inverter === 'inverter' ? 'Inv' : 'Non-Inv'}
                    </span>
                  </div>
                  <StarRating rating={product.starRating} />
                  <p className="text-sm font-bold text-gray-900 mt-1.5">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Product detail modal */}
          <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
            <DialogContent className="max-w-2xl bg-white border-gray-200 max-h-[90vh] overflow-y-auto">
              {selectedProduct && (() => {
                const images = selectedProduct.images?.length
                  ? selectedProduct.images.map(fixImage)
                  : [fixImage(selectedProduct.image)];
                return (
                  <div className="p-2">
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">
                        {getBrandName(selectedProduct.brand)}
                      </p>
                      <h2 className="text-xl font-bold text-gray-900 leading-snug">
                        {selectedProduct.description}
                      </h2>
                      <p className="text-sm text-gray-400 font-mono mt-0.5">
                        Model: {selectedProduct.modelNumber}
                      </p>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
                      {images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${selectedProduct.modelNumber} view ${i + 1}`}
                          className="h-48 w-auto object-contain rounded-xl bg-gray-50 border border-gray-100 flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=60';
                          }}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                      {[
                        { label: 'Tonnage', value: selectedProduct.tonnage },
                        { label: 'Star Rating', value: selectedProduct.starRating },
                        { label: 'Type', value: selectedProduct.inverter === 'inverter' ? 'Inverter' : 'Non-Inverter' },
                        { label: 'AC Type', value: selectedProduct.type.replace(/-/g, ' ').toUpperCase() },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
                          <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                          <p className="text-sm font-semibold text-gray-800">{value}</p>
                        </div>
                      ))}
                    </div>

                    {(selectedProduct.coolingCapacity || selectedProduct.gasType || selectedProduct.indoorUnitDimensions) && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                        {selectedProduct.coolingCapacity && (
                          <div className="bg-blue-50 rounded-xl p-3">
                            <p className="text-xs text-blue-500 mb-0.5">Cooling Capacity</p>
                            <p className="text-sm font-semibold text-blue-800">{selectedProduct.coolingCapacity}</p>
                          </div>
                        )}
                        {selectedProduct.gasType && (
                          <div className="bg-green-50 rounded-xl p-3">
                            <p className="text-xs text-green-500 mb-0.5">Gas Type</p>
                            <p className="text-sm font-semibold text-green-800">{selectedProduct.gasType}</p>
                          </div>
                        )}
                        {selectedProduct.indoorUnitDimensions && (
                          <div className="bg-purple-50 rounded-xl p-3">
                            <p className="text-xs text-purple-500 mb-0.5">IDU Dimensions</p>
                            <p className="text-sm font-semibold text-purple-800">{selectedProduct.indoorUnitDimensions}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedProduct.features?.length > 0 && (
                      <div className="mb-5">
                        <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                          <Zap className="w-4 h-4 text-yellow-500" /> Features
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.features.map((f, i) => (
                            <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProduct.specialFeatures && selectedProduct.specialFeatures.length > 0 && (
                      <div className="mb-5">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Special Features</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.specialFeatures.map((f, i) => (
                            <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400">Price</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{selectedProduct.price.toLocaleString('en-IN')}
                        </p>
                        {selectedProduct.mrp && selectedProduct.mrp > selectedProduct.price && (
                          <p className="text-xs text-gray-400 line-through">
                            MRP ₹{selectedProduct.mrp.toLocaleString('en-IN')}
                          </p>
                        )}
                      </div>
                      <Link to={`/product/${selectedProduct.id}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
                          View Full Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
