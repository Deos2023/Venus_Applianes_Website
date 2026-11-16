import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const filters = [
  { id: 'best-deal', label: 'Best Deal' },
  { id: 'most-popular', label: 'Most Popular' },
  { id: 'newest', label: 'Newest' }
];

const products = [
  {
    id: "hitachi-split-1-5t-inv-5star-e518pcbib",
    name: "Hitachi 1.5 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/hitachi/B318PCAIBA/1.jpg",
    originalPrice: 40500,
    discountedPrice: 40500,
    discountPercent: 38,
    stars: 5,
    reviews: 231,
    badge: "CASHBACK",
    tag: "best-deal"
  },
  {
    id: "lg-split-1-5t-inv-5star" ,
    name: "LG 1.5 Ton 3 Star AI Convertible 6-in-1 Split AC",
    image: "/lovable-uploads/lg/US-Q18KWXE/2.webp",
    originalPrice: 50500,
    discountedPrice: 50500,
    discountPercent: 50,
    stars: 5.0,
    reviews: 52,
    badge: "BESTSELLER",
    tag: "most-popular"
  },
  {
    id: "daikin-split-1-5t-inv-5star-ftku50uv16",
    name: "Daikin 1.5 Ton 5 Star Inverter Smart Split AC",
    image: "/lovable-uploads/Daikin/FTL35UV16/1.jpg",
    originalPrice: 67200,
    discountedPrice: 43700,
    discountPercent: 29,
    stars: 5.0,
    reviews: 89,
    badge: "NEW",
    tag: "newest"
  },
  {
    id: "voltas-split-1-0t-inv-5star-125v-vectra-elite-dup",
    name: "Voltas 1 Ton 3 Star Window AC",
    image: "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.webp",
    originalPrice: 63990,
    discountedPrice: 36700,
    discountPercent: 28,
    stars: 5,
    reviews: 123,
    badge: "CASHBACK",
    tag: "best-deal"
  },
  {
    id: "mitsubishi-heavy-1.1t-noninv-2star-srk13crs",
    name: "Mitsubishi 2 Ton 4 Star Inverter Split AC",
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/1.webp",
    originalPrice: 47440,
    discountedPrice: 47440,
    discountPercent: 23,
    stars: 2,
    reviews: 47,
    badge: "PREMIUM",
    tag: "most-popular"
  },
  {
    id: "carrier-split-1-5t-inv-5star-xcel-edge-fxi",
    name: "Carrier 1.5 Ton Flexicool Inverter Split AC",
    image: "/lovable-uploads/carrier/XCEL_EDGE_FXI/1.jpg",
    originalPrice: 76090,
    discountedPrice: 42432,
    discountPercent: 27,
    stars: 5.0,
    reviews: 72,
    badge: "NEW ARRIVAL",
    tag: "newest"
  },
  {
    id: "hitachi-split-1-0t-inv-5star-e512pcaib",
    name: "Hitachi 1 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/hitachi/B318PCAIBA/1.jpg",
    originalPrice: 35500,
    discountedPrice: 35500,
    discountPercent: 26,
    stars: 5.0,
    reviews: 58,
    badge: "LIMITED STOCK",
    tag: "best-deal"
  },
  {
    id: "bluestar-split-1-5t-inv-3star-318tku",
    name: "Blue Star 1.5 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/bluestar/318TKU/1.webp",
    originalPrice: 61500,
    discountedPrice: 36300,
    discountPercent: 21,
    stars: 3.0,
    reviews: 94,
    badge: "ENERGY SAVER",
    tag: "most-popular"
  },
  {
    id: "panasonic-split-1-5t-inv-5star-cscu-eu18bky5x",
    name: "Panasonic 1.5 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/panasonic/EU18BKY5X/1.png",
    originalPrice: 44551,
    discountedPrice: 44551,
    discountPercent: 20,
    stars: 5,
    reviews: 61,
    badge: "CASHBACK",
    tag: "best-deal"
  },
  {
    id: "hisense-split-1-5t-inv-5star-as-18tr4r5aj1",
    name: "Hisense 1.5 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/hisense/AS-18TR4R3AK1/1.jpg",
    originalPrice: 40000,
    discountedPrice: 40000,
    discountPercent: 18,
    stars: 5,
    reviews: 44,
    badge: "BESTSELLER",
    tag: "most-popular"
  },
  {
    id: "lloyd-split-1-0t-inv-5star-gls12i5fogec",
    name: "Lloyd 1 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/lloyd/GLS12I5FOGEC/1.jpg",
    originalPrice: 56990,
    discountedPrice: 56990,
    discountPercent: 15,
    stars: 5,
    reviews: 38,
    badge: "NEW ARRIVAL",
    tag: "newest"
  },
  {
    id: "o-general-split-1t-inv-5star-asgg12cgaa-b",
    name: "O General 1 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/o-general/ASGG12CGAA-B/1.png",
    originalPrice: 55790,
    discountedPrice: 50200,
    discountPercent: 10,
    stars: 5,
    reviews: 29,
    badge: "NEW",
    tag: "newest"
  },
];

const ProductFilter = () => {
  const [activeFilter, setActiveFilter] = useState('best-deal');

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">PICKS FOR YOU</h2>
          <div className="flex border-b border-gray-200">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`py-3 px-6 font-medium text-lg relative ${
                  activeFilter === filter.id
                    ? "text-cool-blue"
                    : "text-gray-600 hover:text-cool-blue/80"
                }`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cool-blue"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(product => activeFilter === 'all' || product.tag === activeFilter)
            .slice(0, 8)
            .map(product => (
              <Card key={product.id} className="overflow-hidden border-none shadow-lg hover-lift transition-all duration-300">
                <div className="relative pt-4 px-4">
                  {product.badge && (
                    <span className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded z-10">
                      {product.badge}
                    </span>
                  )}
                  <div className="h-52 flex items-center justify-center mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-48 w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/lovable-uploads/lg/US-Q18KWXE/1.avif";
                      }}
                    />
                  </div>
                </div>
                <CardContent className="bg-white">
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill={i < Math.floor(product.stars) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {product.stars} ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-medium text-lg mb-2 line-clamp-2 h-14">{product.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">₹{product.discountedPrice.toLocaleString()}</span>
                    <div className="flex items-center mt-1 text-sm">
                      <span className="text-gray-500 line-through mr-2">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="text-green-600 font-medium">{product.discountPercent}% Off</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    No Cost EMI starts from ₹{Math.round(product.discountedPrice / 12).toLocaleString()}/month
                  </div>
                  <Button className="w-full bg-cool-blue hover:bg-cool-blue-dark" onClick={() => window.location.href = `/product/${product.id}`}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="border-cool-blue text-cool-blue hover:bg-cool-blue/10">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
