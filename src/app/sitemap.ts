import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Static export has no request to defer to.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: site.updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/projects`,
      lastModified: site.updated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/resume`,
      lastModified: site.updated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}