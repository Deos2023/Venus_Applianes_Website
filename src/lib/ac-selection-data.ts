
export interface ACProduct {
  id: string;
  type: ACType;
  brand: Brand;
  inverter: InverterType;
  tonnage: string;
  starRating: string;
  modelNumber: string;
  price: number;
  features: string[];
  image: string;
  description: string;
}

export type ACType = 'split' | 'window' | 'cassette' | 'multi-split' | 'one-way-cassette';
export type Brand = 'o-general' | 'mitsubishi-heavy' | 'mitsubishi-electric' | 'mitsubishi-akabishi' | 'daikin' | 'panasonic' | 'blue-star' | 'carrier' | 'hitachi' | 'lg' | 'voltas' | 'hisense' | 'godrej' | 'lloyd' | 'vestar';
export type InverterType = 'inverter' | 'non-inverter';

export const acTypes: { id: ACType; name: string; image: string }[] = [
  {
    id: 'split',
    name: 'SPLIT AC',
    image: "public/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png"
  },
  {
    id: 'cassette',
    name: '4-WAY CASSETTE AC',
    image: "public/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png"
  },
  {
    id: 'multi-split',
    name: 'MULTI I AC',
    image: "public/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png"
  },
  {
    id: 'one-way-cassette',
    name: '1-WAY CASSETTE AC',
    image: "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png"
  },
  {
    id: 'window',
    name: 'WINDOW AC',
    image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png"
  }
];

