import { Brand, ACProduct } from "./types";

// Export type definitions
export type ACType = 'split' | 'window' | 'cassette';
export type InverterType = 'inverter' | 'non-inverter';
export { Brand, ACProduct };

export const brands: { id: Brand; name: string; logo?: string }[] = [
  { id: "daikin", name: "Daikin", logo: "/logos/daikin.png" },
  { id: "o-general", name: "O General", logo: "/logos/o-general.png" },
  { id: "mitsubishi-heavy", name: "Mitsubishi Heavy", logo: "/logos/mitsubishi-heavy.png" },
  { id: "mitsubishi-electric", name: "Mitsubishi Electric", logo: "/logos/mitsubishi-electric.png" },
  { id: "mitsubishi-akabishi", name: "Mitsubishi Akabishi", logo: "/logos/mitsubishi-akabishi.png" },
  { id: "panasonic", name: "Panasonic", logo: "/logos/panasonic.png" },
  { id: "blue-star", name: "Blue Star", logo: "/logos/blue-star.png" },
  { id: "carrier", name: "Carrier", logo: "/logos/carrier.png" },
  { id: "hitachi", name: "Hitachi", logo: "/logos/hitachi.png" },
  { id: "lg", name: "LG", logo: "/logos/lg.png" },
  { id: "voltas", name: "Voltas", logo: "/logos/voltas.png" },
  { id: "hisense", name: "Hisense", logo: "/logos/hisense.png" },
  { id: "godrej", name: "Godrej", logo: "/logos/godrej.png" },
  { id: "lloyd", name: "Lloyd", logo: "/logos/lloyd.png" },
  { id: "vestar", name: "Vestar", logo: "/logos/vestar.png" },
  { id: "samsung", name: "Samsung", logo: "/logos/samsung.png" }
];

export const acTypes = [
  { id: "split", name: "Split AC", image: "/images/split-ac.jpg" },
  { id: "window", name: "Window AC", image: "/images/window-ac.jpg" },
  { id: "cassette", name: "Cassette AC", image: "/images/cassette-ac.jpg" }
];

export const inverterTypes = [
  { id: "inverter", name: "Inverter" },
  { id: "non-inverter", name: "Non-Inverter" }
];

export const tonnageOptions = [
  "0.8T", "1.0T", "1.1T", "1.14T", "1.3T", "1.4T", "1.5T", "1.6T", "2.0T"
];

export const starRatings = [
  "2★", "3★", "4★", "5★"
];

