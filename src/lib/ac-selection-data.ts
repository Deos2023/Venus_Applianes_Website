
import { Brand } from "./types";

// Type definitions
export type ACType = 'split' | 'window' | 'cassette' | 'tower' | 'portable';
export type InverterType = 'inverter' | 'non-inverter';

export interface ACProduct {
  id: string;
  brand: Brand;
  type: ACType;
  tonnage: string;
  starRating: string;
  inverter: InverterType;
  price: number;
  modelNumber: string;
  features: string[];
  image?: string;
  images?: string[];
  description: string;
}

// AC Types data
export const acTypes = [
  {
    id: 'split' as ACType,
    name: 'Split AC',
    image: '/lovable-uploads/97d42845-0d65-42cd-9e69-51af08f84088.png'
  },
  {
    id: 'window' as ACType,
    name: 'Window AC',
    image: '/lovable-uploads/833f8e8e-835d-435d-9db4-82dc17c80ebb.png'
  },
  {
    id: 'cassette' as ACType,
    name: 'Cassette AC',
    image: '/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png'
  },
  {
    id: 'tower' as ACType,
    name: 'Tower AC',
    image: '/lovable-uploads/72002498-a99e-40af-8002-2a7eddb8ffc5.png'
  },
  {
    id: 'portable' as ACType,
    name: 'Portable AC',
    image: '/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png'
  }
];

// Brands data
export const brands = [
  { id: 'samsung' as Brand, name: 'Samsung', logo: '/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png' },
  { id: 'lg' as Brand, name: 'LG', logo: '/lovable-uploads/lg/logo.png' },
  { id: 'voltas' as Brand, name: 'Voltas', logo: '/lovable-uploads/voltas/logo.png' },
  { id: 'daikin' as Brand, name: 'Daikin', logo: '/lovable-uploads/daikin/logo.png' },
  { id: 'panasonic' as Brand, name: 'Panasonic', logo: '/lovable-uploads/panasonic/logo.png' },
  { id: 'hitachi' as Brand, name: 'Hitachi', logo: '/lovable-uploads/hitachi/logo.png' },
  { id: 'bluestar' as Brand, name: 'Blue Star', logo: '/lovable-uploads/bluestar/logo.png' },
  { id: 'mitsubishi-electric' as Brand, name: 'Mitsubishi Electric', logo: '/lovable-uploads/mitsubishi-electric/logo.png' },
  { id: 'carrier' as Brand, name: 'Carrier', logo: '/lovable-uploads/carrier/logo.png' },
  { id: 'o-general' as Brand, name: 'O General', logo: '/lovable-uploads/o-general/logo.png' }
];

// Inverter types data
export const inverterTypes = [
  {
    id: 'inverter' as InverterType,
    name: 'Inverter'
  },
  {
    id: 'non-inverter' as InverterType,
    name: 'Non-Inverter'
  }
];

// Tonnage options
export const tonnageOptions = [
  "0.8T", "1 Ton", "1.2T", "1.5 Ton", "2 Ton", "2.5 Ton", "3 Ton", "4 Ton", "5 Ton"
];

// Star ratings
export const starRatings = [
  "1★", "2★", "3★", "4★", "5★"
];