export const brands: { id: Brand; name: string; logo: string }[] = [
  { id: 'o-general', name: 'O GENERAL', logo: "https://5.imimg.com/data5/SELLER/Default/2021/6/LS/NL/JZ/25170506/o-general-logo-500x500.png" },
  { id: 'mitsubishi-heavy', name: 'MITSUBISHI HEAVY INDUSTRIES', logo: "https://www.mhi.com/themes/custom/bootstrap_mhi/logo.svg" },
  { id: 'mitsubishi-electric', name: 'MITSUBISHI ELECTRIC', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsubishi_Electric_logo.svg/1280px-Mitsubishi_Electric_logo.svg.png" },
  { id: 'mitsubishi-akabishi', name: 'MITSUBISHI ELECTRIC AKABISHI', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsubishi_Electric_logo.svg/1280px-Mitsubishi_Electric_logo.svg.png" },
  { id: 'daikin', name: 'DAIKIN', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Daikin_logo.svg/1280px-Daikin_logo.svg.png" },
  { id: 'panasonic', name: 'PANASONIC', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Panasonic_logo_%28Blue%29.svg/1280px-Panasonic_logo_%28Blue%29.svg.png" },
  { id: 'blue-star', name: 'BLUE STAR', logo: "https://www.bluestarindia.com/images/blue-star-ac-logo.jpg" },
  { id: 'carrier', name: 'CARRIER', logo: "https://www.carrier.com/carrier/images/carrier-logo.svg" },
  { id: 'hitachi', name: 'HITACHI', logo: "https://www.hitachi.com/image/layout/header/hitachi_logo.gif" },
  { id: 'lg', name: 'LG', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" },
  { id: 'voltas', name: 'VOLTAS', logo: "https://www.voltasac.com/wp-content/themes/voltas/images/logo.png" },
  { id: 'hisense', name: 'HISENSE', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Hisense_logo.svg/1280px-Hisense_logo.svg.png" },
  { id: 'godrej', name: 'GODREJ', logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Godrej_Logo.png" },
  { id: 'lloyd', name: 'LLOYD', logo: "https://havells.com/content/dam/havells/consumer/Brands/Lloyd/Lloyd_logo.png" },
  { id: 'vestar', name: 'VESTAR', logo: "https://www.vestarac.com/images/logo.png" }
];

export const inverterTypes: { id: InverterType; name: string }[] = [
  { id: 'inverter', name: 'Inverter AC' },
  { id: 'non-inverter', name: 'Non-Inverter AC' }
];

export const tonnageOptions = ['1.0T', '1.14T', '1.5T', '2.0T', '2.5T', '3.0T'];
export const starRatings = ['1★', '2★', '3★', '4★', '5★'];

// This is just a subset of the data for example purposes
// In a real application, you would have a complete database
export const acProducts: ACProduct[] = [
  {
    id: 'og-split-1t-inv-5star',
    type: 'split',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.0T',
    starRating: '5★',
    modelNumber: '12CGTB',
    price: 50200,
    features: [
      'Digital Inverter Technology',
      'Plasma Air Purifier',
      'Auto Restart',
      'Sleep Mode',
      'Smart Diagnosis'
    ],
    image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    description: 'O GENERAL 1.0T INV 5* 12CGTB with advanced cooling and energy efficiency'
  },
  {
    id: 'og-split-1t-inv-3star',
    type: 'split',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.0T',
    starRating: '3★',
    modelNumber: '12CPAA',
    price: 39790,
    features: [
      'Digital Inverter Technology',
      'Auto Restart',
      'Sleep Mode',
      'Energy Saving Mode'
    ],
    image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    description: 'O GENERAL 1.0T INV 3* 12CPAA with reliable cooling performance'
  },
  {
    id: 'og-split-1-5t-inv-5star',
    type: 'split',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '18CGTB',
    price: 63490,
    features: [
      'Digital Inverter Technology',
      'Plasma Air Purifier',
      'Auto Restart',
      'Sleep Mode',
      'Smart Diagnosis',
      '4-Way Air Direction'
    ],
    image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    description: 'O GENERAL 1.5T INV 5* 18CGTB perfect for medium to large rooms'
  },
  {
    id: 'daikin-split-1t-inv-5star',
    type: 'split',
    brand: 'daikin',
    inverter: 'inverter',
    tonnage: '1.0T',
    starRating: '5★',
    modelNumber: 'FTKU35UV16',
    price: 38600,
    features: [
      'Power Chill Operation',
      'Econo Mode',
      'Coanda Airflow',
      'PM 2.5 Filter',
      'Wi-Fi Optional'
    ],
    image: "public/lovable-uploads/1a4210eb-3a20-4fd7-9983-a8b981ece7a8.png",
    description: 'DAIKIN 1.0T INV 5* FTKU35UV16 with advanced Japanese technology'
  },
  {
    id: 'lg-split-1-5t-inv-5star',
    type: 'split',
    brand: 'lg',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: 'US-Q19BNZE',
    price: 46000,
    features: [
      'Dual Inverter Compressor',
      'AI Convertible 6-in-1 Cooling',
      'HD Filter with Anti-Virus Protection',
      'Smart Diagnosis',
      '4-Way Swing'
    ],
    image: "public/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
    description: 'LG 1.5T INV 5* US-Q19BNZE with AI technology and superior cooling'
  },
  {
    id: 'daikin-cassette-2t-inv-3star',
    type: 'cassette',
    brand: 'daikin',
    inverter: 'inverter',
    tonnage: '2.0T',
    starRating: '3★',
    modelNumber: 'FCVFQ71',
    price: 82000,
    features: [
      '360° Airflow',
      'Anti-Corrosion Treatment',
      'Individual Flap Control',
      'Fresh Air Intake',
      'Low Noise Operation'
    ],
    image: "public/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png",
    description: 'DAIKIN 2.0T INV 3* FCVFQ71 Cassette AC for commercial spaces'
  },
  {
    id: 'voltas-window-1-5t-inv-5star',
    type: 'window',
    brand: 'voltas',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '185V VECTRA PEARL',
    price: 36500,
    features: [
      'High Energy Efficiency',
      'Anti-dust Filter',
      'Sleep Mode',
      'Self Diagnosis',
      'Copper Condenser'
    ],
    image: "public/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
    description: 'VOLTAS 1.5T INV 5* 185V VECTRA PEARL Window AC with modern features'
  }
];

// Helper functions for filtering products
export const getProductsByType = (type: ACType): ACProduct[] => {
  return acProducts.filter(product => product.type === type);
};

export const getProductsByTypeAndBrand = (type: ACType, brand: Brand): ACProduct[] => {
  return acProducts.filter(product => product.type === type && product.brand === brand);
};

export const getProductsByTypeAndBrandAndInverter = (type: ACType, brand: Brand, inverter: InverterType): ACProduct[] => {
  return acProducts.filter(product => product.type === type && product.brand === brand && product.inverter === inverter);
};

export const getFullyFilteredProducts = (type: ACType, brand: Brand, inverter: InverterType, tonnage: string, starRating: string): ACProduct[] => {
  return acProducts.filter(product => 
    product.type === type && 
    product.brand === brand && 
    product.inverter === inverter && 
    product.tonnage === tonnage && 
    product.starRating === starRating
  );
};

// Get available options for each step based on previous selections
export const getAvailableBrands = (type: ACType): Brand[] => {
  const products = getProductsByType(type);
  const brandSet = new Set<Brand>();
  products.forEach(product => brandSet.add(product.brand));
  return Array.from(brandSet);
};

export const getAvailableInverterTypes = (type: ACType, brand: Brand): InverterType[] => {
  const products = getProductsByTypeAndBrand(type, brand);
  const inverterSet = new Set<InverterType>();
  products.forEach(product => inverterSet.add(product.inverter));
  return Array.from(inverterSet);
};

export const getAvailableTonnage = (type: ACType, brand: Brand, inverter: InverterType): string[] => {
  const products = getProductsByTypeAndBrandAndInverter(type, brand, inverter);
  const tonnageSet = new Set<string>();
  products.forEach(product => tonnageSet.add(product.tonnage));
  return Array.from(tonnageSet);
};

export const getAvailableStarRatings = (type: ACType, brand: Brand, inverter: InverterType, tonnage: string): string[] => {
  const products = acProducts.filter(product => 
    product.type === type && 
    product.brand === brand && 
    product.inverter === inverter && 
    product.tonnage === tonnage
  );
  
  const starSet = new Set<string>();
  products.forEach(product => starSet.add(product.starRating));
  return Array.from(starSet);
};