// Updated AC Products with comprehensive details
export const acProducts: ACProduct[] = [
  // DAIKIN Products
  {
    id: "daikin-ftl30uv16v1",
    brand: "daikin",
    type: "split",
    inverter: "non-inverter",
    tonnage: "0.8T",
    starRating: "3★",
    modelNumber: "FTL30UV16V1",
    price: 27900,
    mrp: 37400,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 2930 W",
      "Energy Efficient",
      "Low Noise Operation",
      "Auto Clean Function"
    ],
    description: "DAIKIN 0.8T Non-Inverter 3 Star Split AC with R32 Gas and efficient cooling performance.",
    image: "/lovable-uploads/daikin/FTL30UV16V1/1.jpg",
    images: [
      "/lovable-uploads/daikin/FTL30UV16V1/1.jpg",
      "/lovable-uploads/daikin/FTL30UV16V1/2.jpg"
    ],
    specifications: {
      coolingCapacity: "2930 W",
      indoorUnit: "W-31.5\" X H-11.7\"",
      outdoorUnit: "RL30UV16V1",
      refrigerant: "R32",
      energyRating: "3 Star"
    },
    productUrl: "https://www.daikinindia.com/products-services/split-hi-wall-air-conditioner/ftl/2.93/ftl30"
  },

  // O GENERAL Products
  {
    id: "o-general-asgg12cgaa-b",
    brand: "o-general",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "ASGG12CGAA-B",
    price: 50200,
    mrp: 55790,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3520 W",
      "Inverter Technology",
      "Energy Efficient",
      "Dual Barrier Coating"
    ],
    description: "O GENERAL 1.0T Inverter 5 Star Split AC with advanced R32 gas and superior energy efficiency.",
    image: "/lovable-uploads/o-general/ASGG12CGAA-B/1.jpg",
    images: [
      "/lovable-uploads/o-general/ASGG12CGAA-B/1.jpg",
      "/lovable-uploads/o-general/ASGG12CGAA-B/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3520 W",
      indoorUnit: "W-32.8\" X H-10.6\"",
      outdoorUnit: "ASGG12CGAA-B",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:61c696ad-5fdc-42b7-bd1d-7565486bb3f2"
  },

  {
    id: "o-general-asgg12cpab-b",
    brand: "o-general",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "ASGG12CPAB-B",
    price: 39790,
    mrp: 44210,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3520 W",
      "Inverter Technology",
      "Energy Efficient",
      "Dual Barrier Coating"
    ],
    description: "O GENERAL 1.0T Inverter 3 Star Split AC with R32 gas and reliable cooling performance.",
    image: "/lovable-uploads/o-general/ASGG12CPAB-B/1.jpg",
    images: [
      "/lovable-uploads/o-general/ASGG12CPAB-B/1.jpg",
      "/lovable-uploads/o-general/ASGG12CPAB-B/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3520 W",
      indoorUnit: "W-32.8\" X H-10.6\"",
      outdoorUnit: "ASGG12CPAB-B",
      refrigerant: "R32",
      energyRating: "3 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:61c696ad-5fdc-42b7-bd1d-7565486bb3f2"
  },

  {
    id: "o-general-asga14bmaa-b",
    brand: "o-general",
    type: "split",
    inverter: "non-inverter",
    tonnage: "1.14T",
    starRating: "3★",
    modelNumber: "ASGA14BMAA-B",
    price: 42150,
    mrp: 46320,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 4000 W",
      "Non-Inverter Technology",
      "Energy Efficient",
      "Dual Barrier Coating"
    ],
    description: "O GENERAL 1.14T Non-Inverter 3 Star Split AC with R32 gas and robust cooling capacity.",
    image: "/lovable-uploads/o-general/ASGA14BMAA-B/1.jpg",
    images: [
      "/lovable-uploads/o-general/ASGA14BMAA-B/1.jpg",
      "/lovable-uploads/o-general/ASGA14BMAA-B/2.jpg"
    ],
    specifications: {
      coolingCapacity: "4000 W",
      indoorUnit: "W-39.4\" X H-11.6\"",
      outdoorUnit: "ASGA14BMAA-B",
      refrigerant: "R32",
      energyRating: "3 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:2a285188-94c5-4fbc-965b-f9f6ee010dd9"
  },

  // MITSUBISHI HEAVY Products
  {
    id: "mitsubishi-heavy-srk13yxs-w6",
    brand: "mitsubishi-heavy",
    type: "split",
    inverter: "inverter",
    tonnage: "1.1T",
    starRating: "5★",
    modelNumber: "SRK13YXS-W6",
    price: 54040,
    mrp: 58000,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3810 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "MITSUBISHI HEAVY 1.1T Inverter 5 Star Split AC with R32 gas and premium cooling performance.",
    image: "/lovable-uploads/mitsubishi/heavy/SRK13YXS-W6/1.jpg",
    images: [
      "/lovable-uploads/mitsubishi/heavy/SRK13YXS-W6/1.jpg",
      "/lovable-uploads/mitsubishi/heavy/SRK13YXS-W6/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3810 W",
      indoorUnit: "W-34.2\" X H-11.4\"",
      outdoorUnit: "SRK13YXS-W6",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:1ea47c0a-b64f-42ae-98e0-b9dd468cfa6a"
  },

  {
    id: "mitsubishi-heavy-srk13yym-w6",
    brand: "mitsubishi-heavy",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "SRK13YYM-W6",
    price: 49200,
    mrp: 52500,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3525 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "MITSUBISHI HEAVY 1.0T Inverter 3 Star Split AC with R32 gas and reliable cooling performance.",
    image: "/lovable-uploads/mitsubishi/heavy/SRK13YYM-W6/1.jpg",
    images: [
      "/lovable-uploads/mitsubishi/heavy/SRK13YYM-W6/1.jpg",
      "/lovable-uploads/mitsubishi/heavy/SRK13YYM-W6/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3525 W",
      indoorUnit: "W-31.4\" X H-11.6\"",
      outdoorUnit: "SRK13YYM-W6",
      refrigerant: "R32",
      energyRating: "3 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:1ea47c0a-b64f-42ae-98e0-b9dd468cfa6a"
  },

  // MITSUBISHI ELECTRIC Products
  {
    id: "mitsubishi-electric-msy-gr13vf",
    brand: "mitsubishi-electric",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "MSY/MUY-GR13VF",
    price: 48245,
    mrp: 57750,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3700 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "MITSUBISHI ELECTRIC 1.0T Inverter 5 Star Split AC with R32 gas and advanced cooling technology.",
    image: "/lovable-uploads/mitsubishi/electric/MSY-GR13VF/1.jpg",
    images: [
      "/lovable-uploads/mitsubishi/electric/MSY-GR13VF/1.jpg",
      "/lovable-uploads/mitsubishi/electric/MSY-GR13VF/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3700 W",
      indoorUnit: "W-33\" X H-11\"",
      outdoorUnit: "MUY-GR13VF",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:43e385de-24db-4f94-9871-0e524452da81"
  },

  {
    id: "mitsubishi-electric-msy-gr13vft",
    brand: "mitsubishi-electric",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "MSY/MUY-GR13VFT",
    price: 53978,
    mrp: 65100,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3700 W",
      "Inverter Technology",
      "Energy Efficient",
      "Wi-Fi Control"
    ],
    description: "MITSUBISHI ELECTRIC 1.0T Inverter 5 Star Split AC with R32 gas and Wi-Fi connectivity.",
    image: "/lovable-uploads/mitsubishi/electric/MSY-GR13VFT/1.jpg",
    images: [
      "/lovable-uploads/mitsubishi/electric/MSY-GR13VFT/1.jpg",
      "/lovable-uploads/mitsubishi/electric/MSY-GR13VFT/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3700 W",
      indoorUnit: "W-33\" X H-11\"",
      outdoorUnit: "MUY-GR13VFT",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://mitsubishielectric.in/products/air-conditioning-systems/split-air-conditioners/inverter-series/msy-gr13vft-da1"
  },

  // Continue with more products...
  // DAIKIN 1.0T Products
  {
    id: "daikin-ftku35uv16w",
    brand: "daikin",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "FTKU35UV16W",
    price: 38600,
    mrp: 55500,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3520 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "DAIKIN 1.0T Inverter 5 Star Split AC with R32 gas and superior energy efficiency.",
    image: "/lovable-uploads/daikin/FTKU35UV16W/1.jpg",
    images: [
      "/lovable-uploads/daikin/FTKU35UV16W/1.jpg",
      "/lovable-uploads/daikin/FTKU35UV16W/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3520 W",
      indoorUnit: "W-31.5\" X H-11.7\"",
      outdoorUnit: "FTKU35UV16W",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://www.daikinindia.com/products-services/split-hi-wall-air-conditioner/ftku/3.52/ftku35"
  },

  // HITACHI Products
  {
    id: "hitachi-rak-e512pcbib",
    brand: "hitachi",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "RAK.E512PCBIB",
    price: 35500,
    mrp: 61400,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3458 W",
      "Toushi Plus 5200XL",
      "Inverter Technology",
      "Energy Efficient"
    ],
    description: "HITACHI 1.0T Inverter 5 Star Split AC with R32 gas and Toushi Plus technology.",
    image: "/lovable-uploads/hitachi/RAK-E512PCBIB/1.jpg",
    images: [
      "/lovable-uploads/hitachi/RAK-E512PCBIB/1.jpg",
      "/lovable-uploads/hitachi/RAK-E512PCBIB/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3458 W",
      indoorUnit: "W-30.7\" X H-11\"",
      outdoorUnit: "RAC.512WCBIE",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://buy.hitachiaircon.in/e-shop/product-details/hitachi-toushi-plus-5200xl-1-0-ras-e512pcaibs-tr/778"
  },

  // BLUE STAR Products
  {
    id: "blue-star-512tnur",
    brand: "blue-star",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "512TNUR",
    price: 36800,
    mrp: 63250,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3500 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "BLUE STAR 1.0T Inverter 5 Star Split AC with R32 gas and advanced cooling technology.",
    image: "/lovable-uploads/bluestar/512TNUR/1.jpg",
    images: [
      "/lovable-uploads/bluestar/512TNUR/1.jpg",
      "/lovable-uploads/bluestar/512TNUR/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3500 W",
      indoorUnit: "W-33\" X H-11.8\"",
      outdoorUnit: "512TNUR",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:cdd7e3ad-dc5c-49ec-a99d-964c2ebd9f7c"
  },

  // VOLTAS Products
  {
    id: "voltas-125v-vectra-elite",
    brand: "voltas",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "125V VECTRA ELITE",
    price: 36700,
    mrp: 63990,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3500 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "VOLTAS 1.0T Inverter 5 Star Split AC with R32 gas and Vectra Elite technology.",
    image: "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.jpg",
    images: [
      "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.jpg",
      "/lovable-uploads/voltas/125V_VECTRA_ELITE/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3500 W",
      indoorUnit: "W-31.5\" X H-10.4\"",
      outdoorUnit: "125V VECTRA ELITE",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://www.voltas.com/products/voltas-adjustable-inverter-split-ac-1-ton-5-star-125v-vectra-elite"
  },

  // CARRIER Products
  {
    id: "carrier-xcel-edge-fxi",
    brand: "carrier",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "XCEL EDGE FXI",
    price: 37150,
    mrp: 66590,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3500 W",
      "6-in-1 Convertible Technology",
      "Inverter Technology",
      "Energy Efficient"
    ],
    description: "CARRIER 1.0T Inverter 5 Star Split AC with R32 gas and 6-in-1 convertible technology.",
    image: "/lovable-uploads/carrier/XCEL_EDGE_FXI/1.jpg",
    images: [
      "/lovable-uploads/carrier/XCEL_EDGE_FXI/1.jpg",
      "/lovable-uploads/carrier/XCEL_EDGE_FXI/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3500 W",
      indoorUnit: "W-31.5\" X H-10.8\"",
      outdoorUnit: "XCEL EDGE FXI",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://carriermideaindia.com/product/xcel-edge-fxi-5-star-split-inverter-ac/"
  },

  // PANASONIC Products
  {
    id: "panasonic-cs-cu-eu12bky5",
    brand: "panasonic",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "CS/CU-EU12BKY5",
    price: 41396,
    mrp: 56400,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3450 W",
      "7-in-1 Convertible Technology",
      "Inverter Technology",
      "Energy Efficient"
    ],
    description: "PANASONIC 1.0T Inverter 5 Star Split AC with R32 gas and 7-in-1 convertible technology.",
    image: "/lovable-uploads/panasonic/CS-CU-EU12BKY5/1.jpg",
    images: [
      "/lovable-uploads/panasonic/CS-CU-EU12BKY5/1.jpg",
      "/lovable-uploads/panasonic/CS-CU-EU12BKY5/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3450 W",
      indoorUnit: "W-34.3\" X H-11.6\"",
      outdoorUnit: "CU-EU12BKY5",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://www.panasonic.com/in/consumer/air-conditioners/split-ac/cs-cu-eu12bky5.html"
  },

  // LG Products
  {
    id: "lg-us-q14enze",
    brand: "lg",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "US-Q14ENZE",
    price: 42500,
    mrp: 75990,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3500 W",
      "AI + 6-in-1 Convertible Technology",
      "Inverter Technology",
      "Energy Efficient"
    ],
    description: "LG 1.0T Inverter 5 Star Split AC with R32 gas and AI + 6-in-1 convertible technology.",
    image: "/lovable-uploads/lg/US-Q14ENZE/1.jpg",
    images: [
      "/lovable-uploads/lg/US-Q14ENZE/1.jpg",
      "/lovable-uploads/lg/US-Q14ENZE/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3500 W",
      indoorUnit: "W-33\" X H-12.1\"",
      outdoorUnit: "US-Q14ENZE",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://www.lg.com/in/air-conditioners/split-air-conditioners/us-q14enze/"
  },

  // GODREJ Products
  {
    id: "godrej-ei-12iinv5r32-wwr",
    brand: "godrej",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "EI 12IINV5R32 WWR",
    price: 34000,
    mrp: 48900,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3500 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "GODREJ 1.0T Inverter 5 Star Split AC with R32 gas and energy efficient cooling.",
    image: "/lovable-uploads/godrej/EI-12IINV5R32-WWR/1.jpg",
    images: [
      "/lovable-uploads/godrej/EI-12IINV5R32-WWR/1.jpg",
      "/lovable-uploads/godrej/EI-12IINV5R32-WWR/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3500 W",
      indoorUnit: "W-31.9\" X H-11.6\"",
      outdoorUnit: "EI 12IINV5R32 WWR",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: ""
  },

  // HISENSE Products
  {
    id: "hisense-as-12tr4r5aj",
    brand: "hisense",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "AS-12TR4R5AJ",
    price: 35000,
    mrp: 48500,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3460 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "HISENSE 1.0T Inverter 5 Star Split AC with R32 gas and advanced cooling technology.",
    image: "/lovable-uploads/hisense/AS-12TR4R5AJ/1.jpg",
    images: [
      "/lovable-uploads/hisense/AS-12TR4R5AJ/1.jpg",
      "/lovable-uploads/hisense/AS-12TR4R5AJ/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3460 W",
      indoorUnit: "W-32.7\" X H-11.6\"",
      outdoorUnit: "AS-12TR4R5AJ",
      refrigerant: "R32",
      energyRating: "5 Star"
    },
    productUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:4d9fe7b7-3686-4805-a43f-a8147d923644"
  },

  // VESTAR Products
  {
    id: "vestar-vaske123ia15h",
    brand: "vestar",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "VASKE123IA15H",
    price: 28000,
    mrp: 41990,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3500 W",
      "Inverter Technology",
      "Energy Efficient",
      "100% Copper Coil"
    ],
    description: "VESTAR 1.0T Inverter 3 Star Split AC with R32 gas and 100% copper coil.",
    image: "/lovable-uploads/vestar/VASKE123IA15H/1.jpg",
    images: [
      "/lovable-uploads/vestar/VASKE123IA15H/1.jpg",
      "/lovable-uploads/vestar/VASKE123IA15H/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3500 W",
      indoorUnit: "W-31.5\" X H-10.4\"",
      outdoorUnit: "VASKE123IA15H",
      refrigerant: "R32",
      energyRating: "3 Star"
    },
    productUrl: "https://vestar.in/index.php/product/vestar-1ton-3star-inverter-ac-sku-vaskv223ikdg-100-copper-coil-with-hidden-display-eco-power-saving-mode-white-copy/"
  },

  // LLOYD Products
  {
    id: "lloyd-gls12i3fosec",
    brand: "lloyd",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "GLS12I3FOSEC",
    price: 31500,
    mrp: 48990,
    features: [
      "R32 Refrigerant Gas",
      "Cooling Capacity: 3200 W",
      "Inverter Technology",
      "Energy Efficient",
      "Auto Clean Function"
    ],
    description: "LLOYD 1.0T Inverter 3 Star Split AC with R32 gas and energy efficient cooling.",
    image: "/lovable-uploads/lloyd/GLS12I3FOSEC/1.jpg",
    images: [
      "/lovable-uploads/lloyd/GLS12I3FOSEC/1.jpg",
      "/lovable-uploads/lloyd/GLS12I3FOSEC/2.jpg"
    ],
    specifications: {
      coolingCapacity: "3200 W",
      indoorUnit: "W-34.3\" X H-11.8\"",
      outdoorUnit: "GLS12I3FOSEC",
      refrigerant: "R32",
      energyRating: "3 Star"
    },
    productUrl: "https://havells.com/lloyd/home-appliances/air-conditioners/classic-split-ac-inverter-10-3-star-gls12i3fosec.html"
  },

  // Add more products as needed...
];
