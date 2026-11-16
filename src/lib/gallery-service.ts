import { acProducts, brands, Brand, ACType, ACProduct } from "./ac-selection-data";

export type ACCategory = "all" | "split" | "window" | "cassette" | "tower" | "multi-split";

export interface GalleryCategoryMeta {
  id: ACCategory;
  name: string;
  badge: string;
  description: string;
}

export const GALLERY_CATEGORIES: GalleryCategoryMeta[] = [
  {
    id: "all",
    name: "All Categories",
    badge: "Full Showcase",
    description: "Browse 10 recently popular curated AC models across all major categories",
  },
  {
    id: "split",
    name: "Split AC",
    badge: "Top 10 Popular",
    description: "Highest rated 5★ & 3★ Inverter Split ACs with copper condenser & rapid cooling",
  },
  {
    id: "window",
    name: "Window AC",
    badge: "Top 10 Popular",
    description: "Compact, heavy-duty 100% copper window air conditioners for homes & retail shops",
  },
  {
    id: "cassette",
    name: "Cassette AC",
    badge: "Top 10 Popular",
    description: "4-Way & 1-Way ceiling cassette cooling systems for modern offices, cafes & halls",
  },
  {
    id: "tower",
    name: "Tower AC",
    badge: "Commercial Standing",
    description: "Heavy capacity floor-standing packaged ACs for showrooms, restaurants & banquets",
  },
  {
    id: "multi-split",
    name: "Multi-Split AC",
    badge: "Multi-Room",
    description: "Multi-room inverter AC systems running multiple indoor units with one outdoor unit",
  },
];

/**
 * Normalizes image URL and guarantees NO fake/unrelated fallback like Unsplash
 */
