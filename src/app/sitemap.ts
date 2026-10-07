import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, lastModified: "2026-10-07", priority: 1 },
    ...projects.map((p) => ({
      url: `${siteConfig.siteUrl}/projects/${p.slug}`,
      lastModified: "2026-10-07",
      priority: 0.8,
    })),
  ];
}