export const acProducts: ACProduct[] = [
  // Samsung Products
  {
    id: "samsung-ar12tyhzewk-1-3",
    brand: "samsung",
    type: "split",
    tonnage: "1 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 32999,
    modelNumber: "AR12TYHZEWK",
    features: [
      "Digital Inverter Technology",
      "Fast Cooling",
      "Energy Efficient",
      "Low Noise Operation",
      "Anti-bacterial Filter"
    ],
    image: "/lovable-uploads/lg/US-Q18KWXE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q18KWXE/1.avif",
      "/lovable-uploads/lg/US-Q18KWXE/2.webp",
      "/lovable-uploads/lg/US-Q18KWXE/3.jpg"
    ],
    description: "Samsung 1 Ton 3 Star Inverter Split AC with Anti-bacterial Filter for clean air and crystal filter."
  },
  {
    id: "samsung-ar12tyhzew5-1-5",
    brand: "samsung",
    type: "split",
    tonnage: "1 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 42999,
    modelNumber: "AR12TYHZEW5",
    features: [
      "Digital Inverter Technology",
      "Smart WiFi Control",
      "Energy Efficient++",
      "Ultra Low Noise",
      "Anti-bacterial Filter",
      "4-way Swing"
    ],
    image: "/lovable-uploads/lg/US-Q18KWXE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q18KWXE/1.avif",
      "/lovable-uploads/lg/US-Q18KWXE/2.webp",
      "/lovable-uploads/lg/US-Q18KWXE/3.jpg"
    ],
    description: "Premium Samsung 1 Ton 5 Star Inverter Split AC with WiFi connectivity and advanced filtration."
  },
  {
    id: "samsung-ar18tyhzewk-1.5-3",
    brand: "samsung",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 39999,
    modelNumber: "AR18TYHZEWK",
    features: [
      "Digital Inverter Technology",
      "Fast Cooling",
      "Energy Efficient",
      "Low Noise Operation",
      "Anti-bacterial Filter"
    ],
    image: "/lovable-uploads/lg/US-Q18KWXE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q18KWXE/1.avif",
      "/lovable-uploads/lg/US-Q18KWXE/2.webp",
      "/lovable-uploads/lg/US-Q18KWXE/3.jpg"
    ],
    description: "Samsung 1.5 Ton 3 Star Inverter Split AC with increased cooling capacity for medium-sized rooms."
  },
  {
    id: "samsung-ar18tyhzew5-1.5-5",
    brand: "samsung",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 49999,
    modelNumber: "AR18TYHZEW5",
    features: [
      "Digital Inverter Technology",
      "Smart WiFi Control",
      "Energy Efficient++",
      "Ultra Low Noise",
      "Anti-bacterial Filter",
      "4-way Swing"
    ],
    image: "/lovable-uploads/lg/US-Q18KWXE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q18KWXE/1.avif",
      "/lovable-uploads/lg/US-Q18KWXE/2.webp",
      "/lovable-uploads/lg/US-Q18KWXE/3.jpg"
    ],
    description: "Premium Samsung 1.5 Ton 5 Star Inverter Split AC with WiFi connectivity for larger room coverage."
  },

  // LG Products
  {
    id: "lg-us-q12cnxe-1-3",
    brand: "lg",
    type: "split",
    tonnage: "1 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 33999,
    modelNumber: "US-Q12CNXE",
    features: [
      "Dual Inverter Compressor",
      "Low Noise Operation",
      "4-in-1 Convertible Cooling",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "/lovable-uploads/lg/US-Q12CNXE/1.jpg",
    images: [
      "/lovable-uploads/lg/US-Q12CNXE/1.jpg",
      "/lovable-uploads/lg/US-Q12CNXE/2.avif",
      "/lovable-uploads/lg/US-Q12CNXE/3.avif"
    ],
    description: "LG 1 Ton 3 Star Dual Inverter Split AC with Convertible 4-in-1 Cooling."
  },
  {
    id: "lg-us-q14enze-1-5",
    brand: "lg",
    type: "split",
    tonnage: "1 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 43999,
    modelNumber: "US-Q14ENZE",
    features: [
      "Dual Inverter Compressor",
      "AI Convertible 6-in-1 Cooling",
      "UVnano™ Technology",
      "Wi-Fi Control with ThinQ",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "/lovable-uploads/lg/US-Q14ENZE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q14ENZE/1.avif",
      "/lovable-uploads/lg/US-Q14ENZE/2.avif",
      "/lovable-uploads/lg/US-Q14ENZE/3.webp",
      "/lovable-uploads/lg/US-Q14ENZE/4.jpg",
      "/lovable-uploads/lg/US-Q14ENZE/5.avif"
    ],
    description: "Premium LG 1 Ton 5 Star Dual Inverter Split AC with WiFi and advanced health features."
  },
  {
    id: "lg-us-q18kwxe-1.5-3",
    brand: "lg",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 40999,
    modelNumber: "US-Q18KWXE",
    features: [
      "Dual Inverter Compressor",
      "Low Noise Operation",
      "4-in-1 Convertible Cooling",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "/lovable-uploads/lg/US-Q18KWXE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q18KWXE/1.avif",
      "/lovable-uploads/lg/US-Q18KWXE/2.webp",
      "/lovable-uploads/lg/US-Q18KWXE/3.jpg",
      "/lovable-uploads/lg/US-Q18KWXE/4.avif",
      "/lovable-uploads/lg/US-Q18KWXE/5.webp"
    ],
    description: "LG 1.5 Ton 3 Star Dual Inverter Split AC with superior cooling for medium-sized rooms."
  },
  {
    id: "lg-us-q18tnxe-1.5-5",
    brand: "lg",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 48999,
    modelNumber: "US-Q18TNXE",
    features: [
      "Dual Inverter Compressor",
      "AI Convertible 6-in-1 Cooling",
      "UVnano™ Technology",
      "Wi-Fi Control with ThinQ",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "/lovable-uploads/lg/US-Q18TNXE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q18TNXE/1.avif",
      "/lovable-uploads/lg/US-Q18TNXE/2.webp",
      "/lovable-uploads/lg/US-Q18TNXE/3.jpg"
    ],
    description: "Premium LG 1.5 Ton 5 Star Dual Inverter Split AC with advanced AI cooling technology."
  },
  {
    id: "lg-us-q19fwze-1.5-5-premium",
    brand: "lg",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 52999,
    modelNumber: "US-Q19FWZE",
    features: [
      "Dual Inverter Compressor",
      "AI Convertible 6-in-1 Cooling",
      "UVnano™ Technology",
      "Wi-Fi Control with ThinQ",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis",
      "Premium Design"
    ],
    image: "/lovable-uploads/lg/US-Q19FWZE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q19FWZE/1.avif",
      "/lovable-uploads/lg/US-Q19FWZE/2.jpg",
      "/lovable-uploads/lg/US-Q19FWZE/3.jpg",
      "/lovable-uploads/lg/US-Q19FWZE/4.jpg",
      "/lovable-uploads/lg/US-Q19FWZE/5.jpg",
      "/lovable-uploads/lg/US-Q19FWZE/6.jpg"
    ],
    description: "Premium LG 1.5 Ton 5 Star Dual Inverter Split AC with advanced features and elegant design."
  },
  {
    id: "lg-us-q24enxe-2-5",
    brand: "lg",
    type: "split",
    tonnage: "2 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 58999,
    modelNumber: "US-Q24ENXE",
    features: [
      "Dual Inverter Compressor",
      "AI Convertible 6-in-1 Cooling",
      "UVnano™ Technology",
      "Wi-Fi Control with ThinQ",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "/lovable-uploads/lg/US-Q24ENXE/1.avif",
    images: [
      "/lovable-uploads/lg/US-Q24ENXE/1.avif",
      "/lovable-uploads/lg/US-Q24ENXE/2.jpg",
      "/lovable-uploads/lg/US-Q24ENXE/3.jpg",
      "/lovable-uploads/lg/US-Q24ENXE/4.jpg",
      "/lovable-uploads/lg/US-Q24ENXE/5.jpg"
    ],
    description: "LG 2 Ton 5 Star Dual Inverter Split AC for large rooms with premium cooling technology."
  },

  // Voltas Products
  {
    id: "voltas-125v-vectra-elite-1-3",
    brand: "voltas",
    type: "window",
    tonnage: "1 Ton",
    starRating: "3★",
    inverter: "non-inverter",
    price: 31999,
    modelNumber: "125V VECTRA ELITE",
    features: [
      "High Energy Efficiency Ratio",
      "Anti-dust Filter",
      "Copper Condenser Coil",
      "Self Diagnosis",
      "Sleep Mode"
    ],
    image: "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.webp",
    images: [
      "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.webp",
      "/lovable-uploads/voltas/125V_VECTRA_ELITE/2.webp",
      "/lovable-uploads/voltas/125V_VECTRA_ELITE/3.webp",
      "/lovable-uploads/voltas/125V_VECTRA_ELITE/4.webp",
      "/lovable-uploads/voltas/125V_VECTRA_ELITE/5.webp"
    ],
    description: "Voltas 1 Ton 3 Star Window AC with high efficiency and value for money."
  },
  {
    id: "voltas-183-vectr-elegant-1.5-3",
    brand: "voltas",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "non-inverter",
    price: 37999,
    modelNumber: "183 VECTR ELEGANT",
    features: [
      "High Energy Efficiency Ratio",
      "Anti-dust Filter",
      "Copper Condenser Coil",
      "Self Diagnosis",
      "Sleep Mode"
    ],
    image: "/lovable-uploads/voltas/183_VECTR_ELEGANT/1.webp",
    images: [
      "/lovable-uploads/voltas/183_VECTR_ELEGANT/1.webp",
      "/lovable-uploads/voltas/183_VECTR_ELEGANT/2.webp",
      "/lovable-uploads/voltas/183_VECTR_ELEGANT/3.webp",
      "/lovable-uploads/voltas/183_VECTR_ELEGANT/4.webp"
    ],
    description: "Voltas 1.5 Ton 3 Star Split AC, perfect balance of performance and affordability."
  },
  {
    id: "voltas-185v-vectra-prism-1.5-5",
    brand: "voltas",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 44999,
    modelNumber: "185V VECTRA PRISM",
    features: [
      "Inverter Technology",
      "Anti-dust Filter",
      "Copper Condenser Coil",
      "Self Diagnosis",
      "Energy Efficient",
      "Smart Controls"
    ],
    image: "/lovable-uploads/voltas/185V_VECTRA_PRISM/1.webp",
    images: [
      "/lovable-uploads/voltas/185V_VECTRA_PRISM/1.webp",
      "/lovable-uploads/voltas/185V_VECTRA_PRISM/2.webp",
      "/lovable-uploads/voltas/185V_VECTRA_PRISM/3.webp",
      "/lovable-uploads/voltas/185V_VECTRA_PRISM/4.webp",
      "/lovable-uploads/voltas/185V_VECTRA_PRISM/5.webp"
    ],
    description: "Voltas 1.5 Ton 5 Star Inverter Split AC with premium features and energy efficiency."
  },

  // Daikin Products
  {
    id: "daikin-ftl30uv16-1-3",
    brand: "daikin",
    type: "split",
    tonnage: "1 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 35999,
    modelNumber: "FTL30UV16",
    features: [
      "Power Chill Operation",
      "Econo Mode",
      "Coanda Airflow",
      "PM 2.5 Filter",
      "Dew Clean Technology"
    ],
    image: "/lovable-uploads/Daikin/FTL30UV16/1.webp",
    images: [
      "/lovable-uploads/Daikin/FTL30UV16/1.webp",
      "/lovable-uploads/Daikin/FTL30UV16/2.jpg",
      "/lovable-uploads/Daikin/FTL30UV16/3.png",
      "/lovable-uploads/Daikin/FTL30UV16/4.jpg",
      "/lovable-uploads/Daikin/FTL30UV16/5.jpg"
    ],
    description: "Daikin 1 Ton 3 Star Inverter Split AC with Power Chill Operation."
  },
  {
    id: "daikin-ftl35uv16-1-5",
    brand: "daikin",
    type: "split",
    tonnage: "1 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 45999,
    modelNumber: "FTL35UV16",
    features: [
      "Power Chill Operation",
      "Coanda Airflow",
      "PM 2.5 Filter",
      "Dew Clean Technology",
      "Intelligent Eye",
      "Flash Streamer Technology"
    ],
    image: "/lovable-uploads/Daikin/FTL35UV16/1.jpg",
    images: [
      "/lovable-uploads/Daikin/FTL35UV16/1.jpg",
      "/lovable-uploads/Daikin/FTL35UV16/2.jpg",
      "/lovable-uploads/Daikin/FTL35UV16/3.jpg",
      "/lovable-uploads/Daikin/FTL35UV16/4.webp",
      "/lovable-uploads/Daikin/FTL35UV16/5.jpg"
    ],
    description: "Premium Daikin 1 Ton 5 Star Inverter Split AC with advanced air purification."
  },
  {
    id: "daikin-ftl50uv16-1.5-3",
    brand: "daikin",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 42999,
    modelNumber: "FTL50UV16",
    features: [
      "Power Chill Operation",
      "Econo Mode",
      "Coanda Airflow",
      "PM 2.5 Filter",
      "Dew Clean Technology"
    ],
    image: "/lovable-uploads/Daikin/FTL50UV16/1.png",
    images: [
      "/lovable-uploads/Daikin/FTL50UV16/1.png",
      "/lovable-uploads/Daikin/FTL50UV16/2.jpg",
      "/lovable-uploads/Daikin/FTL50UV16/3.jpg"
    ],
    description: "Daikin 1.5 Ton 3 Star Inverter Split AC with enhanced cooling capacity."
  },
  {
    id: "daikin-ftkl60uv16-1.5-5",
    brand: "daikin",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 52999,
    modelNumber: "FTKL60UV16",
    features: [
      "Power Chill Operation",
      "Coanda Airflow",
      "PM 2.5 Filter",
      "Dew Clean Technology",
      "Intelligent Eye",
      "Flash Streamer Technology"
    ],
    image: "/lovable-uploads/Daikin/FTKL60UV16/1.jpg",
    images: [
      "/lovable-uploads/Daikin/FTKL60UV16/1.jpg",
      "/lovable-uploads/Daikin/FTKL60UV16/2.jpg",
      "/lovable-uploads/Daikin/FTKL60UV16/3.jpg"
    ],
    description: "Premium Daikin 1.5 Ton 5 Star Inverter Split AC with advanced features."
  },
  {
    id: "daikin-ftkl71uv16-2-5",
    brand: "daikin",
    type: "split",
    tonnage: "2 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 64999,
    modelNumber: "FTKL71UV16",
    features: [
      "Power Chill Operation",
      "Coanda Airflow",
      "PM 2.5 Filter",
      "Dew Clean Technology",
      "Intelligent Eye",
      "Flash Streamer Technology"
    ],
    image: "/lovable-uploads/Daikin/FTKL71UV16/1.webp",
    images: [
      "/lovable-uploads/Daikin/FTKL71UV16/1.webp",
      "/lovable-uploads/Daikin/FTKL71UV16/2.jpg",
      "/lovable-uploads/Daikin/FTKL71UV16/3.jpg",
      "/lovable-uploads/Daikin/FTKL71UV16/4.jpg",
      "/lovable-uploads/Daikin/FTKL71UV16/5.jpg"
    ],
    description: "Daikin 2 Ton 5 Star Inverter Split AC for large rooms with premium cooling."
  },

  // Panasonic Products
  {
    id: "panasonic-eu12bky5-1-5",
    brand: "panasonic",
    type: "split",
    tonnage: "1 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 41999,
    modelNumber: "EU12BKY5",
    features: [
      "Inverter Technology",
      "Nanoe-G Air Purification",
      "Powerful Mode",
      "Econavi Sensor",
      "PM 0.1 Filter"
    ],
    image: "/lovable-uploads/panasonic/EU12BKY5/1.png",
    images: [
      "/lovable-uploads/panasonic/EU12BKY5/1.png",
      "/lovable-uploads/panasonic/EU12BKY5/2.jpg",
      "/lovable-uploads/panasonic/EU12BKY5/3.jpg",
      "/lovable-uploads/panasonic/EU12BKY5/4.jpg",
      "/lovable-uploads/panasonic/EU12BKY5/5.jpg"
    ],
    description: "Panasonic 1 Ton 5 Star Inverter Split AC with Nanoe-G technology for clean air."
  },
  {
    id: "panasonic-eu18aky5x-1.5-5",
    brand: "panasonic",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 48999,
    modelNumber: "EU18AKY5X",
    features: [
      "Inverter Technology",
      "Nanoe-G Air Purification",
      "Powerful Mode",
      "Econavi Sensor",
      "PM 0.1 Filter",
      "Wi-Fi Control"
    ],
    image: "/lovable-uploads/panasonic/EU18AKY5X/1.png",
    images: [
      "/lovable-uploads/panasonic/EU18AKY5X/1.png",
      "/lovable-uploads/panasonic/EU18AKY5X/2.jpg",
      "/lovable-uploads/panasonic/EU18AKY5X/3.jpg",
      "/lovable-uploads/panasonic/EU18AKY5X/4.jpg",
      "/lovable-uploads/panasonic/EU18AKY5X/5.jpg"
    ],
    description: "Panasonic 1.5 Ton 5 Star Inverter Split AC with advanced Nanoe-G air purification."
  },
  {
    id: "panasonic-eu24bky5-2-5",
    brand: "panasonic",
    type: "split",
    tonnage: "2 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 58999,
    modelNumber: "EU24BKY5",
    features: [
      "Inverter Technology",
      "Nanoe-G Air Purification",
      "Powerful Mode",
      "Econavi Sensor",
      "PM 0.1 Filter",
      "Wi-Fi Control"
    ],
    image: "/lovable-uploads/panasonic/EU24BKY5/1.png",
    images: [
      "/lovable-uploads/panasonic/EU24BKY5/1.png",
      "/lovable-uploads/panasonic/EU24BKY5/2.jpg",
      "/lovable-uploads/panasonic/EU24BKY5/3.jpg",
      "/lovable-uploads/panasonic/EU24BKY5/4.jpg",
      "/lovable-uploads/panasonic/EU24BKY5/5.jpg"
    ],
    description: "Panasonic 2 Ton 5 Star Inverter Split AC for large rooms with premium air purification."
  },

  // Hitachi Products
  {
    id: "hitachi-b318pcaiba-1.5-3",
    brand: "hitachi",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 38999,
    modelNumber: "B318PCAIBA",
    features: [
      "Inverter Technology",
      "Copper Coil",
      "Expandable Inverter",
      "Auto Clean",
      "High Ambient Cooling"
    ],
    image: "/lovable-uploads/hitachi/B318PCAIBA/1.jpg",
    images: [
      "/lovable-uploads/hitachi/B318PCAIBA/1.jpg",
      "/lovable-uploads/hitachi/B318PCAIBA/2.webp",
      "/lovable-uploads/hitachi/B318PCAIBA/3.webp"
    ],
    description: "Hitachi 1.5 Ton 3 Star Inverter Split AC with expandable inverter technology."
  },
  {
    id: "hitachi-e518pcbib-1.5-5",
    brand: "hitachi",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 48999,
    modelNumber: "E518PCBIB",
    features: [
      "Inverter Technology",
      "Copper Coil",
      "Expandable Inverter",
      "Auto Clean",
      "High Ambient Cooling",
      "Wi-Fi Control"
    ],
    image: "/lovable-uploads/hitachi/E518PCBIB/1.png",
    images: [
      "/lovable-uploads/hitachi/E518PCBIB/1.png",
      "/lovable-uploads/hitachi/E518PCBIB/2.jpg",
      "/lovable-uploads/hitachi/E518PCBIB/3.jpg",
      "/lovable-uploads/hitachi/E518PCBIB/4.jpg",
      "/lovable-uploads/hitachi/E518PCBIB/5.jpg"
    ],
    description: "Hitachi 1.5 Ton 5 Star Inverter Split AC with premium features and Wi-Fi control."
  },
  {
    id: "hitachi-e522pcbib-2-5",
    brand: "hitachi",
    type: "split",
    tonnage: "2 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 58999,
    modelNumber: "E522PCBIB",
    features: [
      "Inverter Technology",
      "Copper Coil",
      "Expandable Inverter",
      "Auto Clean",
      "High Ambient Cooling",
      "Wi-Fi Control"
    ],
    image: "/lovable-uploads/hitachi/E522PCBIB/1.jpg",
    images: [
      "/lovable-uploads/hitachi/E522PCBIB/1.jpg",
      "/lovable-uploads/hitachi/E522PCBIB/2.webp",
      "/lovable-uploads/hitachi/E522PCBIB/3.webp",
      "/lovable-uploads/hitachi/E522PCBIB/4.avif"
    ],
    description: "Hitachi 2 Ton 5 Star Inverter Split AC for large rooms with advanced cooling technology."
  },

  // Blue Star Products
  {
    id: "bluestar-312tku-1-3",
    brand: "bluestar",
    type: "split",
    tonnage: "1 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 34999,
    modelNumber: "312TKU",
    features: [
      "Inverter Technology",
      "Copper Coil",
      "Multi-stage Filtration",
      "Auto Clean",
      "Precision Cooling"
    ],
    image: "/lovable-uploads/bluestar/312TKU/1.webp",
    images: [
      "/lovable-uploads/bluestar/312TKU/1.webp",
      "/lovable-uploads/bluestar/312TKU/2.webp",
      "/lovable-uploads/bluestar/312TKU/3.webp",
      "/lovable-uploads/bluestar/312TKU/4.webp",
      "/lovable-uploads/bluestar/312TKU/5.webp"
    ],
    description: "Blue Star 1 Ton 3 Star Inverter Split AC with precision cooling technology."
  },
  {
    id: "bluestar-318tku-1.5-3",
    brand: "bluestar",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 41999,
    modelNumber: "318TKU",
    features: [
      "Inverter Technology",
      "Copper Coil",
      "Multi-stage Filtration",
      "Auto Clean",
      "Precision Cooling"
    ],
    image: "/lovable-uploads/bluestar/318TKU/1.webp",
    images: [
      "/lovable-uploads/bluestar/318TKU/1.webp",
      "/lovable-uploads/bluestar/318TKU/2.webp",
      "/lovable-uploads/bluestar/318TKU/3.webp"
    ],
    description: "Blue Star 1.5 Ton 3 Star Inverter Split AC with enhanced cooling capacity."
  },
  {
    id: "bluestar-324tku-2-3",
    brand: "bluestar",
    type: "split",
    tonnage: "2 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 48999,
    modelNumber: "324TKU",
    features: [
      "Inverter Technology",
      "Copper Coil",
      "Multi-stage Filtration",
      "Auto Clean",
      "Precision Cooling"
    ],
    image: "/lovable-uploads/bluestar/324TKU/1.webp",
    images: [
      "/lovable-uploads/bluestar/324TKU/1.webp",
      "/lovable-uploads/bluestar/324TKU/2.webp",
      "/lovable-uploads/bluestar/324TKU/3.webp",
      "/lovable-uploads/bluestar/324TKU/4.webp"
    ],
    description: "Blue Star 2 Ton 3 Star Inverter Split AC for large rooms with precision cooling."
  },

  // Mitsubishi Electric Products
  {
    id: "mitsubishi-agz13vf-1-3",
    brand: "mitsubishi-electric",
    type: "split",
    tonnage: "1 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 39999,
    modelNumber: "AGZ13VF",
    features: [
      "Inverter Technology",
      "Blue Fin Condenser",
      "Econo Cool",
      "Auto Filter Clean",
      "Jet Clean"
    ],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/1.jpg",
    images: [
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/1.jpg",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/2.png",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/3.png",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/4.png",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/5.png"
    ],
    description: "Mitsubishi Electric 1 Ton 3 Star Inverter Split AC with Blue Fin technology."
  },
  {
    id: "mitsubishi-agz18vf-1.5-3",
    brand: "mitsubishi-electric",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 46999,
    modelNumber: "AGZ18VF",
    features: [
      "Inverter Technology",
      "Blue Fin Condenser",
      "Econo Cool",
      "Auto Filter Clean",
      "Jet Clean"
    ],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/1.webp",
    images: [
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/1.webp",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/2.png",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/3.png",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/4.png"
    ],
    description: "Mitsubishi Electric 1.5 Ton 3 Star Inverter Split AC with advanced cooling technology."
  },
  {
    id: "mitsubishi-agz24vf-2-3",
    brand: "mitsubishi-electric",
    type: "split",
    tonnage: "2 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 55999,
    modelNumber: "AGZ24VF",
    features: [
      "Inverter Technology",
      "Blue Fin Condenser",
      "Econo Cool",
      "Auto Filter Clean",
      "Jet Clean"
    ],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ24VF/1.webp",
    images: [
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ24VF/1.webp",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ24VF/2.webp",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ24VF/3.webp",
      "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ24VF/4.webp"
    ],
    description: "Mitsubishi Electric 2 Ton 3 Star Inverter Split AC for large room cooling."
  },

  // Carrier Products
  {
    id: "carrier-xcel-edge-fxi-1.5-3",
    brand: "carrier",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 42999,
    modelNumber: "XCEL EDGE FXI",
    features: [
      "Flexicool Inverter",
      "Dual Filtration",
      "Auto Clean",
      "HD Filter",
      "Turbo Cool"
    ],
    image: "/lovable-uploads/carrier/XCEL_EDGE_FXI/1.jpg",
    images: [
      "/lovable-uploads/carrier/XCEL_EDGE_FXI/1.jpg",
      "/lovable-uploads/carrier/XCEL_EDGE_FXI/2.webp",
      "/lovable-uploads/carrier/XCEL_EDGE_FXI/3.webp",
      "/lovable-uploads/carrier/XCEL_EDGE_FXI/4.webp",
      "/lovable-uploads/carrier/XCEL_EDGE_FXI/5.webp"
    ],
    description: "Carrier 1.5 Ton 3 Star Flexicool Inverter Split AC with dual filtration technology."
  },
  {
    id: "carrier-xcel-lumo-fxi-1.5-5",
    brand: "carrier",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 52999,
    modelNumber: "XCEL LUMO FXI",
    features: [
      "Flexicool Inverter",
      "Dual Filtration",
      "Auto Clean",
      "HD Filter",
      "Turbo Cool",
      "Wi-Fi Control"
    ],
    image: "/lovable-uploads/carrier/XCEL_LUMO_FXI I/1.jpg",
    images: [
      "/lovable-uploads/carrier/XCEL_LUMO_FXI I/1.jpg",
      "/lovable-uploads/carrier/XCEL_LUMO_FXI I/2.webp",
      "/lovable-uploads/carrier/XCEL_LUMO_FXI I/3.webp",
      "/lovable-uploads/carrier/XCEL_LUMO_FXI I/4.webp",
      "/lovable-uploads/carrier/XCEL_LUMO_FXI I/5.webp"
    ],
    description: "Carrier 1.5 Ton 5 Star Flexicool Inverter Split AC with premium features and Wi-Fi control."
  },

  // O General Products
  {
    id: "ogeneral-18cgaa-1.5-3",
    brand: "o-general",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 44999,
    modelNumber: "18CGAA",
    features: [
      "Inverter Technology",
      "Human Sensor",
      "Auto Clean",
      "Dual Barrier Coating",
      "Golden Fin"
    ],
    image: "/lovable-uploads/o-general/18CGAA/1.jpg",
    images: [
      "/lovable-uploads/o-general/18CGAA/1.jpg",
      "/lovable-uploads/o-general/18CGAA/2.jpg",
      "/lovable-uploads/o-general/18CGAA/3.jpg",
      "/lovable-uploads/o-general/18CGAA/4.jpg"
    ],
    description: "O General 1.5 Ton 3 Star Inverter Split AC with human sensor technology."
  },
  {
    id: "ogeneral-18chaa-1.5-5",
    brand: "o-general",
    type: "split",
    tonnage: "1.5 Ton",
    starRating: "5★",
    inverter: "inverter",
    price: 54999,
    modelNumber: "18CHAA",
    features: [
      "Inverter Technology",
      "Human Sensor",
      "Auto Clean",
      "Dual Barrier Coating",
      "Golden Fin",
      "Premium Design"
    ],
    image: "/lovable-uploads/o-general/18CHAA/1.jpg",
    images: [
      "/lovable-uploads/o-general/18CHAA/1.jpg",
      "/lovable-uploads/o-general/18CHAA/2.jpg",
      "/lovable-uploads/o-general/18CHAA/3.jpg",
      "/lovable-uploads/o-general/18CHAA/4.jpg",
      "/lovable-uploads/o-general/18CHAA/5.jpg"
    ],
    description: "O General 1.5 Ton 5 Star Inverter Split AC with premium features and elegant design."
  },
  {
    id: "ogeneral-24cpaa-2-3",
    brand: "o-general",
    type: "split",
    tonnage: "2 Ton",
    starRating: "3★",
    inverter: "inverter",
    price: 52999,
    modelNumber: "24CPAA",
    features: [
      "Inverter Technology",
      "Human Sensor",
      "Auto Clean",
      "Dual Barrier Coating",
      "Golden Fin"
    ],
    image: "/lovable-uploads/o-general/24CPAA/1.png",
    images: [
      "/lovable-uploads/o-general/24CPAA/1.png",
      "/lovable-uploads/o-general/24CPAA/2.png",
      "/lovable-uploads/o-general/24CPAA/3.png",
      "/lovable-uploads/o-general/24CPAA/4.png"
    ],
    description: "O General 2 Ton 3 Star Inverter Split AC for large room cooling with human sensor."
  }
];
