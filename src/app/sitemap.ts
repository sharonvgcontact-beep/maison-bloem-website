import type { MetadataRoute } from "next";

const routes = ["", "/our-story", "/menu", "/locations", "/jobs", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://maisonbloem.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
