
export interface ACProduct {
  id: string;
  brand: string;
  type: string;
  inverterType: string;
  tonnage: string;
  starRating: string;
  modelNumber: string;
  price: number;
  features: string[];
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  image: string;
}

export interface ACType {
  id: string;
  name: string;
  image: string;
}

export interface InverterType {
  id: string;
  name: string;
  description: string;
}

export const brands: Brand[] = [
  {
    id: "o-general",
    name: "O General",
    image: "/lovable-uploads/o-general/12CGAA/1.png"
  },
  {
    id: "mitsubishi-heavy",
    name: "Mitsubishi Heavy",
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13CRS/1.png"
  },
  {
    id: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/1.jpg"
  },
  {
    id: "mitsubishi-akabishi",
    name: "Mitsubishi Akabishi",
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE13VG/1.png"
  },
  {
    id: "daikin",
    name: "Daikin",
    image: "/lovable-uploads/Daikin/FTE60UV16/1.webp"
  },
  {
    id: "panasonic",
    name: "Panasonic",
    image: "/lovable-uploads/panasonic/EU12BKY5/1.png"
  },
  {
    id: "blue-star",
    name: "Blue Star",
    image: "/lovable-uploads/bluestar/312TKU/1.webp"
  },
  {
    id: "carrier",
    name: "Carrier",
    image: "/lovable-uploads/carrier/DURAWHITE/1.jpg"
  },
  {
    id: "hitachi",
    name: "Hitachi",
    image: "/lovable-uploads/hitachi/B222PCAIBA/1.webp"
  },
  {
    id: "lg",
    name: "LG",
    image: "/lovable-uploads/lg/US-Q12CNXE/1.jpg"
  },
  {
    id: "voltas",
    name: "Voltas",
    image: "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.webp"
  },
  {
    id: "hisense",
    name: "Hisense",
    image: "/lovable-uploads/hisense/AS-12TF4R3AJ/1.jpg"
  },
  {
    id: "godrej",
    name: "Godrej",
    image: "/lovable-uploads/godrej/1-0T-INV-3STAR/1.webp"
  },
  {
    id: "lloyd",
    name: "Lloyd",
    image: "/lovable-uploads/lloyd/GLS12C3XWADS/1.avif"
  },
  {
    id: "vestar",
    name: "Vestar",
    image: "/lovable-uploads/vestar/VASKD183FEI2H/1.jpg"
  },
  {
    id: "samsung",
    name: "Samsung",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400"
  }
];

export const acTypes: ACType[] = [
  {
    id: "split",
    name: "Split AC",
    image: "/lovable-uploads/o-general/12CGAA/1.png"
  },
  {
    id: "window",
    name: "Window AC",
    image: "/lovable-uploads/o-general/14CHWA/1.webp"
  },
  {
    id: "cassette",
    name: "Cassette AC",
    image: "/lovable-uploads/o-general/24CGTB/1.jpg"
  }
];

export const inverterTypes: InverterType[] = [
  {
    id: "inverter",
    name: "Inverter",
    description: "Energy efficient with variable speed compressor"
  },
  {
    id: "non-inverter",
    name: "Non-Inverter",
    description: "Fixed speed compressor, lower initial cost"
  }
];

export const tonnageOptions = [
  { id: "1", name: "1 Ton", value: "1" },
  { id: "1.5", name: "1.5 Ton", value: "1.5" },
  { id: "2", name: "2 Ton", value: "2" },
  { id: "2.5", name: "2.5 Ton", value: "2.5" },
  { id: "3", name: "3 Ton", value: "3" }
];

export const starRatings = [
  { id: "3", name: "3 Star", value: "3" },
  { id: "4", name: "4 Star", value: "4" },
  { id: "5", name: "5 Star", value: "5" }
];

