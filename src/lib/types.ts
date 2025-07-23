
export type Brand = 
  | 'o-general'
  | 'mitsubishi-heavy'
  | 'mitsubishi-electric'
  | 'mitsubishi-akabishi'
  | 'daikin'
  | 'panasonic'
  | 'blue-star'
  | 'carrier'
  | 'hitachi'
  | 'lg'
  | 'voltas'
  | 'hisense'
  | 'godrej'
  | 'lloyd'
  | 'vestar'
  | 'samsung';

export interface ProductSpecifications {
  coolingCapacity: string;
  indoorUnit: string;
  outdoorUnit: string;
  refrigerant: string;
  energyRating: string;
}

export interface ACProduct {
  id: string;
  brand: Brand;
  type: string;
  inverter: string;
  tonnage: string;
  starRating: string;
  modelNumber: string;
  price: number;
  mrp?: number;
  features: string[];
  description: string;
  image: string;
  images?: string[];
  specifications?: ProductSpecifications;
  productUrl?: string;
}
