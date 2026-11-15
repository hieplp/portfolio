import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

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
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified: site.updated,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}