export const acProducts: ACProduct[] = [
  // O General Products
  {
    id: "og-asgg12cgaa-1",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "ASGG12CGAA",
    price: 45000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/12CGAA/1.png"
  },
  {
    id: "og-asgg12cgtb-1",
    brand: "o-general",
    type: "split",
    inverterType: "inverter", 
    tonnage: "1",
    starRating: "5",
    modelNumber: "ASGG12CGTB",
    price: 52000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin", "PM 2.5 Filter"],
    image: "/lovable-uploads/o-general/12CGTB/1.png"
  },
  {
    id: "og-asgg12cpaa-1",
    brand: "o-general",
    type: "split", 
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "ASGG12CPAA",
    price: 38000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/12CPAA/1.jpg"
  },
  {
    id: "og-asgg12cpab-1",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1", 
    starRating: "5",
    modelNumber: "ASGG12CPAB",
    price: 48000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin", "Econo Mode"],
    image: "/lovable-uploads/o-general/12CPAB/1.jpg"
  },
  {
    id: "og-axgt14bmaa-1",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.2",
    starRating: "5",
    modelNumber: "AXGT14BMAA",
    price: 55000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/14BMAA/1.png"
  },
  {
    id: "og-awgt14chwa-1",
    brand: "o-general",
    type: "window",
    inverterType: "non-inverter",
    tonnage: "1.2",
    starRating: "3",
    modelNumber: "AWGT14CHWA",
    price: 28000,
    features: ["Rotary Compressor", "Auto Restart", "Sleep Mode"],
    image: "/lovable-uploads/o-general/14CHWA/1.webp"
  },
  {
    id: "og-asgg18bmaa-1.5",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "ASGG18BMAA",
    price: 62000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/18BMAA/1.jpg"
  },
  {
    id: "og-asgg18buta-1.5",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "ASGG18BUTA",
    price: 48000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/18BUTA/1.png"
  },
  {
    id: "og-auxg18cetb-1.5",
    brand: "o-general",
    type: "cassette",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "AUXG18CETB",
    price: 75000,
    features: ["360° Air Flow", "Auto Clean Function", "Wireless Remote"],
    image: "/lovable-uploads/o-general/18CETB/1.png"
  },
  {
    id: "og-asgg18cgaa-1.5",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "ASGG18CGAA",
    price: 55000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/18CGAA/1.jpg"
  },
  {
    id: "og-asgg18cgtb-1.5",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "ASGG18CGTB",
    price: 62000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin", "PM 2.5 Filter"],
    image: "/lovable-uploads/o-general/18CGTB/1.png"
  },
  {
    id: "og-asgg18chaa-1.5",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "ASGG18CHAA",
    price: 58000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/18CHAA/1.jpg"
  },
  {
    id: "og-asgg18cnaa-1.5",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "ASGG18CNAA",
    price: 52000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/18CNAA/1.png"
  },
  {
    id: "og-asgg18cpab-1.5",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "ASGG18CPAB",
    price: 58000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin", "Econo Mode"],
    image: "/lovable-uploads/o-general/18CPAB/1.png"
  },
  {
    id: "og-asgg24bmaa-2",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "ASGG24BMAA",
    price: 72000,
    features: ["Dual Barrier Coating", "Human Sensor", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/24BMAA/1.png"
  },
  {
    id: "og-asgg24buta-2",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "ASGG24BUTA",
    price: 58000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/24BUTA/1.png"
  },
  {
    id: "og-auxg24ceta-2",
    brand: "o-general",
    type: "cassette",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "AUXG24CETA",
    price: 85000,
    features: ["360° Air Flow", "Auto Clean Function", "Wireless Remote"],
    image: "/lovable-uploads/o-general/24CETA/1.jpg"
  },
  {
    id: "og-auxg24cgtb-2",
    brand: "o-general",
    type: "cassette",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "AUXG24CGTB",
    price: 95000,
    features: ["360° Air Flow", "Auto Clean Function", "Wireless Remote", "PM 2.5 Filter"],
    image: "/lovable-uploads/o-general/24CGTB/1.jpg"
  },
  {
    id: "og-asgg24cpaa-2",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "ASGG24CPAA",
    price: 65000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/24CPAA/1.png"
  },
  {
    id: "og-asgg24cpab-2",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "ASGG24CPAB",
    price: 68000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin", "Econo Mode"],
    image: "/lovable-uploads/o-general/24CPAB/1.png"
  },
  {
    id: "og-asgg24ggaa-2",
    brand: "o-general",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "ASGG24GGAA",
    price: 62000,
    features: ["Dual Barrier Coating", "Auto Clean Function", "Golden Fin"],
    image: "/lovable-uploads/o-general/24GGAA/1.png"
  },
  {
    id: "og-auxg30ceb-2.5",
    brand: "o-general",
    type: "cassette",
    inverterType: "inverter",
    tonnage: "2.5",
    starRating: "5",
    modelNumber: "AUXG30CEB",
    price: 110000,
    features: ["360° Air Flow", "Auto Clean Function", "Wireless Remote"],
    image: "/lovable-uploads/o-general/30CEB/1.png"
  },
  {
    id: "og-auxg36ceb-3",
    brand: "o-general",
    type: "cassette",
    inverterType: "inverter",
    tonnage: "3",
    starRating: "5",
    modelNumber: "AUXG36CEB",
    price: 125000,
    features: ["360° Air Flow", "Auto Clean Function", "Wireless Remote"],
    image: "/lovable-uploads/o-general/36CEB/1.png"
  },

  // Mitsubishi Heavy Products
  {
    id: "mh-srk13crs-1",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "SRK13CRS",
    price: 42000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13CRS/1.png"
  },
  {
    id: "mh-srk13yxs-w6-1",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "SRK13YXS-W6",
    price: 48000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode", "Wi-Fi Control"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YXS-W6/1.webp"
  },
  {
    id: "mh-srk13yym-1",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "SRK13YYM",
    price: 52000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode", "Plasma Quad Plus"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.webp"
  },
  {
    id: "mh-srk15cxs-1.2",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.2",
    starRating: "3",
    modelNumber: "SRK15CXS",
    price: 45000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK15CXS/SRK15CXS.png"
  },
  {
    id: "mh-srk20css-1.5",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "SRK20CSS",
    price: 52000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CSS/1.webp"
  },
  {
    id: "mh-srk20cxs-1.5",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "SRK20CXS",
    price: 55000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CXS/1.webp"
  },
  {
    id: "mh-srk20yym-1.5",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "SRK20YYM",
    price: 62000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode", "Plasma Quad Plus"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20YYM/1.jpg"
  },
  {
    id: "mh-srk24cw-2",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "SRK24CW",
    price: 62000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24CW/1.png"
  },
  {
    id: "mh-srk24yvs-2",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "SRK24YVS",
    price: 72000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode", "Plasma Quad Plus"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/1.png"
  },
  {
    id: "mh-srk24yym-2",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "SRK24YYM",
    price: 75000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode", "Plasma Quad Plus"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YYM/SRK24YYM.webp"
  },
  {
    id: "mh-srk25cwx-2",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "SRK25CWX",
    price: 65000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK25CWX/1.jpg"
  },
  {
    id: "mh-srk100ya-3",
    brand: "mitsubishi-heavy",
    type: "split",
    inverterType: "inverter",
    tonnage: "3",
    starRating: "5",
    modelNumber: "SRK100YA",
    price: 95000,
    features: ["Dual Stage Filtration", "Auto Clean", "Turbo Mode", "Heavy Duty"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK100YA/1.webp"
  },

  // Mitsubishi Electric Products
  {
    id: "me-msz-agz13vf-1",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "MSZ-AGZ13VF",
    price: 55000,
    features: ["Plasma Quad Plus", "i-see Sensor", "Dual Barrier Coating"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ13VF/1.jpg"
  },
  {
    id: "me-msz-agz18vf-1.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "MSZ-AGZ18VF",
    price: 65000,
    features: ["Plasma Quad Plus", "i-see Sensor", "Dual Barrier Coating"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/1.webp"
  },
  {
    id: "me-msz-agz24vf-2",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "MSZ-AGZ24VF",
    price: 75000,
    features: ["Plasma Quad Plus", "i-see Sensor", "Dual Barrier Coating"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ24VF/1.webp"
  },
  {
    id: "me-msz-ajz13vf-1",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "MSZ-AJZ13VF",
    price: 45000,
    features: ["Plasma Quad Plus", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AJZ13VF/1.webp"
  },
  {
    id: "me-msz-ajz18vf-1.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "MSZ-AJZ18VF",
    price: 55000,
    features: ["Plasma Quad Plus", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AJZ18VF/1.webp"
  },
  {
    id: "me-msz-ajz22vf-1.8",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "MSZ-AJZ22VF",
    price: 58000,
    features: ["Plasma Quad Plus", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/AJZ22VF/1.webp"
  },
  {
    id: "me-muz-gn18vf-1.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "MUZ-GN18VF",
    price: 52000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GN18VF/1.jpg"
  },
  {
    id: "me-muz-gn22vf-1.8",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "MUZ-GN22VF",
    price: 55000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GN22VF/1.jpg"
  },
  {
    id: "me-muz-gn26vf-2.2",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "2.2",
    starRating: "3",
    modelNumber: "MUZ-GN26VF",
    price: 62000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GN26VF/1.jpg"
  },
  {
    id: "me-msz-gr13vf-1",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "MSZ-GR13VF",
    price: 42000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GR13VF/1.jpg"
  },
  {
    id: "me-msz-gr13vft-1",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "MSZ-GR13VFT",
    price: 45000,
    features: ["Basic Inverter", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GR13VFT/1.jpg"
  },
  {
    id: "me-msz-gr18vf-1.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "MSZ-GR18VF",
    price: 52000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GR18VF/1.jpg"
  },
  {
    id: "me-msz-gr18vft-1.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "MSZ-GR18VFT",
    price: 55000,
    features: ["Basic Inverter", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GR18VFT/1.jpg"
  },
  {
    id: "me-msz-gr22vf-1.8",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "MSZ-GR22VF",
    price: 58000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GR22VF/1.jpg"
  },
  {
    id: "me-msz-gr22vft-1.8",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "MSZ-GR22VFT",
    price: 60000,
    features: ["Basic Inverter", "Auto Clean", "Turbo Mode"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/GR22VFT/1.jpg"
  },
  {
    id: "me-msz-jp13vf-1",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "MSZ-JP13VF",
    price: 58000,
    features: ["Plasma Quad Plus", "i-see Sensor", "Dual Barrier Coating", "Premium Design"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JP13VF/1.jpg"
  },
  {
    id: "me-msz-jp18vf-1.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "MSZ-JP18VF",
    price: 68000,
    features: ["Plasma Quad Plus", "i-see Sensor", "Dual Barrier Coating", "Premium Design"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JP18VF/1.jpg"
  },
  {
    id: "me-msz-jp22vf-1.8",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "5",
    modelNumber: "MSZ-JP22VF",
    price: 75000,
    features: ["Plasma Quad Plus", "i-see Sensor", "Dual Barrier Coating", "Premium Design"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JP22VF/1.jpg"
  },
  {
    id: "me-puz-jr30vf-2.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "2.5",
    starRating: "5",
    modelNumber: "PUZ-JR30VF",
    price: 85000,
    features: ["High Capacity", "Auto Clean", "Heavy Duty"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JR30VF/1.jpg"
  },
  {
    id: "me-puz-jr36vf-3",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "3",
    starRating: "5",
    modelNumber: "PUZ-JR36VF",
    price: 95000,
    features: ["High Capacity", "Auto Clean", "Heavy Duty"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JR36VF/1.jpg"
  },
  {
    id: "me-msz-jx13vf-1",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "MSZ-JX13VF",
    price: 48000,
    features: ["Standard Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JX13VF/1.webp"
  },
  {
    id: "me-msz-jx18vf-1.5",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "MSZ-JX18VF",
    price: 55000,
    features: ["Standard Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JX18VF/1.webp"
  },
  {
    id: "me-msz-jx22vf-1.8",
    brand: "mitsubishi-electric",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "MSZ-JX22VF",
    price: 62000,
    features: ["Standard Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec/JX22VF/1.jpg"
  },

  // Mitsubishi Akabishi Products
  {
    id: "ma-msz-ae13vg-1",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "MSZ-AE13VG",
    price: 38000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE13VG/1.png"
  },
  {
    id: "ma-msz-ae18vg-1.5",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "MSZ-AE18VG",
    price: 45000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE18VG/1.png"
  },
  {
    id: "ma-msz-ae22vg-1.8",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "MSZ-AE22VG",
    price: 52000,
    features: ["Basic Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE22VG/1.jpg"
  },
  {
    id: "ma-msz-se13vg-1",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "MSZ-SE13VG",
    price: 45000,
    features: ["Advanced Inverter", "Auto Clean", "Energy Efficient"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/SE13VG/1.webp"
  },
  {
    id: "ma-msz-se18vg-1.5",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "MSZ-SE18VG",
    price: 52000,
    features: ["Advanced Inverter", "Auto Clean", "Energy Efficient"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/SE18VG/1.webp"
  },
  {
    id: "ma-msz-se22vg-1.8",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "5",
    modelNumber: "MSZ-SE22VG",
    price: 58000,
    features: ["Advanced Inverter", "Auto Clean", "Energy Efficient"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/SE22VG/1.png"
  },
  {
    id: "ma-msz-ue13vg-1",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "MSZ-UE13VG",
    price: 42000,
    features: ["Standard Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/UE13VG/1.jpg"
  },
  {
    id: "ma-msz-ue18vg-1.5",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "MSZ-UE18VG",
    price: 48000,
    features: ["Standard Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/UE18VG/1.webp"
  },
  {
    id: "ma-msz-ue22vg-1.8",
    brand: "mitsubishi-akabishi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "MSZ-UE22VG",
    price: 55000,
    features: ["Standard Inverter", "Auto Clean"],
    image: "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/UE22VG/1.jpg"
  },

  // Daikin Products
  {
    id: "dk-fte60uv16-2",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "FTE60UV16",
    price: 72000,
    features: ["Power Chill Operation", "Coanda Airflow", "Stabilizer Free Operation"],
    image: "/lovable-uploads/Daikin/FTE60UV16/1.webp"
  },
  {
    id: "dk-ftkc35uv16-1",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "FTKC35UV16",
    price: 45000,
    features: ["Power Chill Operation", "Coanda Airflow", "PM 2.5 Filter"],
    image: "/lovable-uploads/Daikin/FTKC35UV16/1.webp"
  },
  {
    id: "dk-ftkl60uv16-2",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "FTKL60UV16",
    price: 75000,
    features: ["Power Chill Operation", "Coanda Airflow", "Stabilizer Free Operation", "PM 2.5 Filter"],
    image: "/lovable-uploads/Daikin/FTKL60UV16/1.jpg"
  },
  {
    id: "dk-ftkl71uv16-2.5",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "2.5",
    starRating: "5",
    modelNumber: "FTKL71UV16",
    price: 85000,
    features: ["Power Chill Operation", "Coanda Airflow", "Stabilizer Free Operation", "PM 2.5 Filter"],
    image: "/lovable-uploads/Daikin/FTKL71UV16/1.webp"
  },
  {
    id: "dk-ftkl90uv16-3",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "3",
    starRating: "5",
    modelNumber: "FTKL90UV16",
    price: 95000,
    features: ["Power Chill Operation", "Coanda Airflow", "Stabilizer Free Operation", "PM 2.5 Filter"],
    image: "/lovable-uploads/Daikin/FTKL90UV16/1.jpg"
  },
  {
    id: "dk-ftkm60uv16-2",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "FTKM60UV16",
    price: 65000,
    features: ["Power Chill Operation", "Coanda Airflow", "PM 2.5 Filter"],
    image: "/lovable-uploads/Daikin/FTKM60UV16/1.webp"
  },
  {
    id: "dk-ftku35uv16-1",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "FTKU35UV16",
    price: 52000,
    features: ["Power Chill Operation", "Coanda Airflow", "Stabilizer Free Operation", "Daikin Eye"],
    image: "/lovable-uploads/Daikin/FTKU35UV16/1.png"
  },
  {
    id: "dk-ftku50uv16-1.5",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "FTKU50UV16",
    price: 62000,
    features: ["Power Chill Operation", "Coanda Airflow", "Stabilizer Free Operation", "Daikin Eye"],
    image: "/lovable-uploads/Daikin/FTKU50UV16/1.png"
  },
  {
    id: "dk-ftl30uv16-1",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "FTL30UV16",
    price: 42000,
    features: ["Power Chill Operation", "Coanda Airflow"],
    image: "/lovable-uploads/Daikin/FTL30UV16/1.webp"
  },
  {
    id: "dk-ftl35uv16-1",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "FTL35UV16",
    price: 45000,
    features: ["Power Chill Operation", "Coanda Airflow"],
    image: "/lovable-uploads/Daikin/FTL35UV16/1.jpg"
  },
  {
    id: "dk-ftl50uv16-1.5",
    brand: "daikin",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "FTL50UV16",
    price: 55000,
    features: ["Power Chill Operation", "Coanda Airflow"],
    image: "/lovable-uploads/Daikin/FTL50UV16/1.png"
  },
  {
    id: "dk-gtkc50uv16-1.5",
    brand: "daikin",
    type: "cassette",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "GTKC50UV16",
    price: 75000,
    features: ["360° Air Flow", "Power Chill Operation", "Coanda Airflow"],
    image: "/lovable-uploads/Daikin/GTKC50UV16/1.png"
  },
  {
    id: "dk-gtl50uv16-1.5",
    brand: "daikin",
    type: "cassette",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "GTL50UV16",
    price: 85000,
    features: ["360° Air Flow", "Power Chill Operation", "Coanda Airflow", "PM 2.5 Filter"],
    image: "/lovable-uploads/Daikin/GTL50UV16/1.webp"
  },

  // Panasonic Products
  {
    id: "ps-cs-eu12bky5-1",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "CS-EU12BKY5",
    price: 48000,
    features: ["nanoe-G", "Intelligent Eco", "Auto Climate Control"],
    image: "/lovable-uploads/panasonic/EU12BKY5/1.png"
  },
  {
    id: "ps-cs-eu12bky5fm-1",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "CS-EU12BKY5FM",
    price: 52000,
    features: ["nanoe-G", "Intelligent Eco", "Auto Climate Control", "WiFi Control"],
    image: "/lovable-uploads/panasonic/EU12BKY5FM/1.png"
  },
  {
    id: "ps-cs-eu18aky5x-1.5",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "CS-EU18AKY5X",
    price: 58000,
    features: ["nanoe-G", "Intelligent Eco", "Auto Climate Control"],
    image: "/lovable-uploads/panasonic/EU18AKY5X/1.png"
  },
  {
    id: "ps-cs-eu18aky5xfm-1.5",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "CS-EU18AKY5XFM",
    price: 62000,
    features: ["nanoe-G", "Intelligent Eco", "Auto Climate Control", "WiFi Control"],
    image: "/lovable-uploads/panasonic/EU18AKY5XFM/1.png"
  },
  {
    id: "ps-cs-eu18bky3fm-1.5",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "CS-EU18BKY3FM",
    price: 48000,
    features: ["Intelligent Eco", "Auto Climate Control", "WiFi Control"],
    image: "/lovable-uploads/panasonic/EU18BKY3FM/1.png"
  },
  {
    id: "ps-cs-eu24bky3-2",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "CS-EU24BKY3",
    price: 58000,
    features: ["Intelligent Eco", "Auto Climate Control"],
    image: "/lovable-uploads/panasonic/EU24BKY3/1.png"
  },
  {
    id: "ps-cs-eu24bky5-2",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "CS-EU24BKY5",
    price: 68000,
    features: ["nanoe-G", "Intelligent Eco", "Auto Climate Control"],
    image: "/lovable-uploads/panasonic/EU24BKY5/1.png"
  },
  {
    id: "ps-cs-kn12bky-1",
    brand: "panasonic",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "CS-KN12BKY",
    price: 32000,
    features: ["Basic Cooling", "Auto Restart"],
    image: "/lovable-uploads/panasonic/KN12BKY/1.png"
  },
  {
    id: "ps-cs-kn18bky-1.5",
    brand: "panasonic",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "CS-KN18BKY",
    price: 38000,
    features: ["Basic Cooling", "Auto Restart"],
    image: "/lovable-uploads/panasonic/KN18BKY/1.png"
  },
  {
    id: "ps-cs-kn24bky-2",
    brand: "panasonic",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "CS-KN24BKY",
    price: 45000,
    features: ["Basic Cooling", "Auto Restart"],
    image: "/lovable-uploads/panasonic/KN24BKY/1.png"
  },
  {
    id: "ps-cs-ru12bky-1",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "CS-RU12BKY",
    price: 42000,
    features: ["Basic Inverter", "Auto Climate Control"],
    image: "/lovable-uploads/panasonic/RU12BKY/1.png"
  },
  {
    id: "ps-cs-ru18aky-1.5",
    brand: "panasonic",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "CS-RU18AKY",
    price: 48000,
    features: ["Basic Inverter", "Auto Climate Control"],
    image: "/lovable-uploads/panasonic/RU18AKY/1.png"
  },

  // Blue Star Products
  {
    id: "bs-ic312tku-1",
    brand: "blue-star",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "IC312TKU",
    price: 38000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Self Diagnosis"],
    image: "/lovable-uploads/bluestar/312TKU/1.webp"
  },
  {
    id: "bs-ic312tnu-1",
    brand: "blue-star",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "IC312TNU",
    price: 28000,
    features: ["Copper Condenser", "Anti Bacterial Filter"],
    image: "/lovable-uploads/bluestar/312TNU/1.webp"
  },
  {
    id: "bs-ic318tku-1.5",
    brand: "blue-star",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "IC318TKU",
    price: 45000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Self Diagnosis"],
    image: "/lovable-uploads/bluestar/318TKU/1.webp"
  },
  {
    id: "bs-ic318tnu-1.5",
    brand: "blue-star",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "IC318TNU",
    price: 35000,
    features: ["Copper Condenser", "Anti Bacterial Filter"],
    image: "/lovable-uploads/bluestar/318TNU/1.webp"
  },
  {
    id: "bs-ic324dnu-2",
    brand: "blue-star",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "IC324DNU",
    price: 42000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Dual Filter"],
    image: "/lovable-uploads/bluestar/324DNU/1.webp"
  },
  {
    id: "bs-ic324tku-2",
    brand: "blue-star",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "IC324TKU",
    price: 52000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Self Diagnosis"],
    image: "/lovable-uploads/bluestar/324TKU/1.webp"
  },
  {
    id: "bs-ic512tnu-1.5",
    brand: "blue-star",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "IC512TNU",
    price: 48000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Energy Efficient"],
    image: "/lovable-uploads/bluestar/512TNU/1.webp"
  },
  {
    id: "bs-ic512tnurs-1.5",
    brand: "blue-star",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "IC512TNURS",
    price: 52000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Energy Efficient", "Remote Control"],
    image: "/lovable-uploads/bluestar/512TNURS/1.webp"
  },
  {
    id: "bs-ic518nnur-1.5",
    brand: "blue-star",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "IC518NNUR",
    price: 45000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Energy Efficient"],
    image: "/lovable-uploads/bluestar/518NNUR/1.webp"
  },
  {
    id: "bs-ic524tkur-2",
    brand: "blue-star",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "IC524TKUR",
    price: 62000,
    features: ["Copper Condenser", "Anti Bacterial Filter", "Self Diagnosis", "Energy Efficient"],
    image: "/lovable-uploads/bluestar/524TKUR/1.webp"
  },
  {
    id: "bs-im330aanu1-2.5",
    brand: "blue-star",
    type: "split",
    inverterType: "inverter",
    tonnage: "2.5",
    starRating: "3",
    modelNumber: "IM330AANU1",
    price: 68000,
    features: ["Multi Zone", "Copper Condenser", "Anti Bacterial Filter"],
    image: "/lovable-uploads/bluestar/IM330AANU1/1.webp"
  },

  // Carrier Products
  {
    id: "cr-durawhite-1",
    brand: "carrier",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "DURAWHITE 1T",
    price: 32000,
    features: ["Dura Base", "Auto Restart", "Sleep Mode"],
    image: "/lovable-uploads/carrier/DURAWHITE/1.jpg"
  },
  {
    id: "cr-xcel-edge-fxi-1",
    brand: "carrier",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "XCEL EDGE FXI 1T",
    price: 42000,
    features: ["Advanced Filter", "Auto Clean", "Energy Efficient"],
    image: "/lovable-uploads/carrier/XCEL_EDGE_FXI/1.jpg"
  },
  {
    id: "cr-xcel-lumo-fxi-1.5",
    brand: "carrier",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "XCEL LUMO FXI 1.5T",
    price: 58000,
    features: ["Advanced Filter", "Auto Clean", "Energy Efficient", "Smart Control"],
    image: "/lovable-uploads/carrier/XCEL_LUMO_FXI I/1.jpg"
  },
  {
    id: "cr-xceledge-1.5",
    brand: "carrier",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "XCEL EDGE 1.5T",
    price: 48000,
    features: ["Advanced Filter", "Auto Clean"],
    image: "/lovable-uploads/carrier/XCELedge/XCELedge.jpg"
  },
  {
    id: "cr-xtrem-edge-2",
    brand: "carrier",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "XTREM EDGE 2T",
    price: 68000,
    features: ["Advanced Filter", "Auto Clean", "Energy Efficient", "Premium Design"],
    image: "/lovable-uploads/carrier/XTREM EDGE/1.jpg"
  },
  {
    id: "cr-xcel-lumo-fxi-2",
    brand: "carrier",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "XCEL LUMO FXI 2T",
    price: 75000,
    features: ["Advanced Filter", "Auto Clean", "Energy Efficient", "Smart Control"],
    image: "/lovable-uploads/carrier/Xcel-Lumo-Fxi-/Xcel-Lumo-Fxi-.jpg"
  },

  // Hitachi Products
  {
    id: "ht-rsb222pcaiba-1.8",
    brand: "hitachi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "3",
    modelNumber: "RSB222PCAIBA",
    price: 48000,
    features: ["Copper Condenser", "Auto Clean", "Tropical Inverter"],
    image: "/lovable-uploads/hitachi/B222PCAIBA/1.webp"
  },
  {
    id: "ht-rsb312pcaiba1-1",
    brand: "hitachi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "RSB312PCAIBA1",
    price: 42000,
    features: ["Copper Condenser", "Auto Clean", "Tropical Inverter"],
    image: "/lovable-uploads/hitachi/B312PCAIBA1/1.jpg"
  },
  {
    id: "ht-rsb318pcaiba-1.5",
    brand: "hitachi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "RSB318PCAIBA",
    price: 52000,
    features: ["Copper Condenser", "Auto Clean", "Tropical Inverter"],
    image: "/lovable-uploads/hitachi/B318PCAIBA/1.jpg"
  },
  {
    id: "ht-rse312pcaibs-1",
    brand: "hitachi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "RSE312PCAIBS",
    price: 48000,
    features: ["Copper Condenser", "Auto Clean", "Tropical Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/E312PCAIBS/1.png"
  },
  {
    id: "ht-rse518pcbib-1.5",
    brand: "hitachi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "RSE518PCBIB",
    price: 58000,
    features: ["Copper Condenser", "Auto Clean", "Tropical Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/E518PCBIB/1.png"
  },
  {
    id: "ht-rse522pcbib-1.8",
    brand: "hitachi",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.8",
    starRating: "5",
    modelNumber: "RSE522PCBIB",
    price: 62000,
    features: ["Copper Condenser", "Auto Clean", "Tropical Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/E522PCBIB/1.jpg"
  },
  {
    id: "ht-rsg324pcbisf-2",
    brand: "hitachi",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "RSG324PCBISF",
    price: 72000,
    features: ["Copper Condenser", "Auto Clean", "Tropical Inverter", "Energy Efficient", "Premium Series"],
    image: "/lovable-uploads/hitachi/G324PCBISF/1.webp"
  },

  // LG Products
  {
    id: "lg-us-q12cnxe-1",
    brand: "lg",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "US-Q12CNXE",
    price: 42000,
    features: ["Dual Inverter", "Ocean Black Fin", "Active Energy Control"],
    image: "/lovable-uploads/lg/US-Q12CNXE/1.jpg"
  },
  {
    id: "lg-us-q14enze-1.2",
    brand: "lg",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.2",
    starRating: "5",
    modelNumber: "US-Q14ENZE",
    price: 55000,
    features: ["Dual Inverter", "Ocean Black Fin", "Active Energy Control", "AI Control"],
    image: "/lovable-uploads/lg/US-Q14ENZE/1.avif"
  },
  {
    id: "lg-us-q18kwxe-1.5",
    brand: "lg",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "US-Q18KWXE",
    price: 48000,
    features: ["Dual Inverter", "Ocean Black Fin", "Active Energy Control"],
    image: "/lovable-uploads/lg/US-Q18KWXE/1.avif"
  },
  {
    id: "lg-us-q18tnxe-1.5",
    brand: "lg",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "US-Q18TNXE",
    price: 52000,
    features: ["Dual Inverter", "Ocean Black Fin", "Active Energy Control"],
    image: "/lovable-uploads/lg/US-Q18TNXE/1.avif"
  },
  {
    id: "lg-us-q19bnze-1.5",
    brand: "lg",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "US-Q19BNZE",
    price: 58000,
    features: ["Dual Inverter", "Ocean Black Fin", "Active Energy Control", "Energy Efficient"],
    image: "/lovable-uploads/lg/US-Q19BNZE/1.avif"
  },
  {
    id: "lg-us-q19fwze-1.5",
    brand: "lg",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "US-Q19FWZE",
    price: 62000,
    features: ["Dual Inverter", "Ocean Black Fin", "Active Energy Control", "AI Control", "WiFi"],
    image: "/lovable-uploads/lg/US-Q19FWZE/1.avif"
  },
  {
    id: "lg-us-q24enxe-2",
    brand: "lg",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "US-Q24ENXE",
    price: 68000,
    features: ["Dual Inverter", "Ocean Black Fin", "Active Energy Control", "Energy Efficient"],
    image: "/lovable-uploads/lg/US-Q24ENXE/1.avif"
  },

  // Voltas Products
  {
    id: "vt-125v-vectra-elite-1",
    brand: "voltas",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "125V VECTRA ELITE",
    price: 45000,
    features: ["Variable Speed Compressor", "Anti Dust Filter", "Auto Clean"],
    image: "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.webp"
  },
  {
    id: "vt-183-vectr-elegant-1.5",
    brand: "voltas",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "183 VECTR ELEGANT",
    price: 48000,
    features: ["Variable Speed Compressor", "Anti Dust Filter"],
    image: "/lovable-uploads/voltas/183_VECTR_ELEGANT/1.webp"
  },
  {
    id: "vt-185v-vectra-prism-1.5",
    brand: "voltas",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "185V VECTRA PRISM",
    price: 55000,
    features: ["Variable Speed Compressor", "Anti Dust Filter", "Auto Clean", "Smart Control"],
    image: "/lovable-uploads/voltas/185V_VECTRA_PRISM/1.webp"
  },

  // Hisense Products
  {
    id: "hs-as-12tf4r3aj-1",
    brand: "hisense",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "AS-12TF4R3AJ",
    price: 35000,
    features: ["Inverter Technology", "Auto Clean", "Sleep Mode"],
    image: "/lovable-uploads/hisense/AS-12TF4R3AJ/1.jpg"
  },
  {
    id: "hs-as-12tr4r5aj-1",
    brand: "hisense",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "AS-12TR4R5AJ",
    price: 42000,
    features: ["Inverter Technology", "Auto Clean", "Sleep Mode", "Energy Efficient"],
    image: "/lovable-uploads/hisense/AS-12TR4R5AJ/1.jpg"
  },
  {
    id: "hs-as-18tr4r3ak1-1.5",
    brand: "hisense",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "AS-18TR4R3AK1",
    price: 45000,
    features: ["Inverter Technology", "Auto Clean", "Sleep Mode"],
    image: "/lovable-uploads/hisense/AS-18TR4R3AK1/1.jpg"
  },

  // Godrej Products
  {
    id: "gd-1-0t-inv-3star-1",
    brand: "godrej",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "1.0T INV 3STAR",
    price: 38000,
    features: ["Anti Viral & Anti Bacterial Filter", "Auto Clean", "Intelligent Cooling"],
    image: "/lovable-uploads/godrej/1-0T-INV-3STAR/1.webp"
  },
  {
    id: "gd-1-0t-inv-5star-1",
    brand: "godrej",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "1.0T INV 5STAR",
    price: 45000,
    features: ["Anti Viral & Anti Bacterial Filter", "Auto Clean", "Intelligent Cooling", "Energy Efficient"],
    image: "/lovable-uploads/godrej/1-0T-INV-5STAR/1.jpg"
  },
  {
    id: "gd-1-5t-inv-5star-1.5",
    brand: "godrej",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "1.5T INV 5STAR",
    price: 55000,
    features: ["Anti Viral & Anti Bacterial Filter", "Auto Clean", "Intelligent Cooling", "Energy Efficient"],
    image: "/lovable-uploads/godrej/1-5T-INV-5STAR/1.jpg"
  },
  {
    id: "gd-2-0t-inv-5star-2",
    brand: "godrej",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "2.0T INV 5STAR",
    price: 65000,
    features: ["Anti Viral & Anti Bacterial Filter", "Auto Clean", "Intelligent Cooling", "Energy Efficient"],
    image: "/lovable-uploads/godrej/2-0T-INV-5STAR/1.jpg"
  },

  // Lloyd Products
  {
    id: "ll-gls12c3xwads-1",
    brand: "lloyd",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "GLS12C3XWADS",
    price: 28000,
    features: ["Anti Bacterial Filter", "Auto Restart", "Sleep Mode"],
    image: "/lovable-uploads/lloyd/GLS12C3XWADS/1.avif"
  },
  {
    id: "ll-gls12i3fosec-1",
    brand: "lloyd",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "GLS12I3FOSEC",
    price: 35000,
    features: ["Anti Bacterial Filter", "Auto Clean", "Inverter Technology"],
    image: "/lovable-uploads/lloyd/GLS12I3FOSEC/1.jpg"
  },
  {
    id: "ll-gls12i5fogec-1",
    brand: "lloyd",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "5",
    modelNumber: "GLS12I5FOGEC",
    price: 42000,
    features: ["Anti Bacterial Filter", "Auto Clean", "Inverter Technology", "Energy Efficient"],
    image: "/lovable-uploads/lloyd/GLS12I5FOGEC/1.jpg"
  },
  {
    id: "ll-gls18c3ywads-1.5",
    brand: "lloyd",
    type: "split",
    inverterType: "non-inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "GLS18C3YWADS",
    price: 35000,
    features: ["Anti Bacterial Filter", "Auto Restart", "Sleep Mode"],
    image: "/lovable-uploads/lloyd/GLS18C3YWADS/1.jpg"
  },
  {
    id: "ll-gls18i5fogew-1.5",
    brand: "lloyd",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "GLS18I5FOGEW",
    price: 52000,
    features: ["Anti Bacterial Filter", "Auto Clean", "Inverter Technology", "Energy Efficient"],
    image: "/lovable-uploads/lloyd/GLS18I5FOGEW/1.jpg"
  },
  {
    id: "ll-gls24i3fwsem-2",
    brand: "lloyd",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "3",
    modelNumber: "GLS24I3FWSEM",
    price: 55000,
    features: ["Anti Bacterial Filter", "Auto Clean", "Inverter Technology"],
    image: "/lovable-uploads/lloyd/GLS24I3FWSEM/1.jpg"
  },
  {
    id: "ll-gls24i5fwgev-2",
    brand: "lloyd",
    type: "split",
    inverterType: "inverter",
    tonnage: "2",
    starRating: "5",
    modelNumber: "GLS24I5FWGEV",
    price: 62000,
    features: ["Anti Bacterial Filter", "Auto Clean", "Inverter Technology", "Energy Efficient"],
    image: "/lovable-uploads/lloyd/GLS24I5FWGEV/1.jpg"
  },

  // Vestar Products
  {
    id: "vs-vaskd183fei2h-1.5",
    brand: "vestar",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "3",
    modelNumber: "VASKD183FEI2H",
    price: 38000,
    features: ["Inverter Technology", "Anti Bacterial Filter", "Auto Clean"],
    image: "/lovable-uploads/vestar/VASKD183FEI2H/1.jpg"
  },
  {
    id: "vs-vaskd185iei2g-1.5",
    brand: "vestar",
    type: "split",
    inverterType: "inverter",
    tonnage: "1.5",
    starRating: "5",
    modelNumber: "VASKD185IEI2G",
    price: 45000,
    features: ["Inverter Technology", "Anti Bacterial Filter", "Auto Clean", "Energy Efficient"],
    image: "/lovable-uploads/vestar/VASKD185IEI2G/1.jpg"
  },
  {
    id: "vs-vaske123ia15h-1",
    brand: "vestar",
    type: "split",
    inverterType: "inverter",
    tonnage: "1",
    starRating: "3",
    modelNumber: "VASKE123IA15H",
    price: 35000,
    features: ["Inverter Technology", "Anti Bacterial Filter", "Auto Clean"],
    image: "/lovable-uploads/vestar/VASKE123IA15H/1.jpg"
  }
];

// Re-export types from types.ts for backward compatibility
export type { Brand as BrandType } from './types';
export type { ACType as ACTypeDefinition } from './types';
export type { InverterType as InverterTypeDefinition } from './types';
