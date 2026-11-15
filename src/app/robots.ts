import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Static export has no request to defer to.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}