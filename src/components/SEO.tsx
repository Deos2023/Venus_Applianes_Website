import { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}
 
const DEFAULT_TITLE =
  "Best AC Dealer in Kolkata | Top AC, Deep Freezer, Visi Cooler & Geyser Dealer - Venus Appliances";
const DEFAULT_DESCRIPTION =
  "Venus Appliances is Kolkata's top authorized AC dealer in Chandni Chowk. Best deals on Daikin, O General, Hitachi, Mitsubishi, Voltas, Blue Star, Carrier, Deep Freezers, Visi Coolers & Geysers. Call 93319 62120.";
const DEFAULT_KEYWORDS =
  "Best ac dealer in kolkata, Top ac dealer in kolkata, All types of ac dealer in kolkata, Hitachi ac dealer in kolkata, Daikin ac dealer in kolkata, O General ac dealer in kolkata, Mitsubishi ac dealer in kolkata, Carrier ac dealer in kolkata, Panasonic ac dealer in kolkata, Voltas ac dealer in kolkata, Bluestar ac dealer in kolkata, Godrej ac dealer in kolkata, Vestar ac dealer in kolkata, LG ac dealer in kolkata, geyser dealer in kolkata, deep freedge dealer in kolkata, deep freezer dealer in kolkata, visi cooler dealer in kolkata, cassette ac dealer in kolkata, Chandni Chowk Kolkata AC market";
const DEFAULT_IMAGE =
  "https://www.venusappliances.com/lovable-uploads/6c697fcb-f9ff-466e-97f0-7cddf3d6c664.png";
const BASE_URL = "https://www.venusappliances.com";

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  schema,
}: SEOProps) => {
  useEffect(() => {
    // 1. Title
    const finalTitle = title
      ? title.toLowerCase().includes("venus appliances")
        ? title
        : `${title} | Venus Appliances Kolkata`
      : DEFAULT_TITLE;
    document.title = finalTitle;

    // Helper to set or create meta tag
    const setMetaTag = (
      attribute: "name" | "property",
      key: string,
      content: string
    ) => {
      let meta = document.querySelector(
        `meta[${attribute}="${key}"]`
      ) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    const finalDescription = description || DEFAULT_DESCRIPTION;
    const finalKeywords = keywords || DEFAULT_KEYWORDS;
    setMetaTag("name", "description", finalDescription);
    setMetaTag("name", "keywords", finalKeywords);
    setMetaTag(
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // 3. Local SEO & Geo Tags
    setMetaTag("name", "geo.region", "IN-WB");
    setMetaTag("name", "geo.placename", "Kolkata, West Bengal, India");
    setMetaTag("name", "geo.position", "22.5664314;88.3579329");
    setMetaTag("name", "ICBM", "22.5664314, 88.3579329");

    // 4. Canonical Link
    const finalCanonical = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${BASE_URL}${canonical}`
      : `${BASE_URL}${window.location.pathname}`;
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", finalCanonical);

    // 5. Open Graph Meta Tags
    const finalImage = ogImage
      ? ogImage.startsWith("http")
        ? ogImage
        : `${BASE_URL}${ogImage}`
      : DEFAULT_IMAGE;
    setMetaTag("property", "og:title", finalTitle);
    setMetaTag("property", "og:description", finalDescription);
    setMetaTag("property", "og:url", finalCanonical);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "Venus Appliances Kolkata");
    setMetaTag("property", "og:locale", "en_IN");
    setMetaTag("property", "og:image", finalImage);

    // 6. Twitter Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", finalTitle);
    setMetaTag("name", "twitter:description", finalDescription);
    setMetaTag("name", "twitter:image", finalImage);

    // 7. Schema JSON-LD
    let scriptTag = document.getElementById(
      "dynamic-page-schema"
    ) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "dynamic-page-schema";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Cleanup dynamically injected schema when switching pages
      const existingScript = document.getElementById("dynamic-page-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, schema]);

  return null;
};

export default SEO;
