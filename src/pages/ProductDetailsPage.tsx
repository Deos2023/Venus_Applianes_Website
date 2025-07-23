
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";
import { Star, ChevronRight, Check, Shield, Truck, Zap, ExternalLink } from "lucide-react";
import { ACProduct, brands, acTypes, acProducts } from "@/lib/ac-selection-data";

function getStarNumber(starRating: string) {
  const match = starRating.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(0);

  const product = acProducts.find(p => p.id === id);

  function fixImagePath(img?: string) {
    if (!img) return "https://via.placeholder.com/600x600?text=AC+Image";
    return img.startsWith("public/")
      ? img.replace(/^public/, "")
      : img;
  }

  const productImages = product?.images 
    ? product.images.map(img => fixImagePath(img))
    : product?.image 
      ? [fixImagePath(product.image)] 
      : ["https://via.placeholder.com/600x600?text=AC+Image"];
      
  if (productImages.length === 0) {
    productImages.push("https://via.placeholder.com/600x600?text=AC+Image");
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-4 text-gray-500">Sorry, we couldn't find details for this product.</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  const brand = brands.find(b => b.id === product.brand)?.name || product.brand;
  const acType = acTypes.find(t => t.id === product.type)?.name || product.type;
  const brandLogo = brands.find(b => b.id === product.brand)?.logo;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl">
        {/* Back button and Breadcrumb */}
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => {
              const backUrl = `/products/${product.type}/${product.brand}/${product.inverter}/${encodeURIComponent(product.tonnage)}${product.starRating ? `/${encodeURIComponent(product.starRating)}` : '/'}`;              
              navigate(backUrl);
            }}
            className="group"
          >
            <ChevronRight className="h-4 w-4 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Results
          </Button>
          
          <div className="text-sm text-gray-600 flex items-center gap-1">
            <Link to="/" className="hover:underline text-blue-600">Home</Link>
            <span>›</span>
            <Link to={`/brand/${product.brand}`} className="hover:underline text-blue-600">{brand}</Link>
            <span>›</span>
            <span className="text-gray-800">{product.modelNumber}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Main product section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6">
            {/* Image gallery - left column */}
            <div className="lg:col-span-7">
              <div className="sticky top-4">
                <div className="bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center p-4 mb-4 h-96">
                  <img
                    src={productImages[mainImage]}
                    alt={product.modelNumber}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x600?text=AC+Image";
                    }}
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto py-2">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(idx)}
                      className={`flex-shrink-0 w-16 h-16 border rounded-md overflow-hidden transition-all ${mainImage === idx ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/100x100?text=Thumb";
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product info - right column */}
            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center gap-2">
                {brandLogo && (
                  <img 
                    src={fixImagePath(brandLogo)} 
                    alt={brand} 
                    className="h-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                <span className="text-lg font-medium text-gray-700">{brand}</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                {product.tonnage} {acType} {product.modelNumber}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < getStarNumber(product.starRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium text-gray-700">{product.starRating}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                  {product.mrp && (
                    <div className="text-lg text-gray-500 line-through">₹{product.mrp.toLocaleString()}</div>
                  )}
                </div>
                {product.mrp && (
                  <div className="text-green-600 font-medium mb-2">
                    Save ₹{(product.mrp - product.price).toLocaleString()} ({Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off)
                  </div>
                )}
                <div className="text-green-600 font-medium flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  <span>Inclusive of all taxes</span>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  EMI starts at ₹{Math.round(product.price / 12).toLocaleString()}/month
                </div>
              </div>

              {/* Key highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery options */}
              <div className="mb-6 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Truck className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Delivery Options</div>
                    <div className="text-sm text-gray-600">Free delivery within 10km</div>
                    <div className="text-sm text-gray-600">Within 48 hours delivery</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Warranty</div>
                    <div className="text-sm text-gray-600">As per company policy</div>
                    <div className="text-sm text-gray-600">Comprehensive warranty included</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <WhatsAppInquiry
                  productName={`${brand} ${product.tonnage} ${product.starRating} ${acType}`}
                  modelNumber={product.modelNumber}
                  price={product.price}
                  className="w-full"
                />
                
                <Button variant="outline" className="w-full gap-2">
                  <Zap className="h-4 w-4" />
                  Request Installation Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Product details section */}
          <div className="border-t border-gray-200 p-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Product Details</h2>
              
              {/* Product link */}
              {product.productUrl && (
                <div className="mb-6">
                  <a 
                    href={product.productUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Official Product Page
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}

              {/* Product description */}
              <div className="prose prose-sm text-gray-600 mb-6">
                <p>{product.description}</p>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="w-32 font-medium text-gray-700">Brand:</span>
                      <span className="text-gray-600">{brand}</span>
                    </div>
                    <div className="flex">
                      <span className="w-32 font-medium text-gray-700">Model:</span>
                      <span className="text-gray-600">{product.modelNumber}</span>
                    </div>
                    <div className="flex">
                      <span className="w-32 font-medium text-gray-700">Type:</span>
                      <span className="text-gray-600">{acType}</span>
                    </div>
                    <div className="flex">
                      <span className="w-32 font-medium text-gray-700">Capacity:</span>
                      <span className="text-gray-600">{product.tonnage}</span>
                    </div>
                    <div className="flex">
                      <span className="w-32 font-medium text-gray-700">Star Rating:</span>
                      <span className="text-gray-600">{product.starRating}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="w-32 font-medium text-gray-700">Technology:</span>
                      <span className="text-gray-600">{product.inverter === 'inverter' ? 'Inverter' : 'Non-Inverter'}</span>
                    </div>
                    {product.specifications && (
                      <>
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Cooling Capacity:</span>
                          <span className="text-gray-600">{product.specifications.coolingCapacity}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Indoor Unit:</span>
                          <span className="text-gray-600">{product.specifications.indoorUnit}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Outdoor Unit:</span>
                          <span className="text-gray-600">{product.specifications.outdoorUnit}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Refrigerant:</span>
                          <span className="text-gray-600">{product.specifications.refrigerant}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Pricing Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Pricing Information</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Our Price:</div>
                      <div className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                    </div>
                    {product.mrp && (
                      <div>
                        <div className="text-sm text-gray-600 mb-1">MRP:</div>
                        <div className="text-xl text-gray-500 line-through">₹{product.mrp.toLocaleString()}</div>
                      </div>
                    )}
                  </div>
                  {product.mrp && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="text-green-600 font-medium">
                        You Save: ₹{(product.mrp - product.price).toLocaleString()} ({Math.round(((product.mrp - product.price) / product.mrp) * 100)}% discount)
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Installation Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Installation Services</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-gray-900 mb-2">Standard Installation:</div>
                      <div className="text-sm text-gray-600">₹1,500 (All brands)</div>
                      <div className="text-sm text-gray-600">Includes 10ft free accessories</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-2">Complete Package:</div>
                      <div className="text-sm text-gray-600">₹2,900 (Installation + Accessories)</div>
                      <div className="text-sm text-gray-600">Outdoor bracket, water pipe, wrapping tape</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
