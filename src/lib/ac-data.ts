export interface ACModel {
  id: string;
  brand: string;
  type: string;
  inverter: "inverter" | "non-inverter";
  tonnage: string;
  starRating: string;
  price: number;
  modelNumber: string;
  features: string[];
  image: string;
  description: string;
}

// This would typically come from an API, but for this demo we'll hard-code some data
export const acModels: ACModel[] = [
  {
    id: "hitachi-split-1-0t-inv-5star-e512pcaib",
    brand: "hitachi",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "E512PCAIB",
    price: 35500,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/E512PCAIB/1.jpg",
    description: "HITACHI 1.0T INV 5★ E512PCAIB Split AC",
  },
  {
    id: "hitachi-split-2-0t-inv-3star-g324pcbisf",
    type: "split",
    brand: "hitachi",
    inverter: "inverter",
    tonnage: "2.0T",
    starRating: "3★",
    modelNumber: "G324PCBISF",
    price: 49000,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/G324PCBISF/1.webp",
    description: "HITACHI 2.0T INV 3★ G324PCBISF Split AC",
  },
  {
    id: "hitachi-split-1-0t-inv-3star-e312pcaibs",
    brand: "hitachi",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "E312PCAIBS",
    price: 31000,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/E312PCAIBS/1.png",
    description: "HITACHI 1.0T INV 3★ E312PCAIBS Split AC",
  },
  {
    id: "hitachi-split-1-0t-noninv-3star-b312pcaiba1",
    brand: "hitachi",
    type: "split",
    inverter: "non-inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "B312PCAIBA1",
    price: 33400,
    features: ["Non-Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/B312PCAIBA1/1.jpg",
    description: "HITACHI 1.0T NON INV 3★ B312PCAIBA1 Split AC",
  },
  {
    id: "hitachi-split-1-5t-inv-5star-e518pcbib",
    brand: "hitachi",
    type: "split",
    inverter: "inverter",
    tonnage: "1.5T",
    starRating: "5★",
    modelNumber: "E518PCBIB",
    price: 40500,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/E518PCBIB/1.png",
    description: "HITACHI 1.5T INV 5★ E518PCBIB Split AC",
  },
  {
    id: "hitachi-split-1-5t-inv-3star-e318pcbib",
    brand: "hitachi",
    type: "split",
    inverter: "inverter",
    tonnage: "1.5T",
    starRating: "3★",
    modelNumber: "E318PCBIB",
    price: 35400,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/E518PCBIB/1.png",
    description: "HITACHI 1.5T INV 3★ E318PCBIB Split AC",
  },
  {
    id: "hitachi-split-1-5t-noninv-3star-b318pcaiba",
    brand: "hitachi",
    type: "split",
    inverter: "non-inverter",
    tonnage: "1.5T",
    starRating: "3★",
    modelNumber: "B318PCAIBA",
    price: 37500,
    features: ["Non-Inverter", "Energy Efficient"],
    image: "/lovable-uploads/hitachi/B318PCAIBA/1.jpg",
    description: "HITACHI 1.5T NON INV 3★ B318PCAIBA Split AC",
  },
  // LG models
  {
    id: "lg-split-1-0t-inv-5star-us-q14enze",
    brand: "lg",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "US-Q14ENZE",
    price: 42500,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/lg/US-Q14ENZE/7.avif",
    description: "LG 1.0T INV 5★ US-Q14ENZE Split AC",
  },
  {
    id: "lg-split-1-0t-inv-3star-us-q12cnxe",
    brand: "lg",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "US-Q12CNXE",
    price: 36500,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/lg/US-Q12CNXE/1.jpg",
    description: "LG 1.0T INV 3★ US-Q12CNXE Split AC",
  },
  {
    id: "lg-split-1-5t-inv-5star-us-q19fwze-wifi",
    brand: "lg",
    type: "split",
    inverter: "inverter",
    tonnage: "1.5T",
    starRating: "5★",
    modelNumber: "US-Q19FWZE",
    price: 50500,
    features: ["Inverter", "Wi-Fi", "Energy Efficient"],
    image: "/lovable-uploads/lg/Q19FWZE/1.webp",
    description: "LG 1.5T INV 5★ US-Q19FWZE (WI-FI) Split AC",
  },
  {
    id: "lg-split-1-5t-inv-4star-us-q18nye",
    brand: "lg",
    type: "split",
    inverter: "inverter",
    tonnage: "1.5T",
    starRating: "4★",
    modelNumber: "US-Q18JNYE",
    price: 42600,
    features: ["Inverter", "Wi-Fi", "Energy Efficient"],
    image: "/lovable-uploads/lg/Q18JNYE/1.jpg",
    description: "LG 1.5T INV 4★ US-Q18JNYE   Split AC",
  },
  {
    id: "lg-split-1-5t-inv-3star-us-q18kwxe-wifi",
    brand: "lg",
    type: "split",
    inverter: "inverter",
    tonnage: "1.5T",
    starRating: "3★",
    modelNumber: "US-Q18KWXE",
    price: 41500,
    features: ["Inverter", "Wi-Fi", "Energy Efficient"],
    image: "/lovable-uploads/lg/Q18TNXE/1.avif",
    description: "LG 1.5T INV 3★ US-Q18KWXE (WI-FI) Split AC",
  },
  {
    id: "lg-split-2-0t-inv-3star-us-q24enxe",
    brand: "lg",
    type: "split",
    inverter: "inverter",
    tonnage: "2.0T",
    starRating: "3★",
    modelNumber: "US-Q24ENXE",
    price: 56500,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/lg/US-Q24ENXE/1.avif",
    description: "LG 2.0T INV 3★ US-Q24ENXE Split AC",
  },
  // Voltas models
  {
    id: "voltas-1.0t-noninv-3star-123vectraplatina",
    brand: "voltas",
    type: "window",
    inverter: "non-inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "123 VECTRA PLATINA",
    price: 28200,
    features: ["High cooling", "Energy efficient"],
    image: "/lovable-uploads/voltas/123 VECTRA PLATINA/1.jpg",
    description: "VOLTAS 1.0T NON INV 3★ 123 VECTRA PLATINA Window AC",
  },
  {
    id: "voltas-split-1-0t-inv-5star-125v-vectra-elite-dup",
    brand: "voltas",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "5★",
    modelNumber: "125V_VECTRA_ELITE",
    price: 36700,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/voltas/125V_VECTRA_ELITE/1.webp",
    description: "VOLTAS 1.0T INV 5★ 125V VECTRA ELITE Split AC",
  },
  {
    id: "voltas-split-1-0t-inv-3star-123v-vectra-elite-dup",
    brand: "voltas",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "123V_VECTRA_ELITE",
    price: 31700,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/voltas/123V_VECTRA_ELITE/1.png",
    description: "VOLTAS 1.0T INV 3★ 123V VECTRA ELITE Split AC",
  },
  {
    id: "voltas-1.5t-inv-5star-185vvectrapearl",
    brand: "voltas",
    type: "window",
    inverter: "inverter",
    tonnage: "1.5T",
    starRating: "5★",
    modelNumber: "185V VECTRA PEARL",
    price: 36500,
    features: ["Inverter compressor", "High efficiency"],
    image: "/lovable-uploads/voltas/185V VECTRA PEARL/1.webp",
    description: "VOLTAS 1.5T INV 5★ 185V VECTRA PEARL Window AC",
  },
  {
    id: "voltas-1.5t-noninv-3star-183vectrapearl",
    brand: "voltas",
    type: "window",
    inverter: "non-inverter",
    tonnage: "1.5T",
    starRating: "3★",
    modelNumber: "183 VECTRA PEARL",
    price: 30831,
    features: ["Energy saving", "Turbo cooling"],
    image: "/lovable-uploads/voltas/183 VECTRA PEARL/1.jpg",
    description: "VOLTAS 1.5T NON INV 3★ 183 VECTRA PEARL Window AC",
  },
  {
    id: "voltas-2.0t-noninv-2star-242vectraplus",
    brand: "voltas",
    type: "window",
    inverter: "non-inverter",
    tonnage: "2.0T",
    starRating: "2★",
    modelNumber: "242 VECTRA PLUS",
    price: 36700,
    features: ["Large capacity", "Energy efficient"],
    image: "/lovable-uploads/voltas/242 VECTRA PLUS/1.jpg",
    description: "VOLTAS 2.0T NON INV 2★ 242 VECTRA PLUS Window AC",
  },
  // Daikin models
  {
    id: "daikin-split-1-0t-inv-3star-gtkc35uv16-ftkc35uv16",
    brand: "daikin",
    type: "split",
    inverter: "inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "GTKC35UV16/FTKC35UV16",
    price: 34300,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/daikin/GTKC35UV16/1.jpg",
    description: "DAIKIN 1.0T INV 3★ GTKC35UV16/FTKC35UV16 Split AC",
  },
  {
    id: "daikin-split-1-0t-noninv-3star-gtl35uv16",
    brand: "daikin",
    type: "split",
    inverter: "non-inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "GTL35UV16",
    price: 33000,
    features: ["Non-Inverter", "Energy Efficient"],
    image: "/lovable-uploads/daikin/GTL35UV16/1.jpg",
    description: "DAIKIN 1.0T NON INV 3★ GTL35UV16 Split AC",
  },
  {
    id: "daikin-split-1-0t-noninv-3star-ftl35uv16",
    brand: "daikin",
    type: "split",
    inverter: "non-inverter",
    tonnage: "1.0T",
    starRating: "3★",
    modelNumber: "FTL35UV16",
    price: 33500,
    features: ["Non-Inverter", "Energy Efficient"],
    image: "/lovable-uploads/daikin/FTL35UV16/1.jpg",
    description: "DAIKIN 1.0T NON INV 3★ FTL35UV16 Split AC",
  },
  {
    id: "daikin-split-1-5t-inv-3star-gtkc50uv16-ftkc50uv16",
    brand: "daikin",
    type: "split",
    inverter: "inverter",
    tonnage: "1.5T",
    starRating: "3★",
    modelNumber: "GTKC50UV16/FTKC50UV16",
    price: 37500,
    features: ["Inverter", "Energy Efficient"],
    image: "/lovable-uploads/daikin/GTKC50UV16/1.png",
    description: "DAIKIN 1.5T INV 3★ GTKC50UV16/FTKC50UV16 Split AC",
  },
  {
    id: "daikin-split-1-5t-noninv-3star-gtl50uv16",
    brand: "daikin",
    type: "split",
    inverter: "non-inverter",
    tonnage: "1.5T",
    starRating: "3★",
    modelNumber: "GTL50UV16",
    price: 40200,
    features: ["Non-Inverter", "Energy Efficient"],
    image: "/lovable-uploads/daikin/GTL50UV16/1.webp",
    description: "DAIKIN 1.5T NON INV 3★ GTL50UV16 Split AC",
  },
  {
    id: "daikin-split-1-5t-noninv-3star-ftl50uv16",
    brand: "daikin",
    type: "split",
    inverter: "non-inverter",
    tonnage: "1.5T",
    starRating: "3★",
    modelNumber: "FTL50UV16",
    price: 40200,
    features: ["Non-Inverter", "Energy Efficient"],
    image: "/lovable-uploads/daikin/FTL50UV16/1.png",
    description: "DAIKIN 1.5T NON INV 3★ FTL50UV16 Split AC",
  },
];

export const getTonnageOptions = (brand: string): string[] => {
  const tonnages = new Set<string>();

  acModels
    .filter((model) => model.brand === brand)
    .forEach((model) => tonnages.add(model.tonnage));

  return Array.from(tonnages).sort((a, b) => parseFloat(a) - parseFloat(b));
};

export const getStarRatings = (brand: string, tonnage: string): string[] => {
  const ratings = new Set<string>();

  acModels
    .filter((model) => model.brand === brand && model.tonnage === tonnage)
    .forEach((model) => ratings.add(model.starRating));

  return Array.from(ratings).sort((a, b) => parseInt(a) - parseInt(b));
};

export const getACModel = (
  brand: string,
  tonnage: string,
  starRating: string
): ACModel | undefined => {
  return acModels.find(
    (model) =>
      model.brand === brand &&
      model.tonnage === tonnage &&
      model.starRating === starRating
  );
};

export const getACModels = (brand: string): ACModel[] => {
  return acModels.filter((model) => model.brand === brand);
};