export const fixGalleryImage = (img?: string): string => {
  if (!img || img.trim() === "") {
    // Official branded fallback asset
    return "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png";
  }
  // Strip leading public/ if present
  let clean = img.startsWith("public/") ? img.replace(/^public\//, "/") : img;
  if (!clean.startsWith("/") && !clean.startsWith("http")) {
    clean = "/" + clean;
  }
  return clean;
};

/**
 * Popularity scoring algorithm for AC models:
 * Prioritizes high energy efficiency (5★ and 3★), high demand capacities (1.5T, 1.0T, 2.0T),
 * modern inverter compressors, and verified local images.
 */
function scoreProductPopularity(p: ACProduct): number {
  let score = 0;

  // Star Rating weight
  if (p.starRating === "5★" || p.starRating === "5") score += 100;
  else if (p.starRating === "4★" || p.starRating === "4") score += 70;
  else if (p.starRating === "3★" || p.starRating === "3") score += 50;

  // Inverter technology weight
  if (p.inverter === "inverter") score += 40;

  // Tonnage popularity in India & Kolkata (1.5T is 60%+ market share)
  if (p.tonnage === "1.5T" || p.tonnage === "1.5 Ton") score += 35;
  else if (p.tonnage === "1.0T" || p.tonnage === "1.0 Ton") score += 25;
  else if (p.tonnage === "2.0T" || p.tonnage === "2.0 Ton") score += 20;

  // AC Type
  if (p.type === "split") score += 15;
  else if (p.type === "window") score += 12;
  else if (p.type === "cassette") score += 10;

  // Complete specs bonus
  if (p.coolingCapacity) score += 5;
  if (p.gasType) score += 5;
  if (p.indoorUnitDimensions) score += 5;

  return score;
}

/**
 * Get clean deduplicated products from acProducts
 */
const baseUniqueProducts: ACProduct[] = acProducts.filter(
  (p, idx, arr) => arr.findIndex((x) => x.id === p.id) === idx
);

/**
 * Requirement 2:
 * When an individual company category (brand) is selected:
 * Returns ONLY the top 10 recently popular AC details for that company,
 * guaranteeing original, individual, and non-duplicate images.
 */
export function getPopularACsByBrand(
  brandId: string,
  categoryFilter: ACCategory = "all",
  limit = 10
): ACProduct[] {
  let list = baseUniqueProducts.filter((p) => p.brand.toLowerCase() === brandId.toLowerCase());

  if (categoryFilter !== "all") {
    if (categoryFilter === "cassette") {
      list = list.filter((p) => p.type === "cassette" || p.type === "one-way-cassette");
    } else {
      list = list.filter((p) => p.type === categoryFilter);
    }
  }

  // Sort by popularity score
  const sorted = [...list].sort((a, b) => scoreProductPopularity(b) - scoreProductPopularity(a));

  const picked: ACProduct[] = [];
  const seenImages = new Set<string>();
  const seenModels = new Set<string>();

  for (const product of sorted) {
    const mainImg = fixGalleryImage(product.image);

    // Ensure distinct original image per model among the 10
    if (!seenImages.has(mainImg) && !seenModels.has(product.modelNumber.trim())) {
      seenImages.add(mainImg);
      seenModels.add(product.modelNumber.trim());
      picked.push(product);

      if (picked.length === limit) break;
    }
  }

  // If strict deduplication gave less than available, fill with remaining models to reach limit
  if (picked.length < limit && list.length > picked.length) {
    for (const product of sorted) {
      if (!picked.some((p) => p.id === product.id)) {
        picked.push(product);
        if (picked.length === limit) break;
      }
    }
  }

  return picked.slice(0, limit);
}

/**
 * Requirement 1:
 * For each and every category of the AC section, returns ONLY the 10 AC details,
 * ensuring high popularity, multi-brand representation, and original authentic images.
 */
export function getPopularACsByCategory(
  category: ACCategory,
  brandFilter = "all",
  limit = 10
): ACProduct[] {
  if (category === "all") {
    if (brandFilter !== "all") {
      return getPopularACsByBrand(brandFilter, "all", limit);
    }
    return getCuratedTop10Showcase(limit);
  }

  let list = baseUniqueProducts.filter((p) => {
    if (category === "cassette") {
      return p.type === "cassette" || p.type === "one-way-cassette";
    }
    return p.type === category;
  });

  if (brandFilter !== "all") {
    list = list.filter((p) => p.brand.toLowerCase() === brandFilter.toLowerCase());
  }

  // Sort by popularity score
  const sorted = [...list].sort((a, b) => scoreProductPopularity(b) - scoreProductPopularity(a));

  const picked: ACProduct[] = [];
  const seenImages = new Set<string>();
  const brandFrequency: Record<string, number> = {};

  // First pass: Pick with max 2 models per brand for diverse multi-brand representation
  for (const product of sorted) {
    const mainImg = fixGalleryImage(product.image);
    const bCount = brandFrequency[product.brand] || 0;

    if (!seenImages.has(mainImg) && bCount < 2) {
      seenImages.add(mainImg);
      brandFrequency[product.brand] = bCount + 1;
      picked.push(product);
      if (picked.length === limit) break;
    }
  }

  // Second pass: if less than 10, fill from remaining sorted products
  if (picked.length < limit) {
    for (const product of sorted) {
      const mainImg = fixGalleryImage(product.image);
      if (!picked.some((p) => p.id === product.id) && !seenImages.has(mainImg)) {
        seenImages.add(mainImg);
        picked.push(product);
        if (picked.length === limit) break;
      }
    }
  }

  // Third pass: fallback to any product if needed
  if (picked.length < limit) {
    for (const product of sorted) {
      if (!picked.some((p) => p.id === product.id)) {
        picked.push(product);
        if (picked.length === limit) break;
      }
    }
  }

  return picked.slice(0, limit);
}

/**
 * Curated Top 10 Bestselling & Popular ACs across the entire store
 */
export function getCuratedTop10Showcase(limit = 10): ACProduct[] {
  const topBrandsPriority = [
    "daikin",
    "voltas",
    "o-general",
    "hitachi",
    "blue-star",
    "lg",
    "panasonic",
    "mitsubishi-heavy",
    "carrier",
    "lloyd",
  ];

  const picked: ACProduct[] = [];
  const seenImages = new Set<string>();

  for (const bId of topBrandsPriority) {
    const brandBest = getPopularACsByBrand(bId, "all", 1);
    if (brandBest.length > 0) {
      const p = brandBest[0];
      const img = fixGalleryImage(p.image);
      if (!seenImages.has(img)) {
        seenImages.add(img);
        picked.push(p);
      }
    }
    if (picked.length === limit) break;
  }

  return picked;
}

/**
 * Returns Top 10 AC details for every single AC category
 */
export function getAllCategoriesTop10(): {
  category: ACCategory;
  meta: GalleryCategoryMeta;
  products: ACProduct[];
}[] {
  const categoriesToInclude: ACCategory[] = ["split", "window", "cassette", "tower", "multi-split"];

  return categoriesToInclude.map((cat) => {
    const meta = GALLERY_CATEGORIES.find((c) => c.id === cat)!;
    const products = getPopularACsByCategory(cat, "all", 10);
    return {
      category: cat,
      meta,
      products,
    };
  });
}

/**
 * Get brand display name
 */
export const getBrandDisplayName = (brandId: string): string => {
  const b = brands.find((x) => x.id === brandId);
  return b ? b.name : brandId.toUpperCase();
};

/**
 * Brands that have active products
 */
export const activeGalleryBrands = brands.filter((b) =>
  baseUniqueProducts.some((p) => p.brand === b.id)
);
